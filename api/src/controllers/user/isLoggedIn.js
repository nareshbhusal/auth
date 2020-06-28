const getUser = require('./getUser');

const isLoggedIn = async(req) => {

    if (!req.session) {
        return false;
    } else if(!req.session.user){
        return false;
    } else if(!req.session.user.id) {
        return false;
    }
    // pull user corresponding to the cookie saved 
    const id = req.session.user.id;
    
    const user = await getUser({ id });

    // Check if the userid and sessionID in session match the ones in DB
    if (user) {
        // console.log(req.sessionID, 'against',user.session_ids);
        const isAuthorized = user.session_ids.some(session_id => {
            return session_id === req.sessionID
        });
        // console.log(isAuthorized);
        if (isAuthorized) {
            return true;
        }
    }
    // clear the browser session
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
        }
    });
    return false;
}

module.exports = isLoggedIn;