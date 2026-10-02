import type { Metadata } from 'next'
import { LegalPage, H2 } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | TurphDesigns',
  description: 'How TurphDesigns handles analytics, the Ask AI chat, and contact information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2, 2026">
      <p>
        This is the personal portfolio site of Tom Murphy, operating as TurphDesigns. I collect as little
        as I can to run it. This page explains what is collected, why, and what you can do about it.
      </p>

      <H2>What I collect</H2>
      <p><strong>Ask AI chat.</strong> When you use the chat, the messages you type are sent to my server and
        on to Anthropic&apos;s Claude API to generate a reply. The conversation is stored for up to 7 days
        so the assistant can keep context, then it expires automatically. I may also receive an email alert
        about a conversation (for example, a business inquiry) that includes a short summary and excerpts
        of the most recent messages. Please don&apos;t enter sensitive personal information, such as financial
        account numbers, passwords, or health details, into the chat.</p>
      <p><strong>Contact.</strong> There is no contact form. If you email me or message me on LinkedIn, I receive
        whatever you send, and I use it only to reply. If you book time through Calendly, Calendly collects
        the details you enter under its own privacy policy.</p>
      <p><strong>Analytics.</strong> The site uses Google Analytics and Vercel Web Analytics to count visits
        and see which pages and links get used. These services may set cookies or use similar identifiers
        and collect technical data such as your approximate location, browser, device, and pages viewed. I
        don&apos;t use this data to identify you personally.</p>
      <p><strong>Hosting logs.</strong> My host, Vercel, keeps standard server logs (such as IP address and
        request details) for security and operations.</p>

      <H2>How I use it</H2>
      <p>To run and improve the site, to answer your questions and messages, and to keep things secure. I
        don&apos;t sell your information, and I don&apos;t use it for advertising.</p>

      <H2>Who else handles it</H2>
      <p>These services process data on my behalf or on their own terms:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Anthropic (AI responses in the chat)</li>
        <li>Vercel (hosting, chat session storage, web analytics)</li>
        <li>Google (Analytics)</li>
        <li>Calendly (scheduling, only if you use it)</li>
        <li>LinkedIn (only if you follow that link)</li>
      </ul>
      <p>I may also disclose information if required by law.</p>

      <H2>Your choices</H2>
      <p>You can block cookies or use a tracking blocker, and the site will still work. You can opt out of
        Google Analytics with Google&apos;s browser add-on. To ask what I hold about you, or to have a chat
        conversation or an email thread deleted, write to me at the address below. Chat sessions are
        deleted automatically after 7 days regardless.</p>

      <H2>Children</H2>
      <p>This site is not directed at children under 13, and I don&apos;t knowingly collect their information.</p>

      <H2>Changes</H2>
      <p>If I change this policy, I&apos;ll update the date at the top.</p>

      <H2>Contact</H2>
      <p>Questions: <a href="mailto:turphs.ai@gmail.com" style={{ color: 'var(--warm-accent)' }}>turphs.ai@gmail.com</a></p>
    </LegalPage>
  )
}
