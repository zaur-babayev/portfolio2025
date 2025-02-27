import { toast } from '@/hooks/use-toast';
import { getProjectBySlug } from '@/data/portfolio/projects';

// Send an email notification when someone requests access
export async function sendAccessRequestEmail(
  projectId: string, 
  requesterEmail: string, 
  message?: string
): Promise<boolean> {
  try {
    const project = getProjectBySlug(projectId);
    
    const response = await fetch('/api/request-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: requesterEmail,
        projectId,
        projectTitle: project?.title,
        message: message || 'No message provided',
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Access request email sent successfully!');
      return true;
    } else {
      console.error('Failed to send access request email:', data.error);
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
    
    const response = await fetch('/api/approve-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: requesterEmail,
        projectId,
        projectTitle: project?.title,
        accessToken,
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Access approval email sent successfully!');
      return true;
    } else {
      console.error('Failed to send access approval email:', data.error);
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
