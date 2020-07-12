const store = require('../../store');

const deleteSessionFromRedis = (session_to_delete) => {
    store.destroy(session_to_delete, (err)=> {
        if (err) {
            console.error('Failed to delete session: '+session_to_delete);
            throw err;
        }
    });
}
module.exports = deleteSessionFromRedis;
