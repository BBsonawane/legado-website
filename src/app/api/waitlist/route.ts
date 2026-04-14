import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const BEEHIIV_PUB_ID = "Legado";
    const BEEHIIV_API_KEY = "9f12a8cb-f37b-451f-b5ab-da9bd0675a5d";

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'legado_website',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Beehiiv API Error:', data);
      return NextResponse.json({ error: 'Failed to join waitlist. Please try again later.' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 });
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
