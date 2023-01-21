require("dotenv").config();
let nodemailer = require("nodemailer");

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "gm.portfolio123@gmail.com",
      pass: `${process.env.GMAIL_APP_PASSWORD}`,
    },
    secure: true,
  });

  const mailData = {
    from: "gm.portfolio123@gmail.com",
    to: "gabrielmurry.work@gmail.com",
    subject: `Message From ${req.body.name}`,
    text:
      req.body.subject +
      " | Message: " +
      req.body.message +
      " | Sent from: " +
      req.body.email +
      " | Phone Number: " +
      req.body.phoneNumber,
    html: `${req.body.subject ? `<p>Subject: ${req.body.subject}</p>` : ""}
    <div>${req.body.message}</div>
    <p>Sent from: ${req.body.email}</p>
    ${
      req.body.phoneNumber ? `<p>Phone Number: ${req.body.phoneNumber}</p>` : ""
    }`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
  res.send();
}
