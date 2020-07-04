const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const util = require('util');

const saltRounds = 10;

const hashPassword = async password =>  {

    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) console.log(err)
        resolve(hash)
      });
    })

    return hashedPassword;
}


const createUser = async ({ fullname, email, password, joined }) => {
    // hash Password
    bcrypt.hash = util.promisify(bcrypt.hash);
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    // const createdUser = await User.create({
    //     fullname,
    //     email,
    //     password: hashedPassword,
    //     joined
    // });
    console.log('GENERATING HASH');
    const hashedPassword = await bcrypt.hash('password', saltRounds);

    console.log(hashedPassword);
    return hashedPassword;
    return 'before hash';
    //try {
    //    bcrypt.hash(password, saltRounds, async function(err, hash) {
    //        // Store hash in your password DB.
    //        if (err) {
    //            throw "bcrypt hash error:\n"+err
    //        }
    //        const createdUser = await User.create({
    //            fullname,
    //            email,
    //            password: hash,
    //            joined
    //        });
    //        console.log('GENERATED HASH');
    //        console.log('password hash: '+hash);
    //
    //        return createdUser;
    //    });
    //    // return createdUser;

    //} catch(err) {
    //    console.log(err);
    //}
    //return "ignore me"
}

module.exports = createUser;
