const deleteUser = require('../../controllers/user/deleteUser');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

//delete user
module.exports = async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        await deleteUser(user_id);

        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
        });
        return Success(200, null, res);
        next();

    } catch(err) {
        next(err);
    }
}
