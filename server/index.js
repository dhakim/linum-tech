const { application } = require("express");
const express = require("express");
const sendmail = require('sendmail');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/contact", (req, res) => {
    console.log(req);
    const message = `
        <p>Hello Sir,</p>
        <p>${req.body.name} has sent a message from linumtech.com website, details are as below:</p>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Inustry: ${req.body.industry}</li>
        <li>Your Interest: ${req.body.interest}</li>
        </ul>
        <p>Message:</p>
        <p>${req.body.message}</p>
    `;
    sendemail(message);
});

const sendemail = (emailmessage) => {
    console.log('sending email');
    sendmail({
        from: 'info@linumtech.com',
        to: 'danish.hakim@gmail.com',
        subject: 'Contact Request from LinumTech Website',
        html: emailmessage
      }, function (err, reply) {
        console.log(err && err.stack)
        console.dir(reply)
      })
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});