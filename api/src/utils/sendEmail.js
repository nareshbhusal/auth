const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, BASE_URL, SENDGRID_SENDER } = process.env;

const sendEmail = async ({to, subject, htmlMessage}) => {
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
        to,
        from: SENDGRID_SENDER,
        subject,
        html: htmlMessage
    };
    await sgMail.send(msg);
}

module.exports = sendEmail;
