const updateUser = require("../../controllers/user/updateUser");
const getUser = require("../../controllers/user/getUser");

const recoveryWindowPassed = require('../../controllers/user/recoveryWindowPassed');

const isPassFormatValid = require('../../utils/isPasswordFormatValid');

const isHashValid = (user_sent_hash, userInRecords) => {
    const { pass_recovery_blob } = userInRecords;
    const { hash } = pass_recovery_blob;
    console.log(!!hash, hash==user_sent_hash, !recoveryWindowPassed(pass_recovery_blob))

    return hash && hash==incoming_hash && !recoveryWindowPassed(pass_recovery_blob);
}

const changePassword = async(req, res) => {
    const passLengthError = { err: `Password too short, minumum length: ${minPassLength}.` };

    try {
        const { hash, password } = req.body;
        // TODO: THERE IS NO SESSION ID WHEN USER IS LOGGED OUT
        //const userId = req.session.userId;

        if (!isPassFormatValid(password)) {
            return res.status(409).send(passLengthError);
        }
        const email = hash.slice(44,);

        const userInRecords = await getUser({ email: email });

        if (userInRecords) {
            const { id, pass_recovery_blob } = userInRecords;
            const newPass_recovery_blob = {
                ...pass_recovery_blob,
                hash: '',
                genTime: ''
            }

            if(isHashValid(hash, userInRecords.pass_recovery_blob)) {
                console.log('Recovery hash is valid');
                // update password
                await updateUser(id, { pass: password, pass_recovery_blob: newPass_recovery_blob });
                return res.send({ msg: 'Password changed successfully!', id });
            }
            return res.status(400).send({ err: "Recovery token isn't present or expired." });
        }
        // unexpected email error, abort
        return res.status(422).send({ err: 'Unknown issue. Please contact support!' });
    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error changing password!' });
    }
}

module.exports = changePassword;
