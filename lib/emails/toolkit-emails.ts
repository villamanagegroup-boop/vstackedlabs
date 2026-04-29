import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = 'Stackd Studios AI <chanel@stackdstudiosai.com>'
const SITE_URL =
  process.env.NEXT_PUBLIC_TOOLKIT_BASE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://stackdstudiosai.com'

function buildAccessUrl(token: string): string {
  return `${SITE_URL.replace(/\/$/, '')}/free/toolkit/access?token=${encodeURIComponent(token)}`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface EmailParams {
  email: string
  first_name: string
  token: string
}

function renderEmail({
  preheader,
  greeting,
  intro,
  ctaLabel,
  accessUrl,
  fineprint,
}: {
  preheader: string
  greeting: string
  intro: string
  ctaLabel: string
  accessUrl: string
  fineprint: string
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(greeting)}</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#F5F0E8;">
  <span style="display:none!important;visibility:hidden;mso-hide:all;font-size:1px;color:#0A0A0A;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0A0A0A;padding:8px 0 24px;">
              <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#F5C518;font-size:18px;font-weight:800;letter-spacing:0.12em;">STACKD STUDIO</div>
              <div style="font-size:12px;color:#888580;margin-top:4px;letter-spacing:0.04em;">AI Implementation for Small Business</div>
            </td>
          </tr>

          <!-- Body card -->
          <tr>
            <td style="background:#111111;border-radius:8px;border:1px solid rgba(245,197,24,0.15);padding:32px;">
              <h1 style="margin:0 0 16px;font-size:28px;line-height:1.15;font-weight:800;color:#F5F0E8;letter-spacing:-0.01em;">${escapeHtml(greeting)}</h1>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.65;color:#F5F0E8;opacity:0.92;">${intro}</p>

              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#F5C518;border-radius:8px;">
                    <a href="${accessUrl}" style="display:inline-block;padding:16px 28px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:#0A0A0A;text-decoration:none;letter-spacing:0.01em;">${escapeHtml(ctaLabel)}</a>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#888580;word-break:break-all;">
                Or paste this link into your browser:<br/>
                <span style="color:#F5C518;">${accessUrl}</span>
              </p>

              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:28px 0;" />

              <p style="margin:0;font-size:12px;line-height:1.6;color:#888580;">${fineprint}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 8px 8px;">
              <p style="margin:0 0 6px;font-size:12px;color:#888580;">© 2026 Stackd Studios AI · A Hicks Virtual Solutions Company</p>
              <p style="margin:0;font-size:12px;color:#888580;">
                You received this because you requested The Small Business AI Toolkit.
                <a href="${SITE_URL}" style="color:#F5C518;text-decoration:none;">Visit Stackd Studios AI</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendWelcomeEmail({ email, first_name, token }: EmailParams): Promise<void> {
  const accessUrl = buildAccessUrl(token)
  const safeName = escapeHtml(first_name)

  const html = renderEmail({
    preheader: `Your AI toolkit is ready, ${first_name}.`,
    greeting: `You're in, ${safeName}.`,
    intro: `Your permanent access link is below. Bookmark it — it's yours forever. Every time we update the toolkit, you'll see the latest version automatically. No re-subscribing. No re-downloading.`,
    ctaLabel: 'Open your AI toolkit →',
    accessUrl,
    fineprint: `This link is uniquely yours. Don't share it — each subscriber gets their own.`,
  })

  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Your AI toolkit is ready, ${first_name} →`,
    html,
  })

  if (error) {
    throw new Error(`Resend (welcome) failed: ${JSON.stringify(error)}`)
  }
}

export async function resendAccessEmail({ email, first_name, token }: EmailParams): Promise<void> {
  const accessUrl = buildAccessUrl(token)
  const safeName = escapeHtml(first_name)

  const html = renderEmail({
    preheader: `Here's your AI toolkit link again, ${first_name}.`,
    greeting: `You already have access.`,
    intro: `Hey ${safeName} — here's your permanent link, same one as before. It still works. Bookmark it and you'll always see the latest toolkit.`,
    ctaLabel: 'Open your AI toolkit →',
    accessUrl,
    fineprint: `This link is uniquely yours. Don't share it — each subscriber gets their own.`,
  })

  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Here's your AI toolkit link again, ${first_name}`,
    html,
  })

  if (error) {
    throw new Error(`Resend (access) failed: ${JSON.stringify(error)}`)
  }
}
