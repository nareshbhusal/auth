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

module.exports = redisClient;
