const updateUser = require('../../controllers/user/updateUser');
const getUser = require('../../controllers/user/getUser');
const uuid = require('uuid');

const sendRecoveryEmail = require('../../utils/sendRecoveryEmail');
const recoveryWindowPassed = require('../../utils/recoveryWindowPassed');


const recoverPassword = async(req, res) => {

    try {
        const { email } = req.body;
        if (!email) return res.status(400).send({ err: 'Email not provided' });

        const userInRecords = await getUser({ email });
        if (userInRecords) {
            console.log('valid email');
            let { user_id, pass_recovery_blob } = userInRecords;
            pass_recovery_blob = pass_recovery_blob || {};
            // evaluate if last recovery attempt window is still open

            if (recoveryWindowPassed(pass_recovery_blob)) {

                // if open, attach a json blob with uuid and generation time
                let new_recovery_blob = {
                    hash: `${uuid().toString().slice(0,36)}/?email=${email}`,
                    genTime: new Date().getTime().toString(),
                    totalRequests: Number(pass_recovery_blob.requests)+1 || 1
                }
                // SEND EMAIL
                const { name, auth_system } = userInRecords;
                const { hash } = pass_recovery_blob;

                await sendRecoveryEmail({ email, name, hash, auth_system });
                new_recovery_blob.email_sent = true;
                await updateUser(id, { pass_recovery_blob: new_recovery_blob });

            } else {
                return res.status(300).send({ err: 'Please wait 30 minutes before attempting again.' })
            }
        }
        return res.status(200).send({ msg: 'You should get an email if the email is registered.' })

    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error recovering password' });
    }
}

module.exports = recoverPassword;
