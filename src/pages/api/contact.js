require("dotenv").config();
let nodemailer = require("nodemailer");
// const sgMail = require("@sendgrid/mail");

// const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

// sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  // const { name, email, subject, message } = req.body;

  // const msg = {
  //   to: TO_EMAIL,
  //   from: FROM_EMAIL,
  //   subject: "Nextjs Contact Form",
  //   html: `<p><strong>Name: </strong>${name}</p>
  //   <p><strong>Email: </strong>${email}</p>
  //   <p><strong>Message: </strong>${message}</p>
  //   `,
  // };
  // await sgMail.send(msg);
  // res.json({ success: true });

  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // const message = {
  //   to: "gm.portfolio123@gmail.com",
  //   from: "gm.portfolio123@gmail.com",
  //   subject: "Hello from sendgrid",
  //   text: "Hello from sendgrid",
  //   html: "<h1>Hello from sendgrid</h1>",
  // };
  // try {
  //   await sgMail.send(message).then(() => console.log("email sent"));
  // } catch (error) {
  //   console.error(error);
  //   if (error.response) {
  //     console.error(error.response.body);
  //   }
  // }

  // sgMail
  //   .send(message)
  //   .then(() => console.log("Email sent..."))
  //   .catch((error) => console.log(error.message));

  // const message = {
  //   to: "gabrielmurry.work@gmail.com",
  //   from: "gabrielmurryedh@gmail.com",
  //   subject: "Sending with Twilio SendGrid is Fun",
  //   html: `
  //   <p><strong>Name:</strong>${req.name}</p>
  //   <p>${req.message}</p>`,
  // };

  // sgMail
  //   .send(message)
  //   .then(() => {
  //     console.log("Email Sent!");
  //   })
  //   .catch((err) => {
  //     console.error("Error: ", err);
  //   });

  // try {
  //   await sgMail.send(message).then(() => {
  //     console.log("Email Sent!");
  //   });
  // } catch (error) {
  //   console.error(error);
  //   if (error.response) {
  //     console.error(error.response.body);
  //   }
  // }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "gm.portfolio123@gmail.com",
      pass: `${process.env.GMAIL_APP_PASSWORD}`,
    },
    secure: true,
  });

  // await new Promise((resolve, reject) => {
  //   // verify connection config
  //   transporter.verify(function (error, success) {
  //     if (error) {
  //       console.log(error);
  //       reject(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //       resolve(success);
  //     }
  //   });
  // });

  const mailData = {
    from: "gm.portfolio123@gmail.com",
    to: "gabrielmurry.work@gmail.com",
    subject: `Message From ${req.body.name}`,
    text:
      req.body.subject +
      " | Message: " +
      req.body.message +
      " | Sent from: " +
      req.body.email,
    html: `${req.body.subject ? `<p>Subject: ${req.body.subject}</p>` : ""}
    <div>${req.body.message}</div>
    <p>Sent from: ${req.body.email}</p>`,
  };

  // await new Promise((resolve, reject) => {
  //   // send mail
  //   transporter.sendMail(mailData, (err, info) => {
  //     if (err) {
  //       console.error(err);
  //       reject(err);
  //     } else {
  //       console.log(info);
  //       resolve(info);
  //     }
  //   });
  // });

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200).json({ status: "OK" });
  res.send();
}
