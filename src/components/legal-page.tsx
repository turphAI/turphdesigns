import Link from 'next/link'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div style={{ backgroundColor: 'var(--warm-bg)', color: 'var(--warm-text)', minHeight: '100vh' }}>
      <header className="px-6 lg:px-8 h-20 flex items-center">
        <div className="max-w-[760px] w-full mx-auto">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/lockup-horizontal.svg" alt="TurphDesigns" style={{ height: '28px', width: 'auto' }} />
          </Link>
        </div>
      </header>
      <main id="main-content" className="px-6 lg:px-8 pt-12 pb-24">
        <article className="max-w-[760px] mx-auto">
          <h1 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          <p className="font-body text-sm mb-12" style={{ color: 'var(--warm-text-muted)' }}>
            Last updated {updated}
          </p>
          <div className="legal-prose font-body text-base leading-relaxed space-y-5"
               style={{ color: 'var(--warm-text-secondary)' }}>
            {children}
          </div>
          <p className="font-body text-sm mt-16">
            <Link href="/" style={{ color: 'var(--warm-accent)' }}>&larr; Back to turphdesigns.com</Link>
          </p>
        </article>
      </main>
    </div>
  )
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif-display text-2xl font-medium pt-6" style={{ color: 'var(--warm-text)' }}>
      {children}
    </h2>
  )
}
