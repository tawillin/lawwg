import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  practiceArea: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "info@lawwg.com";

    if (!apiKey) {
      // In development without Resend configured, log and succeed
      console.log("Contact form submission (no Resend key):", data);
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Website Contact Form <noreply@lawwg.com>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New inquiry: ${data.practiceArea} — ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone ?? "Not provided"}
Practice Area: ${data.practiceArea}

Message:
${data.message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
