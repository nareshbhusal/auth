const getUser = require('../../controllers/user/getUser');
const ErrorHandler = require('../../utils/error');
// get current logged in user

module.exports = async (req, res, next) => {
    try {
        console.log(req.session.user_id)
        const user_id = req.session.user_id;
        const userInRecords = await getUser({ user_id });

        if (!userInRecords) throw new ErrorHandler(404, 'No such user in record');
        res.send(userInRecords);
        next();

    } catch(err) {
        next(err);
    }
}
