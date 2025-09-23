'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactEmail from '@/components/emails/ContactEmail';

export async function sendEmailAction(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Render React Email template untuk email penerima
    const emailHtml = await render(ContactEmail({ name, email, subject, message }));

    // Kirim email ke penerima (Anda)
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'ikwansatria3974@gmail.com',
      subject: `Pesan Baru: ${subject}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (err) {
    console.error('Send email error:', err);
    return { success: false, error: 'Failed to send email. Please try again.' };
  }
}
