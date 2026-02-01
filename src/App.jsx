import { useState } from 'react'
import './App.css'
import SeasonSection from './components/SeasonSection'

function App() {
  const [expandedSeason, setExpandedSeason] = useState(null)

  const seasons = [
    {
      id: 'pilot',
      title: 'Temporada Piloto',
      description: 'La primera temporada de Bronx se llevó a cabo con el nombre de Revolution Rap Battles en el periodo 2019 - 2021. Su cede fue el parque de los ex-presidentes en San Pablo de Heredia y no existen muchos registros de las fechas llevadas a cabo. Solo los mas under conocieron que vivimos aquí.',
      champions: [
        { name: 'Zadiyk', date: '12-12-21', description: 'Zadiyk desde Alajuela se convirtió en el primer campeón nacional de Bronx 04 con el nombre de Revolution Rap Battles. Dia que será recordado por todos los freestylers que estuvieron desde el inicio de esta liga.', image: '/images/piloto/1-1.jpeg' },
      ]
    },
    {
      id: 'season1',
      title: 'Temporada 1',
      description: 'La primera temporada oficial con formato mejorado y más participantes. Competencia intensa que consolidó el evento como referencia en la escena freestyle herediaga.',
      champions: [
        { name: '1', date: '2021', description: 'Ganador', image: '/images/s1-1.jpg' },
        { name: '2', date: '2021', description: 'Participante', image: '/images/s1-2.jpg' },
        { name: '3', date: '2021', description: 'Participante', image: '/images/s1-3.jpg' },
        { name: '4', date: '2021', description: 'Participante', image: '/images/s1-4.jpg' },
        { name: '5', date: '2021', description: 'Participante', image: '/images/s1-5.jpg' },
        { name: '6', date: '2021', description: 'Participante', image: '/images/s1-6.jpg' },
        { name: '7', date: '2021', description: 'Participante', image: '/images/s1-7.jpg' },
        { name: '8', date: '2021', description: 'Participante', image: '/images/s1-8.jpg' },
        { name: '9', date: '2021', description: 'Participante', image: '/images/s1-9.jpg' },
        { name: '10', date: '2021', description: 'Participante', image: '/images/s1-10.jpg' },
        { name: '11', date: '2021', description: 'Participante', image: '/images/s1-11.jpg' }
      ]
    },
    {
      id: 'season2',
      title: 'Temporada 2',
      description: 'Continuamos con mayor proyección y reconocimiento nacional. Las batallas se tornaron más competitivas y el nivel de los freestylers alcanzó nuevas alturas.',
      champions: [
        { name: '1', date: '2022', description: 'Ganador', image: '/images/s2-1.jpg' },
        { name: '2', date: '2022', description: 'Participante', image: '/images/s2-2.jpg' },
        { name: '3', date: '2022', description: 'Participante', image: '/images/s2-3.jpg' },
        { name: '4', date: '2022', description: 'Participante', image: '/images/s2-4.jpg' },
        { name: '5', date: '2022', description: 'Participante', image: '/images/s2-5.jpg' },
        { name: '6', date: '2022', description: 'Participante', image: '/images/s2-6.jpg' },
        { name: '7', date: '2022', description: 'Participante', image: '/images/s2-7.jpg' },
        { name: '8', date: '2022', description: 'Participante', image: '/images/s2-8.jpg' },
        { name: '9', date: '2022', description: 'Participante', image: '/images/s2-9.jpg' },
        { name: '10', date: '2022', description: 'Participante', image: '/images/s2-10.jpg' },
        { name: '11', date: '2022', description: 'Participante', image: '/images/s2-11.jpg' }
      ]
    },
    {
      id: 'season3',
      title: 'Temporada 3',
      description: 'Una temporada de oro marcada por batallas memorables y el surgimiento de nuevos talentos. El evento consolidó su posición como uno de los más importantes.',
      champions: [
        { name: '1', date: '2023', description: 'Ganador', image: '/images/s3-1.jpg' },
        { name: '2', date: '2023', description: 'Participante', image: '/images/s3-2.jpg' },
        { name: '3', date: '2023', description: 'Participante', image: '/images/s3-3.jpg' },
        { name: '4', date: '2023', description: 'Participante', image: '/images/s3-4.jpg' },
        { name: '5', date: '2023', description: 'Participante', image: '/images/s3-5.jpg' },
        { name: '6', date: '2023', description: 'Participante', image: '/images/s3-6.jpg' },
        { name: '7', date: '2023', description: 'Participante', image: '/images/s3-7.jpg' },
        { name: '8', date: '2023', description: 'Participante', image: '/images/s3-8.jpg' },
        { name: '9', date: '2023', description: 'Participante', image: '/images/s3-9.jpg' },
        { name: '10', date: '2023', description: 'Participante', image: '/images/s3-10.jpg' },
        { name: '11', date: '2023', description: 'Participante', image: '/images/s3-11.jpg' }
      ]
    },
    {
      id: 'season4',
      title: 'Temporada 4',
      description: 'La temporada más reciente con innovaciones en formato y participación masiva. Continúa la tradición de excelencia y entretenimiento de las Bronx 04.',
      champions: [
        { name: '1', date: '2024', description: 'Ganador', image: '/images/s4-1.jpg' },
        { name: '2', date: '2024', description: 'Participante', image: '/images/s4-2.jpg' },
        { name: '3', date: '2024', description: 'Participante', image: '/images/s4-3.jpg' },
        { name: '4', date: '2024', description: 'Participante', image: '/images/s4-4.jpg' },
        { name: '5', date: '2024', description: 'Participante', image: '/images/s4-5.jpg' },
        { name: '6', date: '2024', description: 'Participante', image: '/images/s4-6.jpg' },
        { name: '7', date: '2024', description: 'Participante', image: '/images/s4-7.jpg' },
        { name: '8', date: '2024', description: 'Participante', image: '/images/s4-8.jpg' },
        { name: '9', date: '2024', description: 'Participante', image: '/images/s4-9.jpg' },
        { name: '10', date: '2024', description: 'Participante', image: '/images/s4-10.jpg' },
        { name: '11', date: '2024', description: 'Participante', image: '/images/s4-11.jpg' }
      ]
    },
    {
      id: 'special',
      title: 'Eventos Especiales',
      description: 'Eventos extraordinarios incluyendo batallas sorpresa, torneos de invitados y celebraciones especiales que marcan momentos memorables en la historia de Bronx 04.',
      champions: [
        { name: '1', date: '2024', description: 'Evento especial', image: '/images/special1.jpg' },
        { name: '2', date: '2024', description: 'Evento especial', image: '/images/special2.jpg' },
        { name: '3', date: '2024', description: 'Evento especial', image: '/images/special3.jpg' },
        { name: '4', date: '2024', description: 'Evento especial', image: '/images/special4.jpg' },
        { name: '5', date: '2024', description: 'Evento especial', image: '/images/special5.jpg' },
        { name: '6', date: '2024', description: 'Evento especial', image: '/images/special6.jpg' },
        { name: '7', date: '2024', description: 'Evento especial', image: '/images/special7.jpg' },
        { name: '8', date: '2024', description: 'Evento especial', image: '/images/special8.jpg' },
        { name: '9', date: '2024', description: 'Evento especial', image: '/images/special9.jpg' },
        { name: '10', date: '2024', description: 'Evento especial', image: '/images/special10.jpg' },
        { name: '11', date: '2024', description: 'Evento especial', image: '/images/special11.jpg' }
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <img src="/images/logobronx.png" alt="Bronx 04 Logo" className="logo-image" />
          <h1>BRONX 04</h1>
        </div>
        <p className="tagline">El Freestyle de Heredia</p>
      </header>

      <main className="main-content">
        <div className="seasons-container">
          {seasons.map(season => (
            <SeasonSection
              key={season.id}
              season={season}
              isExpanded={expandedSeason === season.id}
              onToggle={() => setExpandedSeason(expandedSeason === season.id ? null : season.id)}
            />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Bronx 04 Freestyle. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
