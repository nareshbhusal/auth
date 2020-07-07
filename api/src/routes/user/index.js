const express = require('express');
const router = express.Router();

const deleteUser = require('./deleteUser');
const editUser = require('./editUserData');

router.delete('/delete', deleteUser);
router.put('/edit', editUser);

module.exports = router;
