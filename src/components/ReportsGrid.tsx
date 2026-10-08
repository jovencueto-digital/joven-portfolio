import { useState } from 'react'
import { ArrowUpRight, FileText, Table, CheckCircle } from '@/components/slab'
import { docs, type DocField } from '@/data/docs'

/**
 * Reports & Case Studies - documents Joven wrote himself, each card linking to
 * the original Google Doc or Sheet. Data lives in src/data/docs.ts.
 */
const FILTERS: (DocField | 'All')[] = ['All', 'SEO', 'Paid Ads']

export default function ReportsGrid() {
  const [field, setField] = useState<DocField | 'All'>('All')
  const list = docs.filter((d) => field === 'All' || d.field === field)

  return (
    <section className="pgrid dgrid" aria-labelledby="reports-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Reports & Case Studies</span>
        <h1 className="pgrid__title" id="reports-title">
          The work behind the results.
        </h1>
        <p className="pgrid__lede">
          Audits, strategies, reports and proposals I wrote for clients. Open any card to read the original document.
        </p>
      </header>

      <div className="pfilter dgrid__filter" role="group" aria-label="Filter documents">
        {FILTERS.map((f) => (
          <button key={f} type="button" className="pfilter__btn" aria-pressed={field === f} onClick={() => setField(f)}>
            {f}
            <span className="dgrid__count">{f === 'All' ? docs.length : docs.filter((d) => d.field === f).length}</span>
          </button>
        ))}
      </div>

      <div className="home__glass dgrid__glass">
        <ul className="dgrid__list" role="list">
          {list.map((d) => {
            const Icon = d.format === 'Google Sheet' ? Table : FileText
            return (
              <li key={d.href}>
                <a className="dgrid__card" href={d.href} target="_blank" rel="noopener noreferrer">
                  <span className="dgrid__top">
                    <span className={`dgrid__file dgrid__file--${d.format === 'Google Sheet' ? 'sheet' : 'doc'}`} aria-hidden="true">
                      <Icon size={20} weight="duotone" />
                    </span>
                    <span className="dgrid__tags">
                      <span className="dgrid__kind">{d.kind}</span>
                      <span className="dgrid__field">{d.field}</span>
                    </span>
                  </span>
                  <span className="dgrid__client">
                    {d.client}
                    {d.year ? ` · ${d.year}` : ''}
                  </span>
                  <span className="dgrid__title">{d.title}</span>
                  <span className="dgrid__summary">{d.summary}</span>
                  <ul className="dgrid__points" role="list">
                    {d.points.map((p) => (
                      <li key={p}>
                        <CheckCircle size={14} weight="duotone" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="dgrid__open">
                    Open {d.format}
                    <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
