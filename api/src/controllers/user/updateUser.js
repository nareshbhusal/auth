const User = require('../../models/User');
const getHashedData = require('../../utils/getHashedData');
// @param id - user id
// @param dataToUpdate - object with user data to update

const updateUser = async (user_id, dataToUpdate) => {
    delete dataToUpdate.user_id;

    // selectively hash password
    const password = dataToUpdate.pass;
    if (password) {
        const hashedPassword = await getHashedData(password);
        dataToUpdate.pass = hashedPassword;
    }
    await User.update(
        { ...dataToUpdate },
        {
            where: { user_id }
        }
    );
}

module.exports = updateUser;
