import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/strategy', label: 'Strategy' },
  { to: '/research', label: 'Research' },
  { to: '/districts', label: 'Districts' },
  { to: '/youth', label: 'Youth' },
  { to: '/education', label: 'Education' },
  { to: '/digital-resilience', label: 'Digital Resilience' },
  { to: '/community-women', label: 'Community & Women' },
  { to: '/rehabilitation', label: 'Rehabilitation' },
  { to: '/civil-society', label: 'Civil Society' },
  { to: '/media', label: 'Media' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="wrap nav-row">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 21 6.5V12C21 16.9 17.4 21.2 12 22.5 6.6 21.2 3 16.9 3 12V6.5L12 2Z"
                style={{ stroke: 'var(--sand)' }}
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          </div>
          <div className="brand-text">
            CVE Sindh
            <small>Centre of Excellence · Home Department</small>
          </div>
        </NavLink>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          {open ? '✕' : '☰'}
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle">
            <button className="active">EN</button>
            <button>اردو</button>
            <button>سنڌي</button>
          </div>
          <NavLink to="/report" className="help-btn">
            Report / Seek Help
          </NavLink>
        </div>
      </div>
      <div className="ajrak-rule"></div>
    </header>
  )
}
