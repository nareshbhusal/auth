const getUser = require('../../controllers/user/getUser');

// get current logged in user

module.exports = async (req, res) => {
    try {
        console.log(req.session.user_id)
        const user_id = req.session.user_id;
        const userInRecords = await getUser({ user_id });

        if (!userInRecords) return res.status(404).send({err: 'No such user in record'});
        return res.send(userInRecords);

    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}
