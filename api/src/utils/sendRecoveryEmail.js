const sendEmail = require('../utils/sendEmail');
const { BASE_CLIENT_URL } = process.env;
const OAUTH='oauth';

const sendRecoveryEmail = async({ email, name, token, genTime, auth_system }) => {

    const recoveryLink = `${BASE_CLIENT_URL}/reset-password/${token}/${genTime}`;
    const ALLEGED_EXPIRY=`30 minutes`;

    let htmlMessage = `
        <p>Did you forget your password, ${name}?</p>
        <p>If you did, follow this link to reset your password:</p>
        <a href="${recoveryLink}">CHANGE PASSWORD</a>
        <p>The link will expire in ${ALLEGED_EXPIRY}.</p>
        <br />
        <p>Ignore this message if it wasn't requested by you.</p>
        <br />
        <p>Thank you.</p>
    `;
    if (auth_system===OAUTH) {
        htmlMessage = `
        <p>Did you forget your password, ${name}?</p>
        <p>It seems that you had originally logged in with google. If that isn't working, please let me know, or follow this link to create a password:</p>
        <i>You will not be able to use google to login if you create a password.</i>
        <br />
        <a href="${recoveryLink}">SET PASSWORD</a>
        <p>The link will expire in ${ALLEGED_EXPIRY}.</p>
        <br />
        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>
        <br />
        <p>Thank you.</p>
    `;
    }

    const msg = {
        to: email,
        subject: `Recover password for SaaS`,
        html: htmlMessage
    };
    await sendEmail(msg);
    console.log('email sent');
}

module.exports = sendRecoveryEmail;
