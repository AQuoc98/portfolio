import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require("nodemailer");

// Escape HTML entities to prevent XSS in email body
function escapeHtml(unsafe: unknown): string {
  return String(unsafe ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      to: process.env.EMAIL_USERNAME,
      subject: `Portfolio Contact`,
      html: `
        <p>User Name: ${escapeHtml(name)} </p>
        <p>User Email: ${escapeHtml(email)} </p>
        <p>User Message: ${escapeHtml(message)} </p>
        `,
    });

    return NextResponse.json({ message: "Email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
