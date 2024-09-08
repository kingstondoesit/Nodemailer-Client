# What is this?

Nodemailer Client is a simple email-sending service built with [Nodemailer](https://www.npmjs.com/package/nodemailer), presently configured to work with Gmail SMTP. However, this client is versatile and supports various other SMTP services too. You can tweak the code depending on your mail service you to send customized HTML emails.

## Features

- Sends an HTML email using popular SMTP services, including Gmail, Yahoo, Outlook, ProtonMail, and Zoho.
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

   ```env
   GMAIL_USER = `your-email@gmail.com`
   GMAIL_PASS = `your-app-password`
   ```
   >Note: You will need to have Two-Factor Authentication activated to set up a Gmail App Password.

4. Run the service:

   ```bash
   node customMail.js
   ```

## Usage

To send emails with customized content, modify the `mailOptions` object in `customMail.js`. Fill in your email details, specify the recipient(s), email subject, and populate the HTML body with your intended message. You can add custom styles and scripts to the html markup too.

Example configuration in mailOptions:

```js
const mailOptions = {
  from: 'Your Name <your-email@gmail.com>',
  to: 'recipient-email@gmail.com',
  subject: 'Welcome to Our Business',
  html: `<h1>Welcome!</h1>
  <p>We're glad to have you.</p>`,
};
```

## Error Handling and Logging

- Error Logging: All authentication and SMTP errors are captured and logged via the custom emailEmit module. Logs are saved to `errlogs.txt` for debugging purposes.

- Success Logging: Successful email sends are logged with the message ID and response to `emailLogs.txt`.

## License

This project is licensed under the MIT License - see [LICENSE file](https://opensource.org/licenses/MIT%C2%A0%C2%A0%C2%A0) for details.

## Support
I hope you find this package useful. To support the creators of nodemailer-client service for future developments, kindly consider buying them a coffee! [buymeacoffee.com/kingstondoesit](https://buymeacoffee.com/kingstondoesit)
