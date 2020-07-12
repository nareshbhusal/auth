const updateUser = require('../../controllers/user/updateUser');

module.exports = async (req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname && !email && !password) return res.status(401).send('nothing changed');
        const user_id = req.session.user_id;

        let newUserData = {};

        if(fullname) newUserData.fullname=fullname;
        if(email) newUserData.email=email;
        if(password) newUserData.pass=password;

        await updateUser(user_id, newUserData);
        res.send('user updated');
        next();

    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
