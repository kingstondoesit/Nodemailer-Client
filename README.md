# What is this?

Nodemailer Client is a simple email-sending service built with [Nodemailer](https://www.npmjs.com/package/nodemailer), designed to work with several SMTP services. Presently configured to work with Gmail SMTP, you can tweak the code to work with your preferred mail service and send customized HTML emails.

## Features

- Sends HTML emails using popular SMTP services, including Gmail, Yahoo, Outlook, ProtonMail, and Zoho.
- Handles authentication errors and DNS lookup failures.
- Logs all email-related events to a file for debugging or audit purposes.
- Utilizes environment variables for secure email credentials management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kingstondoesit/Nodemailer-Client.git
   cd Nodemailer-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in a `.env` file:

   #### For Gmail

   ```bash
   GMAIL_USER = `your-email@gmail.com`
   GMAIL_PASS = `your-gmail-app-password`
   ```
   >Note: You must have Two-Factor Authentication activated to set up a Gmail App Password.

   #### For Yahoo

   ```bash
   YAHOO_USER = `your-email@yahoo.com`
   YAHOO_PASS = `your-yahoomail-password`
   ```

   #### For Outlook

   ```bash
   OUTLOOK_USER = `your-email@outlook.com`
   OUTLOOK_PASS = `your-outlook-password`
   ```

   #### For ProtonMail (requires ProtonMail Bridge)

   ```bash
   PROTON_USER = `your-email@protonmail.com`
   PROTON_PASS = `your-bridge-password`
   ```

   #### For Zoho Mail

   ```bash
   ZOHO_USER = `your-email@zoho.com`
   ZOHO_PASS = `your-zoho-password`
   ```

4. Run the service:

   ```bash
   node customMail.js
   ```

## Usage

To send emails with customized content, modify the `mailOptions` object in `customMail.js`. Fill in the sender's email details, specify recipient(s), enter email subject, and populate the HTML body with your intended message. You can add custom styles and scripts to the html markup too.

Custom **Google mail** example:

```js
const mailOptions = {
  from: 'Your Name <your-email@gmail.com>',
  to: 'recipient-email@gmail.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1>
  <p>We're glad to have you.</p>`,
};
```

To send emails via a different SMTP services, simply adjust the `transporter` settings in `customMail.js` based on the provider and update the `mailOptions` object accordingly.

Example configuration for other SMTP providers:

#### Yahoo

```js
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.YAHOO_USER,
    pass: process.env.YAHOO_PASS,
  },
});

const mailOptions = {
  from: 'Your Name <your-email@yahoo.com>',
  to: 'recipient-email@yahoo.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1><p>We're glad to have you.</p>`,
};
```

#### Outlook (Hotmail/Live)

```js
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS,
  },
});

const mailOptions = {
  from: 'Your Name <your-email@outlook.com>',
  to: 'recipient-email@outlook.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1><p>We're glad to have you.</p>`,
};
```

#### ProtonMail (via Bridge):

```js
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025, // Use the port set up by ProtonMail Bridge
  secure: true,
  auth: {
    user: process.env.PROTON_USER,
    pass: process.env.PROTON_PASS,
  },
});

const mailOptions = {
  from: 'Your Name <your-email@protonmail.com>',
  to: 'recipient-email@protonmail.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1><p>We're glad to have you.</p>`,
};
```

#### ZohoMail

```js
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

const mailOptions = {
  from: 'Your Name <your-email@zoho.com>',
  to: 'recipient-email@zoho.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1><p>We're glad to have you.</p>`,
};
```

## Error Handling and Logging

- Error Logging: All authentication and SMTP errors are captured and logged via a custom `emailEmit` module. Logs are saved to `errlogs.txt` for debugging purposes.

- Success Logging: Successful email sends are logged with a message ID and response to `emailLogs.txt`.

## License

This project is licensed under the MIT License - see [LICENSE file](https://opensource.org/licenses/MIT%C2%A0%C2%A0%C2%A0) for details.

<!---
## Support

I hope you find this package useful. To support the creators of nodemailer-client service for future developments, kindly consider buying them a coffee! <a href="https://buymeacoffee.com/kingstondoesit" target="_blank">buymeacoffee.com/kingstondoesit</a>
--->
