const getUser = require('../../controllers/user/getUser');
const createUser = require('../../controllers/user/createUser');

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
        //return res.send('register route');
        // determine login mode
        let SIGNIN_MODE = getSignInMode(userData);

        // check if email and password are given
        if (SIGNIN_MODE===INSUFFICIENT_INFO) {
            return res.status(422).send(INSUFFICIENT_INFO_ERROR);
        }


        // check if email is valid (regex or some library maybe)
        if (!isEmailValid(userData.email)) {
            return res.status(401).send(EMAIL_VALIDITY_ERROR)
        } else if (isPassFormatValid(userData.password)) {
            // check if password length is appropriate
            return res.status(401).send(PASSWORD_LENTH_ERROR);
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
        // Create user
        if (SIGNIN_MODE===NATIVE_AUTH) {
            userToCreate.auth_system = NATIVE_AUTH;

        } else if (SIGNIN_MODE===OAUTH) {
            userToCreate.auth_system = OAUTH;
            // TODO: Implement google auth
        }


        const createdUser = await createUser(userToCreate);
        console.log(createdUser);
        return res.send('user created successfully');


        // save session

        // save cookie
        return res.send('registered');

    } catch(err) {
        console.log(err);
        return res.status(500).send('something went wrong');
    }
}
