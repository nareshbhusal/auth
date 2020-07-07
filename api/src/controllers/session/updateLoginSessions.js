const updateUser = require('../user/updateUser');
const store = require('../../store');

const isSessionAlive = require('../../controllers/session/isSessionAlive');
const deleteSessionFromRedis = require('../../controllers/session/deleteSessionFromRedis');

/*
 * `user` here is freshly retrieved from database
*/

const MAX_SESSIONS=4; //use common variable for this and for redis sessions


const updateSessionData = async (req, userInRecords) => {
    req.session.userId = userInRecords.id; // just userId for now
}

module.exports = async (req, user) => {

    const currentSessionID = req.sessionID;

    // TODO: get all the information

    const newSessionInfo = {
        sessionID: currentSessionID,
        ip: req.ip,
        loginTime: new Date().getTime(),
        geoLocation: undefined,
        device: '>>'
    };

    let new_login_sessions = [...user.login_sessions];

    // update db login_sessions to remove dead sessions
    new_login_sessions.filter(login_session => {
        return isSessionAlive(login_session.sessionID);
    });
    // add new session
    new_login_sessions.unshift(newSessionInfo);
    // If number of browsers exceeds MAX_SESSIONS
    if (new_login_sessions.length > MAX_SESSIONS) {
        // delete from db
        const session_to_delete = new_login_sessions[new_login_sessions.length-1].sessionID;
        new_login_sessions.pop();
        //delete from redis
        deleteSessionFromRedis(session_to_delete);
    }
    await updateSessionData(req, userInRecords);

    await updateUser(user.id, { login_sessions: new_login_sessions });
}
