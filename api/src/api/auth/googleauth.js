const updateSessionIDs = require('../../controllers/session/updateSessionIDs');
const getUser = require('../../controllers/user/getUser');

const { auth } = require('google-auth-library');

const client = auth.fromAPIKey("367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com");

const googleAuth = async(req, res) => {

    try {
        const { accessToken, tokenId } = req.body;

        const response = await client.verifyIdToken({ idToken: tokenId });
        const userData = response.getPayload();

        console.log(userData);

        return res.send({msg: 'What!?'});

    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Something went wrong logging in!'})
    }
}

module.exports = googleAuth;
