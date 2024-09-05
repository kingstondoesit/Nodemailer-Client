# Nodemailer Client Service

A simple email-sending service using [Nodemailer](https://www.npmjs.com/package/nodemailer), designed to work with Gmail SMTP. It allows you to send customized HTML emails and handles errors efficiently by logging them using an event emitter.

## Features

- Sends an HTML email using Gmail's SMTP service.
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
   >Note: You will need to activate Two-Factor Authentication and set up a Gmail App Password.

4. Run the service:

   ```bash
   node customMail.js
   ```

## Usage

To send emails with customized content, modify the `mailOptions` object to specify the recipient, subject, and HTML body of the email. You can style and add custom scripts to the html markup too.

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

## Logging

- Error Logging: All authentication and SMTP errors are captured and logged via the custom emailEmit module. Logs are saved to `errlogs.txt` for debugging purposes.

- Success Logging: Successful email sends are logged with the message ID and response to `emailLogs.txt`.

## Error Handling

The `customMail.js` script handles common email errors:

- Authentication (AUTH) errors => Error Code 535

- DNS lookup failures: Logs the error with details about possible SMTP misconfiguration or internet issues.

- Other SMTP errors are logged with their respective error names and details.

## License

This project is licensed under the MIT License - see [LICENSE file](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) for details.

Feel free to customize even further!
