const getUser = require('../../controllers/user/getUser');
const createUser = require('../../controllers/user/createUser');

const NATIVE_AUTH='native_auth';
const OAUTH='oauth';
const INSUFFICIENT_INFO='insufficient';

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
    } else {
        return INSUFFICIENT_INFO;
    }
}

const MIN_PASSWORD_LENGTH=6;

const isEmailValid = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

module.exports = async (req, res) => {
    try {

        let userData = req.body;

        // determine login mode
        let SIGNIN_MODE = getSignInMode(userData);

        // check if email and password are given
        if (SIGNIN_MODE===INSUFFICIENT_INFO) {
            return res.status(422).send(INSUFFICIENT_INFO_ERROR);
        }


        // check if email is valid (regex or some library maybe)
        if (!isEmailValid(userData.email)) {
            return res.status(401).send(EMAIL_VALIDITY_ERROR)
        } else if (userData.password.length < MIN_PASSWORD_LENGTH) {
            // check if password length is appropriate
            return res.status(401).send(PASSWORD_LENTH_ERROR);
        }
        //return res.send('going to check if the user exists for: '+userData.email)
        // check if the email is already in use
        const userInRecords = await getUser({ email: userData.email });
        if (userInRecords) {
            return res.status(409).send({ err: 'Email is already in use' });
        }
        // return res.send('doesn\'t exist already');
        // attach creation time
        const userToCreate = {
            ...userData,
            joined: new Date().getTime()
        }
        // create user

        //return res.send('going to create now');

        const phash = await createUser(userData);
        return res.send(phash);
        return res.send('user created successfully');

        // save session

        // save cookie
        return res.send('registered');

    } catch(err) {
        console.log(err);
        return res.status(500).send('something went wrong');
    }
}
