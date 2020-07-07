const User = require('../../models/User');
const getHashedData = require('../../utils/getHashedData');


const createUser = async ({ fullname, email, password, joined, auth_system }) => {

    console.log('NOW CREATING USER');

    console.log('GENERATING HASH');
    const hashedPassword = await getHashedData(password);

    const createdUser = await User.create({
        fullname,
        email,
        pass: hashedPassword,
        joined,
        auth_system
    });
    return createdUser;
}

module.exports = createUser;
