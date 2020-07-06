const router = require('express').Router();

const authRouter = require('./auth');

router.get('/', async (req, res) => {
    return res.send('Server is running but under construction')
});

router.use('/', authRouter);
router.get('/session', async (req, res) => {
    return res.send({...req.session, sessionID: req.sessionID});
});

router.get('/cookie', async (req, res) => {
    return res.send(JSON.stringify(res.cookie));
});

module.exports = router;
