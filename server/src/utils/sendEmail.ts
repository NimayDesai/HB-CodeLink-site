import formData from "form-data";
import Mailgun from "mailgun.js";

export async function sendEmail(to: string, html: string, subject: string) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });
  mg.messages.create("mailgun.hbcodelink.tech", {
    from: "HB CodeLink <noreply@hbcodelink.tech>",
    to,
    subject,
    html,
  });
}
