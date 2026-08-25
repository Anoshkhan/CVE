import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Gallery from '../components/Gallery.jsx'
import { communityImages } from '../data/images.js'

export default function CommunityWomen() {
  return (
    <>
      <PageHero
        eyebrow="Community, Religious Leaders & Women"
        title="Inclusion and partnership, not profiling."
        lede="This portal is built around participation, not labelling any particular community or group — religious scholars, community leaders, women and parents each have their own space here."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap two-col">
            <div className="feature-card">
              <h3>Religious &amp; community leaders</h3>
              <ul>
                <li>Training resources &amp; interfaith dialogue</li>
                <li>Community peace initiatives &amp; mediation</li>
                <li>Counter-narrative resources</li>
                <li>Friday / community awareness material</li>
              </ul>
            </div>
            <div className="feature-card light">
              <h3>Women for Peace</h3>
              <ul>
                <li>Women's leadership &amp; participation</li>
                <li>Family resilience &amp; digital safety training</li>
                <li>Community awareness programs</li>
                <li>Directory of women's organisations</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">In the community</div>
              <h2>What community-level engagement looks like</h2>
              <p>Real, credited reference photography — click to view larger.</p>
            </div>
            <Gallery images={communityImages} />
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">For parents</div>
              <h2>Talking with your child about hate, violence and online radicalisation</h2>
              <p>Plain-language guidance for parents and caregivers — not technical, not alarmist.</p>
            </div>
            <div className="story-grid">
              <div className="story-card"><div className="story-tag">Starting the conversation</div><p>How to open a conversation about something your child has seen online without shutting it down.</p></div>
              <div className="story-card"><div className="story-tag">Warning signs</div><p>General, non-alarmist signs that a young person may be encountering harmful content.</p></div>
              <div className="story-card"><div className="story-tag">Getting support</div><p>Where to go if you want to talk something through with someone at the Centre.</p></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
