import { Link } from 'react-router-dom'
import { Fragment, useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick, Files, ChartLineUp, AddressBook, Robot, MagnifyingGlass, Phone, FlowArrow, Brain, Lightning, ChatCircleDots, Funnel as FunnelIcon } from '@/components/slab'
import CaseStudyPanel from './CaseStudy'
import { cases, caseById, type CaseStudy } from '@/data/cases'
import { useIsPhone } from '@/hooks/useMediaQuery'

/**
 * Projects, as one viewport in Home's bento language: a glass panel of six
 * cards, each previewing its own body of work with a live inner track, each
 * opening the work itself in a near-fullscreen dialog (see ProjectPanels for
 * the first three; the rest are the sections the long page used to stack).
 *
 * The dialog is a portal at z 8000, under the funnel preview (9000) so the
 * barrel's own "open this page" dialog can still stack on top of it.
 */
type Project = {
  id: string
  index: string
  title: string
  desc: string
  Icon: ComponentType<{ size?: number }>
  eyebrow: string
  Section: ComponentType
  span?: 2
  /** Open Builds style: a small orange kicker above the title. */
  kicker?: string
  /** Real marks of what the work was built in; replaces the icon tile. */
  logos?: string[]
  Preview: ComponentType
  /** Phone filter bucket. */
  cat: Cat
}

type Cat = 'ads' | 'crm' | 'ai'
const FILTERS: { key: Cat | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'ads', label: 'Ads' },
  { key: 'crm', label: 'CRM' },
  { key: 'ai', label: 'AI' },
]

/** A dialog with one tab per case study. */
function CaseTabs({ ids }: { ids: string[] }) {
  const list = ids.map(caseById)
  const [active, setActive] = useState(list[0].id)
  const c = list.find((x) => x.id === active)!
  return (
    <div className="ppanel" style={{ gap: 12 }}>
      <div className="ppanel__tabs" role="tablist">
        {list.map((x) => (
          <button key={x.id} type="button" role="tab" className="ppanel__tab" aria-selected={x.id === active} onClick={() => setActive(x.id)}>
            {x.title}
          </button>
        ))}
      </div>
      <CaseStudyPanel c={c} />
    </div>
  )
}

const one = (id: string) => () => <CaseStudyPanel c={caseById(id)} />

const ADS = cases.filter((c) => c.cat === 'ads').map((c) => c.id)
const AI = cases.filter((c) => c.cat === 'ai').map((c) => c.id)
const AdsPanel = () => <CaseTabs ids={ADS} />
const AIPanel = () => <CaseTabs ids={AI} />

/** The three featured results: each its own card in the stack. */
const FEATURED = ['meta-funding', 'gads-roas', 'meta-bh-capital']
const BUILDS: Project[] = FEATURED.map((id, i) => {
  const c: CaseStudy = caseById(id)
  return { id: c.id, cat: c.cat, index: String(i + 3).padStart(2, '0'), kicker: c.kicker, title: c.title, desc: c.summary, Icon: () => <ChartLineUp size={20} weight="duotone" />, logos: c.logos, eyebrow: 'Featured result', Section: one(c.id), Preview: () => null }
})

/* ---------- Previews ---------- */

const AD_SHOTS = ADS.flatMap((id) => caseById(id).shots.map((s) => s.src))

