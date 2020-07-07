
const isPassFormatValid = (password) => {
    const MIN_PASSWORD_LENGTH=6;
    return password && typeof(password)==='string' && password.length>=minPassLength;
}
module.exports = isPassFormatValid;
