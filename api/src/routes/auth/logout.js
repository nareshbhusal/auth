const deleteUserSession = require('../../controllers/session/deleteUserSession');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

module.exports = async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        const currentSessionID = req.sessionID;

        const fromAll = req.body.fromAll; // if to logout from all devices

        req.session.destroy((err) => {
            if(err) {
                delete req.session
                return console.log(err);
            }
        });
        await deleteUserSession(user_id, currentSessionID, fromAll);

        return Success(200, null, res);
        next();
    } catch(err) {
        next(err);
    }
}
