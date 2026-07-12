import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, companyName, mobile, email, message } = await request.json();

    if (!firstName || !lastName || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
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
          name: "Acriotech Chat System",
          email: senderEmail
        },
        to: [
          {
            email: senderEmail,
            name: "Sales & Support Team"
          }
        ],
        subject: `New Support/Sales Inquiry from ${firstName} ${lastName}`,
        htmlContent: `
          <html>
            <body>
              <h2 style="color: #0F172A;">New Inquiry Received</h2>
              <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; border: 1px solid #E2E8F0;">
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <h3 style="margin-top: 20px;">Message:</h3>
                <p style="background: #FFFFFF; padding: 15px; border-radius: 4px; border: 1px solid #E2E8F0; white-space: pre-wrap;">${message}</p>
              </div>
            </body>
          </html>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return NextResponse.json(
        { error: 'Failed to send inquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });

  } catch (error) {
    console.error("Error processing support inquiry:", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
