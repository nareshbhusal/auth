const updateUser = require('../../controllers/user/updateUser');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

module.exports = async (req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname && !email && !password) return Fail(400, { msg: 'Nothing changed'}, res );
        const user_id = req.session.user_id;

        let newUserData = {};

        if(fullname) newUserData.fullname=fullname;
        if(email) newUserData.email=email;
        if(password) newUserData.pass=password;

        const updatedUser = await updateUser(user_id, newUserData);
        delete updatedUser.pass;
        return Success(200, { updatedUser }, res);
        next();
    } catch(err){
        next(err)
    }
}
