import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendAccessEmailParams {
  to: string
  product_id: string
  product_name: string
  access_token: string
}

export async function sendAccessEmail({
  to,
  product_id,
  product_name,
  access_token,
}: SendAccessEmailParams): Promise<void> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stackdstudiosai.com'
  const accessUrl = `${siteUrl}/products/${product_id}?token=${access_token}`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your access link is ready</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0C0C0C;padding:32px 40px;">
              <span style="color:#E8C547;font-size:20px;font-weight:700;letter-spacing:0.05em;">Stackd Studios AI</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 32px;">
              <h1 style="margin:0 0 16px;font-size:36px;font-weight:800;color:#0C0C0C;line-height:1.1;">You're in.</h1>
              <p style="margin:0 0 32px;font-size:16px;color:#555555;line-height:1.6;">
                Thanks for purchasing <strong>${product_name}</strong>. Click the button below to access your product — no login required.
              </p>
              <a href="${accessUrl}"
                style="display:inline-block;background:#E8C547;color:#0C0C0C;font-size:16px;font-weight:700;text-decoration:none;padding:16px 32px;border-radius:8px;">
                Access ${product_name}
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #eeeeee;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#fafafa;">
              <p style="margin:0 0 8px;font-size:13px;color:#888888;">
                This link is yours. Bookmark it — you'll need it to return.
              </p>
              <p style="margin:0 0 16px;font-size:13px;color:#888888;">
                <a href="${siteUrl}" style="color:#E8C547;text-decoration:none;">${siteUrl.replace('https://', '')}</a>
              </p>
              <p style="margin:0;font-size:12px;color:#aaaaaa;">
                &copy; 2026 Stackd Studios AI LLC &middot; A Hicks Virtual Solutions Company
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
    from: 'Stackd Studios AI <noreply@stackdstudiosai.com>',
    to,
    subject: `Your access link is ready — ${product_name}`,
    html,
  })

  if (error) {
    throw new Error(`Resend email failed: ${JSON.stringify(error)}`)
  }
}
