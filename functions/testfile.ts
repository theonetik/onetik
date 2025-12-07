import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

async function sendTestEmail() {
  const gmailEmail = process.env['GMAIL_EMAIL'];
  const gmailPassword = process.env['GMAIL_PASSWORD'];

  if (!gmailEmail || !gmailPassword) throw new Error("Env vars missing");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailEmail, pass: gmailPassword },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Onetik Team" <${gmailEmail}>`,
      to: "your-personal-email@gmail.com",
      subject: "Test Email",
      text: "This is a test email",
    });
    console.log("Email sent:", info.response);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendTestEmail();
