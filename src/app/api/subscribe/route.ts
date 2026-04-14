import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Missing GOOGLE_SCRIPT_URL");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${encodeURIComponent(email)}`,
    });

    let data;
    const textData = await response.text();
    try {
      data = JSON.parse(textData);
    } catch (e) {
      data = { message: textData };
    }

    if (!response.ok) {
      console.error('Google Apps Script Error:', data);
      return NextResponse.json({ error: data?.message || textData }, { status: response.status });
    }

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 });
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
