const { auth } = require('google-auth-library');

const client = auth.fromAPIKey("367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com");

const loginMid = async (req, res, next) => {

    // server side validation
    const serverError = { err: 'Server error: Something went wrong checking authorization' };
    const oauthError = { err: 'OAuth failed to give email and name!' }

    try {
        let { email, password, tokenId } = req.body;
        // console.log('trying to login with', req.body);
        // logging in via email
        let viaGoogle;
        if (password && email) {
            viaGoogle=false;
        } else if(tokenId) {
            viaGoogle=true;
        } else {
            return res.status(422).send({ err: 'Please fill all fields' });
        }

        let userData;

        if (viaGoogle) {
            // console.log("verifying id token");
            const googleRes = await client.verifyIdToken({ idToken: tokenId });
            // console.log("getting user info");
            const userInfo = googleRes.getPayload();
            name = userInfo.name;
            email = userInfo.email;

            if (!name || !email ) {
                return res.status(500).send(oauthError);
            }
            
            userData = { email, google_oauth: true };
            // console.log("got user data from google", userData);
        } else {
            userData = { email: email.trim().toLowerCase(), password, google_oauth: false };
        }

        req.body.user = userData;
        // console.log('login data',userData);
        return next();

    } catch(err) {
        console.log(err);
        return res.status(500).send(serverError);
    }
}

module.exports = loginMid;