const PasswordResetTicket = require('../../models/PasswordResetTicket');
const uuid = require('uuid');
const getHashedData = require('../../utils/getHashedData');

const createResetTicket = async ({user_id, emailSent=true, ip}) => {
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
        emailSent,
        ip
    });
    return { ticket, token };
}

module.exports = createResetTicket;
