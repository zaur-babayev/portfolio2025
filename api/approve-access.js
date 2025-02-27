// Vercel Serverless Function for sending access approval emails
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, projectId, projectTitle, accessToken } = req.body;

    // Validate required fields
    if (!email || !projectId || !accessToken) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const accessUrl = `${process.env.SITE_URL}/work/${projectId}?access_token=${accessToken}`;
    const expiryDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleString();

    // Send email to requester
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Portfolio Access <onboarding@resend.dev>',
      to: email,
      subject: `Access Granted: ${projectTitle || projectId}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Access Granted</h2>
          <p>You've been granted access to <strong>${projectTitle || projectId}</strong>.</p>
          <p>Click the button below to view the project:</p>
          <div style="margin: 30px 0;">
            <a href="${accessUrl}" 
               style="padding: 10px 15px; background-color: #4F46E5; color: white; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              View Project
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">This access link will expire on ${expiryDate}.</p>
          <p style="color: #666; font-size: 14px;">If the button doesn't work, copy and paste this URL into your browser:</p>
          <p style="word-break: break-all; font-size: 14px;">${accessUrl}</p>
        </div>
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
