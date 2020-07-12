const getUser = require('../../controllers/user/getUser');
const sendRecoveryEmail = require('../../utils/sendRecoveryEmail');
const createResetTicket = require('../../controllers/resetTicket/createResetTicket');

const isEligibleForResetTicket = (user_id) => {
    // implement rate limiter
    //return res.status(300).send({ err: 'Please wait 30 minutes before attempting again.' })
}

const SUCCESS_MESSAGE="Thanks, if the email address you entered is correct, you will be receiving an email shortly with instructions on how to reset your password";


const recoverPassword = async(req, res, next) => {

    try {
        const { email } = req.body;
        if (!email) return res.status(400).send({ err: 'Email not provided' });

        const userInRecords = await getUser({ email });
        if (userInRecords) {
            console.log('valid email');

            const { name, auth_system, user_id } = userInRecords;
            // evaluate if last recovery attempt window is still open
            await isEligibleForResetTicket();
            // SEND EMAIL

            const { token, ticket } = await createResetTicket({ user_id, emailSent: true, ip: req.ip });
            // ^true for email sent

            await sendRecoveryEmail({ email, name, token,
                genTime:ticket.genTime, auth_system
            });
        }
        res.status(200).send({ msg: SUCCESS_MESSAGE });
        next();

    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error recovering password' });
    }
}

module.exports = recoverPassword;
