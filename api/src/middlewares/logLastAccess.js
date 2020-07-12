
const OLD_ENOUGH_AGE=30*60; // 30minutes

const idOldEnough = (last_accessd) => {
    //
}
// use in /user and /auth routes
module.exports = async (req, res, next) => {
    // check if last_accessd is old enough
    const { last_accessed } = req.session;
    if (isOldEnough(last_accessed)) {
        // save last accessed time
        await updateUser(id, { last_accessed: new Date().getTime() });
    }
    next();
}
