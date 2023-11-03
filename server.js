const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
 const app = express();
const port = 4000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sender email address',
    pass: ' app password',
  },
});

const emailtemplate = path.join(__dirname, 'template.html');
const Template = fs.readFileSync(emailtemplate, 'utf-8');

app.get('/', (req, res) => {
   
  res.sendFile(__dirname + '/index.html')
});

app.post('/submit', (req, res) => {
  const email = req.body.email;

  const mailOptions = {
    from: 'sender email address',
    to: email,
    subject: 'Email Verification',
    html: Template,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
     
    } else {
      console.log('Email sent: ' + info.response);
     
    }
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
