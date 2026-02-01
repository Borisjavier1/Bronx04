import './SeasonSection.css'
import ChampionCard from './ChampionCard'

function SeasonSection({ season, isExpanded, onToggle }) {
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
        </div>
      )}
    </div>
  )
}

export default SeasonSection
