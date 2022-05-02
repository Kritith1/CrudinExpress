// import nodemailer from "nodemailer";
// import 'dotenv/config';

// export async function main(mailTo, name) {
//   let transporter = nodemailer.createTransport({
//     host: process.env.host,
//     port: process.env.smtpPort ,
//     secure: process.env.secure,
//     auth: {
//       user: process.env.user, // generated ethereal user
//       pass: process.env.pass, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: "kittuthapa66@gmail.com", // sender address
//     to: mailTo, // list of receivers
//     subject: "Message Received ✔", // Subject line
//     text: `Thank you for reaching out to me ${name}.I will contact you soon`, // plain text body
//     html: `<b>I am delighted to get your message ${name}</b><br>Sincerely,<br>Kriti Thapa`, // html body
//   });

//   console.log("Message sent: %s", info.messageId);

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
import nodemailer from "nodemailer";
import "dotenv/config";
let transporter = nodemailer.createTransport({
  service:process.env.EMAIL_SERVICE_PROVIDER,
   auth: {
     user: process.env.MAILER_EMAIL,
     pass: process.env.MAILER_PASSWORD,
   },
 });
export async function mailer(mailTo, name) {
  try {
    await transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: mailTo,
      subject: "Message Received:",
      text: `Received your message at ${new Date().toDateString()}.
            Thank you ${name} for visiting my website. I will look through your message and contact you back as soon as possible.
            sincerely,
            Kriti Thapa`,
      html: `Received your message at <b>${new Date().toDateString()}.</b><br/><br />
    Thank you <b>${name}</b> for visiting my website. <br/><br/>I am delighted to get your message.I will look through your message and contact you back as soon as possible.<br/><br />
    <i>Sincerely</i>,<br/>
    <i>Kriti Thapa</i><br/>`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
export async function mailerAdmin({fullName,email,message}) {
  try {
    await transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Message Received",
      text: `Received message at ${new Date().toDateString()}.
        Sender Name: ${fullName} , email Address: ${email},[ ${message} ]`,
      html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
      <b>Sender Name:</b> <i>${fullName},</i><br/><br/>
      <b>Email ID:</b> <i>${email},</i> <br/><br/>
       <b>Message:</b><br/>
       {<br/>
        ${message}
        <br/>
      }`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}