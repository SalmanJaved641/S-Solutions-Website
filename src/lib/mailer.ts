import { Resend } from "resend";
import type { ContactInput } from "./validators";

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "mibusiness641@gmail.com";
  if (!apiKey || !from) throw new Error("EMAIL_NOT_CONFIGURED");
  const resend = new Resend(apiKey);
  const safe = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `New S Solutions enquiry — ${input.service}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || "Not provided"}\nService: ${input.service}\n\n${input.message}`,
    html: `<h2>New project enquiry</h2><p><strong>Name:</strong> ${safe(input.name)}</p><p><strong>Email:</strong> ${safe(input.email)}</p><p><strong>Phone:</strong> ${safe(input.phone || "Not provided")}</p><p><strong>Service:</strong> ${safe(input.service)}</p><p><strong>Project details:</strong></p><p>${safe(input.message).replace(/\n/g, "<br>")}</p>`,
  });
  if (error) throw new Error(error.message);
}
