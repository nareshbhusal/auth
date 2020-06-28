const getUser = require('../../controllers/user/getUser');
const clearSession = require('../../controllers/session/clearSession');

const logout = async(req, res) => {
    
    // if (!req.session) {
    //     return res.status(400).send({ err: 'Already logged out!' });
    // }
    // Clear session_id from the database
    console.log(req.session, req.sessionID);
    if (req.session.user) {
        try {
            const userId = req.session.user.id;
            const user = await getUser({ id: userId });
            if (user) {
                // if user exists
                await clearSession(req, user);
                return res.status(200).send({ msg: 'User logged out!' });
            }

        } catch(err) {
            return res.status(500).send({err: 'something went wrong while trying to log out!'})
        }
    }
    return res.status(200).send({ msg: 'Already logged out but okay!' });
}

module.exports = logout;