import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g. smtp.gmail.com for Gmail
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// API Endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address (your SMTP user to avoid spoofing issues)
      replyTo: email,
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: `New Contact Form Submission from ${name} (${company || 'No Company'})`, // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company || 'N/A'}

        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155; line-height: 1.6;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #2563eb; padding: 40px 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">Megatron Tech Solutions</h1>
                      <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 15px; font-weight: 500;">New Contact Form Submission</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569;">You have received a new inquiry from your website's contact form. Here are the details:</p>

                      <!-- Contact Details Card -->
                      <div style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 32px; border: 1px solid #e2e8f0;">
                        <h2 style="margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700;">Client Information</h2>
                        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding-bottom: 12px; width: 100px;"><span style="color: #64748b; font-size: 14px;">Name</span></td>
                            <td style="padding-bottom: 12px;"><strong style="color: #0f172a; font-size: 15px;">${name}</strong></td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 12px;"><span style="color: #64748b; font-size: 14px;">Email</span></td>
                            <td style="padding-bottom: 12px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600; font-size: 15px;">${email}</a></td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 12px;"><span style="color: #64748b; font-size: 14px;">Phone</span></td>
                            <td style="padding-bottom: 12px;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 600; font-size: 15px;">${phone}</a></td>
                          </tr>
                          <tr>
                            <td><span style="color: #64748b; font-size: 14px;">Company</span></td>
                            <td><strong style="color: #0f172a; font-size: 15px;">${company || 'N/A'}</strong></td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message Section -->
                      <div style="margin-bottom: 16px;">
                        <h2 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700;">Message</h2>
                        <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 16px 20px; font-size: 16px; color: #1e293b; font-style: italic; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; border-left-width: 4px;">
                          ${message.replace(/\n/g, '<br/>')}
                        </div>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px; text-align: center;">
                      <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                        This email was generated automatically from your website's contact form.<br/>
                        © ${new Date().getFullYear()} Megatron Tech Solutions. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
