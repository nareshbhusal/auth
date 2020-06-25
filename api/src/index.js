const express = require('express');
const session = require('express-session');

const expressip = require('express-ip');
const cors = require('cors');
const db = require('./config/database');
const app = express();
const uuid = require('uuid');
const path = require('path');

const api = require('./api');

// configure middlewares
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

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
