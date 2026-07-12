import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, countryCode, mobile, applyAs, role } = await request.json();

    if (!firstName || !lastName || !email || !mobile) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const hrEmail = process.env.HR_EMAIL || 'hr@acriotech.com';
    const senderEmail = process.env.SENDER_EMAIL || 'sales@acriotech.com';

    if (!apiKey) {
      console.error("Missing BREVO_API_KEY in environment variables.");
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Call Brevo API to send transactional email
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Acriotech Careers",
          email: senderEmail
        },
        to: [
          {
            email: hrEmail,
            name: "HR Team"
          }
        ],
        subject: `New Application: ${applyAs} - ${role}`,
        htmlContent: `
          <h2>New Job Application Received</h2>
          <p><strong>Position:</strong> ${role} (${applyAs})</p>
          <hr />
          <h3>Applicant Details</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile:</strong> ${countryCode || '+1'} ${mobile}</li>
          </ul>
        `
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API Error:", data);
      
      return NextResponse.json(
        { error: 'Our application service is temporarily unavailable. Please try again later.' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
