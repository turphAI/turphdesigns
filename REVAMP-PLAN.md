# TurphDesigns Website Revamp Plan

## The North Star

> "Confident enough to lead with beauty, not bullet points."

The current site reads as a **marketing page that's trying to convince**. The goal is to transform it into a **story that invites you in** — editorial, warm, gallery-like, with a handcrafted quality that reflects the craft of a UX designer who actually cares about experience.

---

## What Changes (and What Stays)

### Keeping
- Next.js 15 + React 19 + Tailwind — the tech stack is solid
- shadcn/ui components (will restyle, not replace)
- Chat interface concept (but repositioned — see Section 7)
- Core content about Amazon, Fidelity, conversational AI vision

### Removing
- The "selling" energy: excessive CTAs, badges everywhere, category tags
- Cold blue-gray-gradient tech palette
- Dense two-column layout with persistent chat sidebar
- Badge/tag visual clutter on every section
- The "AI-First UX Leadership for Financial Services" badge-header pattern

### Adding
- Illustrated parallax hero (handcrafted, not stock)
- Warm, editorial color palette
- Serif + sans-serif type pairing
- Generous whitespace and breathing room
- Narrative flow (story down the page, not sections of features)
- Subtle, confident interactions (not flashy hover effects)

---

## Design System Foundation

### Typography
```
Headings:    Playfair Display (serif) — editorial, premium, literary
Body:        Inter (keep) or switch to DM Sans — clean, modern, warm
Nav/Labels:  DM Sans or Inter — slightly softer than current
Mono:        JetBrains Mono — for any code/technical moments
```

**Scale (desktop):**
```
Hero title:     72-80px / leading-tight / Playfair Display
Section titles: 40-48px / leading-snug / Playfair Display
Subtitles:      20-24px / leading-relaxed / DM Sans light
Body:           18px / leading-relaxed / DM Sans regular
Small/labels:   14px / leading-normal / DM Sans medium
```

### Color Palette (Warm Editorial)
```
Background:     #FAF8F5  (warm cream, not cold gray-50)
Surface:        #FFFFFF  (clean white for cards/panels)
Text Primary:   #1A1A1A  (almost-black, warmer than gray-900)
Text Secondary: #6B6560  (warm gray, not cold gray-600)
Text Muted:     #A39E98  (warm muted)
Accent:         #C4704B  (terracotta/coral — warm, not tech-blue)
Accent Light:   #F0DDD4  (soft coral tint for backgrounds)
Accent Dark:    #8B4D35  (deeper terracotta for hover states)
Border:         #E8E4DF  (warm, subtle)
Dark Surface:   #1A1A1A  (for footer, dark sections)
```

### Spacing System
```
The key shift: MUCH more whitespace than current site.

Section padding:    120-160px vertical (current is 64px)
Content max-width:  1100px (current 1280px — tighter feels more editorial)
Card padding:       48-64px (current is 24-32px)
Element gaps:       32-48px between items (current is 16-24px)
```

### Interaction Style
```
Current:  Hover → shadow lift, color change, scale
New:      Hover → subtle opacity shift, gentle underline, soft fade
Buttons:  Outlined/ghost style (not filled dark buttons)
Links:    Underline on hover, no color change
```

---

## Section-by-Section Build Plan

