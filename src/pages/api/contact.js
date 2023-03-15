require("dotenv").config();
let nodemailer = require("nodemailer");

export default async function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "gm.portfolio123@gmail.com",
      pass: `${process.env.GMAIL_APP_PASSWORD}`,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection config
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  // const mailData = {
  //   from: "gm.portfolio123@gmail.com",
  //   to: "gabrielmurry.work@gmail.com",
  //   subject: `Message From ${req.body.name}`,
  //   text:
  //     req.body.subject +
  //     " | Message: " +
  //     req.body.message +
  //     " | Sent from: " +
  //     req.body.email,
  //   html: `${req.body.subject ? `<p>Subject: ${req.body.subject}</p>` : ""}
  //   <div>${req.body.message}</div>
  //   <p>Sent from: ${req.body.email}</p>`,
  // };

  const { name, email, subject, message } = req.body;

  const mailData = {
    from: {
      name: `${name}`,
      address: "gm.portfolio123@gmail.com",
    },
    replyTo: email,
    to: "gabrielmurry.work@gmail.com",
    subject: subject,
    text: message,
    html: `${message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(info);
  //   }
  // });

  res.status(200).json({ status: "OK" });
  // res.send();
}
