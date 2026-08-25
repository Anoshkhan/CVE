import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { legalFramework } from '../data/pillars.js'
import { aboutImage } from '../data/images.js'

const TIMELINE_ORDER = [
  { year: '2025', text: 'Sindh Centre of Excellence on Countering Violent Extremism Act, 2025', note: 'Establishes the Centre and its provincial mandate.' },
  { year: '2024', text: 'National Prevention of Violent Extremism Policy, approved December 2024', note: "The federal policy framework the Centre's own strategy is aligned with." },
  { year: '2021', text: 'Revised National Action Plan, 2021', note: "An earlier update to Pakistan's national counter-terrorism action plan." },
  { year: '2014', text: 'National Action Plan, 2014', note: 'The original National Action Plan the later frameworks build on.' },
]

const timeline = TIMELINE_ORDER.map(({ year, text, note }) => ({
  year,
  note,
  ...legalFramework.find((item) => item.text === text),
}))

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About CVE Sindh"
        title="A research-based Centre, not a routine government office."
        lede="Modelled on the approach taken in Punjab and Khyber Pakhtunkhwa's own Centres of Excellence, the Sindh Centre works through research, policy formulation, community engagement, training and evidence-based interventions rather than enforcement alone."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap about-grid">
            <div>
              <figure className="media-figure section-photo">
                <img src={aboutImage.src} alt={aboutImage.caption} loading="lazy" />
                <figcaption>{aboutImage.caption}</figcaption>
              </figure>
              <h3>Mandate</h3>
              <p>
                Established under the Home Department after the Sindh Centre of Excellence on Countering
                Violent Extremism Act, 2025 was enacted, the Centre is tasked with preventing violent
                extremism, terrorism, militancy and subversive activity across the province — including
                support to FATF-related terror-financing work and countering online radicalisation, hate
                speech and disinformation.
              </p>
              <h3 style={{ marginTop: '26px' }}>Approach</h3>
              <p>
                The Centre's own framing, echoed by counterpart bodies in other provinces, is that
                changing a culture of violence into a culture of tolerance requires unity of purpose
                across government, civil society, religious leadership, youth and communities — not a
                single department acting alone.
              </p>
              <h3 style={{ marginTop: '26px' }}>Organisational structure</h3>
              <p>
                A governing body, a Director/CEO and a network of district focal persons carry that
                structure from the provincial level down to every district — see Governance below.
              </p>
            </div>
            <div>
              <h3>Legal &amp; policy framework</h3>
              <ul className="legal-list">
                {legalFramework.map((item) => (
                  <li key={item.text}>
                    <span className="tag">{item.tag}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Governance</div>
              <h2>Who runs the Centre</h2>
              <p>A governing body oversees the Centre, with a Director/CEO leading day-to-day operations and district focal persons carrying that structure into every district.</p>
            </div>
            <div className="three-col">
              <div className="edu-card">
                <h3>Governing Body</h3>
                <ul>
                  <li>Sets strategic direction for the Centre</li>
                  <li>Approves the annual program of work</li>
                  <li>Reviews performance against provincial KPIs</li>
                </ul>
              </div>
              <div className="edu-card">
                <h3>Director / CEO</h3>
                <ul>
                  <li>Leads day-to-day operations</li>
                  <li>Coordinates research, community engagement, training and monitoring wings</li>
                  <li>Reports back to the governing body</li>
                </ul>
              </div>
              <div className="edu-card">
                <h3>District Focal Persons</h3>
                <ul>
                  <li>Local point of contact in each district</li>
                  <li>Connect the provincial Centre to peace committees and stakeholders</li>
                  <li>Route referrals from Report / Seek Help</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Legal foundations</div>
              <h2>From national policy to a provincial Act</h2>
              <p>The 2025 Act didn't appear in isolation — it sits on top of a lineage of national counter-terrorism and prevention frameworks the Centre continues to work within.</p>
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline-item" key={item.text}>
                  <div className="timeline-year">{item.year} · {item.tag}</div>
                  <h4>{item.text}</h4>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Contact</div>
              <h2>Reach the Centre</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-card"><h4>General enquiries</h4><p>info@cvesindh.gov.pk (placeholder)</p></div>
              <div className="contact-card"><h4>Media &amp; press</h4><p>media@cvesindh.gov.pk (placeholder)</p></div>
              <div className="contact-card"><h4>Partnerships</h4><p>partners@cvesindh.gov.pk (placeholder)</p></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
