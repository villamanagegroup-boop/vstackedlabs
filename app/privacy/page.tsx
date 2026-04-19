import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Stackd Studios AI',
  description: 'Privacy Policy for Stackd Studios AI, a Hicks Virtual Solutions LLC company.',
  alternates: { canonical: 'https://www.stackdstudiosai.com/privacy' },
}

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us, including when you purchase a product, book a discovery call, submit a contact form, apply for a role, or sign up for our newsletter.',
      'This may include: your name, email address, business name, phone number, payment information (processed securely by Stripe), and any other information you choose to provide.',
      'We also automatically collect certain technical information when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected via standard server logs and analytics tools.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to: fulfill your orders and deliver digital products, communicate with you about your project or inquiry, send transactional emails related to your purchase, respond to your questions and support requests, send marketing communications (only with your consent), and improve our website and services.',
      'We do not sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    title: '3. Payment Processing',
    body: [
      'All payments are processed by Stripe, Inc. We do not store your credit card number or full payment details on our servers. Stripe\'s privacy policy governs the handling of your payment data and is available at stripe.com/privacy.',
    ],
  },
  {
    title: '4. Email Communications',
    body: [
      'When you purchase a product or submit a form, we may send you transactional emails related to your order or inquiry. If you opt in to our newsletter, we will send you periodic updates about new products, services, and content.',
      'You may unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email or by contacting us directly at Chanel@stackdstudiosai.com.',
    ],
  },
  {
    title: '5. Cookies and Tracking',
    body: [
      'Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.',
      'We may use third-party analytics services (such as Google Analytics or Vercel Analytics) to understand how visitors use our site. These services may collect data in accordance with their own privacy policies.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.',
      'You may request deletion of your personal data at any time by contacting us at Chanel@stackdstudiosai.com.',
    ],
  },
  {
    title: '7. Third-Party Services',
    body: [
      'Our website integrates with third-party services including Stripe (payments), Resend (transactional email), Calendly (scheduling), and Vercel (hosting). Each of these services operates under its own privacy policy, and we encourage you to review them.',
      'We are not responsible for the privacy practices of third-party services linked from our website.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    body: [
      'Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.',
    ],
  },
  {
    title: '9. Security',
    body: [
      'We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '10. Your Rights',
    body: [
      'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, contact us at Chanel@stackdstudiosai.com and we will respond within a reasonable timeframe.',
    ],
  },
  {
    title: '11. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy or how we handle your data, please contact us at:',
      'Stackd Studios AI — Hicks Virtual Solutions LLC\nEmail: Chanel@stackdstudiosai.com\nWebsite: www.stackdstudiosai.com',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar darkHero />
      <main className="bg-[#F6F4EF] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0C0C0C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.12em] mb-4">Legal</p>
            <h1 className="text-[clamp(36px,5vw,64px)] text-white leading-[1.0] mb-4">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last Updated: April 19, 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#555550] text-base leading-relaxed mb-12">
              Stackd Studios AI, operated by Hicks Virtual Solutions LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website at stackdstudiosai.com or use our services.
            </p>

            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-[#E2DED8] pt-8">
                  <h2 className="text-[#0C0C0C] text-lg font-normal mb-4">{section.title}</h2>
                  <div className="flex flex-col gap-3">
                    {section.body.map((para, i) => (
                      <p key={i} className="text-[#555550] text-sm leading-relaxed whitespace-pre-line">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
