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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Access Request</h2>
          <p><strong>Project:</strong> ${projectTitle || projectId}</p>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <div style="margin-top: 30px;">
            <a href="${process.env.SITE_URL}/admin" 
               style="padding: 10px 15px; background-color: #4F46E5; color: white; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              Review in Admin Panel
            </a>
          </div>
        </div>
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
