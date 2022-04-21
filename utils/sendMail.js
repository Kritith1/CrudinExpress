import nodemailer from "nodemailer";

export async function main(mailTo, name) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "6ef308cd273714", // generated ethereal user
      pass: "f2a0d4aff5fb12", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "kittuthapa66@gmail.com", // sender address
    to: mailTo, // list of receivers
    subject: "Message Received ✔", // Subject line
    text: `Thank you for reaching out to me ${name}.I will contact you soon`, // plain text body
    html: `<b>I am delighted to get your message ${name}</b><br>Sincerely,<br>Kriti Thapa`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
