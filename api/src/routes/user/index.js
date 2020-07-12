const express = require('express');
const router = express.Router();

const getCurrentUserInfo = require('./getCurrentUserInfo');
const deleteUser = require('./deleteUser');
const editUser = require('./editUserData');

const logLastAccess = require('../../middlewares/logLastAccess');
const requireLogin = require('../../middlewares/requireLogin');


router.get('/current', requireLogin, getCurrentUserInfo, logLastAccess);
router.delete('/delete', requireLogin, deleteUser, logLastAccess);
router.put('/edit', requireLogin, editUser, logLastAccess);

module.exports = router;
