const { application } = require("express");
const express = require("express");
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/contact", (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'kristoffer78@ethereal.email',
            pass: '3qBsadVVpeaK6dAw26'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // verify connection configuration
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    const output = `
        <h3>Contact Details:</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `;

    let mailOptions = {
        from: '"Nodemailer" <kristoffer78@ethereal.email>',
        to: 'kristoffer78@ethereal.email',
        subject: 'New message from Redux Co. contact form',
        text: 'There is a new message',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject(error)
            return
        }
        resolve(info)
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

const sendemail = (emailmessage) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'kristoffer78@ethereal.email',
            pass: '3qBsadVVpeaK6dAw26'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // verify connection configuration
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    let mailOptions = {
        from: '"Nodemailer" <kristoffer78@ethereal.email>',
        to: 'kristoffer78@ethereal.email',
        subject: 'New message from Redux Co. contact form',
        text: 'There is a new message',
        html: emailmessage
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject(error)
            return
        }
        resolve(info)
    });
}