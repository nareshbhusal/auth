const redisClient = require('../../redisClient');

const isSessionAlive = (sessionID) => {
    redisClient.get(sessionID, (err, reply) => {
        if (err) throw "Error reading session from redis: "+err;
        return reply !== null;
    });
}
module.exports = isSessionAlive;
