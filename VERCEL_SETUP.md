# Vercel Setup Guide for Portfolio Email System

This guide explains how to set up the email notification system for your portfolio project using Vercel and Resend.

## Step 1: Deploy Your Project to Vercel

If you haven't already deployed your project to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your Git repository
5. Configure the project settings and deploy

## Step 2: Set Up Resend

1. Sign up for a free account at [Resend](https://resend.com)
2. Verify your email address
3. Go to the API Keys section in the dashboard
4. Create a new API key and copy it

## Step 3: Add Environment Variables to Vercel

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following environment variables:

   ```
   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=Your Name <onboarding@resend.dev>
   ADMIN_EMAIL=your-email@example.com
   SITE_URL=https://your-portfolio-domain.com
   ```

4. Click "Save"
5. Redeploy your project for the changes to take effect

## Step 4: Verify Your Domain (Optional but Recommended)

For better email deliverability:

1. In the Resend dashboard, go to "Domains"
2. Add your domain
3. Follow the DNS setup instructions
4. Once verified, update your `EMAIL_FROM` environment variable to use your domain

## Step 5: Test the Email System

1. Visit your portfolio site
2. Try to access a protected project
3. Request access using the form
4. Check your admin email for the notification
5. Go to the admin panel and approve the request
6. Verify that the requester receives the approval email

## Troubleshooting

If emails are not being sent:

1. Check the Vercel function logs in your project dashboard
2. Verify that your environment variables are set correctly
3. Make sure your Resend API key is valid
4. Check the Resend dashboard for any sending issues

## Limitations and Quotas

- Resend's free tier includes 3,000 emails per month and 100 emails per day
- For higher volume needs, consider upgrading to a paid plan

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Vercel Serverless Functions Documentation](https://vercel.com/docs/functions)
- [Vercel Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)
