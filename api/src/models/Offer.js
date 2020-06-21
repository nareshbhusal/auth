const Sequelize = require('sequelize');
const db = require('../config/database');

const offer = db.define('offer', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    website: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    },
    analytics: {
        type: Sequelize.JSON
    },
    state: {
        type: Sequelize.JSON
    }
});

module.exports = offer;