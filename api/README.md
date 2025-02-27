# Portfolio Email API

This directory contains Vercel Serverless Functions for handling email operations in the portfolio project using Resend.

## Available Endpoints

### 1. `/api/request-access`

Sends an email notification to the admin when someone requests access to a protected project.

**Method:** POST

**Request Body:**
```json
{
  "email": "requester@example.com",
  "projectId": "project-slug",
  "projectTitle": "Project Title",
  "message": "Optional message from requester"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "re_123456789"
}
```

### 2. `/api/approve-access`

Sends an email with an access link to a user when their request is approved.

**Method:** POST

**Request Body:**
```json
{
  "email": "requester@example.com",
  "projectId": "project-slug",
  "projectTitle": "Project Title",
  "accessToken": "access-token-value"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "re_123456789"
}
```

## Environment Variables

Add these to your Vercel project settings:

```
RESEND_API_KEY=re_123456789
EMAIL_FROM=Your Name <onboarding@resend.dev>
ADMIN_EMAIL=your-admin-email@example.com
SITE_URL=https://your-portfolio-url.com
```

## Setting Up Resend

1. Sign up for a free account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add the API key to your Vercel environment variables
4. Verify your domain in Resend (optional but recommended)

## Local Development

For local development, you can use the Vercel CLI to test these endpoints:

```bash
npm i -g vercel
vercel dev
```

This will run your Vercel functions locally.
