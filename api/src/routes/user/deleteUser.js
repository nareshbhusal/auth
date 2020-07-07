const deleteUser = require('../../controllers/user/deleteUser');

//delete user
module.exports = async (req, res) => {
    try {
        const user_id = req.session.user_id;
        await deleteUser(user_id);
        return res.send('User deleted!');

    } catch(err) {
        console.log(err)
        return res.status(500).send('server error');
    }
}
