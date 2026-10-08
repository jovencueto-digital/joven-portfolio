import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
  ChartLineUp,
  MagnifyingGlass,
  AddressBook,
  Lightning,
  Compass,
  SealCheck,
  Phone,
  FlowArrow,
  Brain,
  ChatCircleDots,
  Funnel as FunnelIcon,
} from '@/components/slab'
import { cases } from '@/data/cases'
import { testimonials } from '@/data/testimonials'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_SHOTS = cases.flatMap((c) => c.shots.map((x) => x.src))

export const OFFERS = [
  { Icon: ChatCircleDots, title: 'ChatGPT Ads', note: 'Sponsored ads inside ChatGPT answers' },
  { Icon: ChartLineUp, title: 'Paid Ads', note: 'Meta and Google Ads built for leads and ROAS' },
  { Icon: MagnifyingGlass, title: 'SEO · AEO · GEO', note: 'Rank on Google, AI answers and AI search' },
  { Icon: Lightning, title: 'AI Automation', note: 'Voice agents, n8n and CRM workflows' },
  { Icon: AddressBook, title: 'CRM & Sales Systems', note: 'GoHighLevel, HubSpot, Salesforce pipelines' },
  { Icon: Compass, title: 'Growth Strategy', note: 'Marketing and sales run as one revenue team' },
] as const

const REVIEWS = testimonials.map((t) => ({ name: t.name, role: `“${t.quote.split('. ')[0].replace(/\.$/, '')}.”`, work: t.company }))

// Three photos of you, fanned. Small copies are fine - the fan shows them under 100px.
const PHOTOS = [profile.avatarSrc, '/photos/joven-office.webp', '/photos/joven-laptop.webp']

const AI_BUILDS = [
  { id: 'voice', name: 'AI voice agent', Icon: Phone },
  { id: 'route', name: 'Lead routing', Icon: FlowArrow },
  { id: 'n8n', name: 'n8n workflows', Icon: Lightning },
  { id: 'llm', name: 'Claude + OpenAI', Icon: Brain },
  { id: 'chat', name: 'Web chat widget', Icon: ChatCircleDots },
  { id: 'magnet', name: 'Lead magnets', Icon: FunnelIcon },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_BUILDS.length / 2)
  const toolRows = [AI_BUILDS.slice(0, half), AI_BUILDS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the funnel thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Meta and Google Ads, CRM and AI results, with the screenshots." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((src, i) => (
              <span key={i} className="bento__shot bento__shot--case">
                <img src={src} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="9 years turning marketing into revenue, from Manila to the US." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* AI builds: the systems from the Projects tree, two chip rows
          scrolling against each other. */}
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="AI Automation" desc="Systems that answer, qualify and route leads on their own." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status="live">
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Google Ads & Analytics certified since 2017." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/icons/googleads-color.svg" alt="" width={56} height={56} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Employee of the Year 2025
          </span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Full-stack growth for B2B and B2C brands." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/results" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Testimonials" desc="What clients and partners say." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...REVIEWS, ...REVIEWS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Quotes size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
