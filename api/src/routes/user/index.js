const express = require('express');
const router = express.Router();

const getCurrentUserInfo = require('./getCurrentUserInfo');
const deleteUser = require('./deleteUser');
const editUser = require('./editUserData');

router.get('/current', getCurrentUserInfo);
router.delete('/delete', deleteUser);
router.put('/edit', editUser);

module.exports = router;
