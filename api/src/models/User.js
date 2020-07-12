const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    photo: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    },
    auth_system: {
        type: Sequelize.STRING //`native_auth` or `g_auth`
    },
    login_sessions: {
        type: Sequelize.ARRAY(Sequelize.JSON)
    },
    session_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    last_accessed: {
        type: Sequelize.STRING
    },
    pass_recovery_blob: {
        type: Sequelize.JSON
    },
    sub_type: {
        type: Sequelize.STRING
    },
    joined: {
        type: Sequelize.STRING
    },
    deleted: {
        type: Sequelize.BOOLEAN
    }
});

//SQL command to create the table
/*

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	fullname VARCHAR(30) DEFAULT '',
	email VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NOT NULL,
	pass VARCHAR(65) NOT NULL,
	auth_system VARCHAR(10) NOT NULL,
	login_sessions JSON[] NOT NULL,
	last_accessed VARCHAR(50),
	//pass_recovery_blob JSON[] DEFAULT '{}',
	sub_type VARCHAR(30),
	joined VARCHAR(15) NOT NULL,
    deleted BOOLEAN default false
)

*/

module.exports = user;
