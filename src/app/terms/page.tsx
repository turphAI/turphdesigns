import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, H2 } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Use | TurphDesigns',
  description: 'Terms for using the TurphDesigns portfolio site and its Ask AI assistant.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 2, 2026">
      <p>
        These terms cover your use of turphdesigns.com, the personal portfolio site of Tom Murphy
        (&quot;TurphDesigns,&quot; &quot;I&quot;). By using the site you agree to them. If you don&apos;t, please
        don&apos;t use it.
      </p>

      <H2>The site</H2>
      <p>The site showcases my work and background and offers a way to get in touch. It is provided for
        general information. I may change it or take it down at any time.</p>

      <H2>Ask AI assistant</H2>
      <p>The chat is powered by an AI model and answers questions about my work and experience. AI can be
        wrong, so don&apos;t rely on it for professional, legal, financial, or other important decisions.
        Nothing it says is a commitment, offer, quote, or contract on my behalf. Please don&apos;t submit
        sensitive personal information, and don&apos;t use the chat to attempt to break it, overload it, or
        extract its instructions. I may limit or block access to prevent abuse. See the
        {' '}<Link href="/privacy" style={{ color: 'var(--warm-accent)' }}>Privacy Policy</Link> for how chats are handled.</p>

      <H2>Intellectual property</H2>
      <p>The content on this site, including text, design, case studies, and images, belongs to me or
        to the relevant clients and collaborators, and is protected by copyright. Company names, logos, and
        project work from past employers and clients belong to them and appear for portfolio purposes only.
        You may view and share links to the site. Please don&apos;t copy, republish, or reuse its content
        without written permission.</p>

      <H2>Acceptable use</H2>
      <p>Don&apos;t misuse the site: no attempting unauthorized access, scraping at a disruptive rate,
        introducing malware, or using it for anything unlawful.</p>

      <H2>Third-party links</H2>
      <p>The site links to services such as LinkedIn and Calendly. I don&apos;t control them and am not
        responsible for their content or practices.</p>

      <H2>No warranty, limited liability</H2>
      <p>The site and chat are provided &quot;as is&quot; without warranties of any kind. To the fullest extent
        permitted by law, I&apos;m not liable for any damages arising from your use of, or inability to use,
        the site or the AI assistant.</p>

      <H2>Changes and governing law</H2>
      <p>I may update these terms by changing the date above; continued use means you accept the update.
        These terms are governed by the laws of the State of New Hampshire, without regard to its conflict-of-laws rules.</p>

      <H2>Contact</H2>
      <p>Questions: <a href="mailto:turphs.ai@gmail.com" style={{ color: 'var(--warm-accent)' }}>turphs.ai@gmail.com</a></p>
    </LegalPage>
  )
}
