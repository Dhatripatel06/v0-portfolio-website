import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  // Configure transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    let errorMsg = "Unknown error"
    if (error instanceof Error) errorMsg = error.message
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 })
  }
}
