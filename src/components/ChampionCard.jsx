import { useState } from 'react'
import './ChampionCard.css'
import ImageCarousel from './ImageCarousel'

function ChampionCard({ champion, position }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Normalizar las imágenes: convertir image singular a array images
  const images = champion.images 
    ? champion.images 
    : champion.image 
      ? [champion.image]
      : []

  return (
    <div className={`champion-card champion-position-${position}`}>
      <button className="champion-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h4 className="champion-name">{champion.name}</h4>
        <span className="champion-toggle">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="champion-details">
          {champion.date && (
            <p className="champion-date">Fecha de publicación: {champion.date}</p>
          )}
          <p className="champion-description">{champion.description}</p>
          <ImageCarousel images={images} />
        </div>
      )}
    </div>
  )
}

export default ChampionCard
