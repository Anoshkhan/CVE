import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { districts, divisionOrder } from '../data/districts.js'
import { districtImages } from '../data/images.js'

const REAL_PHOTO_DISTRICTS = new Set([
  'Karachi South', 'Karachi Central', 'Karachi East', 'Karachi West', 'Korangi', 'Malir', 'Keamari',
  'Sukkur',
])

export default function Districts() {
  const [active, setActive] = useState(districts[0].name)
  const [query, setQuery] = useState('')
  const d = districts.find((district) => district.name === active)
  const hasRealPhoto = REAL_PHOTO_DISTRICTS.has(d.name)
  const photoCaption = hasRealPhoto
    ? `${d.name} district — real photograph`
    : `Representative Sindh imagery (Ajrak textile) — not specific to ${d.name}`

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = q ? districts.filter((district) => district.name.toLowerCase().includes(q)) : districts
    return divisionOrder
      .map((division) => ({ division, items: filtered.filter((district) => district.division === division) }))
      .filter((group) => group.items.length > 0)
  }, [query])

  return (
    <>
      <PageHero
        eyebrow="District-wise CVE Portal"
        title="Sindh → Division → District."
        lede="All 30 of Sindh's districts get their own profile, focal person and non-sensitive indicators — so the platform serves the whole province, not just Karachi."
      />

      <section className="alt">
        <Reveal>
          <div className="wrap district-layout">
            <div>
              <div className="district-search">
                <input
                  type="text"
                  placeholder="Search districts…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search districts"
                />
              </div>
              <div className="district-list">
                {grouped.length === 0 && (
                  <div className="pub-empty">No district matches "{query}".</div>
                )}
                {grouped.map((group) => (
                  <div className="district-group" key={group.division}>
                    <div className="district-group-label">{group.division}</div>
                    {group.items.map((district) => (
                      <button
                        key={district.name}
                        className={district.name === active ? 'active' : ''}
                        onClick={() => setActive(district.name)}
                      >
                        {district.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="district-panel">
              <figure className="media-figure district-photo">
                <img src={districtImages[d.name] || districtImages.DEFAULT} alt={photoCaption} loading="lazy" />
                <figcaption>{photoCaption}</figcaption>
              </figure>
              <h3>{d.name}</h3>
              <div className="div-of">{d.division} · Sindh</div>
              <div className="indicator-grid">
                {Object.entries(d.indicators).map(([k, v]) => (
                  <div className="indicator" key={k}>
                    <span>{k}</span>
                    <span className="val">{v}</span>
                  </div>
                ))}
                <div className="indicator">
                  <span>Focal person</span>
                  <span className="val">{d.focalPerson}</span>
                </div>
              </div>
              <span className="sample-flag">Illustrative sample indicators — non-sensitive, aggregated only</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
