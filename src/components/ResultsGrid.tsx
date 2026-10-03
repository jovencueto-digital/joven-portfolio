import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'
import { cases } from '@/data/cases'

/**
 * Client Results - stands in for testimonials until real client quotes are
 * added. Every card is a real result: the numbers come from the screenshots
 * in public/work/ (see src/data/cases.ts). Do not add invented quotes here.
 */
export default function ResultsGrid() {
  return (
    <section className="pgrid rgrid" aria-labelledby="results-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Client Results</span>
        <h1 className="pgrid__title" id="results-title">
          The numbers speak first.
        </h1>
        <p className="pgrid__lede">
          Results pulled straight from the ad accounts and CRMs I run. Client names are withheld where agreements require it.
        </p>
      </header>

      <div className="home__glass rgrid__glass">
        <ul className="rgrid__list" role="list">
          {cases.map((c) => (
            <li key={c.id} className="rgrid__card">
              <span className="case__kicker">{c.kicker}</span>
              <span className="rgrid__big">{c.metrics[0].value}</span>
              <span className="rgrid__big-label">{c.metrics[0].label}</span>
              <span className="rgrid__title">{c.title}</span>
              <span className="rgrid__meta">
                {c.client} · {c.period}
              </span>
              <span className="rgrid__mini">
                {c.metrics.slice(1, 3).map((m) => (
                  <span key={m.label}>
                    <b>{m.value}</b> {m.label}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <Link to="/projects" className="rgrid__more">
          See the screenshots and what I did
          <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
