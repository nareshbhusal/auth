const updateSessionIDs = require('../../controllers/session/updateSessionIDs');
const addCookie = require('../../controllers/session/addCookie');
const getUser = require('../../controllers/user/getUser');

// determine if native or google auth is being requestsed from
    // route accordingly
    // learn an api response standard
    // learn how to do proper error handling

const NATIVE_AUTH='native_auth';
const OAUTH='oauth';
const INSUFFICIENT_INFO='insufficient';

// error responses
const INSUFFICIENT_INFO_ERROR='Please fill in all fields, insufficient data';
const INCORRECT_CRED = { err: 'Wrong password or email!' };

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

module.exports = async (req, res) => {
    try {
        const requestedUser = req.body;

        // determine login mode
        let LOGIN_MODE = getLoginMode(requestedUser);

        if (LOGIN_MODE===INSUFFICIENT_INFO) {
            return res.status(422).send(INSUFFICIENT_INFO_ERROR);
        }

        // check if requestedUser exists
        const userInRecords = await getUser({email: requestedUser.email});
         if (!userInRecords) {
            return res.status(401)
                .send({ err: 'Wrong password or email!' });
         }


        // if incorrect login modes used
        if (LOGIN_MODE==='oauth' && 
            userInRecords.auth_system==='native') {

                return res.status(401)
                    .send({ err: 'Try login in with email!' });
            
        } else if (LOGIN_MODE==='native_auth' && 
            userInRecords.auth_system==='g_auth') {

                return res.status(401)
                    .send({ err: 'Try login in with google!' });
        }

    
        if (LOGIN_MODE===OAUTH) {
            
            // login with google auth
            return res.send('loging in via oauth');
        } else if(LOGIN_MODE==='native_auth') {

            // verify password
            const match = await bcrypt.compare(password, userInRecords.password);
 
            if(match) {                
                // save session
                // send success
                /*
                await updateSessionIDs(userInRecords, req.sessionID);
                // set user on cookie
                addCookie(req, userInRecords);
                const id = userInRecords.id;
                return res.send({ msg: 'Logged in!', id });
                */
            } else {
                // is incorrect
                    // send failed password
                    // return res.status(401).send(INCORRECT_CRED);
            }
            return res.send('loging in via native auth');
        } else {
            throw 'something is wrong lol, LOGIN_MODE: '+LOGIN_MODE
        }

    } catch(err) {
        console.log(err);
        res.send('500 error');
    }
}