import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { civilSocietyImage } from '../data/images.js'

const categories = ['NGOs', 'Universities & colleges', 'Research institutions', 'Religious organisations', 'Youth organisations', "Women's organisations", 'Media organisations', 'Community organisations']

const sampleExperts = [
  { name: 'Dr. A. Rahman', focus: 'Conflict Studies' },
  { name: 'Prof. S. Kazmi', focus: 'Psychology' },
  { name: 'Dr. F. Bhatti', focus: 'Sociology' },
  { name: 'M. Soomro, Researcher', focus: 'Digital Extremism' },
]

export default function CivilSociety() {
  const [active, setActive] = useState(categories[0])

  return (
    <>
      <PageHero
        eyebrow="Civil Society & Academic Network"
        title="A partner directory, and a path to evidence-based policy."
        lede="NGOs, universities and community organisations can register, submit projects, find funding opportunities and participate in consultations here."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <figure className="media-figure section-photo">
              <img src={civilSocietyImage.src} alt={civilSocietyImage.caption} loading="lazy" />
              <figcaption>{civilSocietyImage.caption}</figcaption>
            </figure>
            <div className="section-head">
              <div className="eyebrow">CVE Partner Directory</div>
              <h2>Browse by category</h2>
            </div>
            <div className="chip-row">
              {categories.map((c) => (
                <button key={c} className={`chip ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
                  {c}
                </button>
              ))}
            </div>
            <div className="pub-empty" style={{ marginTop: '20px' }}>
              No organisations registered under "{active}" yet — this directory populates as partners sign up.
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Sindh CVE Academic Network</div>
              <h2>Expert directory</h2>
              <p>Sample entries — replace with real registered researchers once the network is live.</p>
            </div>
            <div className="expert-grid">
              {sampleExperts.map((e) => (
                <div className="expert-card" key={e.name}>
                  <div className="expert-name">{e.name}</div>
                  <div className="expert-focus">{e.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
