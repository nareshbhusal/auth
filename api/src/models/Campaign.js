const Sequelize = require('sequelize');
const db = require('../config/database');

const campaign = db.define('campaign', {
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
    childCampaigns: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    parentCampaign: {
        type: Sequelize.STRING
    },
    analytics: {
        type: Sequelize.JSON
    },
    data: {
        type: Sequelize.JSON
    }
});

module.exports = campaign;