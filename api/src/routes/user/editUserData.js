const updateUser = require('../../controllers/user/updateUser');

module.exports = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname, email) return res.status(401).send('nothing changed');
        const userId = req.session.userId;

        let newUserData = {};

        if(fullname) newUserData.fullname=fullname;
        if(email) newUserData.email=email;
        if(password) newUserData.pass=password;

        await updateUser(userId, newUserData);
        return res.send('user updated');
    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
