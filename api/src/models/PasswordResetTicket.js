const Sequelize = require('sequelize');
const db = require('../config/database');

const PasswordResetTicket = db.define('passwordresetticket', {
    user_id: {
        type: Sequelize.INTEGER
    },
    tokenHash: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    genTime: {
        type: Sequelize.STRING
    },
    expirationTime: {
        type: Sequelize.STRING
    },
    tokenUsed: {
        type: Sequelize.BOOLEAN
    },
    emailSent: {
        type: Sequelize.BOOLEAN
    },
    ip: {
        type: Sequelize.STRING
    }
});

module.exports = PasswordResetTicket;


/*
 *
 * create table PasswordResetTickets(
    user_id integer NOT NULL,
    "tokenHash" varchar(65) NOT NULL,
    "genTime" varchar(15) NOT NULL,
	"expirationTime" varchar(15) NOT NULL,
    "tokenUsed" boolean NOT NULL,
	"emailSent" boolean NOT NULL,
    ip VARCHAR(50)
)
 *
 */
