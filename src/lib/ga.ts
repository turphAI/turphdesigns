/**
 * Google Analytics event helper.
 * Calls gtag() if it exists on window (loaded via layout.tsx Script tag).
 */

type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Pre-built event helpers for common interactions
export const ga = {
  navClick: (item: string) =>
    trackEvent({ action: 'nav_click', category: 'navigation', label: item }),

  heroCTA: () =>
    trackEvent({ action: 'hero_cta_click', category: 'engagement', label: 'see_how' }),

  chatOpen: () =>
    trackEvent({ action: 'chat_open', category: 'chat', label: 'mobile_sheet' }),

  chatMessage: (messagePreview: string) =>
    trackEvent({
      action: 'chat_message_sent',
      category: 'chat',
      label: messagePreview.slice(0, 80),
    }),

  contactClick: (type: 'calendly' | 'email' | 'linkedin') =>
    trackEvent({ action: 'contact_click', category: 'contact', label: type }),

  footerNavClick: (item: string) =>
    trackEvent({ action: 'footer_nav_click', category: 'navigation', label: item }),
}
