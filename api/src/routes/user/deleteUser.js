const deleteUser = require('../../controllers/user/deleteUser');

//delete user
module.exports = async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        await deleteUser(user_id);
        res.send('User deleted!');
        next();

    } catch(err) {
        console.log(err)
        return res.status(500).send('server error');
    }
}
