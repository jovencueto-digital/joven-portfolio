/**
 * Reports, strategies, audits and proposals Joven wrote himself, linked to
 * the original Google Docs / Sheets (all shared as "anyone with the link can
 * view"). Summaries are written from each document's own content.
 * Add new items to the top of the list.
 */
export type DocKind = 'Report' | 'Audit' | 'Strategy' | 'Proposal' | 'Article' | 'Case Study'
export type DocField = 'SEO' | 'Paid Ads'

export type WorkDoc = {
  title: string
  client: string
  kind: DocKind
  field: DocField
  format: 'Google Doc' | 'Google Sheet' | 'Article'
  year?: string
  summary: string
  /** Up to three short highlights. */
  points: string[]
  href: string
}

export const docs: WorkDoc[] = [
  {
    title: 'Google Ads Optimization',
    client: 'DDK Melbourne South',
    kind: 'Report',
    field: 'Paid Ads',
    format: 'Google Doc',
    year: '2025',
    summary:
      'Account optimisation across three campaigns, with the before-and-after Google optimisation scores for each.',
    points: ['Brand campaign 89% → 96.6%', 'Kitchen campaign 81.1% → 90%', 'Performance Max 82.5% → 85%'],
    href: 'https://docs.google.com/document/d/1pOZ0UrH0H_ZxaZ19fYpw7hEplcY8tkrJf-T4smnJ23I/edit?usp=sharing',
  },
  {
    title: 'SEO Technical Analysis',
    client: 'TAMABET77',
    kind: 'Audit',
    field: 'SEO',
    format: 'Google Doc',
    year: '2024',
    summary:
      'Technical SEO audit with findings and fixes: mixed HTTP/HTTPS links, orphaned sitemap pages, missing HSTS and weak internal linking.',
    points: ['9 mixed-content links found', '11 orphaned pages reviewed', 'Fix plan with server config'],
    href: 'https://docs.google.com/document/d/1E8eFKAxjQqyRr0mxbzjnmbFj9mX6xTgA84ZeZO3AH54/edit?usp=sharing',
  },
  {
    title: 'Facebook Ads Strategy',
    client: 'Lynbrook Optical',
    kind: 'Strategy',
    field: 'Paid Ads',
    format: 'Google Doc',
    summary:
      'Full Meta Ads plan for an optometrist in Lynbrook, Victoria (Australia): objectives, local targeting, creatives, ad copy, bidding and testing.',
    points: ['Carousel, video and image concepts', 'Ready-to-run ad copy', 'Competitor creative analysis'],
    href: 'https://docs.google.com/document/d/1wyAC4JyaydKIoB2qC7GBC70qEldYfb4AeQrFnmvDCnE/edit?usp=sharing',
  },
  {
    title: 'SEO Keyword Strategy',
    client: 'ARHT Home Solutions',
    kind: 'Strategy',
    field: 'SEO',
    format: 'Google Sheet',
    year: '2022',
    summary:
      'Page-by-page focus keywords, three meta-description options per page and schema structure for a Maryland roofing and home-services contractor.',
    points: ['Keyword map for every page', 'Meta descriptions written', 'Semrush keyword research'],
    href: 'https://docs.google.com/spreadsheets/d/1TQdynaDc0PNg2qS_RqRTxcxMMjbXchGjbNe_2_ymgAQ/edit?usp=sharing',
  },
  {
    title: 'Digital Marketing Analysis',
    client: 'Verb Peak',
    kind: 'Audit',
    field: 'SEO',
    format: 'Google Doc',
    summary:
      'Traffic and SEO audit of an agency website, with 12 prioritised fixes and a 20-part SEO checklist the agency can reuse on its own clients.',
    points: ['12 prioritised recommendations', 'Schema and FAQ structure', 'Reusable SEO checklist'],
    href: 'https://docs.google.com/document/d/1CIV6aGAL4PfrqeEGFjTDPp0tJPU5TytMxIpPWZ4fM2c/edit?usp=sharing',
  },
  {
    title: 'SEO Keyword & Competitor Research',
    client: 'Dr. Roura',
    kind: 'Report',
    field: 'SEO',
    format: 'Google Sheet',
    summary:
      'Competitor and keyword research for a cosmetic surgery practice in the Philippines, with search volumes and a content plan.',
    points: ['Top 5 competitors by traffic', 'Keyword and volume research', 'Article ideas and references'],
    href: 'https://docs.google.com/spreadsheets/d/1LYGKz_D3eX41Y81TA8r7vuPWbel2oOpVOklfkGwe1_w/edit?usp=sharing',
  },
  {
    title: 'SEO Implementation Proposal',
    client: 'Provoke Gallery',
    kind: 'Proposal',
    field: 'SEO',
    format: 'Google Doc',
    summary:
      'SEO proposal laying out a seven-step process: site audit, keyword analysis, meta tags, on-page, off-page, reporting and maintenance.',
    points: ['7-step SEO process', 'On- and off-page plan', 'Monthly reporting'],
    href: 'https://docs.google.com/document/d/1GSEBQADhVikJBCBTo4o-bKx5HE6qd2s-kQvxQ331O9Q/edit?usp=sharing',
  },
  {
    title: 'SEO On-Page & Off-Page Report',
    client: 'FastSoftware USA',
    kind: 'Report',
    field: 'SEO',
    format: 'Google Sheet',
    year: '2020',
    summary:
      'Ongoing SEO reporting for a US software retailer: keyword ranking movements, backlinks, anchor text, crawled pages and referring domains.',
    points: ['Keyword position tracking', 'Backlink and anchor audit', 'Referring domains'],
    href: 'https://docs.google.com/spreadsheets/d/10dPnw5ckLGU4-fCPvFvJWXs9FXmm5yqEyAZgOnNfT-Y/edit?usp=sharing',
  },
]
