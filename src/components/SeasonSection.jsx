import { useState } from 'react'
import './SeasonSection.css'
import ChampionCard from './ChampionCard'
import ImageCarousel from './ImageCarousel'

function SeasonSection({ season, isExpanded, onToggle }) {
  const [scoreboardExpanded, setScoreboardExpanded] = useState(false)

  return (
    <div className={`season-section ${isExpanded ? 'expanded' : ''}`}>
      <button className="season-header" onClick={onToggle}>
        <h2>{season.title}</h2>
        <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="season-content">
          <p className="description">{season.description}</p>
          
          <div className="champions-section">
            <h3>Campeones</h3>
            <div className="champions-list">
              {season.champions.map((champion, index) => (
                <ChampionCard
                  key={index}
                  champion={champion}
                  position={index + 1}
                />
              ))}
            </div>
          </div>

          {season.scoreboard && (
            <div className="scoreboard-section">
              <button 
                className={`scoreboard-header ${scoreboardExpanded ? 'expanded' : ''}`}
                onClick={() => setScoreboardExpanded(!scoreboardExpanded)}
              >
                <h3>{season.scoreboard.title}</h3>
                <span className="scoreboard-toggle">{scoreboardExpanded ? '▼' : '▶'}</span>
              </button>
              
              {scoreboardExpanded && (
                <div className="scoreboard-content">
                  {season.scoreboard.description && (
                    <p className="scoreboard-description">{season.scoreboard.description}</p>
                  )}
                  <ImageCarousel images={season.scoreboard.images} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SeasonSection
