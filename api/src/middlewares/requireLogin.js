const isLoggedIn = require('../controllers/user/isLoggedIn');
const updateUser = require('../controllers/user/updateUser');

const requireLogin = async (req, res, next) => {

    const authError = {err: 'Please login or signup first!'};
    const serverError = { err: 'Server error: Something went wrong checking authorization' };

    try {
        const loggedIn = await isLoggedIn(req);

        if (loggedIn) {
            console.log('updating access record')
            const user_id = req.session.user_id;
            return next();
        } else {
            return res.status(403).send(authError);
        }
        next();
    } catch(err) {
        console.log(err)
        return res.status(500).send(serverError);
    }
}

module.exports = requireLogin;
