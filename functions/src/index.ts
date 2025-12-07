import * as firestoreFunctions from "firebase-functions/v2/firestore";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config(); // Load .env variables

// Gmail credentials from .env
const gmailEmail = process.env.GMAIL_EMAIL;
const gmailPassword = process.env.GMAIL_PASSWORD;

if (!gmailEmail || !gmailPassword) {
  throw new Error("GMAIL_EMAIL or GMAIL_PASSWORD is not defined in .env file");
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Firestore trigger
export const sendContactEmails = firestoreFunctions.onDocumentCreated(
  "contactMessages/{id}",
  async (event) => {
    const doc = event.data;
    if (!doc || !doc.exists) {
      console.warn("Document does not exist or event data is undefined");
      return;
    }

    const data = doc.data() as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    const name = data.name || "No Name";
    const email = data.email || "no-email@example.com";
    const subject = data.subject || "No Subject";
    const message = data.message || "No Message";

    // Admin email
    const adminMail = {
      from: gmailEmail,
      to: "theonetikofficial@gmail.com",
      subject: `New Contact Message: ${subject}`,
      text: `
New message received:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    };

    // Auto-reply to user
    const autoReply = {
      from: gmailEmail,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
<p>Hello <strong>${name}</strong>,</p>
<p>Thank you for reaching out. We have received your message:</p>
<blockquote>${message}</blockquote>
<p>Our team will contact you soon.</p>
<p>Best regards,<br>The Onetik Team</p>
      `,
    };

    try {
      await transporter.sendMail(adminMail);
      await transporter.sendMail(autoReply);
      console.log("Admin + Auto-reply emails sent successfully");
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  }
);
