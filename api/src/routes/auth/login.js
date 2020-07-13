const updateSessionIDs = require('../../controllers/session/updateSessionIDs');
const addLoginSession = require('../../controllers/session/updateLoginSessions');
const addCookie = require('../../controllers/session/addCookie');
const getUser = require('../../controllers/user/getUser');
const bcrypt = require('bcryptjs');

const util = require('util');

const { ErrorHandler, Success, Fail } = require('../../utils/response');
// determine if native or google auth is being requestsed from
    // route accordingly
    // learn an api response standard
    // learn how to do proper error handling

const NATIVE_AUTH='native_auth';
const OAUTH='oauth';
const INSUFFICIENT_INFO='insufficient';

// error responses
const INSUFFICIENT_INFO_ERROR='Please fill in all fields, insufficient data';
const INCORRECT_CRED = 'Wrong password or email!';

const getLoginMode = ({ email, password, tokenId }) => {
    if (email && password) {
        return NATIVE_AUTH;
    } else if (tokenId) {
        return OAUTH;
    } else {
        return INSUFFICIENT_INFO;
    }
}

/*

*/

const passwordsMatch = async (inputPassword, dbPasswordHash) => {
    bcrypt.compare = util.promisify(bcrypt.compare);
    //console.log(`Checking if ${inputPassword} matched the hash ${dbPasswordHash}`);
    const matches = await bcrypt.compare(inputPassword, dbPasswordHash);
    return matches;
}

module.exports = async (req, res, next) => {
    try {
        let requestedUser = req.body;
        const { accessToken, tokenId } = req.body;

        // determine login mode
        let LOGIN_MODE = getLoginMode(requestedUser);
        console.log(LOGIN_MODE);

        if (LOGIN_MODE===INSUFFICIENT_INFO) {
            throw new ErrorHandler(422, INSUFFICIENT_INFO_ERROR);
        }

        if (LOGIN_MODE===OAUTH) {
            requestedUser = await googleAuth({ accessToken, tokenId });
        }
        // check if requestedUser exists
        const userInRecords = await getUser({email: requestedUser.email});
         if (!userInRecords) {
             return Fail(400, { msg: INCORRECT_CRED }, res);
         }
        if (userInRecords.deleted) {
             // if user is deleted
            return Fail(400, {msg: INCORRECT_CRED }, res);
        }


        // if incorrect login mode used
        if (LOGIN_MODE===OAUTH &&
            userInRecords.auth_system===NATIVE) {

            return Fail(401, {msg: 'Try login in with email'}, res);

        } else if (LOGIN_MODE===NATIVE_AUTH &&
            userInRecords.auth_system===OAUTH) {

            return Fail(401, {msg: 'Try login in with google'}, res);
        }


        if(LOGIN_MODE===NATIVE_AUTH) {
            // verify password
            const isPasswordCorrect = await passwordsMatch(requestedUser.password, userInRecords.pass);

            if(!isPasswordCorrect) return Fail(401, { msg: INCORRECT_CRED }, res);
        }

        // save session
        await addLoginSession(req, userInRecords);

        return Success(200, null, res);
        next();

    } catch(err) {
        next(err);
    }
}
