const express = require('express');
const router = express.Router();
const login = require('./login');
const changePassword = require('./changePassword');
const recoverPassword = require('./recoverPassword');
const loginMid = require('../../middlewares/loginMid');
const logout = require('./logout');

router.post('/login', loginMid, login);
router.post('/recoverPassword', recoverPassword);
router.post('/changePassword', changePassword);
router.post('/logout', logout);

module.exports = router;