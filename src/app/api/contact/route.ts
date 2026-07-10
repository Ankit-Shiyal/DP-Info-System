import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; }
            .header { background: #0F172A; color: white; padding: 15px 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px; }
            h2 { margin: 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; font-size: 14px; }
            .value { margin-top: 5px; font-size: 16px; }
            .message-box { background: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #e0e0e0; margin-top: 5px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Message</div>
              <div class="value message-box">${message}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        sender: {
          name: 'Acriotech',
          email: 'sales@acriotech.com'
        },
        to: [
          {
            email: 'info@acriotech.com',
            name: 'Acriotech Info'
          }
        ],
        replyTo: {
          email: email,
          name: `${firstName} ${lastName}`
        },
        subject: `New Lead: ${firstName} ${lastName} from ${company || 'Website'}`,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error (Lead):', errorData);
      return NextResponse.json({ error: 'Failed to send lead email via Brevo' }, { status: 500 });
    }

    // --- AUTO-RESPONDER ---
    // Send a thank you email directly to the user who filled out the form
    const autoResponderHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0F172A;">Thank you for contacting Acriotech!</h2>
          <p>Hi ${firstName},</p>
          <p>We've received your message and our team will get back to you shortly (typically within 2 hours).</p>
          <p>For your records, here is a copy of what you submitted:</p>
          <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0; white-space: pre-wrap;">${message}</blockquote>
          <p>Best regards,<br/><strong>The Acriotech Team</strong></p>
        </body>
      </html>
    `;

    const autoResponderResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        sender: {
          name: 'Acriotech',
          email: 'sales@acriotech.com'
        },
        to: [
          {
            email: email,
            name: `${firstName} ${lastName}`
          }
        ],
        subject: `Thank you for contacting Acriotech, ${firstName}!`,
        htmlContent: autoResponderHtml
      })
    });

    if (!autoResponderResponse.ok) {
      console.error('Failed to send auto-responder. Not failing the whole request.');
      // We don't return 500 here because the main lead email was already sent successfully
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
