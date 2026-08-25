import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { publications, districtNames, themes, years, types } from '../data/publications.js'

export default function Research() {
  const [district, setDistrict] = useState('')
  const [theme, setTheme] = useState('')
  const [year, setYear] = useState('')
  const [type, setType] = useState('')

  const filtered = useMemo(
    () =>
      publications.filter(
        (p) =>
          (!district || p.district === district) &&
          (!theme || p.theme === theme) &&
          (!year || p.year === year) &&
          (!type || p.type === type)
      ),
    [district, theme, year, type]
  )

  return (
    <>
      <PageHero
        eyebrow="Research & Knowledge Hub"
        title="A genuine repository, not another information portal."
        lede="Filter research and publications by district, theme, year and target group. This is a working demo — try the filters below."
      />

      <section className="alt">
        <Reveal>
        <div className="wrap">
          <div className="filter-bar">
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value="">District — any</option>
              {districtNames.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="">Theme — any</option>
              {themes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Year — any</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Publication type — any</option>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="pub-grid">
            {filtered.length ? (
              filtered.map((p) => (
                <div className="pub-card" key={p.title}>
                  <div className="meta">{p.type} · {p.district} · {p.year}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))
            ) : (
              <div className="pub-empty">No sample publications match that combination yet — try a different filter.</div>
            )}
          </div>
        </div>
        </Reveal>
      </section>
    </>
  )
}
