import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { digitalImage } from '../data/images.js'

const VERIFY_STEPS = [
  {
    label: 'Source',
    text: 'Who is actually saying this? Check the account, page or outlet — is it a known, credible source, or an anonymous or unfamiliar one?',
  },
  {
    label: 'Evidence',
    text: 'What proof backs up the claim? Look for links, data or reporting from multiple independent sources — not just another post repeating the same claim.',
  },
  {
    label: 'Intent',
    text: 'Why was this shared? Consider whether the content is trying to inform you, or to provoke, recruit or manipulate a reaction.',
  },
  {
    label: 'Emotion',
    text: 'Notice your own reaction. Content designed to make you angry, afraid or excited spreads fastest — that feeling is often a signal to slow down, not share faster.',
  },
  {
    label: 'Verification',
    text: 'Cross-check before sharing. A quick search, a fact-checking site, or a trusted local source can confirm or debunk a claim in a minute or two.',
  },
]

export default function DigitalResilience() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [activeStep, setActiveStep] = useState(0)

  function runCheck() {
    if (!input.trim()) {
      setResult('Paste some text above, then run the check.')
      return
    }
    setResult(
      "This demo doesn't fact-check in real time — in the full platform, this step would walk the claim through Source → Evidence → Intent → Emotion → Verification and point you to trusted references before you share it further."
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Digital & Social Media Resilience"
        title="Building judgement, not just filters."
        lede="Online hate, misinformation and manipulative content spread fastest when no one stops to check. This portal teaches the habit, and gives people a place to report what they find."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap two-col">
            <div className="verify-tool">
              <h3 style={{ fontSize: '19px' }}>Is this information reliable?</h3>
              <p style={{ color: 'var(--charcoal-60)', fontSize: '14px' }}>
                A digital-literacy check anyone can run on content they've seen online, following a simple
                five-step frame.
              </p>
              <div className="verify-steps">
                {VERIFY_STEPS.map((s, i, arr) => (
                  <Fragment key={s.label}>
                    <button
                      type="button"
                      className={i === activeStep ? 'current' : ''}
                      onClick={() => setActiveStep(i)}
                      aria-pressed={i === activeStep}
                    >
                      {s.label}
                    </button>
                    {i < arr.length - 1 && <span className="arrow">→</span>}
                  </Fragment>
                ))}
              </div>
              <div className="verify-step-detail">
                <strong>{VERIFY_STEPS[activeStep].label}.</strong> {VERIFY_STEPS[activeStep].text}
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste a headline, claim, or message you're unsure about…"
              />
              <div style={{ marginTop: '12px' }}>
                <button className="btn-primary" onClick={runCheck}>
                  Run the check
                </button>
              </div>
              <div id="verify-result">{result}</div>
            </div>

            <div>
              <figure className="media-figure section-photo">
                <img src={digitalImage.src} alt={digitalImage.caption} loading="lazy" />
                <figcaption>{digitalImage.caption}</figcaption>
              </figure>
              <div className="feature-card">
                <h3>Topics this portal covers</h3>
                <ul>
                  <li>Online hate &amp; harassment</li>
                  <li>Misinformation &amp; disinformation</li>
                  <li>Manipulative content &amp; online recruitment risks</li>
                  <li>Responsible social media use &amp; digital citizenship</li>
                  <li>Fact-checking &amp; reporting harmful content</li>
                </ul>
                <Link to="/report" className="btn-ghost">Report harmful content</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
