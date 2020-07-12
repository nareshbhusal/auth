const updateUser = require("../../controllers/user/updateUser");

const PasswordResetTicket = require('../../models/PasswordResetTicket');
const getTicket = require('../../controllers/resetTicket/getTicket');

const isPassFormatValid = require('../../utils/isPasswordFormatValid');
const ErrorHandler = require('../../utils/error');

const minPassLength=6;
const passLengthError = { err: `Password too short, minumum length: ${minPassLength}.` };

const changePassword = async(req, res, next) => {

    try {
        const { token, genTime, password, email, user_id } = req.body;

        if (!isPassFormatValid(password)) {
            throw new ErrorHandler(409, passLengthError);
        }

        const ticketInRecords = await getTicket({ token, genTime });
        if (!ticketInRecords) {
            throw new ErrorHandler(409, 'This reset link is not valid');
        }
        // check if it has expired
        if (ticketInRecords.expirationTime< new Date().getTime()) {
            // expired
            throw new ErrorHandler(401, 'This reset key is not valid');
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
        res.send({ msg: 'Password changed successfully!', id });
        next();

    } catch(err) {
        next(err);
    }
}

module.exports = changePassword;
