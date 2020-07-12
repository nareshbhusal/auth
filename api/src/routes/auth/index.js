const express = require('express');
const router = express.Router();

const login = require('./login');
const register = require('./register');
const changePassword = require('./changePassword');
const recoverPassword = require('./recoverPassword');
const logout = require('./logout');

const logLastAccess = require('../../middlewares/logLastAccess');
const requireLogin = require('../../middlewares/requireLogin');

router.post('/login', login, logLastAccess);
router.post('/register', register, logLastAccess);
router.post('/recoverPassword', recoverPassword, logLastAccess);
router.post('/changePassword', changePassword, logLastAccess);
router.post('/logout', requireLogin, logout);


module.exports = router;
