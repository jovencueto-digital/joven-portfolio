import { Link } from 'react-router-dom'
import { ArrowUpRight, Quotes } from '@/components/slab'
import { cases } from '@/data/cases'
import { testimonials, initials } from '@/data/testimonials'

/**
 * Testimonials & Results. Quotes come from src/data/testimonials.ts (real
 * client words only); results from src/data/cases.ts (real screenshots).
 */
export default function ResultsGrid() {
  return (
    <section className="pgrid rgrid" aria-labelledby="results-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Testimonials & Results</span>
        <h1 className="pgrid__title" id="results-title">
          What clients say. What the numbers say.
        </h1>
        <p className="pgrid__lede">
          Words from the people I’ve worked with, and results pulled straight from the ad accounts and CRMs I run.
        </p>
      </header>

      <div className="home__glass rgrid__glass">
        <ul className="tgrid" role="list">
          {testimonials.map((t) => (
            <li key={t.name} className="tgrid__card">
              <Quotes size={22} weight="fill" className="tgrid__mark" aria-hidden="true" />
              <blockquote className="tgrid__quote">{t.quote}</blockquote>
              <span className="tgrid__who">
                <span className="tgrid__avatar" aria-hidden="true">{initials(t.name)}</span>
                <span>
                  <b>{t.name}</b>
                  <span className="tgrid__role">{t.role ? `${t.role}, ` : ''}{t.company}</span>
                </span>
              </span>
              <span className="tgrid__work">{t.work}</span>
            </li>
          ))}
        </ul>

        <h2 className="rgrid__h2">Results</h2>
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
