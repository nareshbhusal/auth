const getUser = require('../../controllers/user/getUser');
const updateUser = require('../../controllers/user/updateUser');
const deleteUserSession = require('../session/deleteUserSession');

module.exports = async (user_id) => {
    const userInRecords = await getUser({ user_id });
    if (!userInRecords) throw `Couldn't delete user with user_id ${user_id}. User doesn't even exist`;
    const email = userInRecords.email;
    const newEmail = `${email}<deleted>`;

    await updateUser(user_id, {
        deleted: true,
        email: newEmail
    });

    // logout of all login sessions
    await deleteUserSession(user_id, undefined, true);
}
