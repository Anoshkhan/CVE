import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { pillars } from '../data/pillars.js'

export default function Strategy() {
  return (
    <>
      <PageHero
        eyebrow="Sindh CVE Strategy"
        title="Six pillars, one framework."
        lede="Vision → strategic objectives → pillars → programs → KPIs → results. Each pillar below links prevention work happening across Sindh's districts to the province's monitoring dashboard."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="flow-strip">
              {['Vision', 'Strategic objectives', 'Pillars', 'Programs', 'KPIs', 'Results'].map((step, i, arr) => (
                <span key={step}>
                  {step}
                  {i < arr.length - 1 && <em>→</em>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <div className="wrap">
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 80} as="div" className="pillar">
                <div className="pnum">Pillar {p.num}</div>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="pillar-practice">{p.practice}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
