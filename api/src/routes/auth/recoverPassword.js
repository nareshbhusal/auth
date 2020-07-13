const getUser = require('../../controllers/user/getUser');
const sendRecoveryEmail = require('../../utils/sendRecoveryEmail');
const createResetTicket = require('../../controllers/resetTicket/createResetTicket');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

const isEligibleForResetTicket = (user_id) => {
    // implement rate limiter
    //return res.status(300).send({ err: 'Please wait 30 minutes before attempting again.' })
}

const SUCCESS_MESSAGE="Thanks, if the email address you entered is correct, you will be receiving an email shortly with instructions on how to reset your password";


const recoverPassword = async(req, res, next) => {

    try {
        const { email } = req.body;
        if (!email) return Fail(400, {msg: 'Email not provided'}, res);

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
        return Success(200, {msg: SUCCESS_MESSAGE}, res); // take the message to client then change it to null
        next();

    } catch(err) {
        next(err);
    }
}

module.exports = recoverPassword;
