// Vercel Serverless Function for handling access requests
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, projectId, projectTitle, message } = req.body;

    // Validate required fields
    if (!email || !projectId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Portfolio Access <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL,
      subject: `New Access Request: ${projectTitle || projectId}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Access Request</title>
          <style>
            body {
              font-family: 'Helvetica', Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
              color: #111827;
              line-height: 1.5;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
            }
            
            .header {
              padding-bottom: 16px;
              border-bottom: 1px solid #e5e7eb;
              margin-bottom: 24px;
            }
            
            h2 {
              font-weight: 600;
              font-size: 20px;
              margin-top: 24px;
              margin-bottom: 16px;
              color: #111827;
            }
            
            p {
              margin: 8px 0;
              color: #374151;
            }
            
            .info-item {
              margin-bottom: 12px;
            }
            
            .info-label {
              font-weight: 500;
              color: #111827;
            }
            
            .button-container {
              margin-top: 24px;
            }
            
            .button {
              display: inline-block;
              background-color: #111827;
              color: #ffffff !important;
              padding: 10px 16px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 500;
              font-size: 14px;
            }
            
            .footer {
              margin-top: 32px;
              padding-top: 16px;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://raw.githubusercontent.com/zaurbabayev/portfolio-assets/main/logo.png" alt="Logo" width="40" height="40" style="display: block;">
            </div>
            
            <h2>New Access Request</h2>
            
            <div class="info-item">
              <span class="info-label">Project:</span> 
              <span>${projectTitle || projectId}</span>
            </div>
            
            <div class="info-item">
              <span class="info-label">From:</span> 
              <span>${email}</span>
            </div>
            
            <div class="info-item">
              <span class="info-label">Date:</span> 
              <span>${new Date().toLocaleString()}</span>
            </div>
            
            <div class="info-item">
              <span class="info-label">Message:</span> 
              <p>${message || 'No message provided'}</p>
            </div>
            
            <div class="button-container">
              <a href="${process.env.SITE_URL}/admin" style="display: inline-block; background-color: #111827; color: #ffffff; padding: 10px 16px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">
                Review in Admin Panel
              </a>
            </div>
            
            <div class="footer">
              ${new Date().getFullYear()} • Zaur Babayev all rights reserved 😎
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, messageId: data.id });
  } catch (error) {
    console.error('Error in request-access API:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
