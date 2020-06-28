
module.exports = async (req, res) => {
    try {
        // clear browser cookies
        // check if to clear from all devices
        if (req.body.fromAll) {
            // clear all database session ids
        } else {
            // clear current session id - req.session.id
            // from database
        }

        // send success

    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}