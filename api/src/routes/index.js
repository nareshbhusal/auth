const router = require('express').Router();

const authRouter = require('./auth');
const userRouter = require('./user');

router.get('/', async (req, res) => {
    return res.send('Server is running but under construction')
});

router.use('/', authRouter);
router.use('/user', userRouter);

router.get('/session', async (req, res) => {
    return res.send({...req.session, sessionID: req.sessionID, user_id: req.session.user_id, last_accessed: req.session.last_accessed });
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
    let ip = req.ip;

    return res.send({
        ip: req.ip,
        //device: req.device,
        ua: req.useragent
    });
});

module.exports = router;
