const updateUser = require("../../controllers/user/updateUser");

const PasswordResetTicket = require('../../models/PasswordResetTicket');
const getTicket = require('../../controllers/resetTicket/getTicket');

const isPassFormatValid = require('../../utils/isPasswordFormatValid');

const { ErrorHandler, Success, Fail } = require('../../utils/response');

const minPassLength=6;
const PASSWORD_LENTH_ERROR = `Password too short, minumum length: ${minPassLength}.`;
const NO_TICKET_ERROR = 'This reset link is not valid';
const TICKET_EXPIRED_ERROR = 'This reset key is not valid';

const SUCCESS_MESSAGE = 'Password changed successfully!';

const changePassword = async(req, res, next) => {

    try {
        const { token, genTime, password, email, user_id } = req.body;

        if (!isPassFormatValid(password)) {
            return Fail(409, PASSWORD_LENTH_ERROR, res);
        }

        const ticketInRecords = await getTicket({ token, genTime });
        if (!ticketInRecords) {
            return Fail(409, NO_TICKET_ERROR, res);
        }
        // check if it has expired
        if (ticketInRecords.expirationTime< new Date().getTime()) {
            // expired
            return Fail(401, TICKET_EXPIRED_ERROR, res);
        }

        // update password
        await updateUser(ticketInRecords.user_id, { password });
        // set ticket tokenUsed status
        await PasswordResetTicket.update(
            { tokenUsed: true },
            {
                where: { genTime, user_id }
            }
        );
        return Success(200, SUCCESS_MESSAGE, res);
        next();

    } catch(err) {
        next(err);
    }
}

module.exports = changePassword;
