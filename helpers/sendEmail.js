const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_MAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_MAIL,
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_MAIL };
  await transporter.sendMail(email);

  return true;
};

// const email = {
//   to: "jutrevurku@gufum.com",
//   from: "vlad23zavadskii@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

module.exports = sendEmail;
