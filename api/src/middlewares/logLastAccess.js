const updateUser = require('../controllers/user/updateUser');
const OLD_ENOUGH_AGE=30; // 30minutes

const isOldEnough = (last_accessed) => {

    return ((new Date().getTime() - last_accessed)/1000)/60 >= OLD_ENOUGH_AGE;
}
// use in /user and /auth routes
// last_accessed is updated on redis on every request
// and updated on db every $OLD_ENOUGH_AGE request

module.exports = async (req, res, next) => {
    console.log('RUNNING logLastAccess');

    req.session.last_accessed = req.session.last_accessed || 0;

    // check if last_accessd is old enough
    const { last_accessed, user_id } = req.session;
    if (isOldEnough(last_accessed)) {
        const new_last_accessed = new Date().getTime();

        req.session.last_accessed = new_last_accessed;
        req.session.save();
        // save last accessed time
        console.log('Updating last_accesssed '+last_accessed+' too old, for user_id: '+user_id);
        console.log(req.session.last_accessed);
        await updateUser(user_id, { last_accessed: new_last_accessed });
    }
    //next();
}
