const updateSessionIDs = require('../../controllers/session/updateSessionIDs');
const addCookie = require('../../controllers/session/addCookie');
const getUser = require('../../controllers/user/getUser');

const login = async(req, res) => {
    const { user } = req.body;

    try {
        const userInRecords = await getUser({email: user.email});
        if (userInRecords) {
            if (userInRecords.google_oauth && user.password) {
                console.log("registered via google");
                // registered via google but attempting to
                // log in with password
                return res.status(401).send({ err: 'Try login in with google!' });
            } else if (userInRecords.google_oauth || userInRecords.password === user.password) {
                // google oauth verified or correct password
                console.log("google oauth verified or correct password");
                await updateSessionIDs(userInRecords, req.sessionID);
                // set user on cookie
                addCookie(req, userInRecords);
                const id = userInRecords.id;
                return res.send({ msg: 'Logged in!', id });
            }
    }
    console.log("email doesn't exist");
    return res.status(401).send({ err: 'Wrong password or email!' });

    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Something went wrong logging in!'})
    }
}

module.exports = login;
