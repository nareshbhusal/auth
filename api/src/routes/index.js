const router = require('express').Router();

const authRouter = require('./auth');

router.get('/', async (req, res) => {
    return res.send('Server is running but under construction')
})

router.use('/', authRouter);

module.exports = router;
