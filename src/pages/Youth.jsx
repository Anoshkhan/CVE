import { Fragment, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Gallery from '../components/Gallery.jsx'
import { youthImages } from '../data/images.js'
import { districts } from '../data/districts.js'

const INTEREST_AREAS = [
  'Training & certification',
  'Volunteer & community activities',
  'Digital peace campaigns',
  'Leadership & scholarships',
  'Peace clubs & university partnerships',
]

const STEPS = ['Details', 'District & interest', 'Review', 'Registered']

const EMPTY_FORM = { name: '', institution: '', district: districts[0].name, interest: INTEREST_AREAS[0] }

export default function Youth() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(EMPTY_FORM)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function startOver() {
    setForm(EMPTY_FORM)
    setStep(0)
  }

  const canContinueDetails = form.name.trim() && form.institution.trim()

  return (
    <>
      <PageHero
        eyebrow="Youth Portal"
        title="Role of youth for peace."
        lede="Leadership, scholarships, internships, peace clubs and university partnerships — built around what young people already do, not around a security framing."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap two-col">
            <div className="feature-card">
              <h3>Sindh Youth Peace Ambassador Program</h3>
              <p>A registration-based track for young people to use digital media positively and build awareness against online hate and violence.</p>
              <ul>
                <li>Registration &amp; onboarding</li>
                <li>Training modules &amp; certification</li>
                <li>Volunteer &amp; community activities</li>
                <li>Digital peace campaigns</li>
              </ul>
              <a href="#register" className="btn-ghost">Register interest</a>
            </div>
            <div className="feature-card light">
              <h3>Opportunities on offer</h3>
              <p>Across universities, colleges and community groups.</p>
              <ul>
                <li>Youth leadership programs &amp; scholarships</li>
                <li>Internships with the Centre and partner organisations</li>
                <li>Peace clubs &amp; university partnerships</li>
                <li>Debate, art and digital-literacy competitions</li>
                <li>Entrepreneurship &amp; volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="register">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Register interest</div>
              <h2>Join the Peace Ambassador Program</h2>
              <p>A short demo of the registration flow — nothing entered here is submitted anywhere real.</p>
            </div>
            <div className="verify-tool" style={{ maxWidth: '640px' }}>
              <div className="verify-steps">
                {STEPS.map((s, i, arr) => (
                  <Fragment key={s}>
                    <span className={i === step ? 'current' : ''}>{s}</span>
                    {i < arr.length - 1 && <span className="arrow">→</span>}
                  </Fragment>
                ))}
              </div>

              {step === 0 && (
                <div className="reg-step">
                  <label>
                    Full name
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Institution
                    <input
                      type="text"
                      value={form.institution}
                      onChange={(e) => update('institution', e.target.value)}
                      placeholder="School, college or university"
                    />
                  </label>
                  <div className="reg-actions">
                    <span />
                    <button className="btn-primary" disabled={!canContinueDetails} onClick={() => setStep(1)}>
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="reg-step">
                  <label>
                    District
                    <select value={form.district} onChange={(e) => update('district', e.target.value)}>
                      {districts.map((d) => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Interest area
                    <select value={form.interest} onChange={(e) => update('interest', e.target.value)}>
                      {INTEREST_AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                  <div className="reg-actions">
                    <button className="btn-ghost" onClick={() => setStep(0)}>← Back</button>
                    <button className="btn-primary" onClick={() => setStep(2)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="reg-step">
                  <div className="reg-summary">
                    <div><span>Name</span><strong>{form.name}</strong></div>
                    <div><span>Institution</span><strong>{form.institution}</strong></div>
                    <div><span>District</span><strong>{form.district}</strong></div>
                    <div><span>Interest area</span><strong>{form.interest}</strong></div>
                  </div>
                  <div className="reg-actions">
                    <button className="btn-ghost" onClick={() => setStep(1)}>← Back</button>
                    <button className="btn-primary" onClick={() => setStep(3)}>Confirm registration</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="reg-confirm">
                  <div className="reg-confirm-icon">✓</div>
                  <h3>You're registered, {form.name.trim().split(' ')[0]}.</h3>
                  <p>
                    This is a demo confirmation only — no data was submitted anywhere. In the full platform,{' '}
                    {form.institution} and the {form.district} district focal person would be notified next.
                  </p>
                  <button className="btn-ghost" onClick={startOver}>Register another interest</button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Success stories</div>
              <h2>What youth-led prevention looks like</h2>
              <p>Sample story slots — replace with real testimonials and case studies once available.</p>
            </div>
            <Gallery images={youthImages} />
          </div>
        </Reveal>
      </section>
    </>
  )
}
