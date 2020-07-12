const store = require('../../store');

// warning: doesn't work

// delete session data from redis by id
const deleteSessionFromRedis = (session_to_delete) => {
    store.destroy(session_to_delete, (err)=> {
        if (err) {
            console.error('Failed to delete session: '+session_to_delete);
            throw err;
        }
        console.log(session_to_delete+' session deleted')
    });
}
module.exports = deleteSessionFromRedis;
