// Vercel Serverless Function for sending approval emails
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, projectId, projectTitle, accessCode } = req.body;

    // Validate required fields
    if (!email || !projectId || !accessCode) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Generate project URL with access code
    const projectUrl = `${process.env.SITE_URL}/projects/${projectId}?code=${accessCode}`;

    // Send approval email to requester
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Portfolio Access <onboarding@resend.dev>',
      to: email,
      subject: `Access Granted: ${projectTitle || projectId}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Granted</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', sans-serif;
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
              border-radius: 0.75rem;
            }
            
            .header {
              padding-bottom: 16px;
              border-bottom: 1px solid #e5e7eb;
              margin-bottom: 24px;
            }
            
            .logo {
              width: 40px;
              height: 40px;
            }
            
            h2 {
              font-weight: 600;
              font-size: 20px;
              margin-top: 24px;
              margin-bottom: 16px;
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
            
            .button {
              display: inline-block;
              background-color: #111827;
              color: #ffffff;
              padding: 10px 16px;
              margin-top: 24px;
              text-decoration: none;
              border-radius: 0.375rem;
              font-weight: 500;
              font-size: 14px;
            }
            
            .button:hover {
              background-color: #1f2937;
            }
            
            .access-code {
              background-color: #f3f4f6;
              padding: 12px;
              border-radius: 0.375rem;
              font-family: monospace;
              margin: 16px 0;
              font-size: 16px;
              letter-spacing: 0.05em;
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
              <!-- Logo SVG -->
              <svg width="40" height="40" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3 21.4H49.5026L71.3 0H0V34.8H19.3V21.4Z" fill="#111827" />
                <path d="M52 48.6H21.7974L0 70H71.3V35.2H52V48.6Z" fill="#111827" />
              </svg>
            </div>
            
            <h2>Access Granted</h2>
            
            <p>Your request to access <strong>${projectTitle || projectId}</strong> has been approved.</p>
            
            <p>You can now view the project using the link below or by entering the following access code on the project page:</p>
            
            <div class="access-code">
              ${accessCode}
            </div>
            
            <a href="${projectUrl}" class="button">
              View Project
            </a>
            
            <p style="margin-top: 24px;">This access code is unique to you and should not be shared with others.</p>
            
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
    console.error('Error in approve-access API:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
