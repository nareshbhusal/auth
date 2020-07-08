const { auth } = require('google-auth-library');
const authClient = auth.fromAPIKey("367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com");

const googleAuth = async ({ accessToken, tokenId }) => {
    const response = await authClient.verifyIdToken({ idToken: tokenId });
    const { email, name, picture } = response.getPayload();
    const userData = { email, name, picture };
    return userData;
}

module.exports = googleAuth;
