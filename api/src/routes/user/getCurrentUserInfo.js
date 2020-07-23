const getUser = require('../../controllers/user/getUser');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

const NOT_FOUND_ERROR = 'No such user in record';

// get current logged in user
module.exports = async (req, res, next) => {
    try {
        console.log(req.session.user_id)
        const user_id = req.session.user_id;
        const userInRecords = await getUser({ user_id });

        if (!userInRecords) return Fail(404, {msg: NOT_FOUND_ERROR}, res);
        delete userInRecords.login_sessions;
        delete userInRecords.pass;
        return Success(200, userInRecords, res);
        next();

    } catch(err) {
        next(err);
    }
}
