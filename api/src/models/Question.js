const Sequelize = require('sequelize');
const db = require('../config/database');

const question = db.define('question', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    website: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    },
    conclusion: {
        type: Sequelize.STRING
    },
    wording: {
        type: Sequelize.STRING
    },
    options: {
        type: Sequelize.JSON
    },
    optionsOrder: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
});

module.exports = question;