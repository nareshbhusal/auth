// @ param req is the request object
// @param user is the user fetched from the database
// function sets data to the cookie

const addCookie = (req, userInRecords) => {
    req.session.user = {};
    /*REMOVE LATER*/  req.session.user.email = userInRecords.email;
    req.session.user.id = userInRecords.id;
}

module.exports = addCookie;