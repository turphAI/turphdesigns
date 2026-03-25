import { Nav } from '@/components/v2/nav'
import { PageWithParallaxBg, HeroSection } from '@/components/v2/parallax-hero'
import { EmbeddedChat } from '@/components/v2/embedded-chat'
import { ContactLinks, FooterNav } from '@/components/v2/tracked-links'

export default function HomeV2() {
  return (
    <PageWithParallaxBg>
      <div className="font-body" style={{ color: 'var(--warm-text)' }}>
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
                 style={{ color: 'var(--warm-text)' }}>
                People don&apos;t want to learn your interface.
                They want their interface to learn them.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed mt-8 v2-fade-up-delay-1"
                 style={{ color: 'var(--warm-text-secondary)' }}>
                I&apos;ve spent 25 years designing products that close the gap between
                what technology can do and what people actually need.
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
            <p className="font-body text-sm tracking-widest uppercase mb-4"
               style={{ color: 'var(--warm-accent)' }}>
              The Person Behind TurphDesigns
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12 md:mb-16">
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
                    <span className="font-body text-sm tracking-widest uppercase"
                          style={{ color: '#FFFDF7' }}>
                      TurphDesigns
                    </span>
                  </div>
                  <div className="mt-10 pt-8"
                       style={{ borderTop: '1px solid rgba(255, 253, 247, 0.2)' }}>
                    <p className="font-body text-sm leading-relaxed"
                       style={{ color: '#FFFDF7' }}>
                      Product Designer
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
                    always the same: make the complex feel simple, and make the simple feel human.
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
              <p className="font-body text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)' }}>
                Where I&apos;ve Built
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Two chapters, one thread:{' '}<br className="hidden md:block" />
                designing at the edge of what&apos;s possible.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Amazon Card */}
              <div className="v2-card-hover rounded-2xl p-10 md:p-12"
                   style={{
                     backgroundColor: 'var(--warm-surface)',
                     border: '1px solid var(--warm-border)',
                   }}>
                <p className="font-body text-sm tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)' }}>
                  Amazon
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                  ProductAds
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  I was the only designer on a team of fewer than 20, building something no one
                  had built before. Every merchant dashboard, every customer touchpoint, every
                  pixel of the ad platform came through my hands. The team grew to 200+. Revenue
                  went from zero to $250M. That foundation became a billion-dollar business.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm"
                     style={{ color: 'var(--warm-text-muted)' }}>
                  <span>Sole designer → 200+ org</span>
                  <span>$0 → $250M annual revenue</span>
                  <span>Now a $1B+ program</span>
                </div>
              </div>

              {/* Fidelity Card */}
              <div className="v2-card-hover rounded-2xl p-10 md:p-12"
                   style={{
                     backgroundColor: 'var(--warm-surface)',
                     border: '1px solid var(--warm-border)',
                   }}>
                <p className="font-body text-sm tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)' }}>
                  Fidelity Investments
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                  Personal Investing
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  People trust Fidelity with their life savings. That trust shapes every design
                  decision I make — from how someone opens their first account to how an AI
                  assistant helps them understand a market swing. The stakes are real, the regulations
                  are strict, and the opportunity to genuinely help people is enormous.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm"
                     style={{ color: 'var(--warm-text-muted)' }}>
                  <span>Millions of daily users</span>
                  <span>AI + financial trust</span>
                  <span>High-stakes design</span>
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
              <p className="font-body text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)' }}>
                Go Deeper
              </p>
              <h2 className="font-serif-display text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">
                Don&apos;t take my word for it.<br />
                Ask me yourself.
              </h2>
              <p className="font-body text-base leading-relaxed mb-12"
                 style={{ color: 'var(--warm-text-secondary)' }}>
                This AI assistant knows my work, my thinking, and my experience. Ask it anything —
                about a project, a point of view, or whether I&apos;m the right fit for yours.
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
            <h2 className="font-serif-display text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Let&apos;s talk.
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-12"
               style={{ color: 'var(--warm-text-secondary)' }}>
              If anything here resonated — or if you&apos;re working on something where
              this kind of thinking could help — I&apos;d genuinely enjoy the conversation.
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
                          style={{ color: '#FAF8F5' }}>
                &ldquo;We spent decades teaching people how to use computers.
                The next era is teaching computers how to understand people.&rdquo;
              </blockquote>
              <div className="mt-10 font-body text-sm tracking-widest uppercase"
                   style={{ color: '#C4BFB8' }}>
                Tom Murphy
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
              <p className="font-body text-sm tracking-widest uppercase mb-4"
                 style={{ color: 'var(--warm-accent)' }}>
                How I Work
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
                Three principles I bring{' '}<br className="hidden md:block" />
                to every problem.
              </h2>
            </div>

            <div className="space-y-20 md:space-y-28">
              {/* Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div>
                  <span className="font-body text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)' }}>
                    01
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                    Start with the outcome, not the screen
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Before I sketch a single wireframe, I ask: what does this person actually need to
                    accomplish? Most interfaces are organized around what the system can do. I organize
                    around what the user is trying to do — and then figure out the shortest path to get
                    them there.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden"
                     style={{ minHeight: '240px' }}>
                  <img
                    src="/approach-1.png"
                    alt="Illustration of conversation flows replacing menu hierarchies"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '240px' }}
                  />
                </div>
              </div>

              {/* Item 2 — reversed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div className="md:order-2">
                  <span className="font-body text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)' }}>
                    02
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                    Earn trust at every step
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    When someone is moving money, reviewing their portfolio, or talking to an AI about
                    their retirement, they need to feel confident — not confused. I design for clarity
                    in high-stakes moments: showing the right information at the right time, and never
                    hiding what matters behind a clever interaction.
                  </p>
                </div>
                <div className="md:order-1 rounded-2xl overflow-hidden"
                     style={{ minHeight: '240px' }}>
                  <img
                    src="/approach-2.png"
                    alt="Data visualization transforming from dense charts to clear narrative"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '240px' }}
                  />
                </div>
              </div>

              {/* Item 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div>
                  <span className="font-body text-sm tracking-widest uppercase block mb-4"
                        style={{ color: 'var(--warm-text-muted)' }}>
                    03
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                    Ship it, then sharpen it
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Great design isn&apos;t precious — it&apos;s practical. I believe in getting thoughtful
                    work into people&apos;s hands quickly, learning from how they actually use it, and
                    iterating with real signal instead of assumptions. The best products I&apos;ve built
                    were shaped as much by their users as by their designers.
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
                <span className="font-serif-display text-xl font-medium block mb-2"
                      style={{ color: '#FAF8F5' }}>
                  TurphDesigns.
                </span>
                <p className="font-body text-sm" style={{ color: '#A39E98' }}>
                  Making the complex feel simple, and the simple feel human.
                </p>
              </div>
              <FooterNav />
            </div>
            <div className="mt-12 pt-8 font-body text-xs"
                 style={{ borderTop: '1px solid var(--warm-dark-surface)' }}>
              &copy; {new Date().getFullYear()} TurphDesigns. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </PageWithParallaxBg>
  )
}
