const express = require('express');
const session = require('express-session');

const expressip = require('express-ip');
const cors = require('cors');
const db = require('./config/database');
const app = express();
const uuid = require('uuid');
const path = require('path');

// redis
const redis = require('redis');

const redisClient = redis.createClient({
	host: process.env.REDIS_HOST,
	port: 6379,
	auth_pass: process.env.REDIS_PASSWORD
});
redisClient.on('connect', () => {
    console.log('Redis connected!');
})
redisClient.on('error', console.error);


const RedisStore = require('connect-redis')(session);


const api = require('./routes');

// configure middlewares
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

console.log('process.env.REDIS_HOST', process.env.REDIS_HOST);
// setup redis
app.use(session({
    genid: function(req) {
        return uuid(); //use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    httpOnly: true, // don't let javascript access cookies
    cookie: {
        secure: true, // prevents mitm by forcing http through tls encryption
        //maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days //in ms
        //cookie.maxAge sets a date to expires property, and that
        //takes dominance over ttl set below
    },
    store: new RedisStore({
        client: redisClient,
        ttl: 60*1, //in seconds
        //disableTouch: true //prevents resetting ttl on every request
    })
}));

// connect with db
db.authenticate()
.then(() => console.log('DATABASE CONNECTED!'))
.catch(err => console.log('DATABASE AUTHENTICATION FAILED!', err));

app.use(expressip().getIpInfoMiddleware);

app.use(api);
if (process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(clientPath, 'dist')));

    app.get('/*', (req, res)=> {
        return res.sendFile(path.join(clientPath, 'dist/index.html'));
    });
}

module.exports = app;
