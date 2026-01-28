"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const industry = formData.get("industry") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  // Simple validation
  if (!firstName || !email || !phone || !service) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "us2.smtp.mailhostbox.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || false, // false for 587 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER || "sales@siztec.com",
        pass: process.env.SMTP_PASS || "password",
      },
    });

    const mailOptions = {
        from: `"Siztec Website" <${process.env.SMTP_USER || "info@siztec.com"}>`,
        to: "sales@siztec.com", // Recipient
        subject: `New Inquiry from ${firstName} ${lastName} - ${company || "Website"}`,
        text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          Industry: ${industry}
          Service Required: ${service}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Website Inquiry</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Company:</strong> ${company}</li>
            <li><strong>Industry:</strong> ${industry}</li>
            <li><strong>Service Required:</strong> ${service}</li>
          </ul>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };

  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
}
