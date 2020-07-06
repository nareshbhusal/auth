const User = require('../../models/User');
const getUser = require('../../controllers/user/getUser');
const updateUser = require('../../controllers/user/updateUser');

const deleteSessionFromRedis = (session_to_delete) => {

    store.destroy(session_to_delete, (err)=> {
        console.error('Failed to delete session: '+sessionID);
        throw err;
    });
}

const deleteUserSession = async (userId, sessionID, toDeleteAll) => {

    const userInRecords = await getUser({ userId: userId });
    const login_sessions = userInRecords.login_sessions;

    if(toDeleteAll) {
        await updateUser(userId, { login_sessions: [] });
        // delete all sessions pertaining to this userId from redis
        login_sessions.forEach(sessionInfo => {
           deleteSessionFromRedis(sessionInfo.sessionID);
        });
        return;
    }
    if(!sessionID) throw "No sessionID to delete"

    // delete this session from the db
    let new_login_sessions = login_sessions.filter(sessionInfo => {
        return sessionInfo.sessionID !== sessionID;
    });

    await updateUser(userId, { login_sessions: new_login_sessions });

    deleteSessionFromRedis(sessionID);
}


// logout
module.exports = async (req, res) => {
    try {
        const userId = req.session.userId;
        const currentSessionID = req.sessionID;

        const fromAll = req.body.fromAll; // if to logout from all devices

        await deleteUserSession(userId, currentSessionID, fromAll);

        return res.status(200).send('logout success!')
    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
