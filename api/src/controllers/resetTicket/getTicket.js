
const bcrypt = require('bcryptjs');
const util = require('util');


const getTicket = async ({ token, genTime, user_id }) => {
    const tickets = await PasswordResetTicket.findAll({
        where: {
            genTime
        }
    });
    const ticketInRecords = tickets[tickets.findIndex(t => t.user_id == user_id && !t.tokenUsed)];
    if(!ticketInRecords) return null;

    bcrypt.compare = util.promisify(bcrypt.compare);
    const matches = await bcrypt.compare(token, tokenHash);
    if (matches) {
        return ticketInRecords;
    } else {
        return null;
    }
}
