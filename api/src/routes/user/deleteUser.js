const deleteUser = require('../../controllers/user/deleteUser');

//delete user
module.exports = async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        await deleteUser(user_id);

        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
        });
        res.send('User deleted!');
        next();

    } catch(err) {
        next(err);
    }
}
