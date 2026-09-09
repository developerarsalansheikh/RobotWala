import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: "Robotwala Website <onboarding@resend.dev>",
            to: "arsalansheikh5157@gmail.com",
            replyTo: email,
            subject: `New Inquiry: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}