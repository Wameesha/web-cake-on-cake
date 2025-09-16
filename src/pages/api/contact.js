import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { firstName, lastName, email, phone, message } = req.body;

  // Configure your SMTP transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sandeepaniimasha1998@gmail.com",
      pass: "Imasha1998" // Use your Gmail App Password here
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "sandeepaniimasha1998@gmail.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
}
