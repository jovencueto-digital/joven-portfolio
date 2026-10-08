export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build growth systems for B2B and B2C brands: ChatGPT Ads, Meta and Google Ads, SEO, AEO and GEO, AI automation, and CRM pipelines that hand qualified leads to sales.',
  },
  {
    q: 'Who do you work with?',
    a: 'Mostly US businesses in funding, finance, real estate, e-commerce and services, plus brands across Asia. If you sell something people search for, I can help.',
  },
  {
    q: 'How do you price your work?',
    a: 'It depends on scope. Ads management, SEO and automation builds are quoted per project or as a monthly retainer once we have talked through your goals.',
  },
  {
    q: 'Where are you based?',
    a: 'Taguig City, Metro Manila (GMT+8). I work with US-based clients and teams across time zones.',
  },
  {
    q: 'What happens after I write?',
    a: 'I reply personally, then we set up a short call to look at your numbers and decide what to build first.',
  },
]
