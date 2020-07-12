const getUser = require('./getUser');

const isLoggedIn = async(req) => {

    if (!req.session) {
        return false;
    } else if(!req.session.user_id) {
        return false;
    }
    return true;

    // -- Overkill
    // pull user corresponding to the cookie saved
    // check sessionID against db

    // clear the browser session
  //  req.session.destroy((err) => {
  //      if(err) {
  //          console.log(err);
  //      }
  //  });
}

module.exports = isLoggedIn;
