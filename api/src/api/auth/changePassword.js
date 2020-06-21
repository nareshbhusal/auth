const updateUser = require("../../controllers/user/updateUser");
const getUser = require("../../controllers/user/getUser");

const recoveryWindowPassed = require('../../utils/recoveryWindowPassed');

const isHashValid = (incoming_hash, user) => {
    const { pass_recovery_blob } = user;
    const { hash } = pass_recovery_blob;
    console.log(!!hash, hash==incoming_hash, !recoveryWindowPassed(pass_recovery_blob))
    
    return hash && hash==incoming_hash && !recoveryWindowPassed(pass_recovery_blob);
}

const isPassFormatValid = (password) => {
    const minPassLength=8;
    if (password && typeof(password)==='string' && password.length>=minPassLength) {
        return true;
    }
    return false;
}

const changePassword = async(req, res) => {
    const passLengthError = { err: `Password too short, minumum length: ${minPassLength}.` };

    try {
        const { hash, password } = req.body;
        if (!isPassFormatValid(password)) {
            return res.status(409).send(passLengthError);
        }
        const email = hash.slice(44,);
        const user = await getUser({ email });
        console.log(user.name)
        if (user) {
            const { id, pass_recovery_blob } = user;
            const newPass_recovery_blob = {
                ...pass_recovery_blob,
                hash: '',
                genTime: ''
            }
            console.log(isHashValid(hash, user), password)

            if(isHashValid(hash, user)) {
                await updateUser(id, { password, pass_recovery_blob: newPass_recovery_blob });
                return res.send({ msg: 'Password changed successfully!', id });
            }
            return res.status(400).send({ err: "Recovery token isn't present or expired." });
        }
        return res.status(400).send({ err: 'Unknown issue. Please contact support!' })
    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Error changing password!' });
    }
}

module.exports = changePassword;