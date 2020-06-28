const getUser = require('../controllers/user/getUser');
const { auth } = require('google-auth-library');

const client = auth.fromAPIKey("367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com");

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const minPassLength=8;

const emailError = { err: 'Email is already in use!' };
const passLengthError = { err: `Password too short, minumum length: ${minPassLength}.` };
const serverError = { err: 'Server error: Something went wrong checking authorization' };
const oauthError = { err: 'OAuth failed to give email and name!' }

const registerMid = async (req, res, next) => {

    // server side validation

    console.log('attempting registeration');
    try {
        let { name, email, password, tokenId } = req.body;

        // registeration via email
        let viaGoogle;
        if (name && password && email) {
            viaGoogle=false;
        } else if(tokenId) {
            viaGoogle=true;
        } else if (emailReg.test(emailReg)) {
            res.status(400).send({ err: 'Invalid email' });
        } else {
            return res.status(422).send({ err: 'Please fill all fields' });
        }

        let userData;

        if (viaGoogle) {
            const googleRes = await client.verifyIdToken({ idToken: tokenId });
            const userInfo = googleRes.getPayload();
            name = userInfo.name;
            email = userInfo.email;
            console.log('with google');

            if (!name || !email ) {
                console.log('oauth error');
                return res.status(500).send(oauthError);
            }
            name=name.trim();
            email=email.toLowerCase().trim();
            password=password.trim();
            userData = { name, email, password: null, google_oauth: true };

        } else {
            userData = { name, email, password, google_oauth: false };
        }

        // see if email already exists
        const userInRecords = await getUser({ email: userData.email });
        if (userInRecords) {
            return res.status(409).send(emailError);

        } else if (!viaGoogle && password.length>=minPassLength) {
            // return res.status(409).send(passLengthError);
        }

        req.body.user = userData;
        console.log('middleware passed');
        console.log('Attached ', userData);
        return next();

    } catch(err) {
        return res.status(500).send(serverError);
    }
}

module.exports = registerMid;