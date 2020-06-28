const isLoggedIn = require('../controllers/user/isLoggedIn');
const updateUser = require('../controllers/user/updateUser');

// const clearHeaderCache = (res) => {
//     res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
// }

const requireLogin = async (req, res, next) => {

    const authError = {err: 'Please login or signup first!'};
    const serverError = { err: 'Server error: Something went wrong checking authorization' };
    let loggedIn;
    
    try {
        loggedIn = await isLoggedIn(req);

        if (loggedIn) {
            console.log('updating access record')
            const id = req.session.user.id;
            // save last accessed time
            await updateUser(id, { last_accessed: new Date().getTime() });
            // clearHeaderCache(res);
            return next();
        } else {
            return res.status(403).send(authError);
        }
    } catch(err) {
        console.log(err)
        return res.status(500).send(serverError);
    }
}

module.exports = requireLogin;