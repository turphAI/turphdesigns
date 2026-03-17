'use client'

import { ArrowUpRight } from 'lucide-react'
import { ga } from '@/lib/ga'

/**
 * Contact links with GA event tracking.
 */
export function ContactLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <a href="https://calendly.com/turph"
         target="_blank"
         rel="noopener noreferrer"
         onClick={() => ga.contactClick('calendly')}
         className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
         style={{ color: 'var(--warm-accent)' }}>
        Book a Meeting
        <ArrowUpRight className="w-4 h-4" />
      </a>
      <span className="hidden sm:block w-[1px] h-5" style={{ backgroundColor: 'var(--warm-border)' }} />
      <a href="mailto:turphs.ai@gmail.com"
         onClick={() => ga.contactClick('email')}
         className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
         style={{ color: 'var(--warm-accent)' }}>
        turphs.ai@gmail.com
        <ArrowUpRight className="w-4 h-4" />
      </a>
      <span className="hidden sm:block w-[1px] h-5" style={{ backgroundColor: 'var(--warm-border)' }} />
      <a href="https://www.linkedin.com/in/tom-murphy-453479/"
         target="_blank"
         rel="noopener noreferrer"
         onClick={() => ga.contactClick('linkedin')}
         className="font-body inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-60"
         style={{ color: 'var(--warm-accent)' }}>
        LinkedIn
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  )
}

/**
 * Footer nav links with GA event tracking.
 */
export function FooterNav() {
  return (
    <div className="flex gap-8 font-body text-sm">
      {['Work', 'About', 'Approach', 'Contact'].map((item) => (
        <a key={item}
           href={`#${item.toLowerCase()}`}
           onClick={() => ga.footerNavClick(item)}
           className="transition-opacity hover:opacity-60">
          {item}
        </a>
      ))}
    </div>
  )
}
