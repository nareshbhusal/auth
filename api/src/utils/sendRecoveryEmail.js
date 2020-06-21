const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, BASE_URL } = process.env;


const sendRecoveryEmail = async({ email, name, hash, google_oauth }) => {

    let htmlMessage = `
        <p>Did you forget your password, ${name}?</p>
        <p>If you did, follow this link to reset your password:</p>
        <a href="${BASE_URL}/reset-password/${hash}">CHANGE PASSWORD</a>
        <p>The link will expire in 30 minutes.</p>
        <br />
        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>
        <br />
        <p>Thank you.</p>
    `;
    if (google_oauth) {
        htmlMessage = `
        <p>Did you forget your password, ${name}?</p>
        <p>It seems that you had originally logged in via google authentication. If that isn't working, please let me know, and, follow this link to reset your password:</p>
        <a href="${BASE_URL}/reset-password/${hash}">CHANGE PASSWORD</a>
        <p>The link will expire in 30 minutes.</p>
        <br />
        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>
        <br />
        <p>Thank you.</p>
    `;
    }
    if(!name || !email ) {
        throw "Arguments not given";
    }

    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
        to: email,
        from: email,
        subject: `Recover password for SaaS`,
        html: htmlMessage
    };
    await sgMail.send(msg);
    console.log('email sent');
}

module.exports = sendRecoveryEmail;