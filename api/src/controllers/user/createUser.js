const User = require('../../models/User');
const getHashedData = require('../../utils/getHashedData');


const createUser = async ({ fullname, email, password, joined, auth_system, photo }) => {

    console.log('NOW CREATING USER');

    console.log('GENERATING HASH');
    const hashedPassword = await getHashedData(password);

    const createdUser = await User.create({
        fullname,
        email,
        pass: hashedPassword,
        login_sessions: [],
        joined,
        auth_system,
        photo,
    });
    return createdUser;
}

module.exports = createUser;
