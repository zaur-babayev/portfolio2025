// Simple script to test the email API endpoints
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Test the request-access endpoint
async function testRequestAccess() {
  console.log('Testing request-access endpoint...');
  
  try {
    const response = await fetch('http://localhost:5174/api/request-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.ADMIN_EMAIL, // Send to yourself for testing
        projectId: 'test-project',
        projectTitle: 'Test Project',
        message: 'This is a test request message',
      }),
    });

    const data = await response.json();
    console.log('Response:', data);
    
    if (data.success) {
      console.log('✅ Request access email sent successfully!');
      console.log('Message ID:', data.messageId);
    } else {
      console.log('❌ Failed to send request access email');
      console.log('Error:', data.error);
    }
  } catch (error) {
    console.error('Error testing request-access endpoint:', error);
  }
}

// Test the approve-access endpoint
async function testApproveAccess() {
  console.log('\nTesting approve-access endpoint...');
  
  try {
    const response = await fetch('http://localhost:5174/api/approve-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.ADMIN_EMAIL, // Send to yourself for testing
        projectId: 'test-project',
        projectTitle: 'Test Project',
        accessToken: 'test-token-' + Date.now(),
      }),
    });

    const data = await response.json();
    console.log('Response:', data);
    
    if (data.success) {
      console.log('✅ Approval email sent successfully!');
      console.log('Message ID:', data.messageId);
    } else {
      console.log('❌ Failed to send approval email');
      console.log('Error:', data.error);
    }
  } catch (error) {
    console.error('Error testing approve-access endpoint:', error);
  }
}

// Run the tests
async function runTests() {
  await testRequestAccess();
  await testApproveAccess();
}

runTests();
