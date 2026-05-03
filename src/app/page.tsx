import { Nav } from '@/components/v2/nav'
import { PageWithParallaxBg, HeroSection } from '@/components/v2/parallax-hero'
import { EmbeddedChat } from '@/components/v2/embedded-chat'
import { ContactLinks, FooterNav } from '@/components/v2/tracked-links'

export default function HomeV2() {
  return (
    <PageWithParallaxBg>
      <div style={{ color: 'var(--warm-text)' }}>
        <Nav />
        <main id="main-content">
        <HeroSection />

        {/* ════════════════════════════════════════════
            CARD SECTION: Philosophy / Intro Statement
            Illustration bleeds through around this card.
            ════════════════════════════════════════════ */}
        <section className="px-6 lg:px-8 pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto rounded-3xl py-16 md:py-20 px-8 md:px-16"
               style={{
                 backgroundColor: 'rgba(250, 248, 245, 0.92)',
                 backdropFilter: 'blur(16px)',
               }}>
            <div className="max-w-[700px] mx-auto text-center">
              <p className="font-serif-display text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-tight v2-fade-up"
                 style={{ color: 'var(--warm-text)', letterSpacing: '-0.01em' }}>
                I believe the best interfaces disappear. They become conversations — natural, intuitive, human.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed mt-8 v2-fade-up-delay-1"
                 style={{ color: 'var(--warm-text-secondary)' }}>
                After a decade building products at Amazon and Fidelity, I design AI experiences
                that feel less like software and more like understanding.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FULL BLOCK: Meet Tom
            Opaque, edge-to-edge — the human behind the brand.
            ════════════════════════════════════════════ */}
        <section className="v2-section px-6 lg:px-8"
                 style={{ backgroundColor: 'var(--warm-bg)' }}>
          <div className="max-w-[1100px] mx-auto">
            <p className="font-serif-display text-sm tracking-widest uppercase mb-4"
               style={{ color: 'var(--warm-accent)', letterSpacing: '0.16em' }}>
              The Person Behind TurphDesigns
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12 md:mb-16"
                style={{ letterSpacing: '-0.02em' }}>
              I&apos;m Tom Murphy.
            </h2>

            <div className="rounded-2xl overflow-hidden"
                 style={{ border: '1px solid var(--warm-border)' }}>
              <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
                {/* Left — identity panel */}
                <div className="p-10 md:p-12 flex flex-col justify-between"
                     style={{ backgroundColor: '#8F702B' }}>
                  <div>
                    <span className="font-serif-display text-2xl md:text-3xl font-medium block mb-2"
                          style={{ color: '#FFFDF7' }}>
                      Tom Murphy
                    </span>
                    <span className="font-serif-display text-sm tracking-widest uppercase"
                          style={{ color: '#FFFDF7', letterSpacing: '0.16em' }}>
                      TurphDesigns
                    </span>
                  </div>
                  <div className="mt-10 pt-8"
                       style={{ borderTop: '1px solid rgba(255, 253, 247, 0.2)' }}>
                    <p className="font-serif-display text-sm leading-relaxed"
                       style={{ color: '#FFFDF7' }}>
                      Director of UX Design
                    </p>
                  </div>
                </div>

                {/* Right — bio content */}
                <div className="p-10 md:p-12"
                     style={{ backgroundColor: 'var(--warm-surface)' }}>
                  <p className="font-body text-base md:text-lg leading-relaxed mb-6"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    I&apos;ve been the first designer in the room at a startup that became a
                    billion-dollar program, and I&apos;ve led design for products that millions
                    of people rely on to manage their financial lives. The through line is
                    always the same: make the complex feel simple, and the simple feel human.
                  </p>
                  <p className="font-body text-base md:text-lg leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    TurphDesigns is where that experience lives outside the walls of any
                    single company — through consulting, teaching, and building what&apos;s next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FULL BLOCK: Work / Experience
            Opaque, edge-to-edge — covers the illustration.
            ════════════════════════════════════════════ */}
        <section id="work" className="v2-section px-6 lg:px-8"
                 style={{ backgroundColor: 'var(--warm-bg)' }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-16 md:mb-24">
              <p className="font-serif-display text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)', letterSpacing: '0.16em' }}>
                Where I&apos;ve Built
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight"
                  style={{ letterSpacing: '-0.02em' }}>
                Products that scaled from{' '}<br className="hidden md:block" />
                zero to hundreds of millions.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Amazon Card */}
              <div className="v2-card-hover rounded-2xl p-10 md:p-12"
                   style={{
                     backgroundColor: 'var(--warm-surface)',
                     border: '1px solid var(--warm-border)',
                   }}>
                <p className="font-serif-display text-xs tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}>
                  Amazon
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                    style={{ letterSpacing: '-0.02em' }}>
                  ProductAds
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  Sole UX designer from day one. I shaped every customer-facing component and
                  merchant tool as the team grew from fewer than 20 people to over 200 — and
                  revenue went from nothing to $250M annually. That foundation became a $1B+ program.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif-display text-sm"
                     style={{ color: 'var(--warm-text-muted)' }}>
                  <span>$0 → $250M revenue</span>
                  <span>20 → 200+ team</span>
                  <span>Foundation for $1B+</span>
                </div>
              </div>

              {/* Fidelity Card */}
              <div className="v2-card-hover rounded-2xl p-10 md:p-12"
                   style={{
                     backgroundColor: 'var(--warm-surface)',
                     border: '1px solid var(--warm-border)',
                   }}>
                <p className="font-serif-display text-xs tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}>
                  Fidelity Investments
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                    style={{ letterSpacing: '-0.02em' }}>
                  Personal Investing
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  Director of UX Design, working at the intersection of AI and personal finance.
                  Leading the design of transaction experiences, money movement, account opening,
                  and the AI-powered Fidelity Assistant that helps millions navigate their financial lives.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif-display text-sm"
                     style={{ color: 'var(--warm-text-muted)' }}>
                  <span>AI-powered interfaces</span>
                  <span>Regulated environment</span>
                  <span>Complex financial data</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CARD SECTION: AI Chat
            Illustration bleeds through. Card floats.
            ════════════════════════════════════════════ */}
        <section id="approach" className="px-6 lg:px-8 pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto rounded-3xl py-16 md:py-20 px-8 md:px-16"
               style={{
                 backgroundColor: 'rgba(255, 255, 255, 0.92)',
                 backdropFilter: 'blur(16px)',
               }}>
            <div className="max-w-[700px] mx-auto text-center">
              <p className="font-serif-display text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)', letterSpacing: '0.16em', fontWeight: 500 }}>
                Explore My Thinking
              </p>
              <h2 className="font-serif-display text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6"
                  style={{ letterSpacing: '-0.02em' }}>
                Curious about my approach?<br />
                Ask me anything.
              </h2>
              <p className="font-body text-base leading-relaxed mb-12"
                 style={{ color: 'var(--warm-text-secondary)' }}>
                I&apos;ve built an AI assistant trained on my experience, methodology, and perspective.
                It&apos;s a different way to explore what I do — through conversation, not slides.
              </p>
              {/* Live chat component */}
              <EmbeddedChat />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FULL BLOCK: Contact
            Opaque, edge-to-edge.
            ════════════════════════════════════════════ */}
        <section id="contact" className="v2-section px-6 lg:px-8"
                 style={{ backgroundColor: 'var(--warm-bg)' }}>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-serif-display text-4xl md:text-6xl font-medium tracking-tight mb-8"
                style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s talk.
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-12"
               style={{ color: 'var(--warm-text-secondary)' }}>
              Whether you&apos;re exploring conversational AI for your product, navigating UX in financial
              services, or scaling a design team — I&apos;d love to hear what you&apos;re working on.
            </p>
            <ContactLinks />
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CARD SECTION: Vision Quote
            Illustration bleeds through. Dark card floats.
            ════════════════════════════════════════════ */}
        <section className="px-6 lg:px-8 pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="max-w-[1000px] mx-auto rounded-3xl py-16 md:py-20 px-8 md:px-16"
               style={{
                 backgroundColor: 'rgba(90, 45, 30, 0.92)',
                 backdropFilter: 'blur(16px)',
               }}>
            <div className="max-w-[800px] mx-auto text-center">
              <blockquote className="font-serif-display text-2xl md:text-4xl lg:text-5xl font-normal leading-snug tracking-tight"
                          style={{ color: '#FAF8F5', letterSpacing: '-0.01em' }}>
                &ldquo;The shift to conversational AI is as fundamental as the move from
                command-line to graphical interfaces. The interface becomes a
                conversation — natural, adaptive, human.&rdquo;
              </blockquote>
              <div className="mt-10 font-serif-display text-sm tracking-widest uppercase"
                   style={{ color: 'rgba(250, 248, 245, 0.65)', letterSpacing: '0.16em' }}>
                Turph · Director of UX Design
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FULL BLOCK: Approach
            Opaque, edge-to-edge.
            ════════════════════════════════════════════ */}
        <section id="about" className="v2-section px-6 lg:px-8"
                 style={{ backgroundColor: 'var(--warm-bg)' }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-16 md:mb-24">
              <p className="font-serif-display text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)', letterSpacing: '0.16em', fontWeight: 500 }}>
                How I Think
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl"
                  style={{ letterSpacing: '-0.02em' }}>
                Design that starts with{' '}<br className="hidden md:block" />
                understanding, not assumptions.
              </h2>
            </div>

            <div className="space-y-20 md:space-y-28">
              {/* Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div>
                  <span className="font-serif-display text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}>
                    01
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                      style={{ letterSpacing: '-0.02em' }}>
                    Conversation-first design
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Traditional interfaces force users to learn your system. I design experiences where
                    the system learns the user — adapting to their intent through natural conversation
                    rather than rigid navigation patterns and dense information architectures.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden"
                     style={{ minHeight: '240px' }}>
                  <img
                    src="/approach-2.png"
                    alt="Illustration of conversation flows replacing menu hierarchies"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '240px' }}
                  />
                </div>
              </div>

              {/* Item 2 — reversed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div className="md:order-2">
                  <span className="font-serif-display text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}>
                    02
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                      style={{ letterSpacing: '-0.02em' }}>
                    Complexity made human
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Financial data is inherently complex. The answer isn&apos;t to simplify it — it&apos;s
                    to present it intelligently. Progressive disclosure, context-aware visualization,
                    and narrative data presentation that tells stories with numbers rather than
                    drowning users in charts.
                  </p>
                </div>
                <div className="md:order-1 rounded-2xl overflow-hidden"
                     style={{ minHeight: '240px' }}>
                  <img
                    src="/approach-1.png"
                    alt="Data visualization transforming from dense charts to clear narrative"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '240px' }}
                  />
                </div>
              </div>

              {/* Item 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div>
                  <span className="font-serif-display text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}>
                    03
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                      style={{ letterSpacing: '-0.02em' }}>
                    Trust through transparency
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    In regulated environments, innovation needs to earn trust. I balance cutting-edge
                    AI capabilities with the security, privacy, and compliance requirements of
                    financial services — building experiences that are both bold and responsible.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden"
                     style={{ minHeight: '240px' }}>
                  <img
                    src="/approach-3.png"
                    alt="Security and openness coexisting in regulated design"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '240px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        </main>

        {/* ════════════════════════════════════════════
            Footer
            ════════════════════════════════════════════ */}
        <footer className="px-6 lg:px-8 py-12"
                style={{
                  backgroundColor: 'var(--warm-dark)',
                  color: '#A39E98',
                }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo/lockup-horizontal-inverse.svg"
                  alt="TurphDesigns"
                  className="block mb-3"
                  style={{ height: '26px', width: 'auto' }}
                />
                <p className="font-body text-sm" style={{ color: 'rgba(250,248,245,0.55)' }}>
                  Designing the future of human-AI conversation.
                </p>
              </div>
              <FooterNav />
            </div>
            <div className="mt-12 pt-8 font-serif-display text-xs"
                 style={{ borderTop: '1px solid var(--warm-dark-surface)' }}>
              &copy; {new Date().getFullYear()} TurphDesigns. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </PageWithParallaxBg>
  )
}
