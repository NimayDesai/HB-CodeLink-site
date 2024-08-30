import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string, subject: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: "HB CodeLink",
    to,
    subject,
    html,
  });
}
