const User = require('../../models/User');

// @param userData is an object with the user data to match in db

const getUser = async userData => {
	console.log('getting user from db');
    console.log(userData);
    const userInRecords = await User.findOne({
        where: {
            ...userData
        }
    });
    //console.log(userInRecords);
    return userInRecords;
}

module.exports = getUser;
