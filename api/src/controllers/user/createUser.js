const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const util = require('util');

const saltRounds = 10;


const createUser = async ({ fullname, email, password, joined, auth_system }) => {
    // hash Password

    console.log('NOW CREATING USER');
    bcrypt.genSalt = util.promisify(bcrypt.genSalt);
    bcrypt.hash = util.promisify(bcrypt.hash);


    console.log('GENERATING HASH');
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);


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
