import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MvpFlag from './components/MvpFlag.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Strategy from './pages/Strategy.jsx'
import Research from './pages/Research.jsx'
import Districts from './pages/Districts.jsx'
import Youth from './pages/Youth.jsx'
import Education from './pages/Education.jsx'
import DigitalResilience from './pages/DigitalResilience.jsx'
import CommunityWomen from './pages/CommunityWomen.jsx'
import Rehabilitation from './pages/Rehabilitation.jsx'
import CivilSociety from './pages/CivilSociety.jsx'
import Media from './pages/Media.jsx'
import Report from './pages/Report.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <MvpFlag />
      <Header />
      <main key={location.pathname} className="page-fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/research" element={<Research />} />
          <Route path="/districts" element={<Districts />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digital-resilience" element={<DigitalResilience />} />
          <Route path="/community-women" element={<CommunityWomen />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/civil-society" element={<CivilSociety />} />
          <Route path="/media" element={<Media />} />
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
