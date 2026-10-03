import type { CaseStudy } from '@/data/cases'

/** One case study in a mac window: screenshot(s) on the left, the story and
 *  the numbers on the right. Used by the Projects dialogs. */
export default function CaseStudyPanel({ c }: { c: CaseStudy }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{c.client}</span>
          <span>&nbsp;· {c.period}</span>
        </span>
      </div>
      <div className="ppanel__scroll">
        <article className="case">
          <div className="case__shots">
            {c.shots.map((s) => (
              <a key={s.src} href={s.src} target="_blank" rel="noreferrer" className="case__shot">
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
          <div className="case__body">
            <span className="case__kicker">{c.kicker}</span>
            <h2 className="case__title">{c.title}</h2>
            <p className="case__summary">{c.summary}</p>
            <dl className="case__metrics">
              {c.metrics.map((m) => (
                <div key={m.label} className="case__metric">
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="case__h3">What I did</h3>
            <ul className="case__did">
              {c.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  )
}
