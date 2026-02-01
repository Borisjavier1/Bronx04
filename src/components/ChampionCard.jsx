import { useState } from 'react'
import './ChampionCard.css'

function ChampionCard({ champion, position }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`champion-card champion-position-${position}`}>
      <button className="champion-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h4 className="champion-name">{champion.name}</h4>
        <span className="champion-toggle">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="champion-details">
          <p className="champion-date">{champion.date}</p>
          <p className="champion-description">{champion.description}</p>
          <div className="champion-image-container">
            <img 
              src={champion.image} 
              alt={champion.name} 
              className="champion-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChampionCard
