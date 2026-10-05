/**
 * Client testimonials, as supplied by Joven. Only obvious typos are
 * corrected; the wording is the client's. Add new ones to the end.
 */
export type Testimonial = {
  quote: string
  name: string
  /** Their title, if known. */
  role?: string
  company: string
  /** What Joven did for them. */
  work: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Joven is a GOAT. He single-handedly created campaigns and closed deals by himself without a team on his back yet. From marketing to sales and closing, he did it all at once. That’s why he is one of the most reliable partners I could ever have, for a Filipino like him.',
    name: 'John Gaulin',
    role: 'CEO & Founder',
    company: 'Blue Harbor Capital Holdings',
    work: 'Marketing · Sales · Closing',
  },
  {
    quote:
      'Joven, as our SEO consultant, helped our company’s news website get to the top of Google search, and the best part is we are still at DA 85 in the space.',
    name: 'Eric Ng',
    company: 'Singapore Business Review',
    work: 'SEO consulting',
  },
  {
    quote:
      'Sir Joven helped our business put our Google Ads and SEO campaigns in one place, and we got a decent amount of conversions all throughout.',
    name: 'Raven Quinones',
    company: 'FastSoftware USA',
    work: 'Google Ads · SEO',
  },
  {
    quote:
      'In a short period of time as Chief Marketing Officer, Joven helped our startup gauge our target clients, create campaigns for the business and provide solutions to our clients.',
    name: 'Ashbed LA',
    company: 'Summitly',
    work: 'Marketing leadership',
  },
  {
    quote:
      'Joven and his team are a really reliable source for SEO campaigns. Our website and apps dominate organic search in the Philippine market.',
    name: 'Christian So',
    company: 'BET88',
    work: 'SEO · Backlinks',
  },
]

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
