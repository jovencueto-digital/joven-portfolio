/**
 * Case studies - the real results behind the Projects page and the Client
 * Results section. Every number here is read straight off a screenshot in
 * public/work/. Personal data of leads (names, phones, emails) is blurred in
 * the images; keep it that way if you add more.
 */

export type Metric = { value: string; label: string }

export type CaseStudy = {
  id: string
  /** Short category line above the title. */
  kicker: string
  title: string
  /** Who it was for, as it can be shown publicly. */
  client: string
  period: string
  /** One or two lines for the card. */
  summary: string
  /** What Joven actually did. */
  did: string[]
  metrics: Metric[]
  shots: { src: string; alt: string }[]
  /** Tool marks from public/icons. */
  logos: string[]
  /** Phone filter bucket on the Projects page. */
  cat: 'ads' | 'crm' | 'ai'
}

const GHL = '/icons/gohighlevel.png'
const META = '/icons/meta.svg'
const GADS = '/icons/googleads.svg'

export const cases: CaseStudy[] = [
  {
    id: 'meta-funding',
    kicker: 'Meta Ads · Lead generation',
    title: 'Business funding leads at $12.38 each',
    client: 'Blue Harbor Funding',
    period: 'May – Aug 2026',
    summary: '807 form leads for a US business-funding offer from $9,987 in spend, across seven Advantage+ ad sets.',
    did: [
      'Built the Advantage+ account structure and ran seven ad sets as controlled creative tests (image vs Reels, new creative rounds).',
      'Scaled the winning image set to $80/day while holding cost per lead under $10.',
    ],
    metrics: [
      { value: '807', label: 'Leads' },
      { value: '$12.38', label: 'Cost per lead' },
      { value: '106.8K', label: 'Impressions' },
      { value: '$9.73', label: 'Best ad set CPL' },
    ],
    shots: [{ src: '/work/meta-funding.webp', alt: 'Meta Ads Manager: seven ad sets, 807 leads at $12.38 per lead' }],
    logos: [META],
    cat: 'ads',
  },
  {
    id: 'meta-bh-capital',
    kicker: 'Meta Ads · Capital raise',
    title: '290 investor leads under $8.50',
    client: 'Blue Harbor Capital',
    period: '2026',
    summary: 'Three campaigns for a capital-markets offer: 290 leads from $2,463 in spend, the best at $5.61 per lead.',
    did: [
      'Launched the campaign with a video test against the original creative.',
      'Ran on highest-volume bidding and shifted budget toward the lowest-cost campaign.',
      'Kept all three campaigns live side by side, all at under $10 per lead.',
    ],
    metrics: [
      { value: '290', label: 'Leads' },
      { value: '$8.49', label: 'Avg. cost per lead' },
      { value: '$5.61', label: 'Best cost per lead' },
      { value: '37.3K', label: 'Impressions' },
    ],
    shots: [{ src: '/work/meta-bh-capital.webp', alt: 'Meta Ads Manager: three BH Capital campaigns with leads and cost per lead' }],
    logos: [META],
    cat: 'ads',
  },
  {
    id: 'ai-voice',
    kicker: 'AI automation · Voice agent',
    title: 'An AI voice agent that answers every call',
    client: 'Blue Harbor Funding',
    period: 'Aug 2026',
    summary: 'A GoHighLevel AI voice agent on a dedicated phone line and a website widget, answering funding enquiries around the clock.',
    did: [
      'Designed the agent’s script, qualifying questions and hand-off to the sales team.',
      'Connected it to a dedicated phone number and a website widget.',
    ],
    metrics: [
      { value: '24/7', label: 'Coverage' },
      { value: '2', label: 'Channels: phone + web' },
    ],
    shots: [{ src: '/work/ai-voice-agent.webp', alt: 'GoHighLevel AI Agents list showing the Blue Harbor Funding AI voice agent' }],
    logos: [GHL],
    cat: 'ai',
  },
  {
    id: 'workflow',
    kicker: 'CRM automation · Lead routing',
    title: 'A lead magnet that routes itself',
    client: 'Utility-savings client (name withheld)',
    period: '2026',
    summary: 'A "20-year utility hike prediction" lead magnet whose surveys create the opportunity, qualify the lead and assign it to the right rep - no manual sorting.',
    did: [
      'Built ten survey entry points, one per sales rep, feeding a single workflow.',
      'Automated opportunity creation, tagging and qualified / disqualified sorting.',
      'Routed each lead to its rep with tags, field updates and internal notifications.',
    ],
    metrics: [
      { value: '10', label: 'Survey entry points' },
      { value: '10', label: 'Reps auto-assigned' },
      { value: '100%', label: 'Hands-off routing' },
    ],
    shots: [{ src: '/work/workflow-lead-magnet.webp', alt: 'GoHighLevel workflow builder: ten survey triggers routing leads to ten reps' }],
    logos: [GHL],
    cat: 'ai',
  },
  {
    id: 'crm',
    kicker: 'CRM · Pipeline',
    title: 'A 95,680-contact CRM, organised',
    client: 'Blue Harbor Group',
    period: '2026',
    summary: 'GoHighLevel CRM holding 95,680 contacts, with smart lists that separate fresh inbound leads for the sales desk.',
    did: [
      'Imported and tagged a 95K+ contact database for outreach.',
      'Built smart lists for inbound leads so reps work the newest first.',
    ],
    metrics: [
      { value: '95,680', label: 'Contacts managed' },
      { value: '396', label: 'Inbound leads in one list' },
    ],
    shots: [
      { src: '/work/crm-database.webp', alt: 'GoHighLevel contacts: 95,680 contacts (personal details blurred)' },
      { src: '/work/crm-pipeline.webp', alt: 'GoHighLevel smart list of 396 inbound contacts (personal details blurred)' },
    ],
    logos: [GHL],
    cat: 'crm',
  },
  {
    id: 'gads-scale',
    kicker: 'Google Ads · Scale',
    title: '233K clicks at $0.41 each',
    client: 'Client (name withheld)',
    period: 'Jun 2023 – Mar 2026',
    summary: '$94.2K in managed Google Ads spend delivering 35.2 million impressions and 233,000 clicks at a $0.41 average CPC.',
    did: [
      'Managed the account end to end for almost three years.',
      'Kept average cost per click at $0.41 while scaling impressions into the millions.',
    ],
    metrics: [
      { value: '233K', label: 'Clicks' },
      { value: '35.2M', label: 'Impressions' },
      { value: '$0.41', label: 'Avg. CPC' },
      { value: '$94.2K', label: 'Spend managed' },
    ],
    shots: [{ src: '/work/gads-scale.webp', alt: 'Google Ads overview: 233K clicks, 35.2M impressions, $0.41 average CPC, $94.2K cost' }],
    logos: [GADS],
    cat: 'ads',
  },
  {
    id: 'gads-roas',
    kicker: 'Google Ads · E-commerce',
    title: '1,104% ROAS on $381',
    client: 'E-commerce client (name withheld)',
    period: 'Jul – Sep 2026',
    summary: '183 conversions worth $4.21K from $381 in spend - an 11x return - with a 95.7% optimisation score.',
    did: [
      'Launched and tuned the campaigns from a standing start in mid-July.',
      'Set up conversion value tracking so bidding optimised for revenue, not clicks.',
      'Kept the account at a 95.7% optimisation score.',
    ],
    metrics: [
      { value: '1,104%', label: 'ROAS' },
      { value: '183', label: 'Conversions' },
      { value: '$4.21K', label: 'Conversion value' },
      { value: '$381', label: 'Spend' },
    ],
    shots: [{ src: '/work/gads-roas.webp', alt: 'Google Ads overview: 183 conversions, 4.21K conversion value, 1,104.54% ROAS, $381 cost' }],
    logos: [GADS],
    cat: 'ads',
  },
  {
    id: 'gads-search',
    kicker: 'Google Ads · Search',
    title: '8.71% CTR on a lean search budget',
    client: 'Client (name withheld)',
    period: 'Sep 2026',
    summary: '66 conversions in one month from a small search budget, with an 8.71% click-through rate.',
    did: [
      'Ran a tight single ad group around high-intent keywords.',
      'Wrote ads that earned an 8.71% CTR - well above search averages.',
      'Trimmed redundant keywords to keep spend on what converts.',
    ],
    metrics: [
      { value: '66', label: 'Conversions' },
      { value: '8.71%', label: 'CTR' },
    ],
    shots: [{ src: '/work/gads-search.webp', alt: 'Google Ads search campaign: 65.98 conversions and 8.71% CTR in September 2026' }],
    logos: [GADS],
    cat: 'ads',
  },
]

export const caseById = (id: string) => cases.find((c) => c.id === id)!
