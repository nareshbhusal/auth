const getUser = require('../../controllers/user/getUser');
const createUser = require('../../controllers/user/createUser');

const googleAuth = require('../../controllers/user/googleAuth');
const updateLoginSession = require('../../controllers/session/updateLoginSessions');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

const NATIVE_AUTH='native_auth';
const OAUTH='oauth';
const INSUFFICIENT_INFO='insufficient';

const isEmailValid = require('../../utils/isEmailValid');
const isPassFormatValid = require('../../utils/isPasswordFormatValid');

// error responses
const INSUFFICIENT_INFO_ERROR='Please fill in all fields, insufficient data';
const INCORRECT_CRED = 'Wrong password or email!';
const UNIQUE_EMAIL_ERROR='Email is already in user';
const EMAIL_VALIDITY_ERROR= "Email doesn't look valid, \
please contact us if you think this is by our error";

const PASSWORD_LENTH_ERROR= 'Password should be atleast 6 characters long';

const getSignInMode = ({ fullname, email, password, tokenId }) => {
    if (fullname && email && password) {
        return NATIVE_AUTH;
    } else if (tokenId) {
        return OAUTH;
    }
    return INSUFFICIENT_INFO;
}

module.exports = async (req, res, next) => {
    try {

        let userData = req.body;
        // determine login mode
        let SIGNIN_MODE = getSignInMode(userData);

        if (SIGNIN_MODE===INSUFFICIENT_INFO) {
            return Fail(400, {msg: INSUFFICIENT_INFO_ERROR}, res);
        }

        // check if the email is already in use
        const userInRecords = await getUser({ email: userData.email });
        if (userInRecords) {
            return Fail(400, {msg: UNIQUE_EMAIL_ERROR}, res);
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
                return Fail(401, {msg: EMAIL_VALIDITY_ERROR}, res);
            } else if (!isPassFormatValid(userData.password)) {
                // check if password length is appropriate
                return Fail(401, {msg: PASSWORD_LENTH_ERROR}, res);
            }

            userToCreate.auth_system = NATIVE_AUTH;
        }

        // create user
        const createdUser = await createUser(userToCreate);

        // save session
        await updateLoginSession(req, createdUser);
        return Success(204, null, res);
        next();

    } catch(err) {
        next(err);
    }
}
