// Vercel Serverless Function for validating passwords
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password, type } = req.body;

    // Validate required fields
    if (!password || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check password based on type
    if (type === 'admin') {
      // Validate admin password
      const isValid = password === process.env.ADMIN_PASSWORD;
      return res.status(200).json({ valid: isValid });
    } else if (type === 'project') {
      // Validate project password
      const isValid = password === process.env.PROJECT_PASSWORD;
      return res.status(200).json({ valid: isValid });
    } else {
      return res.status(400).json({ error: 'Invalid password type' });
    }
  } catch (error) {
    console.error('Error in validate-password API:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