### Section 1: Navigation
**Current:** Sticky header, dark "TD" logo box, filled dark "Let's Talk" button
**New:**
- Transparent nav that overlays the hero illustration
- Logo: "TurphDesigns." in Playfair Display serif (like Simile's "Simile." logo)
- Nav links: DM Sans, widely spaced, warm gray
- CTA: Ghost/outlined button — "Get in Touch" with subtle border
- On scroll: nav gets a warm cream background with soft shadow
- No hamburger icon on mobile — just logo + single "Menu" text link

```
┌──────────────────────────────────────────────────┐
│  TurphDesigns.        Work  About  Approach       Get in Touch  │
│  (serif logo)         (widely spaced, warm gray)  (outlined)    │
└──────────────────────────────────────────────────┘
```

### Section 2: Hero (The Centerpiece)
**Current:** Text-centered hero with badge, big headline, two CTAs
**New:**
- Full-viewport illustrated background with parallax scroll
- Illustration: handcrafted, warm artwork that represents the intersection of human experience and technology (see Hero Art section below)
- Content floats OVER the illustration in a semi-transparent card or clean typography
- Single strong headline in Playfair Display serif
- One line of supporting text
- ONE subtle CTA (outlined button) or no CTA at all — let the scroll do the work
- Parallax: illustration scrolls at 60% speed, text at 100%

```
┌──────────────────────────────────────────────────┐
│                                                  │
│         [Full-bleed illustrated artwork]         │
│                                                  │
│              Designing the future                │
│           of human-AI conversation.              │
│                                                  │
│          UX Director · Amazon · Fidelity         │
│                                                  │
│              [ Explore my work ]                 │
│                                                  │
│                    ↓ scroll                       │
└──────────────────────────────────────────────────┘
```

### Section 3: Philosophy / Intro Statement
**Current:** "AI Interface Section" with blue badge, checklist-style
**New:**
- Clean, generous whitespace section on warm cream background
- A short, personal narrative paragraph (2-3 sentences)
- Written in first person, warm tone — this is where personality shows
- No cards, no badges, no CTAs — just beautiful typography
- Optional: a small, elegant illustration or line-art accent

```
┌──────────────────────────────────────────────────┐
│                                                  │
│                                                  │
│     I believe the best interfaces disappear.     │
│     They become conversations — natural,         │
│     intuitive, human. After a decade building    │
│     products at Amazon and Fidelity, I design    │
│     AI experiences that feel less like software   │
│     and more like understanding.                 │
│                                                  │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Section 4: Work / Experience
**Current:** Two-column grid with badges, border-left accents, "Discuss Your AI Strategy" CTA
**New:**
- Large, spacious cards on warm cream background
- Each card: generous padding, rounded corners, soft warm shadow
- Headline in Playfair Display, description in DM Sans
- Key metrics woven naturally into prose (not in badges)
- NO "Discuss" buttons on cards
- Subtle hover: slight lift or border color warmth

```
┌──────────────────────────────────────────────────┐
│                                                  │
│     Where I've Built                             │
│     ─────────────                                │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────────┐ │
│  │                     │ │                     │ │
│  │  Amazon ProductAds  │ │  Fidelity           │ │
│  │                     │ │  Investments         │ │
│  │  Sole UX designer   │ │                     │ │
│  │  from zero to $250M │ │  Director of UX,    │ │
│  │  revenue. Built the │ │  designing the      │ │
│  │  foundation for a   │ │  future of personal │ │
│  │  $1B+ program.      │ │  investing with AI. │ │
│  │                     │ │                     │ │
│  └─────────────────────┘ └─────────────────────┘ │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Section 5: Approach / What I Do
**Current:** 3-column icon cards with badges + checklist section
**New:**
- Flowing narrative section, not a grid of cards
- Alternating layout: text left / visual right, then swap
- Each "approach" gets a full-width moment with breathing room
- Subtle line-art illustrations or warm geometric accents
- The content shifts from "selling capabilities" to "sharing perspective"

### Section 6: Vision / Quote
**Current:** Blockquote buried in the experience section
**New:**
- Full-width statement section with dark warm background (#1A1A1A)
- Large Playfair Display serif quote
- Your name and title below in small DM Sans
- This is the "pause and reflect" moment in the scroll

```
┌──────────────────────────────────────────────────┐
│  ████████████████████ DARK BG ████████████████████│
│                                                  │
│     "The interface becomes a conversation —      │
│      natural, adaptive, human."                  │
│                                                  │
│      — Turph, Director of UX Design              │
│                                                  │
│  █████████████████████████████████████████████████│
└──────────────────────────────────────────────────┘
```

### Section 7: AI Chat (Repositioned)
**Current:** Persistent right-rail sidebar, always visible, competing for attention
**New:**
- Chat becomes an intentional section/experience, NOT a persistent sidebar
- Introduce it with narrative: "Want to explore my thinking? Ask me anything."
- Clean, minimal chat window — embedded in the page flow
- OR: subtle floating trigger in bottom-right (small, unobtrusive, appears after scroll)
- The chat is a *feature*, not a fixture

### Section 8: Contact / Connect
**Current:** "Ready to Transform Your Financial UX?" with badges
**New:**
- Simple, warm, personal
- "Let's talk." as the heading (Playfair Display, large)
- Email link, LinkedIn link — clean, no cards wrapping them
- Optional: Calendly embed styled to match the warm palette

### Section 9: Footer
**Current:** Dense 4-column dark footer with lists
**New:**
- Minimal dark footer (#1A1A1A)
- Logo + one-line tagline on the left
- Small cluster of links on the right
- Copyright at bottom
- Generous padding, no clutter

---

## Hero Illustration Strategy

This is the most impactful element of the revamp. The handcrafted hero art is what separates a "nice website" from one that stops you in your tracks.

### Options for Creating the Hero Art

#### Option A: AI-Generated Custom Illustration (Recommended to Start)
**Tools:** Midjourney, DALL-E 3, or Stable Diffusion
**Style direction:**
- Warm, painterly illustration (watercolor/gouache feel)
- Subject: Abstract landscape with subtle tech elements — think flowing lines that suggest both natural forms and data/conversation flows
- Color palette: warm terracottas, creams, soft golds, with subtle cool accents
- NOT: literal tech imagery (no screens, no robots, no circuit boards)
- Think: editorial magazine cover art, gallery quality

**Prompt direction examples:**
- "Editorial illustration, warm watercolor style, abstract landscape of flowing conversation threads becoming natural forms, terracotta and cream palette, premium quality, magazine cover"
- "Handcrafted gouache painting, warm tones, human silhouette dissolving into flowing data streams that become organic shapes, coral and cream, editorial quality"

**Process:**
1. Generate 10-15 variations
2. Pick 2-3 that feel right
3. Refine with inpainting/editing
4. Export at high resolution (at least 3840×2160 for retina)
5. Optimize for web (compress, create responsive sizes)

#### Option B: Commission a Real Illustrator
**When:** Once you're confident in the direction and want to level up
**Where:** Dribbble, Behance, or agencies like Folio Illustration
**Budget:** $500-2000 for a hero illustration
**Timeline:** 2-4 weeks typically

#### Option C: Hybrid — AI Base + Human Refinement
Generate the composition with AI, then hire an illustrator to refine and add the truly handcrafted details. Best of both worlds.

### Parallax Implementation
```tsx
// Using CSS transform for smooth parallax (no libraries needed)
// The hero image moves at 60% scroll speed

const [scrollY, setScrollY] = useState(0)

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

// In JSX:
<div className="relative h-screen overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(/hero-illustration.jpg)',
      transform: `translateY(${scrollY * 0.4}px)`
    }}
  />
  <div className="relative z-10 flex items-center justify-center h-full">
    {/* Hero text content */}
  </div>
</div>
```

---

## Build Sequence

### Phase 1: Foundation (I build)
1. New `page-v2.tsx` with the design system tokens in globals.css
2. Font setup (Playfair Display + DM Sans in layout.tsx)
3. Warm color palette CSS variables
4. Parallax hero component with placeholder image
5. New nav component with scroll behavior

### Phase 2: Content Sections (We collaborate)
6. Philosophy/intro statement section
7. Work/experience cards (reworked from current content)
8. Approach section (narrative flow)
9. Vision quote section

### Phase 3: Interactive + Polish (Mix)
10. Chat integration (repositioned)
11. Contact section
12. Footer
13. Animations and scroll transitions
14. Responsive design pass

### Phase 4: Hero Art (You lead, I support)
15. Generate illustration options (AI tools)
16. Integrate chosen artwork
17. Optimize and finalize parallax behavior

---

## Quick Reference: Current vs. New

| Element | Current | New |
|---------|---------|-----|
| Palette | Cold gray-blue-gradient | Warm cream-terracotta-coral |
| Headings | Inter (sans-serif) | Playfair Display (serif) |
| Body | Inter | DM Sans |
| Hero | Text on white bg | Illustrated parallax, full-bleed |
| CTAs | 8+ aggressive buttons | 2-3 subtle, outlined |
| Whitespace | Tight (64px sections) | Generous (120-160px sections) |
| Chat | Persistent right sidebar | Embedded section or subtle float |
| Cards | Dense with badges/tags | Spacious with warm shadows |
| Tone | "Let me sell you" | "Let me show you" |
| Nav | Filled dark CTA button | Ghost/outlined, transparent bg |
| Footer | Dense 4-column grid | Minimal, breathing room |
