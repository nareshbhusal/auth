const router = require('express').Router();

const authRouter = require('./auth');

router.get('/', async (req, res) => {
    return res.send('Server is running!')
});
router.get('/session', async (req, res) => {
	return res.send({...req.session, id: req.session.id});
});

router.use('/', authRouter);

module.exports = router;
