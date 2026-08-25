import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>CVE Sindh</h4>
            <p className="footer-blurb">
              A provincial digital ecosystem: policy → research → prevention → education → community →
              youth → digital resilience → rehabilitation → coordination → monitoring.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About &amp; mandate</Link></li>
              <li><Link to="/strategy">Strategy &amp; pillars</Link></li>
              <li><Link to="/research">Research hub</Link></li>
              <li><Link to="/districts">District portal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get involved</h4>
            <ul>
              <li><Link to="/youth">Youth programs</Link></li>
              <li><Link to="/civil-society">Civil society &amp; NGOs</Link></li>
              <li><Link to="/education">Academic network</Link></li>
              <li><Link to="/rehabilitation">Rehabilitation support</Link></li>
            </ul>
          </div>
          <div>
            <h4>Governance</h4>
            <ul>
              <li>Privacy policy</li>
              <li>Accessibility statement</li>
              <li>Data retention policy</li>
              <li><Link to="/report">Report / seek help</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Government of Sindh · Home Department — MVP demonstration site</span>
          <span>English · اردو · سنڌي</span>
        </div>
        <p className="sources-note">
          Built as a working MVP from the CVE Sindh website proposal, with legal and policy references
          drawn from public reporting on the Sindh Centre of Excellence on Countering Violent
          Extremism Act, 2025, NACTA's National Prevention of Violent Extremism Policy 2024, and
          related provincial cabinet announcements. Research listings, district indicators and
          dashboard figures throughout are illustrative sample content pending real data from the
          Centre.
        </p>
      </div>
    </footer>
  )
}
