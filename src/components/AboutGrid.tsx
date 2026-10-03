import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const I = (f: string, name: string) => ({ src: `/icons/${f}`, name })
const META = I('meta-color.svg', 'Meta Ads')
const GADS = I('googleads-color.svg', 'Google Ads')
const SEMRUSH = I('semrush-color.svg', 'Semrush')
const AHREFS = I('ahrefs-mark.svg', 'Ahrefs')
const FROG = I('screamingfrog-mark.svg', 'Screaming Frog')
const N8N = I('ai/n8n.svg', 'n8n')
const CLAUDE = I('ai/claude-color.svg', 'Claude')
const GHL = I('gohighlevel.png', 'GoHighLevel')
const SF = I('salesforce-mark.svg', 'Salesforce')
const HUBSPOT = I('hubspot-color.svg', 'HubSpot')
const MONDAY = I('monday-mark.svg', 'Monday.com')

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Paid ads that bring in leads', marks: [META, GADS] },
  { index: '02', title: 'SEO, AEO and GEO', marks: [SEMRUSH, AHREFS, FROG] },
  { index: '03', title: 'AI automation and agents', marks: [N8N, CLAUDE, GHL] },
  { index: '04', title: 'CRM and sales pipelines', marks: [GHL, SF, HUBSPOT, MONDAY] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Digital marketing and growth strategist. Nine years, B2B and B2C, US and Asia.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Leads are easy. Revenue is the job.
            <span> I build marketing that hands sales a deal, not just a name.</span>
          </p>

          <p className="agrid__note">
            <strong>Vice President, Blue Harbor Group</strong> - Blue Harbor Capital Holdings and
            Blue Harbor Enterprise. I rose from Assistant Marketing Manager to Chief Sales Officer in
            six months, then to VP, and I lead marketing and sales as one revenue team. Before that I
            ran marketing as a Marketing Director, CMO and SEO lead for brands in e-commerce,
            fintech, energy and entertainment.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/icons/googleads-color.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Google Ads & Analytics</span>
                <span className="agrid__cell-meta">Certified since 2017</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · works with US teams</span>
              </span>
            </span>

            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/photos/medal.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Employee of the Year 2025 · Blue Harbor Media</span>
                <span className="agrid__cell-meta">BBA, De La Salle-College of Saint Benilde</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/photos/joven-laptop.webp"
            alt="Joven Cueto working at his laptop"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
