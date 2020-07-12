
const isPassFormatValid = (password) => {
    const MIN_PASSWORD_LENGTH=6;
    return typeof(password)==='string' && password.length>=MIN_PASSWORD_LENGTH;
}
module.exports = isPassFormatValid;
