import { useRef } from 'react'
import './HeroSection.css'

function HeroSection() {
  const handleScroll = () => {
    const mainContent = document.querySelector('.main-content')
    mainContent?.scrollIntoView({ behavior: 'smooth' })
  }

  const base = import.meta.env.BASE_URL || './'

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-background-accent"></div>
      <div className="hero-content">
        <img src={base + 'images/logobronx.png'} alt="Bronx 04 Logo" className="hero-logo" />
        <h1 className="hero-title">BRONX 04</h1>
        <p className="hero-subtitle">La Liga de Freestyle más competitiva de Costa Rica</p>
        <p className="hero-description">Temporadas de puro nivel, competencia y arte</p>
        <button className="hero-cta" onClick={handleScroll}>
          ↓ Explora las Temporadas ↓
        </button>
      </div>
    </div>
  )
}

export default HeroSection
