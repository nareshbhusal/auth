const bcrypt = require('bcryptjs');
const util = require('util');

const SALT_ROUNDS = 10;

const getHashedData = async (data_to_hash) => {
    bcrypt.genSalt = util.promisify(bcrypt.genSalt);
    bcrypt.hash = util.promisify(bcrypt.hash);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedData = await bcrypt.hash(data_to_hash, salt);
    return hashedData;
}

module.exports = getHashedData;
