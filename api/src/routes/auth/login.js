
// determine if native or google auth is being requestsed from
    // route accordingly
    // learn an api response standard
    // learn how to do proper error handling

const getLoginMode = ({ email, password, tokenId }) => {
    if (email && password) {
        return 'native_auth';
    } else if (tokenId) {
        return 'oauth';
    } else {
        return 'insufficient';
    }
}

module.exports = async (req, res) => {

    try {
        let { email, password, tokenId } = req.body;
        let LOGIN_MODE = getLoginMode(req.body);
    
        if (LOGIN_MODE==='oauth') {
            return res.send('loging in via oauth');
        } else if(LOGIN_MODE==='native_auth') {
            return res.send('loging in via native auth');
        } else {
            return res.status(422).send('Please fill in all fields, insufficient data');
        }
        return res.send('logged in!');
    } catch(err) {
        console.log(err);
        res.send('500 error');
    }
}