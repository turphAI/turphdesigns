'use client'

import { useState, useEffect, ReactNode } from 'react'

/**
 * PageWithParallaxBg
 *
 * The hero illustration is a PERSISTENT background for the entire page.
 * It scrolls at a slower rate (parallax) while content scrolls over it.
 * Sections alternate between:
 *   - "full-block" — opaque, edge-to-edge, covering the illustration
 *   - "card" — floating panel with rounded corners, illustration bleeds through
 *
 * This creates the gallery-like rhythm seen on simile.ai.
 */
export function PageWithParallaxBg({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Persistent parallax background — the illustration */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-illustration.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: `scale(1.2)`,
          willChange: 'transform',
        }}
      />

      {/* Subtle overall tint so illustration doesn't overpower content */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: 'rgba(250, 248, 245, 0.15)',
        }}
      />

      {/* Content layer — sits above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

/**
 * HeroSection
 *
 * The initial viewport. No opaque background — the illustration
 * shows through fully. Text fades out as user scrolls.
 */
export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroOpacity = Math.max(0, 1 - scrollY / 600)
  const heroTranslate = scrollY * 0.3

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-end pb-20 md:pb-28 px-6">
      {/* Bottom fade so hero text area has contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(250, 248, 245, 0) 0%,
            rgba(250, 248, 245, 0) 40%,
            rgba(250, 248, 245, 0.5) 65%,
            rgba(250, 248, 245, 0.85) 85%,
            rgba(250, 248, 245, 1) 100%
          )`,
        }}
      />

      {/* Hero content */}
      <div
        className="relative z-10 max-w-3xl mx-auto text-center"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslate}px)`,
        }}
      >
        <h1
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6"
          style={{ color: 'var(--warm-text)' }}
        >
          Designing the future
          <br />
          <span style={{ color: 'var(--warm-text)' }}>
            of human-AI conversation.
          </span>
        </h1>

        <p
          className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--warm-text)' }}
        >
          Product Designer &middot; 25+ Years of Experience
        </p>

        <a
          href="#work"
          className="font-body inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:opacity-80"
          style={{
            color: 'var(--warm-text)',
            border: '1.5px solid var(--warm-text)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
          }}
        >
          Explore my work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
            <path d="M8 3L8 13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
