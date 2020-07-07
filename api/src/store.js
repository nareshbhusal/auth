const session = require('express-session');
const redisClient = require('./redisClient');
const RedisStore = require('connect-redis')(session);

const store = new RedisStore({
    client: redisClient,
    ttl: 60*1*60*24*30, //in seconds // 30 days
    //disableTouch: true //prevents resetting ttl on every request
});

module.exports = store;

