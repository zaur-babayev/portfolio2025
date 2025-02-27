import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';
import { getProjectBySlug } from '@/data/portfolio/projects';

// EmailJS configuration
// Replace these with your actual EmailJS service, template, and user IDs
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAIL_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const REQUEST_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REQUEST_TEMPLATE_ID;
const APPROVAL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_APPROVAL_TEMPLATE_ID;

// Initialize EmailJS
export function initEmailJS() {
  emailjs.init(EMAIL_USER_ID);
}

// Send an email notification when someone requests access
export async function sendAccessRequestEmail(
  projectId: string, 
  requesterEmail: string, 
  message?: string
): Promise<boolean> {
  try {
    const project = getProjectBySlug(projectId);
    if (!project) {
      console.error(`Project with ID ${projectId} not found`);
      return false;
    }

    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    if (!adminEmail) {
      console.error('Admin email not configured in environment variables');
      return false;
    }

    const templateParams = {
      admin_email: adminEmail,
      requester_email: requesterEmail,
      project_title: project.title,
      project_id: projectId,
      message: message || 'No message provided',
      request_date: new Date().toLocaleString(),
      admin_url: `${window.location.origin}/admin`
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      REQUEST_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log('Access request email sent successfully!');
      return true;
    } else {
      console.error('Failed to send access request email:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending access request email:', error);
    toast({
      title: 'Email Error',
      description: 'Could not send email notification. Your request was saved locally.',
      variant: 'destructive'
    });
    return false;
  }
}

// Send an email with access token to the requester
export async function sendAccessApprovalEmail(
  projectId: string,
  requesterEmail: string,
  accessToken: string
): Promise<boolean> {
  try {
    const project = getProjectBySlug(projectId);
    if (!project) {
      console.error(`Project with ID ${projectId} not found`);
      return false;
    }

    const accessUrl = `${window.location.origin}/work/${projectId}?access_token=${accessToken}`;
    
    const templateParams = {
      to_email: requesterEmail,
      project_title: project.title,
      access_url: accessUrl,
      expiry_date: new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 // 24 hours from now
      ).toLocaleString(),
      portfolio_owner: 'Zaur Babayev' // You can make this dynamic if needed
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      APPROVAL_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log('Access approval email sent successfully!');
      return true;
    } else {
      console.error('Failed to send access approval email:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending access approval email:', error);
    toast({
      title: 'Email Error',
      description: 'Could not send approval email. The access token was still created.',
      variant: 'destructive'
    });
    return false;
  }
}
