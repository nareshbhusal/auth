const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    serialNum:{
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    google_oauth: {
        type: Sequelize.BOOLEAN
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
    /**/
    websites: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    subscription: {
        type: Sequelize.STRING
    },
    billingInfo: {
        type: Sequelize.JSON
    }
})

module.exports = user;