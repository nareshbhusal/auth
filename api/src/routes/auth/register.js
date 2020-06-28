

const MIN_PASSWORD_LENGTH=6;

module.exports = async (req, res) => {
    try {

        const user = req.body;

        // check if email and password are given

        // check if email is valid (regex or some library maybe)

        // check if password length is appropriate

        // check if the email is already in use
        
        // create user

        // save session

        // save cookie
        return res.send('registered');

    } catch(err) {
        console.log(err);
        return res.status(500).send('something went wrong');
    }
}