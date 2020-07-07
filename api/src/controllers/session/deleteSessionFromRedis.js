
const deleteSessionFromRedis = (session_to_delete) => {
    store.destroy(session_to_delete, (err)=> {
        console.error('Failed to delete session: '+sessionID);
        throw err;
    });
}
module.exports = deleteSessionFromRedis;
