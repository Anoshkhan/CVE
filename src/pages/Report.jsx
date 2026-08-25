import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

const options = [
  { tag: 'Emergency', title: 'Report an immediate security concern', desc: 'Routed directly to law enforcement — for imminent threats only.' },
  { tag: 'Prevention', title: 'Report harmful online content', desc: "Hate speech, recruitment material, or disinformation you've encountered." },
  { tag: 'Support', title: 'Seek assistance for myself', desc: 'Confidential, non-judgemental support and referral.' },
  { tag: 'Referral', title: 'Refer someone for support', desc: 'For family, teachers or community members raising a concern about someone else.' },
  { tag: 'Community', title: 'Request community intervention', desc: 'Local mediation or peace-committee involvement.' },
  { tag: 'Learning', title: 'Request awareness or training', desc: 'For schools, universities, or community organisations.' },
]

export default function Report() {
  return (
    <>
      <PageHero
        eyebrow="Report / Seek Help"
        title="I want to…"
        lede="Choose the option closest to your situation. We collect no unnecessary personal information."
      />

      <section className="alt">
        <Reveal>
        <div className="wrap">
          <div className="report-banner">
            <div>
              <strong>Reporting or seeking help isn't one-size-fits-all.</strong>
              <br />
              <span>Emergency and prevention pathways are kept separate on purpose.</span>
            </div>
            <div className="mono-note">
              Emergency? Call your local police first.
            </div>
          </div>

          <div className="report-grid">
            {options.map((o) => (
              <div className="report-card" key={o.title}>
                <div className="rc-icon">{o.tag}</div>
                <h4>{o.title}</h4>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>
    </>
  )
}