function AdsPreview() {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track">
        {[...AD_SHOTS, ...AD_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot bento__shot--case">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

function ShotPreview({ src }: { src: string }) {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track" style={{ animation: 'none' }}>
        <span className="bento__shot bento__shot--case">
          <img src={src} alt="" loading="lazy" decoding="async" />
        </span>
      </div>
    </div>
  )
}

const AI_CHIPS = [
  { name: 'AI voice agent', Icon: Phone },
  { name: 'Lead routing', Icon: FlowArrow },
  { name: 'n8n workflows', Icon: Lightning },
  { name: 'Claude + OpenAI', Icon: Brain },
  { name: 'Web chat widget', Icon: ChatCircleDots },
  { name: 'Lead magnets', Icon: FunnelIcon },
  { name: 'CRM automation', Icon: AddressBook },
  { name: 'MCP integrations', Icon: Robot },
]

function AIPreview() {
  const half = Math.ceil(AI_CHIPS.length / 2)
  const rows = [AI_CHIPS.slice(0, half), AI_CHIPS.slice(half)]
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
          <div className="bento__chip-track">
            {[...row, ...row].map((n, i) => (
              <span key={`${n.name}-${i}`} className="bento__chip" data-status="live">
                <n.Icon size={15} weight="duotone" />
                {n.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const GHL = '/icons/gohighlevel.png'
const N8N = '/icons/n8n.svg'

const PROJECTS: Project[] = [
  { id: 'ads', cat: 'ads', index: '01', title: 'Paid ads results', desc: 'Meta and Google Ads campaigns: leads, ROAS and scale, straight from the ad accounts.', Icon: ChartLineUp, logos: ['/icons/meta.svg', '/icons/googleads.svg'], eyebrow: 'Ads', Section: AdsPanel, span: 2, Preview: AdsPreview },
  { id: 'plan', cat: 'crm', index: '02', title: 'CRM & pipeline', desc: caseById('crm').summary, Icon: AddressBook, logos: [GHL], eyebrow: 'CRM', Section: one('crm'), Preview: () => <ShotPreview src="/work/crm-database.webp" /> },
  { id: 'ai', cat: 'ai', index: '06', title: 'AI & automation', desc: 'Voice agents, self-routing lead magnets and CRM workflows that run without manual work.', Icon: Robot, logos: [GHL, N8N], eyebrow: 'AI systems', Section: AIPanel, Preview: AIPreview },
  { id: 'workflow', cat: 'ai', index: '07', title: 'Self-routing lead magnet', desc: caseById('workflow').summary, Icon: FlowArrow, logos: [GHL], eyebrow: 'Automation', Section: one('workflow'), Preview: () => <ShotPreview src="/work/workflow-lead-magnet.webp" /> },
  { id: 'gads', cat: 'ads', index: '08', title: 'Google Ads at scale', desc: caseById('gads-scale').summary, Icon: MagnifyingGlass, logos: ['/icons/googleads.svg'], eyebrow: 'Google Ads', Section: one('gads-scale'), span: 2, Preview: () => <ShotPreview src="/work/gads-scale.webp" /> },
]

/** The icon tile, or the real marks stacked horizontally in its place. */
function Marks({ p, size = 22 }: { p: Project; size?: number }) {
  if (!p.logos?.length) {
    return (
      <span className="bento__icon">
        <p.Icon size={size} />
      </span>
    )
  }
  return (
    <span className="bento__logos" aria-hidden="true">
      {p.logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- Dialog ----------
   A backdrop, a close button in the corner, and the work. No panel, no
   header: each Section brings its own window (or, for the strip, none). */
function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

/* ---------- The page ---------- */

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const phone = useIsPhone()
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const keep = (p: Project) => !phone || cat === 'all' || p.cat === cat
  const projects = PROJECTS.filter(keep)
  const builds = BUILDS.filter(keep)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const stack = builds.length > 0 ? (
    <div className="bento__stack">

        {builds.map((b) => (

          <button

            key={b.id}

            type="button"

            className="bento__card bento__card--btn bento__card--build"

            onClick={(e) => show(b, e.currentTarget)}

            aria-haspopup="dialog"

          >

            <span className="bento__build-plate">

              {b.logos?.length ? <img src={b.logos[0]} alt="" width={22} height={22} /> : <b.Icon />}

            </span>

            <span className="bento__build-text">

              <span className="bento__kicker">{b.kicker}</span>

              <span className="bento__build-title">{b.title}</span>

              <span className="bento__build-desc">{b.desc}</span>

            </span>

            <span className="bento__build-arrow">

              <ArrowUpRight size={13} weight="bold" aria-hidden="true" />

            </span>

          </button>

        ))}

      </div>
  ) : null

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Real campaigns. Real numbers.
        </h1>
        <p className="pgrid__lede">Results from my ad accounts, CRMs and automations. Open a card to see the screenshots and what I did.</p>
        <Link to="/reports" className="intro-btn" style={{ marginTop: 10 }}>
          <span className="intro-btn__icon" aria-hidden="true"><Files size={14} weight="fill" /></span>
          Read my reports & case studies
        </Link>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="pfilter__btn"
              aria-pressed={cat === f.key}
              onClick={() => setCat(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        {/* Hung on the sheet's top edge so it reads as a tag on the container,
            not a seventh card. aria-hidden: the lede already says it. */}
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {projects.map((p) => (
            <Fragment key={p.id}>
            <button
              type="button"
              className={`bento__card bento__card--btn${p.span === 2 ? ' bento__card--wide' : ''}`}
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <Marks p={p} />
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.desc}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              <p.Preview />
            </button>
            {p.id === 'plan' && stack}
            </Fragment>
          ))}
          {!projects.some((p) => p.id === 'plan') && stack}
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
