import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

const kpis = [
  { label: 'Districts with active programs', value: 12, suffix: '' },
  { label: 'Youth reached', value: 8400, suffix: '+' },
  { label: 'Community leaders engaged', value: 340, suffix: '+' },
  { label: 'Research studies completed', value: 27, suffix: '' },
  { label: 'Women reached', value: 5100, suffix: '+' },
  { label: 'Teachers trained', value: 620, suffix: '+' },
  { label: 'Training completion rate', value: 87, suffix: '%' },
  { label: 'NGO participants', value: 54, suffix: '' },
]

export default function Dashboard() {
  return (
    <>
      <PageHero
        eyebrow="CVE Dashboard & Monitoring"
        title="Provincial indicators, illustrative sample."
        lede="The production dashboard is restricted to authorised officials; the figures below are placeholder sample data shown to demonstrate the layout and counting animation."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="dash-grid">
              {kpis.map((k) => (
                <div className="kpi" key={k.label}>
                  <div className="kpi-label">{k.label}</div>
                  <div className="kpi-val"><AnimatedCounter value={k.value} suffix={k.suffix} /></div>
                  <div className="kpi-delta">Sample layout only</div>
                </div>
              ))}
            </div>
            <span className="sample-flag">Real values populate once the Centre's M&amp;E data feed is connected</span>
          </div>
        </Reveal>
      </section>
    </>
  )
}
