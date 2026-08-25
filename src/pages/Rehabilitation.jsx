import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { rehabImage } from '../data/images.js'

export default function Rehabilitation() {
  return (
    <>
      <PageHero
        eyebrow="Rehabilitation & Reintegration"
        title="Rehabilitation, reintegration and renunciation."
        lede="Aligned with Pakistan's counter-extremism policy framework, this portal focuses on the practical steps that help someone come back into community life — not on punishment."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <figure className="media-figure section-photo">
              <img src={rehabImage.src} alt={rehabImage.caption} loading="lazy" />
              <figcaption>{rehabImage.caption}</figcaption>
            </figure>
            <div className="three-col">
              <div className="edu-card">
                <h3>Psychological support</h3>
                <ul><li>Counselling</li><li>Family support</li></ul>
              </div>
              <div className="edu-card">
                <h3>Skills &amp; livelihood</h3>
                <ul><li>Vocational training</li><li>Education support</li><li>Employment linkages</li></ul>
              </div>
              <div className="edu-card">
                <h3>Community acceptance</h3>
                <ul><li>Reintegration support</li><li>Community-level mediation</li></ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Getting started</div>
              <h2>How referral works</h2>
              <p>Referrals can come from family, community leaders, schools or self-referral — always handled confidentially.</p>
            </div>
            <div className="story-grid">
              <div className="story-card"><div className="story-tag">Step 1</div><p>A referral is made through the Report / Seek Help portal, by phone, or through a district focal person.</p></div>
              <div className="story-card"><div className="story-tag">Step 2</div><p>An initial, confidential conversation identifies what kind of support is needed.</p></div>
              <div className="story-card"><div className="story-tag">Step 3</div><p>A support plan is built together — counselling, training, education, or family support.</p></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
