import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("Missing BREVO_API_KEY in environment variables.");
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Call Brevo API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true, // Update if already exists
        // listIds: [1] // You can add listIds here if you have a specific list
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Log the raw error for developers
      console.error("Brevo API Error:", data);
      
      // Return a generic, user-friendly message so raw technical errors (like IP blocks) don't show on the frontend
      return NextResponse.json(
        { error: 'Our subscription service is temporarily unavailable. Please try again later.' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
