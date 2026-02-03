import { useState } from 'react'
import './App.css'
import SeasonSection from './components/SeasonSection'

function App() {
  const [expandedSeason, setExpandedSeason] = useState(null)

  const seasons = [
    {
      id: 'pilot',
      title: 'Temporada Piloto',
      description: 'La pre-temporada de Bronx se llevó a cabo con el nombre de Revolution Rap Battles en el periodo 2019 - 2021. Su cede fue el parque de los ex-presidentes en San Pablo de Heredia y no existen muchos registros de las fechas llevadas a cabo. Solo los mas under conocieron que vivimos aquí.',
      champions: [
        { name: 'Campeón Nacional: Zadiyk', date: '12-12-21', description: 'Zadiyk desde Alajuela se convirtió en el primer campeón nacional de Bronx 04 con el nombre de Revolution Rap Battles tras derrotar a PST. Dia que será recordado por todos los freestylers que estuvieron desde el inicio de esta liga.', image: 'images/piloto/1-1.jpeg' },
      ]
    },
    {
      id: 'season1',
      title: 'Temporada 1',
      description: 'La primera temporada oficial iniciada en 2022 y hasta 2023, con formato mejorado y más participantes. En esta temporada el nombre de Bronx empezó a tomar fuerza y se convirtió en el futuro y esperanza del rap en Heredia.',
      scoreboard: {
        title: 'Tabla de Puntos',
        description: 'La tabla de la primera temporada contó con 82 competidores y el MVP fue ABC dejando a Low C en segundo lugar.',
        images: ['images/tablas/t1.jpg', 'images/tablas/mvp1.jpg']
      },
      champions: [
        { name: 'Fecha #1: Neykel', date: '09-12-22', description: 'Neykel fue el campeón de la primera temporada de Bronx, tras vencer a Low C en la final, sin imaginar el peso que tendría esta liga en el futuro.', image: 'images/temp1/s1-1.jpg' },
        { name: 'Fecha #2: ABC', date: '26-12-22', description: 'ABC logra llevarse la segunda fecha de Bronx tras vencer a Sebastián en la final, logrando asi su primera Bronx de muchas que vendrian luego.', image: 'images/temp1/s1-2.jpg' },
        { name: 'Fecha #3: Lozz', date: '07-01-2023', description: 'Lozz consiguió su primera Bronx en el 2023 tras vencer a Neykel en la final. Esta fecha fue la primera en llenar el fortín tras años de inactividad.', image: 'images/temp1/s1-3.jpg' },
        { name: 'Fecha #4: Kharma', date: '21-01-23', description: 'Kharma ganó esta fecha contra todo pronóstico, evitando que Neykel se hiciera con el primer bicampeonato.', image: 'images/temp1/s1-4.png' },
        { name: 'Fecha #5: G & Bragi', date: '05-02-23', description: 'Las primeras duplas de Bronx se las llevaron G y Bragi tras derrotar a Low C y Zadyik en la final, una fecha historica.', image: 'images/temp1/s1-5.jpg' },
        { name: 'Fecha #6: G', date: '20-02-23', description: 'G ganó esta edición derrotando a Jaffet en la final, obteniendo un bicampeonato al tener una fecha en duplas en su historial.', image: 'images/temp1/s1-6.jpg' },
        { name: 'Fecha #7: Lozz', date: '12-03-23', description: 'Lozz se hizo con la séptima fecha de Bronx ante Tatan, consolidándose como uno de los aspirantes al campeonato nacional ya que esta fue la primera vez que Bronx alcanzó los 40 competidores.', image: 'images/temp1/s1-7.jpg' },
        { name: 'Fecha #8: ABC', date: '02-04-23', description: 'ABC tambien logra un bicampeonato en la octava fecha, tras derrotar a Low C, tras esta fecha ABC y Low C empezaron a disputar el MVP de la temporada.', image: 'images/temp1/s1-8.jpg' },
        { name: 'Fecha #9: Shek', date: '17-04-23', description: 'Shek da una sorpresa al llevarse una Bronx tras tumbar a Recom en la final.', image: 'images/temp1/s1-9.jpg' },
        { name: 'Fecha #10: Low C & Black Hawk', date: '01-05-23', description: 'Low C y Black Hawk fueron los segundos en lograr ganar duplas en Bronx, dejando a Low C con su primera victoria tras varios intentos fallidos en la temporada.', image: 'images/temp1/s1-10.jpg' },
        { name: 'Fecha #11: Lozz', date: '21-05-23', description: 'Lozz comienza a demostrar su dominio sobre esta temporada tras derrotar nuevamente a Tatan en la final y alzando el tricampeonato.', image: 'images/temp1/s1-11.jpg' },
        { name: 'Fecha #12: Lozz', date: '10-06-23', description: 'Lozz se mantiene en el control de la temporada tras ganar esta fecha contra G, dejando la futura final nacional escrita.', image: 'images/temp1/s1-12.jpg' },
        { name: 'Several Mode: G, ABC & Ivert Andreas', date: '22-07-23', description: 'Bronx realiza su primer Several Mode con G, ABC e Ivert Andreas campeones tras derrotar la dupla de Guido y Tatan en la final.', image: 'images/temp1/s1-13.jpg' },
        { name: 'Campeón Nacional: Lozz', date: '06-08-23', description: 'Lozz se consolida como campeón nacional de Bronx, alzando el trofeo y haciendo historia después de derrotar a G. Cerrando así el inicio de la legendaria liga herediana.', image: 'images/temp1/s1-14.jpg' }
      ]
    },
    {
      id: 'season2',
      title: 'Temporada 2',
      description: 'La tabla de la primera temporada contó con 107 competidores y el MVP fue Sebastián dejando una gran diferencia frente a ABC como segundo lugar.',
      scoreboard: {
        title: 'Tabla de Puntos',
        description: 'Registro de puntuaciones y desempeño acumulado durante toda la temporada. Incluye el ranking final y el MVP de la temporada.',
        images: ['images/tablas/t2.jpg', 'images/tablas/mvp2.jpg']
      },
      champions: [
        { name: 'Fecha #1: Lozz', date: '12-01-24', description: 'Lozz abrió el marcador de la segunda temporada derrotando a Jaffet en la final y reafirmando porque era el campeón nacional.', image: 'images/temp2/s2-1.jpg' },
        { name: 'Fecha #2: Elian', date: '16-02-24', description: 'Elian dio sorpresa tras derrotar a PST en la final de la segunda fecha, la primer gran estrella para Pérez Zeledón', image: 'images/temp2/s2-2.jpg' },
        { name: 'Fecha #3: Guido', date: '23-03-24', description: 'Guido ya consolidado como los más fuertes del país se queda con la tercera fecha tras vencer a Bragi en la final.', image: 'images/temp2/s2-3.jpg' },
        { name: 'Fecha #4: Kenyari & LTF', date: '19-04-24', description: 'Las duplas de la temporada 2 dan un resultado de LTF y Kenyari como ganadores ante Sebastián y Nilo. En esta fecha despedimos a Kenyari quien iba a representar Costa Rica en BDM internacional.', image: 'images/temp2/s2-4.jpg' },
        { name: 'Fecha #5: Sebastián', date: '10-05-24', description: 'Sebastián gana la fecha 5 contra Lozz tras una rigida batalla.', image: 'images/temp2/s2-5.jpg' },
        { name: 'Fecha #6: Gabriel', date: '15-06-24', description: 'Gabriel fue el primer extranjero en ganar Bronx, tras vencer a ABC en la final. Gabriel se llevó a su tierra Panamá este triunfo', image: 'images/temp2/s2-6.jpg' },
        { name: 'Fecha #7: Sebastián', date: '12-07-24', description: 'Sebastián se declara el primer bicampeón de la temporada 2 tras derrotar a ABC en la fecha 7.', image: 'images/temp2/s2-7.jpg' },
        { name: 'Fecha #8: ABC & G', date: '23-08-24', description: 'Esta fecha con formato Several Mode fue conquistada por ABC y G tras vencer a M00syx en la final. Ambos no habian logrado campeonatos esta temporada a pesar de tener buenos resultados la temporada previa.', image: 'images/temp2/s2-8.jpg' },
        { name: 'Fecha #9: Alvarado', date: '28-09-24', description: 'Alvarado se impuso en esta fecha tras vencer a ABC en la final. Un rapero con muchos años de experiencia en batalla regresó para dejar un campeonato más.', image: 'images/temp2/s2-9.jpg' },
        { name: 'Fecha #10: G', date: '19-10-24', description: 'G logra ganarle a Lozz en esta fecha y vuelve a ganar una Bronx en solitario tras varios intentos.', image: 'images/temp2/s2-10.jpg' },
        { name: 'Fecha Regional Cartago: Lozz', date: '04-03-24', description: 'Lozz ganó la regional de Cartago tras vencer a Nilo en la final, al estar Lozz clasificado a la nacional de la segunda temporada, el clasificado fue Nilo.', image: 'images/temp2/s2-c.jpg' },
        { name: 'Fecha Regional San José: Kenyari', date: '20-05-24', description: 'Kenyari clasificó a la nacional de Bronx tras vencer a Sebastián en la final en la regional de San José, siendo de Limón.', image: 'images/temp2/s2-s.jpg' },
        { name: 'Fecha Regional Alajuela: Sebastián', date: '10-11-24', description: 'Sebastián ganó la regional de Alajuela tras haber cerrado la liga. Al haber sido MVP estaba indiscutiblemente clasificado a la nacional, por lo que el clasificado en esta fecha fue el otro finalista: Deinsha.', image: 'images/temp2/s2-a.jpg' },
        { name: 'Fecha Regional Heredia: ABC', date: '23-11-24', description: 'El llamado "Last Bullet" fue la última oportunidad para clasificar a la nacional. Para ABC fue su ultimo chance de quedar campeón esta temporada, efectivamente lo logró porque se impuso ante Recom en la final.', image: 'images/temp2/s2-11.jpg' },
        { name: 'Campeón Nacional: Kenyari', date: '16-12-24', description: 'Kenyari se consolida como el campeón nacional de la segunda temporada tras vencer a PST en la final. Kenyari ya reconocido como uno de los mejores freestylers de Costa Rica escribió su nombre en la historia de Bronx 04.', image: 'images/temp2/s2-12.jpg' }
      ]
    },
    {
      id: 'season3',
      title: 'Temporada 3',
      description: 'Una temporada de oro marcada por batallas memorables y el surgimiento de nuevos talentos. El evento consolidó su posición como uno de los más importantes.',
      scoreboard: {
        title: 'Tabla de Puntos',
        description: 'Registro de puntuaciones y desempeño acumulado durante toda la temporada. Incluye el ranking final y el MVP de la temporada.',
        images: ['images/s3-scoreboard1.jpg', 'images/s3-scoreboard2.jpg']
      },
      champions: [
        { name: '1', date: '2023', description: 'Ganador', image: 'images/s3-1.jpg' },
        { name: '2', date: '2023', description: 'Participante', image: 'images/s3-2.jpg' },
        { name: '3', date: '2023', description: 'Participante', image: 'images/s3-3.jpg' },
        { name: '4', date: '2023', description: 'Participante', image: 'images/s3-4.jpg' },
        { name: '5', date: '2023', description: 'Participante', image: 'images/s3-5.jpg' },
        { name: '6', date: '2023', description: 'Participante', image: 'images/s3-6.jpg' },
        { name: '7', date: '2023', description: 'Participante', image: 'images/s3-7.jpg' },
        { name: '8', date: '2023', description: 'Participante', image: 'images/s3-8.jpg' },
        { name: '9', date: '2023', description: 'Participante', image: 'images/s3-9.jpg' },
        { name: '10', date: '2023', description: 'Participante', image: 'images/s3-10.jpg' },
        { name: '11', date: '2023', description: 'Participante', image: 'images/s3-11.jpg' }
      ]
    },
    {
      id: 'season4',
      title: 'Temporada 4',
      description: 'La temporada más reciente con innovaciones en formato y participación masiva. Continúa la tradición de excelencia y entretenimiento de las Bronx 04.',
      scoreboard: {
        title: 'Tabla de Puntos',
        description: 'Registro de puntuaciones y desempeño acumulado durante toda la temporada. Incluye el ranking final y el MVP de la temporada.',
        images: ['images/s4-scoreboard1.jpg', 'images/s4-scoreboard2.jpg']
      },
      champions: [
        { name: '1', date: '2024', description: 'Ganador', image: 'images/s4-1.jpg' },
        { name: '2', date: '2024', description: 'Participante', image: 'images/s4-2.jpg' },
        { name: '3', date: '2024', description: 'Participante', image: 'images/s4-3.jpg' },
        { name: '4', date: '2024', description: 'Participante', image: 'images/s4-4.jpg' },
        { name: '5', date: '2024', description: 'Participante', image: 'images/s4-5.jpg' },
        { name: '6', date: '2024', description: 'Participante', image: 'images/s4-6.jpg' },
        { name: '7', date: '2024', description: 'Participante', image: 'images/s4-7.jpg' },
        { name: '8', date: '2024', description: 'Participante', image: 'images/s4-8.jpg' },
        { name: '9', date: '2024', description: 'Participante', image: 'images/s4-9.jpg' },
        { name: '10', date: '2024', description: 'Participante', image: 'images/s4-10.jpg' },
        { name: '11', date: '2024', description: 'Participante', image: 'images/s4-11.jpg' }
      ]
    },
     {
      id: 'sr',
      title: 'Bronx SR',
      description: 'Bronx se une al CPJ SRH tras una invitación para realizar clasificatorias al rededor de San Rafael de Heredia, donde uno solo seria el campeón.',
      champions: [
        { name: 'Clasificatoria #1 - Jaffet', date: '07-05-23', description: 'Jaffet ganó la primera clasificatoria de Bronx SR derrotando a un Peggs que recien inicaba su carrera.', image: 'images/sanra/ss1-1.jpg' },
        { name: 'Clasificatoria #3 - G', date: '03-06-23', description: 'G vence a Rincón en la final y se lleva la segunda clasificatoria.', image: 'images/sanra/ss1-2.jpg' },
        { name: 'Clasificatoria #2 - G', date: '09-07-23', description: 'G marca su superioridad en estas clasificatorias y gana la tercera tras derrotar a RVS en la final. Regalándonos un duelo historico de campeones de Red Bull Costa Rica. ', image: 'images/sanra/ss1-3.png' },
        { name: 'Clasificatoria #4 - G', date: '08-10-23', description: 'G nuevamente consigue ganar la clasificatoria esta vez derrotando a Lozz en la final', image: 'images/sanra/ss1-4.png' },
        { name: 'Final SR - Sebastián', date: '29-10-23', description: 'Sebastián gana la final de Bronx SR derrotando a Lozz en la gran final ganando el privilegio de presentarse antes del cantante Toledo en su siguiente concierto en San Rafael.', image: 'images/sanra/ss1-5.jpg' }
      ]
    },
     {
      id: 'sr',
      title: 'Promesa del Under',
      description: 'Bronx se une al CPJ SRH tras una invitación para realizar clasificatorias al rededor de San Rafael de Heredia, donde uno solo seria el campeón.',
      champions: [
        { name: 'Clasificatoria #1 - Jaffet', date: '07-05-23', description: 'Jaffet ganó la primera clasificatoria de Bronx SR derrotando a un Peggs que recien inicaba su carrera.', image: 'images/sanra/ss1-1.jpg' },
        { name: 'Clasificatoria #3 - G', date: '03-06-23', description: 'G vence a Rincón en la final y se lleva la segunda clasificatoria.', image: 'images/sanra/ss1-2.jpg' },
        { name: 'Clasificatoria #2 - G', date: '09-07-23', description: 'G marca su superioridad en estas clasificatorias y gana la tercera tras derrotar a RVS en la final. Regalándonos un duelo historico de campeones de Red Bull Costa Rica. ', image: 'images/sanra/ss1-3.png' },
        { name: 'Clasificatoria #4 - G', date: '08-10-23', description: 'G nuevamente consigue ganar la clasificatoria esta vez derrotando a Lozz en la final', image: 'images/sanra/ss1-4.png' },
        { name: 'Final SR - Sebastián', date: '29-10-23', description: 'Sebastián gana la final de Bronx SR derrotando a Lozz en la gran final ganando el privilegio de presentarse antes del cantante Toledo en su siguiente concierto en San Rafael.', image: 'images/sanra/ss1-5.jpg' }
      ]
    },
     {
      id: 'bdm',
      title: 'BDM',
      description: 'Batallas de Movimiento - Eventos especiales donde se enfrentan los mejores freestylers en formato de batalla directa.',
      champions: [
        { name: 'BDM Heredia - Low C', date: '15-09-23', description: 'Low C gana BDM Heredia 2023 contra Tatan, clasificando a la final nacional que se haria en Costa Rica ese año. Esta regional fue organizada por Bronx y el primer titulo de Low C en esta organización.', image: 'images/especial/bdm/bdm1.jpg' },
        { name: 'BDM Last Bullet - Eros EQ', date: '10-11-23', description: 'El último chance para clasificar a la final nacional de BDM 2023 se organizó por Bronx. Eros se impuso ante LTF y se llevó este cupo. (LL23 perdió con Tao ese día). xd', image: 'images/especial/bdm/bdm2.jpg' }
      ]
    },
     {
      id: 'sr',
      title: 'Finales Nacionales',
      description: 'La temporada más reciente con innovaciones en formato y participación masiva. Continúa la tradición de excelencia y entretenimiento de las Bronx 04.',
      champions: [
        { name: 'Clasificatoria #1 - Jaffet', date: '07-05-23', description: 'Ganador', image: 'images/sanra/ss1-1.jpg' },
        { name: 'Clasificatoria #2 - G', date: '03-06-23', description: 'Participante', image: 'images/sanra/ss1-2.png' },
        { name: 'Clasificatoria #3 - G', date: '09-07-23', description: 'Participante', image: 'images/sanra/ss1-3.jpg' },
        { name: 'Clasificatoria #4 - G', date: '08-10-23', description: 'Participante', image: 'images/sanra/ss1-4.png' },
        { name: 'Final SR - Sebastián', date: '29-10-23', description: 'Participante', image: 'images/sanra/ss1-5.jpg' }
      ]
    },
    {
      id: 'special',
      title: 'Eventos Especiales',
      description: 'Eventos extraordinarios incluyendo batallas sorpresa, torneos de invitados y celebraciones especiales que marcan momentos memorables en la historia de Bronx 04.',
      champions: [
        { name: '3', date: '2024', description: 'Evento especial', images: ['images/special3.jpg', 'images/special4.jpg'] },
        { name: '4', date: '2024', description: 'Evento especial', image: 'images/special4.jpg' },
        { name: '5', date: '2024', description: 'Evento especial', images: ['images/special5.jpg', 'images/special6.jpg', 'images/special7.jpg', 'images/special8.jpg'] },
        { name: '6', date: '2024', description: 'Evento especial', image: 'images/special6.jpg' },
        { name: '7', date: '2024', description: 'Evento especial', images: ['images/special7.jpg', 'images/special8.jpg'] },
        { name: '8', date: '2024', description: 'Evento especial', image: 'images/special8.jpg' },
        { name: '9', date: '2024', description: 'Evento especial', images: ['images/special9.jpg', 'images/special10.jpg', 'images/special11.jpg'] },
        { name: '10', date: '2024', description: 'Evento especial', image: 'images/special10.jpg' },
        { name: '11', date: '2024', description: 'Evento especial', image: 'images/special11.jpg' }
      ]
    }
  ]

  const base = import.meta.env.BASE_URL || '/'
  const seasonsWithBase = seasons.map(season => ({
    ...season,
    scoreboard: season.scoreboard ? {
      ...season.scoreboard,
      images: season.scoreboard.images.map(img => base + img)
    } : undefined,
    champions: season.champions.map(c => ({
      ...c,
      image: c.image ? base + c.image : undefined,
      images: c.images ? c.images.map(img => base + img) : undefined
    }))
  }))

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <img src={base + 'images/logobronx.png'} alt="Bronx 04 Logo" className="logo-image" />
          <h1>BRONX 04</h1>
        </div>
        <p className="tagline">El Freestyle de Heredia</p>
      </header>

      <main className="main-content">
        <div className="seasons-container">
          {seasonsWithBase.map(season => (
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
