const router = require('express').Router();

const authRouter = require('./auth');
const userRouter = require('./user');

// const geoip = require('geoip-lite');


router.get('/', async (req, res) => {
    return res.send('Server is running but under construction')
});

router.use('/', authRouter);
router.use('/user', userRouter);

router.get('/session', async (req, res) => {
    return res.send({...req.session, sessionID: req.sessionID});
});

router.get('/cookie', async (req, res) => {
    return res.send(JSON.stringify(res.cookie));
});

router.get('/session/:id', async (req, res) => {
    const redisClient = require('../redisClient');
    const sessionID = req.params.id;
    redisClient.get(`sess:${sessionID}`, function (err, reply) {
        return res.send(reply);
    });
});

router.get('/ip', async (req, res) => {
    //let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ip = req.ip;
    const geo = geoip.lookup(ip);


    //return res.send(req.connection.remoteAddress)
    return res.send({
        ip: req.ip,
        geo: geo
    });
});

module.exports = router;
