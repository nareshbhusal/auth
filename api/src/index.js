const express = require('express');

const cors = require('cors');
const db = require('./config/database');
const app = express();
const uuid = require('uuid');
const path = require('path');

const session = require('express-session');

const sessionStore = require('./store');
const api = require('./routes');

const device = require('express-device');

// configure middlewares
app.use(cors({ credentials: true, origin: true })); // TODO: and this?
app.set('trust proxy', true); //TODO: what does this do?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(device.capture());


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
        //secure: true, // prevents mitm by forcing http through tls encryption
        //uncomment above after adding tls
        //maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days //in ms
        //cookie.maxAge sets a date to expires property, and that
        //takes dominance over store's ttl
    },
    store: sessionStore
}));

// connect with db
db.authenticate()
.then(() => console.log('DATABASE CONNECTED!'))
.catch(err => console.log('DATABASE AUTHENTICATION FAILED!', err));


app.use(api);
if (process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(clientPath, 'dist')));

    app.get('/*', (req, res)=> {
        return res.sendFile(path.join(clientPath, 'dist/index.html'));
    });
}

module.exports = app;
