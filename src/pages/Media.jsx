import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Gallery from '../components/Gallery.jsx'
import { mediaGallery } from '../data/images.js'

export default function Media() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="News, resources, and responsible-reporting guidance."
        lede="NACTA's policy framework recognises media engagement and responsible communication as an important CVE component — this Centre supports journalists directly."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap three-col">
            <div className="edu-card">
              <h3>News &amp; press</h3>
              <ul><li>Press releases</li><li>Speeches</li><li>News updates</li></ul>
            </div>
            <div className="edu-card">
              <h3>Multimedia</h3>
              <ul><li>Videos &amp; podcasts</li><li>Photo gallery</li><li>Infographics &amp; campaign materials</li></ul>
            </div>
            <div className="edu-card">
              <h3>Media resource centre</h3>
              <ul><li>Factsheets &amp; expert contacts</li><li>CVE terminology guide</li><li>Responsible-reporting guidelines</li></ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Photo gallery</div>
              <h2>Sample newsroom imagery</h2>
              <p>Click any photo to view it larger. Real, credited reference photos of Sindh — connect the Centre's own photo feed once available.</p>
            </div>
            <Gallery images={mediaGallery} />
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Latest</div>
              <h2>Sample newsroom</h2>
              <p>Placeholder entries — connect a real feed once the Centre publishes content.</p>
            </div>
            <div className="pub-grid">
              <div className="pub-card"><div className="meta">Press release · 2026</div><h4>Centre outlines district rollout plan</h4><p>Placeholder summary of a forthcoming announcement.</p></div>
              <div className="pub-card"><div className="meta">Campaign · 2026</div><h4>Digital Resilience Week launches province-wide</h4><p>Placeholder summary of a forthcoming campaign.</p></div>
              <div className="pub-card"><div className="meta">Event · 2026</div><h4>Youth Peace Ambassador cohort graduates</h4><p>Placeholder summary of a forthcoming event recap.</p></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
