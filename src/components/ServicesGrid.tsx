import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.

 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Attract',
    body: 'Paid ads, SEO, AEO and GEO put your offer in front of buyers on Google, social and AI search.',
    Icon: MagnetStraight,
    chips: ['Meta Ads', 'Google Ads', 'SEO', 'AEO · GEO'],
  },
  {
    index: '02',
    label: 'Automate',
    body: 'AI agents and CRM workflows answer, qualify and route every lead in seconds.',
    Icon: Timer,
    chips: ['AI voice agent', 'n8n', 'GoHighLevel'],
  },
  {
    index: '03',
    label: 'Close',
    body: 'Marketing and sales run on one pipeline, so leads turn into deals and revenue.',
    Icon: Trophy,
    chips: ['Pipelines', 'Follow-up', 'Reporting'],
  },
]

/* ---------- The services ---------- */

const GHL = '/icons/gohighlevel.png'
const META = '/icons/meta-color.svg'
const GADS = '/icons/googleads-color.svg'
const SEMRUSH = '/icons/semrush-color.svg'
const AHREFS = '/icons/ahrefs-mark.svg'
const FROG = '/icons/screamingfrog-mark.svg'
const N8N = '/icons/ai/n8n.svg'
const CLAUDE = '/icons/ai/claude-color.svg'
const OPENAI = '/icons/openai.svg'
const SF = '/icons/salesforce-mark.svg'
const HUBSPOT = '/icons/hubspot-color.svg'
const AC = '/icons/activecampaign-mark.svg'
const MONDAY = '/icons/monday-mark.svg'
const WP = '/icons/wordpress-color.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Paid Ads',
    description: 'Meta and Google Ads campaigns built to bring in qualified leads at a cost you can scale.',
    chip: 'Leads · ROAS',
    logos: [META, GADS],
    bullets: ['Account setup and creative testing', 'Lead-form and conversion campaigns', 'Weekly cost-per-lead and ROAS reporting'],
  },
  {
    index: '02',
    title: 'SEO · AEO · GEO',
    description: 'Get found on Google, in AI answers and in AI search engines like ChatGPT and Gemini.',
    chip: 'Organic growth',
    logos: [SEMRUSH, AHREFS, FROG],
    bullets: ['Technical, on-page and off-page SEO', 'Backlink and authority building', 'Content structured for AI answers'],
  },
  {
    index: '03',
    title: 'AI Automation',
    description: 'AI voice agents, chat widgets and workflows that handle leads while your team sleeps.',
    chip: '24/7',
    logos: [N8N, CLAUDE, OPENAI],
    bullets: ['AI voice and chat agents', 'n8n and GoHighLevel workflows', 'Lead qualifying and routing'],
  },
  {
    index: '04',
    title: 'CRM & Sales Systems',
    description: 'One pipeline from first click to closed deal, set up in the CRM your team will actually use.',
    chip: 'Pipeline',
    logos: [GHL, SF, HUBSPOT],
    bullets: ['GoHighLevel, HubSpot or Salesforce setup', 'Email and SMS follow-up sequences', 'Smart lists, tags and dashboards'],
  },
  {
    index: '05',
    title: 'Growth Strategy',
    description: 'Marketing and sales leadership that aligns every campaign with revenue targets.',
    chip: 'Revenue',
    logos: [MONDAY, AC, WP],
    bullets: ['Go-to-market and channel plans', 'Marketing and sales alignment', 'Team leadership and KPIs'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Growth systems, built end to end.
        </h1>
        <p className="pgrid__lede">
          Ads, search, AI automation and CRM - wired together so marketing turns into revenue.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Attract. Automate. Close.
              <br />
              <span>One system, three steps.</span>
            </h2>
            <p className="sgrid__method-sub">
              Most agencies stop at leads. I keep going until the deal is closed.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can do for you.</h2>
            <p className="sgrid__offers-sub">Pick one, or let me build the whole system.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">Every lead, handled in seconds.</h2>
              <p className="sgrid__flow-sub">
                An example of the kind of flow I build: a new lead comes in, gets qualified and lands with the right rep automatically.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
