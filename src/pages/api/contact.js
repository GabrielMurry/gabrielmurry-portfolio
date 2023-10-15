const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = req.body;

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: "gabrielmurry.work@gmail.com",
    from: "hello@em9406.gabrielmurry.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};

// export default async function handler(req, res) {
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "gm.portfolio123@gmail.com",
//       pass: `${process.env.GMAIL_APP_PASSWORD}`,
//     },
//     secure: true,
//   });

//   const mailData = {
//     from: "gm.portfolio123@gmail.com",
//     to: "gabrielmurry.work@gmail.com",
//     subject: `Message From ${req.body.name}`,
//     text:
//       req.body.subject +
//       " | Message: " +
//       req.body.message +
//       " | Sent from: " +
//       req.body.email,
//     html: `${req.body.subject ? `<p>Subject: ${req.body.subject}</p>` : ""}
//     <div>${req.body.message}</div>
//     <p>Sent from: ${req.body.email}</p>`,
//   };

//   transporter.sendMail(mailData, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });

//   res.status(200).json({ status: "OK" });
//   res.send();
// }
