export type WorkProject = {
  eyebrow: string
  title: string
  body: string
  metrics: string[]
  deckHref?: string
}

/** Shared "Where I've Built" cards — consumed by the WorkCarousel on / and /v2. */
export const WORK_PROJECTS: WorkProject[] = [
  {
    eyebrow: 'Amazon',
    title: 'ProductAds',
    body:
      'Sole UX designer from day one. I shaped every customer-facing component and merchant tool as the team grew from fewer than 20 people to over 200 — and revenue went from nothing to $250M annually. That foundation became a $1B+ program.',
    metrics: ['$0 → $250M revenue', '20 → 200+ team', 'Foundation for $1B+'],
  },
  {
    eyebrow: 'Fidelity Investments',
    title: 'Personal Investing',
    body:
      'Director of UX Design, working at the intersection of AI and personal finance. Leading the design of transaction experiences, money movement, account opening, and the AI-powered Fidelity Assistant that helps millions navigate their financial lives.',
    metrics: ['AI-powered interfaces', 'Regulated environment', 'Complex financial data'],
  },
  {
    eyebrow: 'turph',
    title: 'A personal software suite',
    body:
      'Built independently, end to end — product thinking through design, code, and deployment. A household run like a company: small producer apps feeding one consumption surface, kept current by a thin layer of autonomous agents. Private by construction, running in production, and still evolving.',
    metrics: ['Design → deployment', '6 apps, one surface', 'Live in production'],
    deckHref: 'https://turph-deck.vercel.app/',
  },
]
