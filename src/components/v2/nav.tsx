'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ga } from '@/lib/ga'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      // Reset hash when scrolled back up to the hero
      if (window.scrollY < 200) {
        history.replaceState(null, '', window.location.pathname)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: update URL hash as sections enter the viewport
  useEffect(() => {
    const sectionIds = ['work', 'about', 'approach', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        // Among entries that just became visible, pick the one nearest the top
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('id')
          if (id) history.replaceState(null, '', `#${id}`)
        }
      },
      {
        // Fire when the top of a section crosses the upper quarter of the viewport
        rootMargin: '-10% 0px -80% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 v2-nav ${scrolled ? 'v2-nav-scrolled' : ''}`}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo — serif, editorial */}
          <Link href="/" className="font-serif-display text-2xl font-medium tracking-tight"
             style={{ color: 'var(--warm-text)' }}>
            TurphDesigns.
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
            {['Work', 'About', 'Approach'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => ga.navClick(item)}
                className="font-body text-sm tracking-wide transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--warm-text-secondary)' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA — ghost/outlined */}
          <a
            href="#contact"
            onClick={() => ga.navClick('Get in Touch')}
            className="hidden md:inline-flex font-body items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-70"
            style={{
              color: 'var(--warm-text)',
              border: '1.5px solid var(--warm-border)',
            }}
          >
            Get in Touch
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden font-body text-sm tracking-wide"
            style={{ color: 'var(--warm-text-secondary)' }}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-8 pt-2 border-t"
               style={{ borderColor: 'var(--warm-border)' }}>
            <nav id="mobile-nav" aria-label="Mobile navigation" className="flex flex-col gap-6 pt-6">
              {['Work', 'About', 'Approach'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => { ga.navClick(item); setMobileOpen(false) }}
                  className="font-body text-lg"
                  style={{ color: 'var(--warm-text)' }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => { ga.navClick('Get in Touch'); setMobileOpen(false) }}
                className="font-body text-lg"
                style={{ color: 'var(--warm-accent)' }}
              >
                Get in Touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
