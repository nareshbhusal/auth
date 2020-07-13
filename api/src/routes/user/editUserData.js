const updateUser = require('../../controllers/user/updateUser');
const { ErrorHandler } = require('../../utils/error');

module.exports = async (req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname && !email && !password) throw new ErrorHandler(401, 'Nothing changed');
        const user_id = req.session.user_id;

        let newUserData = {};

        if(fullname) newUserData.fullname=fullname;
        if(email) newUserData.email=email;
        if(password) newUserData.pass=password;

        await updateUser(user_id, newUserData);
        res.status(200).send('user updated');
        next();
    } catch(err){
        next(err)
    }
}
