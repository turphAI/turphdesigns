import { Nav } from '@/components/v2/nav'
import { PageWithParallaxBg, HeroSection } from '@/components/v2/parallax-hero'
import { EmbeddedChat } from '@/components/v2/embedded-chat'
import { ArrowUpRight } from 'lucide-react'

export default function HomeV2() {
  return (
    <PageWithParallaxBg>
      <div className="font-body" style={{ color: 'var(--warm-text)' }}>
        <Nav />
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
                I believe the best interfaces disappear. They become conversations —
                natural, intuitive, human.
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
                      Product Designer<br />
                      25+ Years of Experience
                    </p>
                  </div>
                </div>

                {/* Right — bio content */}
                <div className="p-10 md:p-12"
                     style={{ backgroundColor: 'var(--warm-surface)' }}>
                  <p className="font-body text-base md:text-lg leading-relaxed mb-6"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    For over 25 years I&apos;ve been designing products that put people first —
                    from founding the UX practice at Amazon ProductAds to directing AI-powered
                    experiences at Fidelity Investments.
                  </p>
                  <p className="font-body text-base md:text-lg leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    TurphDesigns is where I share that thinking — through consulting, conversation,
                    and the belief that the best interfaces don&apos;t feel like interfaces at all.
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
                <p className="font-body text-sm tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)' }}>
                  Amazon
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                  ProductAds
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  Sole UX designer from day one. I shaped every customer-facing component and
                  merchant tool as the team grew from fewer than 20 people to over 200 — and
                  revenue went from nothing to $250M annually. That foundation became a $1B+ program.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm"
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
                <p className="font-body text-sm tracking-widest uppercase mb-6"
                   style={{ color: 'var(--warm-text-muted)' }}>
                  Fidelity Investments
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                  Personal Investing
                </h3>
                <p className="font-body text-base leading-relaxed mb-8"
                   style={{ color: 'var(--warm-text-secondary)' }}>
                  Director of UX Design, working at the intersection of AI and personal finance.
                  Leading the design of transaction experiences, money movement, account opening,
                  and the AI-powered Fidelity Assistant that helps millions navigate their financial lives.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm"
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
                &ldquo;The shift to conversational AI is as fundamental as the move from
                command-line to graphical interfaces. The interface becomes a
                conversation — natural, adaptive, human.&rdquo;
              </blockquote>
              <div className="mt-10 font-body text-sm tracking-widest uppercase"
                   style={{ color: '#C4BFB8' }}>
                Turph &middot; Director of UX Design
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
                How I Think
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
                Design that starts with{' '}<br className="hidden md:block" />
                understanding, not assumptions.
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
                    Conversation-first design
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Traditional interfaces force users to learn your system. I design experiences where
                    the system learns the user — adapting to their intent through natural conversation rather
                    than rigid navigation patterns and dense information architectures.
                  </p>
                </div>
                <div className="rounded-2xl p-10 md:p-12"
                     style={{
                       backgroundColor: 'var(--warm-accent-light)',
                       minHeight: '240px',
                     }}>
                  <p className="font-body text-sm italic" style={{ color: 'var(--warm-accent-dark)' }}>
                    Visual: Illustration of conversation flows replacing menu hierarchies
                  </p>
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
                    Complexity made human
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    Financial data is inherently complex. The answer isn&apos;t to simplify it — it&apos;s to
                    present it intelligently. Progressive disclosure, context-aware visualization, and
                    narrative data presentation that tells stories with numbers rather than drowning users in charts.
                  </p>
                </div>
                <div className="md:order-1 rounded-2xl p-10 md:p-12"
                     style={{
                       backgroundColor: 'var(--warm-surface)',
                       border: '1px solid var(--warm-border)',
                       minHeight: '240px',
                     }}>
                  <p className="font-body text-sm italic" style={{ color: 'var(--warm-text-muted)' }}>
                    Visual: Data visualization transforming from dense charts to clear narrative
                  </p>
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
                    Trust through transparency
                  </h3>
                  <p className="font-body text-base leading-relaxed"
                     style={{ color: 'var(--warm-text-secondary)' }}>
                    In regulated environments, innovation needs to earn trust. I balance cutting-edge AI
                    capabilities with the security, privacy, and compliance requirements of financial
                    services — building experiences that are both bold and responsible.
                  </p>
                </div>
                <div className="rounded-2xl p-10 md:p-12"
                     style={{
                       backgroundColor: 'var(--warm-dark)',
                       minHeight: '240px',
                     }}>
                  <p className="font-body text-sm italic" style={{ color: '#A39E98' }}>
                    Visual: Security and openness coexisting in regulated design
                  </p>
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
                Explore My Thinking
              </p>
              <h2 className="font-serif-display text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">
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
            <h2 className="font-serif-display text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Let&apos;s talk.
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-12"
               style={{ color: 'var(--warm-text-secondary)' }}>
              Whether you&apos;re exploring conversational AI for your product, navigating UX in financial
              services, or scaling a design team — I&apos;d love to hear what you&apos;re working on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://calendly.com/turph"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
                 style={{ color: 'var(--warm-accent)' }}>
                Book a Meeting
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="hidden sm:block w-[1px] h-5" style={{ backgroundColor: 'var(--warm-border)' }} />
              <a href="mailto:turphs.ai@gmail.com"
                 className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
                 style={{ color: 'var(--warm-accent)' }}>
                turphs.ai@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="hidden sm:block w-[1px] h-5" style={{ backgroundColor: 'var(--warm-border)' }} />
              <a href="https://www.linkedin.com/in/tom-murphy-453479/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
                 style={{ color: 'var(--warm-accent)' }}>
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

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
                  Designing the future of human-AI conversation.
                </p>
              </div>
              <div className="flex gap-8 font-body text-sm">
                <a href="#work" className="transition-opacity hover:opacity-60">Work</a>
                <a href="#about" className="transition-opacity hover:opacity-60">About</a>
                <a href="#approach" className="transition-opacity hover:opacity-60">Approach</a>
                <a href="#contact" className="transition-opacity hover:opacity-60">Contact</a>
              </div>
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
