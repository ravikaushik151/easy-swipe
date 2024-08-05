// /pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBody = `
      <table cellspacing="0" cellpadding="0" style="width:100%; border:1px solid #ccc; font-size:14px">
        <tbody>
          <tr align="center" style="background-color:#f8f8f8">
            <td colspan="2" style="padding:15px">
              <img src="https://easy-swipe.vercel.app/_next/image?url=%2Fimg%2Flogo.png&w=256&q=75" alt="Company Logo" style="max-width:150px">
            </td>
          </tr>
          <tr style="background-color:#f5f5f5">
            <th style="vertical-align:top; color:#222; text-align:left; padding:15px; border-bottom:1px solid #eee">Name <span style="color:red">*</span></th>
            <td style="vertical-align:top; color:#333; padding:15px; border-bottom:1px solid #eee">${name}</td>
          </tr>
          <tr>
            <th style="vertical-align:top; color:#222; text-align:left; padding:15px; border-bottom:1px solid #eee">Email <span style="color:red">*</span></th>
            <td style="vertical-align:top; color:#333; padding:15px; border-bottom:1px solid #eee">${email}</td>
          </tr>
          <tr style="background-color:#f5f5f5">
            <th style="vertical-align:top; color:#222; text-align:left; padding:15px; border-bottom:1px solid #eee">Phone Number <span style="color:red">*</span></th>
            <td style="vertical-align:top; color:#333; padding:15px; border-bottom:1px solid #eee">${phone}</td>
          </tr>
          <tr style="background-color:#f5f5f5">
            <th style="vertical-align:top; color:#222; text-align:left; padding:15px; border-bottom:1px solid #eee">Message <span style="color:red">*</span></th>
            <td style="vertical-align:top; color:#333; padding:15px; border-bottom:1px solid #eee">${message}</td>
          </tr>
        </tbody>
      </table>
    `;
    

    try {
      await transporter.sendMail({
        from: `"Easy Swipe" <${process.env.SMTP_USER}>`,
        to: 'ravikaushik151@gmail.com', // List of receivers
        subject: 'Enquiry from Easy Swipe',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: emailBody,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
