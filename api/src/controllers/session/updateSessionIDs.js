const updateUser = require('../user/updateUser');

// takes the user fetched from the database freshly,
// and updates it's session_ids on the database
// logic -- keep number of session id below 5

const updateSessionIDs = async (user, sessionID) => {

    const MAX_SESSIONS = 4;

    let session_ids;
    session_ids = user.session_ids || [];
    console.log('new session_id', sessionID);
    console.log('old session_ids', session_ids);
    console.log('typeof session_ids', typeof session_ids.length)
    if (typeof(session_ids.length) === 'number') {
        session_ids.unshift(sessionID);
        if (session_ids.length > MAX_SESSIONS) {
            session_ids.pop();
        }
    }
    console.log('updated session_ids', session_ids);

    try {
        // save last accessed time as well
        await updateUser(user.id, { session_ids, last_accessed: new Date().getTime() });
    } catch(err) {
        console.log(err);
    }
}

module.exports = updateSessionIDs;