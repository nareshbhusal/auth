
const session = require('express-session');
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

const store = new RedisStore({
    client: redisClient,
    ttl: 60*1*60*24*30, //in seconds // 30 days
    //disableTouch: true //prevents resetting ttl on every request
});

module.exports = store;

