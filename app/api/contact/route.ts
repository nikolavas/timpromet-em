import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Името, е-маилот и пораката се задолжителни полиња.' },
        { status: 400 }
      );
    }

    // LOGGING (In a real Vercel environment, this would show up in your Vercel Logs)
    console.log('New Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
    });

    // INTEGRATION POINT:
    // This is where you would integrate with a service like Resend, SendGrid, or Vercel Postgres.
    // Example with Resend (if you have an API key):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'your-email@example.com',
      subject: `Нова порака од ${name}`,
      text: `Име: ${name}\nЕ-маил: ${email}\nТелефон: ${phone}\n\nПорака:\n${message}`,
    });
    */

    return NextResponse.json(
      { message: 'Пораката е успешно примена!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Се појави грешка при испраќање на пораката. Ве молиме обидете се подоцна.' },
      { status: 500 }
    );
  }
}
