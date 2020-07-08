const updateUser = require("../../controllers/user/updateUser");

const PasswordResetTicket = require('../../models/PasswordResetTicket');
const getTicket = require('../../controllers/resetTicket/getTicket');

const isPassFormatValid = require('../../utils/isPasswordFormatValid');

const passLengthError = { err: `Password too short, minumum length: ${minPassLength}.` };

const changePassword = async(req, res) => {

    try {
        const { token, genTime, password, email, user_id } = req.body;

        if (!isPassFormatValid(password)) {
            return res.status(409).send(passLengthError);
        }

        const ticketInRecords = await getTicket({ token, genTime });
        if (!ticketInRecords) {
            return res.status(409).send({ msg: "This reset link is not valid" });
        }
        // check if it has expired
        if (ticketInRecords.expirationTime< new Date().getTime()) {
            // expired
            return res.status(401).send({ msg: "This reset key is no longer valid" });
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
        return res.send({ msg: 'Password changed successfully!', id });

    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error changing password!' });
    }
}

module.exports = changePassword;
