const getUser = require('../../controllers/user/getUser');
const createUser = require('../../controllers/user/createUser');

const googleAuth = require('../../controllers/user/googleAuth');

const NATIVE_AUTH='native_auth';
const OAUTH='oauth';
const INSUFFICIENT_INFO='insufficient';

const isEmailValid = require('../../utils/isEmailValid');
const isPassFormatValid = require('../../utils/isPasswordFormatValid');

// error responses
const INSUFFICIENT_INFO_ERROR='Please fill in all fields, insufficient data';
const INCORRECT_CRED = { err: 'Wrong password or email!' };
const EMAIL_VALIDITY_ERROR= { err: "Email doesn't look valid, \
please contact us if you think this is by our error" };

const PASSWORD_LENTH_ERROR= { err: 'Password should be atleast 6 characters long' };

const getSignInMode = ({ fullname, email, password, tokenId }) => {
    if (fullname && email && password) {
        return NATIVE_AUTH;
    } else if (tokenId) {
        return OAUTH;
    }
    return INSUFFICIENT_INFO;
}

module.exports = async (req, res) => {
    try {

        let userData = req.body;
        // determine login mode
        let SIGNIN_MODE = getSignInMode(userData);

        if (SIGNIN_MODE===INSUFFICIENT_INFO) {
            return res.status(422).send(INSUFFICIENT_INFO_ERROR);
        }

        // check if the email is already in use
        const userInRecords = await getUser({ email: userData.email });
        if (userInRecords) {
            return res.status(409).send({ err: 'Email is already in use' });
        }
        // doesn't exist already

        const userToCreate = {
            ...userData,
            joined: new Date().getTime()
        }

        if (SIGNIN_MODE===OAUTH) {
            userToCreate.userData = await googleAuth({ accessToken, tokenId });
            userToCreate.auth_system = OAUTH;
        }
        if (SIGNIN_MODE===NATIVE_AUTH) {

            // check if email is valid
            if (!isEmailValid(userData.email)) {
                return res.status(401).send(EMAIL_VALIDITY_ERROR)
            } else if (isPassFormatValid(userData.password)) {
                // check if password length is appropriate
                return res.status(401).send(PASSWORD_LENTH_ERROR);
            }

            userToCreate.auth_system = NATIVE_AUTH;
        }

        // create user
        const createdUser = await createUser(userToCreate);

        // save session
        await updateLoginSessions(req, createdUser);

        return res.send('user created successfully');

    } catch(err) {
        console.log(err);
        return res.status(500).send('something went wrong');
    }
}
