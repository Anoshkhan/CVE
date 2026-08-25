import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { educationImage } from '../data/images.js'

const FAQS = [
  {
    q: 'How do teachers get access to the training modules?',
    a: "Each of the three course tiers above is available directly through this portal — a teacher can start at the Basic tier and progress at their own pace, earning a certificate at each level.",
  },
  {
    q: 'Is the training mandatory for all teachers?',
    a: "Participation is set by individual schools, colleges and universities rather than by this portal — check with your institution's administration on local requirements.",
  },
  {
    q: 'What age groups does the curriculum cover?',
    a: 'Classroom activities and peace education modules are designed to be adapted across school, college and university age groups, from basic awareness material to more advanced policy content.',
  },
  {
    q: 'Can a school request an on-site session instead of the online modules?',
    a: 'Yes — on-site sessions can be requested through a district focal person, who coordinates trainers and scheduling locally.',
  },
  {
    q: 'Where can a teacher report a concern about a student?',
    a: 'Concerns can be raised confidentially through the Report / Seek Help portal, which routes referrals to the right pathway rather than treating every concern as a security matter.',
  },
]

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <>
      <PageHero
        eyebrow="Education Portal"
        title="Schools, colleges and universities, working from the same playbook."
        lede="NACTA's policy guidelines identify education reform, teacher training, curriculum review and integration of education systems among the recommended interventions — this portal is where that plays out for Sindh."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <figure className="media-figure section-photo">
              <img src={educationImage.src} alt={educationImage.caption} loading="lazy" />
              <figcaption>{educationImage.caption}</figcaption>
            </figure>
            <div className="three-col">
              <div className="edu-card">
                <h3>Schools &amp; colleges</h3>
                <ul>
                  <li>Student resources &amp; awareness material</li>
                  <li>Classroom activities</li>
                  <li>Peace education modules</li>
                </ul>
              </div>
              <div className="edu-card">
                <h3>Universities</h3>
                <ul>
                  <li>CVE research support</li>
                  <li>Peace clubs &amp; student societies</li>
                  <li>Seminars &amp; research grants</li>
                </ul>
              </div>
              <div className="edu-card">
                <h3>Teachers &amp; trainers</h3>
                <ul>
                  <li>Recognising harmful narratives</li>
                  <li>Conflict-resolution training</li>
                  <li>Inclusive classroom practices</li>
                  <li>Digital literacy modules</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Training &amp; e-learning</div>
              <h2>A full learning-management track</h2>
              <p>Basic, intermediate and advanced course tiers, each ending in a certificate of completion.</p>
            </div>
            <div className="course-grid">
              <div className="course-tier">
                <div className="tier-label">Basic</div>
                <ul><li>Understanding violent extremism</li><li>CVE fundamentals</li><li>Social cohesion</li></ul>
              </div>
              <div className="course-tier">
                <div className="tier-label">Intermediate</div>
                <ul><li>Community resilience</li><li>Digital extremism</li><li>Conflict management</li><li>Counter-narrative development</li></ul>
              </div>
              <div className="course-tier">
                <div className="tier-label">Advanced</div>
                <ul><li>CVE policy development</li><li>Risk assessment</li><li>Program evaluation</li><li>PVE research methodology</li></ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Teacher FAQ</div>
              <h2>Common questions from teachers</h2>
              <p>A few things that come up often — reach out to a district focal person for anything not covered here.</p>
            </div>
            <div className="faq">
              {FAQS.map((item, i) => (
                <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    {item.q}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
