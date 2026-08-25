import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import Gallery from '../components/Gallery.jsx'
import { heroImage, homeGallery } from '../data/images.js'
import { pillars } from '../data/pillars.js'

const HOW_IT_WORKS = [
  {
    tag: 'Intake',
    text: "A concern is raised through the Report / Seek Help portal, by phone, or through a district focal person — emergency and non-emergency pathways are kept separate from the start.",
  },
  {
    tag: 'Referral',
    text: 'The case is routed to the right track — law enforcement for imminent threats, or the Centre for prevention, counselling and community support.',
  },
  {
    tag: 'Support',
    text: 'A confidential plan is built together, drawing on counselling, training, education or livelihood support depending on what is needed.',
  },
  {
    tag: 'Follow-up',
    text: "District focal persons and local peace committees stay in touch, checking on progress and easing reintegration into community life.",
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Government of Sindh · Home Department</div>
            <h1>Building a peaceful, inclusive and resilient Sindh.</h1>
            <p className="lede">
              A public awareness portal, research hub, stakeholder coordination platform and referral
              mechanism supporting the province's prevention and countering-violent-extremism strategy
              — prevention and community partnership first, not just law enforcement.
            </p>
            <div className="hero-ctas">
              <Link to="/strategy" className="btn-primary">Explore the CVE Strategy →</Link>
              <Link to="/report" className="btn-ghost">Report or seek help</Link>
            </div>
          </div>
          <div>
            <figure className="media-figure hero-photo">
              <img src={heroImage.src} alt={heroImage.caption} loading="lazy" />
              <figcaption>{heroImage.caption}</figcaption>
            </figure>
            <div className="hero-panel">
              <div className="panel-label">Provincial framework, at a glance</div>
              <div className="stat-row"><span>Strategic pillars</span><span className="num"><AnimatedCounter value={6} /></span></div>
              <div className="stat-row"><span>Districts covered</span><span className="num"><AnimatedCounter value={29} /></span></div>
              <div className="stat-row"><span>Sample programs live</span><span className="num"><AnimatedCounter value={15} suffix="+" /></span></div>
              <div className="stat-row"><span>Portal languages</span><span className="num">EN · UR · SD</span></div>
              <p className="hero-note">
                The Centre was approved by the Sindh Cabinet under the Home Department following passage
                of the Sindh Centre of Excellence on Countering Violent Extremism Act, 2025, and is
                designed to work alongside the province's anti-terrorism courts and FATF-related
                coordination — as a research and prevention body, not a policing one. Figures above are
                illustrative sample counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Find your way in</div>
              <h2>One ecosystem, many entry points.</h2>
              <p>Policy → research → prevention → education → community → youth → digital resilience → rehabilitation → coordination → monitoring.</p>
            </div>
            <div className="link-grid">
              <Link to="/about" className="link-card"><h4>About CVE Sindh</h4><p>Mandate, legal framework, governance.</p></Link>
              <Link to="/strategy" className="link-card"><h4>CVE Strategy</h4><p>Six pillars, vision to results.</p></Link>
              <Link to="/research" className="link-card"><h4>Research &amp; Knowledge Hub</h4><p>Filterable publications and district profiles.</p></Link>
              <Link to="/districts" className="link-card"><h4>District Portal</h4><p>Sindh → Division → District.</p></Link>
              <Link to="/youth" className="link-card"><h4>Youth Portal</h4><p>Peace Ambassador Program &amp; training.</p></Link>
              <Link to="/education" className="link-card"><h4>Education Portal</h4><p>Schools, universities, teacher resources.</p></Link>
              <Link to="/digital-resilience" className="link-card"><h4>Digital Resilience</h4><p>Online safety &amp; a "is this reliable" checker.</p></Link>
              <Link to="/community-women" className="link-card"><h4>Community &amp; Women</h4><p>Religious leaders, women, parents.</p></Link>
              <Link to="/rehabilitation" className="link-card"><h4>Rehabilitation</h4><p>Counselling, reintegration, support.</p></Link>
              <Link to="/civil-society" className="link-card"><h4>Civil Society &amp; Academia</h4><p>Partner directory, expert network.</p></Link>
              <Link to="/media" className="link-card"><h4>Media Centre</h4><p>News, resources, responsible reporting.</p></Link>
              <Link to="/dashboard" className="link-card"><h4>CVE Dashboard</h4><p>Provincial indicators &amp; KPIs.</p></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Why this Centre exists</div>
              <h2>Prevention first, coordination throughout.</h2>
              <p>
                The Centre was established under the Home Department after the Sindh Centre of Excellence
                on Countering Violent Extremism Act, 2025 was enacted, giving Sindh a dedicated, research-led
                body for preventing violent extremism, terrorism and subversive activity — rather than
                treating prevention as a side task for enforcement agencies. It works alongside national
                frameworks, including NACTA's National Prevention of Violent Extremism Policy 2024 and the
                Revised National Action Plan, and translates them into province-specific programs across six
                strategic pillars, from early prevention and digital literacy to rehabilitation and
                interdepartmental governance.
              </p>
            </div>
            <div className="flow-strip">
              {pillars.map((p, i, arr) => (
                <span key={p.num}>
                  {p.title}
                  {i < arr.length - 1 && <em>→</em>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Getting support</div>
              <h2>How it works, end to end.</h2>
              <p>
                Whether someone is reporting a concern, seeking help for themselves, or referring a family
                member, cases move through the same four stages — kept confidential and separate from
                unrelated law-enforcement processes wherever possible.
              </p>
            </div>
            <div className="story-grid">
              {HOW_IT_WORKS.map((step) => (
                <div className="story-card" key={step.tag}>
                  <div className="story-tag">{step.tag}</div>
                  <p>{step.text}</p>
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
              <div className="eyebrow">Across the province</div>
              <h2>Prevention work, in pictures.</h2>
              <p>
                Real, freely-licensed reference photos of Sindh — from the Karachi skyline to Sukkur
                Barrage and the province's Ajrak textile tradition — not photos of the Centre's own
                programs, and credited to their Wikimedia Commons sources throughout. They stand in for
                the people, places and campuses the Centre's prevention, education and community work
                actually reaches, until the Centre's own program photography is available.
              </p>
            </div>
            <Gallery images={homeGallery} />
          </div>
        </Reveal>
      </section>
    </>
  )
}
