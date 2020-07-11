const deleteUserSession = require('../../controllers/session/deleteUserSession');

module.exports = async (req, res) => {
    try {
        const user_id = req.session.user_id;
        const currentSessionID = req.sessionID;

        const fromAll = req.body.fromAll; // if to logout from all devices

        await deleteUserSession(userId, currentSessionID, fromAll);

        return res.status(200).send('logout success!')
    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
