const { getConfig } = require('./config');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const moment = require('moment');

const mailTplPath = `${__dirname}/../mail.ejs`;
moment.locale('fr');

/**
 * @param {moment.Moment} givenDate
 */
async function sendMail(givenDate) {
  const {
    my_name,
    receiver_name,
    address,
    smtp_host,
    smtp_port,
    smtp_ssl,
    smtp_user,
    smtp_password,
    smtp_email_from,
    smtp_email_to
  } = getConfig();

  const transporter = nodemailer.createTransport({
    host: smtp_host,
    port: smtp_port,
    secure: smtp_ssl,
    auth: {
      user: smtp_user,
      pass: smtp_password
    }
  });

  const current_date = givenDate.format('DD/MM/Y');
  const mailText = await ejs.renderFile(
    mailTplPath,
    {
      receiver_name,
      my_name,
      current_date,
      address
    },
    { async: true }
  );

  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: `${my_name}<${smtp_email_from}>`,
        to: smtp_email_to,
        subject: `Télétravail ${my_name} du ${current_date}`,
        text: mailText
      },
      err => {
        if (!err) {
          console.log(`Email sent to ${smtp_email_to}`);
          resolve();
        }
        reject(err);
      }
    );
  });
}

module.exports = { sendMail };
