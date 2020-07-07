const User = require('../../models/User');
const getUser = require('../user/getUser');
const updateUser = require('../user/updateUser');

const deleteSessionFromRedis = require('../session/deleteSessionFromRedis');

const deleteUserSession = async (user_id, sessionID, toDeleteAll) => {

    const userInRecords = await getUser({ user_id: user_id });
    const login_sessions = userInRecords.login_sessions;

    if(toDeleteAll) {
        // delete all sessions pertaining to this userId from
        // -- the db
        await updateUser(userId, { login_sessions: [] });
        // -- and redis
        login_sessions.forEach(sessionInfo => {
           deleteSessionFromRedis(sessionInfo.sessionID);
        });
        return;
    }
    if(!sessionID) throw "No sessionID to delete"

    // delete given session from redis and db
    let new_login_sessions = login_sessions.filter(sessionInfo => {
        return sessionInfo.sessionID !== sessionID;
    });

    await updateUser(user_id, { login_sessions: new_login_sessions });

    deleteSessionFromRedis(sessionID);
}

module.exports = deleteUserSession;
