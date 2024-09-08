// Import the required modules
const nodemailer = require('nodemailer');
require('dotenv').config();
const myEmitter = require('./emailEmit');

// Log Environment Variables
console.log('Sender Email Detail:');
console.log('User Email:', process.env.GMAIL_USER);
console.log('Password:', process.env.GMAIL_PASS);

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Define the email options and content
const mailOptions = {
  from: 'Your Name <your-email@gmail.com>',
  to: 'recipient-email@gmail.com',
  subject: 'Welcome to Our Business',
  html: `  
        <html>  
            <head>  
                <style>  
                    body {  
                        font-family: Arial, sans-serif;  
                        background-color: #f4f4f4;  
                        margin: 0;  
                        padding: 20px;  
                    }  
                    .container {  
                        background-color: #ffffff;  
                        padding: 20px;  
                        border-radius: 5px;  
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
                    }  
                    h1 {  
                        color: #333;  
                    }  
                    p {  
                        color: #555;  
                    }  
                    .button {  
                        display: inline-block;  
                        padding: 5px 10px;  
                        background-color: #007bff;  
                        color: white;  
                        text-decoration: none;  
                        border-radius: 7px;  
                    }  
                </style>  
            </head>  
            <body>  
                <div class="container">  
                    <h1>Welcome to Our Business!</h1>  
                    <p>Thank you for joining us. We are excited to have you on board.</p>  
                    <p>To get started, please visit our website:</p>  
                    <a target="blank" href="https://github.com/kingstondoesit" class="button">Visit Our Website</a>  
                </div>  
            </body>  
        </html>  
    `,
};

// Send the email and handle errors
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    if (error.responseCode === 535) {
      // Get error message up to the word "accepted". Trim lengthy message.
      const trimmedMessage = error.message.substring(
        0,
        error.message.indexOf('accepted') + 'accepted.'.length
      );

      // Emit the trimmed message
      myEmitter.emit(
        'logs',
        `Authentication failed\t${error.code}\t${trimmedMessage}`,
        'errlogs.txt'
      );
      console.log('Authentication failed:', error.message);

    } else if (error && error.responseCode !== 535) {
      // Handle Credential Error
      myEmitter.emit(
        'logs',
        `DNS Lookup Failed: ${error.code}\t${error.message}`, //error could be EAUTH or EDNS
        'errlogs.txt'
      );
      console.log(
        'Error: DNS lookup failed. Please check your SMTP configuration or internet connection.',
        error
      );
      
    } else {
      // Handle other SMTP errors
      myEmitter.emit('logs', `Error occurred: ${error.name}`, 'errlogs.txt');
      console.log('Error occurred:', error.message);
    }
    return;
  }

  // On success, emit log
  myEmitter.emit(
    'logs',
    `Successful\t${info.messageId}\t${info.response}`,
    'emailLogs.txt'
  );
  console.log('Email sent:', info.messageId, info.response);
});
