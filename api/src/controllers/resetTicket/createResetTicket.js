const PasswordResetTicket = require('../../models/PasswordResetTickets');
const uuid = require('uuid');
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

module.exports = createResetTicket;
