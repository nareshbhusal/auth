const getUser = require('../../controllers/user/getUser');
const uuid = require('uuid');
const PasswordResetTicket = require('../../models/PasswordResetTickets');
const sendRecoveryEmail = require('../../utils/sendRecoveryEmail');

const getHashedData = require('../../utils/getHashedData');

const createResetTicket = async (user_id, emailSent=true) => {
    const TICKET_LIFE=21; // 20 minutes
    const genTime = new Date().getTime().toString();
    let expirationTime = new Date();
    expirationTime.setMinutes(TICKET_LIFE);
    expirationTime = expirationTime.getTime().toString();

    const token = uuid();
    const tokenHash = await getHashedData(token);

    const ticket = await PasswordResetTicket.create({
        user_id,
        tokenHash,
        genTime,
        expirationTime,
        tokenUsed: false,
        emailSent
    });
    return token;
}

const isEligibleForResetTicket = (user_id) => {
    // implement rate limiter
    //return res.status(300).send({ err: 'Please wait 30 minutes before attempting again.' })
}

const SUCCESS_MESSAGE="Thanks, if the email address you entered is correct, you will be receiving an email shortly with instructions on how to reset your password";


const recoverPassword = async(req, res) => {

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

            const { token, ticket } = await createResetTicket(user_id, true);
            // ^true for email sent

            await sendRecoveryEmail({ email, name, token,
                genTime:ticket.genTime, auth_system
            });
        }
        return res.status(200).send({ msg: SUCCESS_MESSAGE });

    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error recovering password' });
    }
}

module.exports = recoverPassword;
