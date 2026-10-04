import { contactSchema } from "@/lib/validators";
import { allowRequest } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ ok: false, message: "Invalid request." }, { status: 400 }); }
  if (body && typeof body === "object" && "companyWebsite" in body && body.companyWebsite) return Response.json({ ok: true });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowRequest(ip)) return Response.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
  const result = contactSchema.safeParse(body);
  if (!result.success) return Response.json({ ok: false, message: "Please check the highlighted fields.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  if (result.data.companyWebsite) return Response.json({ ok: true });
  try { await sendContactEmail(result.data); return Response.json({ ok: true }); }
  catch (error) { if (error instanceof Error && error.message !== "EMAIL_NOT_CONFIGURED") console.error("Contact email failed"); return Response.json({ ok: false, message: "Email delivery is not configured. Please use the direct contact options." }, { status: 503 }); }
}
