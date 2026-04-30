import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = 'Stackd Studios AI <chanel@stackdstudiosai.com>'
const SITE_URL =
  process.env.NEXT_PUBLIC_LAB_BASE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://stackdstudiosai.com'

const LAB_URL = `${SITE_URL.replace(/\/$/, '')}/lab`

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface WelcomeParams {
  email: string
  first_name: string
  source?: string
}

export async function sendLabWelcomeEmail({
  email,
  first_name,
  source,
}: WelcomeParams): Promise<void> {
  const safeName = escapeHtml(first_name)
  const sourceLine = source
    ? `You signed up from the <strong>${escapeHtml(source)}</strong> demo. `
    : ''

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thanks, ${safeName} — you're on the Demo Lab list</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#F5F0E8;">
  <span style="display:none!important;visibility:hidden;mso-hide:all;font-size:1px;color:#0A0A0A;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">You're on the Demo Lab list, ${escapeHtml(first_name)}.</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:#0A0A0A;padding:8px 0 24px;">
              <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#FFD84D;font-size:18px;font-weight:800;letter-spacing:0.12em;">STACKD STUDIO · DEMO LAB</div>
              <div style="font-size:12px;color:#888580;margin-top:4px;letter-spacing:0.04em;">You're on the list</div>
            </td>
          </tr>

          <tr>
            <td style="background:#111111;border-radius:8px;border:1px solid rgba(255,216,77,0.18);padding:32px;">
              <h1 style="margin:0 0 16px;font-size:30px;line-height:1.1;font-weight:800;color:#F5F0E8;letter-spacing:-0.01em;">Thanks, ${safeName}.</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#F5F0E8;opacity:0.92;">
                ${sourceLine}You're on the list — every time we ship a new demo to the lab, you'll get a heads-up. No spam, no salesy fluff.
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#FFD84D;border-radius:8px;">
                    <a href="${LAB_URL}" style="display:inline-block;padding:14px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:#0A0A0A;text-decoration:none;letter-spacing:0.01em;">Browse the Demo Lab →</a>
                  </td>
                </tr>
              </table>

              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:28px 0;" />

              <p style="margin:0;font-size:13px;line-height:1.65;color:#888580;">
                See a demo you want for your business? Reply to this email — Chanel reads every reply.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 8px 8px;">
              <p style="margin:0 0 6px;font-size:12px;color:#888580;">© 2026 Stackd Studios AI · A Hicks Virtual Solutions Company</p>
              <p style="margin:0;font-size:12px;color:#888580;">
                You received this because you signed up for Demo Lab updates.
                <a href="${SITE_URL}" style="color:#FFD84D;text-decoration:none;">Visit Stackd Studios AI</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Thanks ${first_name} — you're on the Demo Lab list`,
    html,
  })

  if (error) {
    throw new Error(`Resend (lab welcome) failed: ${JSON.stringify(error)}`)
  }
}
