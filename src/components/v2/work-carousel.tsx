'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { ga } from '@/lib/ga'
import type { WorkProject } from '@/lib/work-projects'

/**
 * Swipeable "Where I've Built" carousel. Keeps the section compact so the
 * content below stays high on the page, while still holding any number of
 * cards. Native swipe on touch + drag on desktop (embla), arrows, and dots.
 */
export function WorkCarousel({ projects }: { projects: WorkProject[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: false })
  const [selected, setSelected] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8">
          {projects.map((p) => (
            <div key={p.title} className="flex-[0_0_88%] md:flex-[0_0_70%] min-w-0">
              <article
                className="v2-card-hover rounded-2xl p-10 md:p-12 h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--warm-surface)',
                  border: '1px solid var(--warm-border)',
                }}
              >
                <p
                  className="font-serif-display text-xs tracking-widest uppercase mb-6"
                  style={{ color: 'var(--warm-text-muted)', letterSpacing: '0.16em', fontWeight: 500 }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="font-serif-display text-2xl md:text-3xl font-medium mb-6 tracking-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-body text-base leading-relaxed mb-8"
                  style={{ color: 'var(--warm-text-secondary)' }}
                >
                  {p.body}
                </p>
                <div className="mt-auto">
                  <div
                    className="flex flex-wrap gap-x-8 gap-y-3 font-serif-display text-sm"
                    style={{ color: 'var(--warm-text-muted)' }}
                  >
                    {p.metrics.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                  {p.deckHref && (
                    <a
                      href={p.deckHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => ga.projectClick('turph_deck')}
                      className="font-serif-display inline-flex items-center gap-2 text-base font-medium mt-8 transition-opacity hover:opacity-60"
                      style={{ color: 'var(--warm-accent)' }}
                    >
                      View the pitch deck
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* controls: dots (position) + arrows */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-2" aria-label="Project position">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to ${p.eyebrow}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: selected === i ? '24px' : '8px',
                backgroundColor: selected === i ? 'var(--warm-accent)' : 'var(--warm-border)',
              }}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-70"
            style={{ border: '1px solid var(--warm-border)', color: 'var(--warm-text)' }}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next project"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-70"
            style={{ border: '1px solid var(--warm-border)', color: 'var(--warm-text)' }}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
