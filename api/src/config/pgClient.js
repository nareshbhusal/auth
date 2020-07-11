const { Client, Pool } = require('pg');
const { DB_NAME, HOST, DB_USER, DB_PASS } = process.env;

const connectionString = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const pgClient = new Client({
    connectionString
});

pgClient.connect();

module.exports = pgClient;
