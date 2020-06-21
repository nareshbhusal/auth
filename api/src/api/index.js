const router = require('express').Router();

// const authRouter = require('./auth');

router.get('/', async (req, res) => {
    return res.send('Server started!')
})

// router.use('/', authRouter);

module.exports = router;