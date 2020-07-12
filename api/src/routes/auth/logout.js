const deleteUserSession = require('../../controllers/session/deleteUserSession');

module.exports = async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        const currentSessionID = req.sessionID;

        const fromAll = req.body.fromAll; // if to logout from all devices

        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
        });
        await deleteUserSession(user_id, currentSessionID, fromAll);

        res.status(200).send('logout success!')
        next();
    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
