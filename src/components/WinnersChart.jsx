import React, { useMemo, useState, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import './WinnersChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function parseNames(nameStr) {
  if (!nameStr) return []
  
  // Extraer la parte después del : o -
  let after = nameStr
  const colonIdx = nameStr.indexOf(':')
  const dashIdx = nameStr.indexOf(' - ')
  
  if (colonIdx !== -1) {
    after = nameStr.slice(colonIdx + 1)
  } else if (dashIdx !== -1) {
    after = nameStr.slice(dashIdx + 3)
  }
  
  if (!after.trim()) return []
  
  // Dividir por separadores comunes
  const names = after
    .split(/&|,|;|\n/i)
    .map(s => {
      // Limpiar paréntesis y espacios
      return s.replace(/\s*\(.+?\)\s*/g, '').trim()
    })
    .filter(s => s.length > 0)
  
  return names
}

export default function WinnersChart({ seasons = [] }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const chartRef = useRef(null)

  const data = useMemo(() => {
    const map = {}
    
    // Filtrar solo las temporadas relevantes (1, 2, 3, 4, bdm, sr)
    const relevantSeasons = seasons.filter(s => 
      ['season1', 'season2', 'season3', 'season4', 'bdm', 'sr'].includes(s.id)
    )
    
    relevantSeasons.forEach(season => {
      (season.champions || []).forEach(c => {
        // Procesar el campo name
        const names = parseNames(c.name)
        names.forEach(n => {
          // Limpieza adicional
          const clean = n
            .replace(/^Campe[oó]n Nacional:?/i, '')
            .replace(/^Fecha #\d+:?/i, '')
            .replace(/^Several Mode:?/i, '')
            .replace(/^Clasificatoria #\d+:?/i, '')
            .replace(/^BDM .+? - /i, '')
            .replace(/^(Regional|Last Bullet):?/i, '')
            .trim()
          
          if (!clean || clean.length === 0) return
          map[clean] = (map[clean] || 0) + 1
        })
      })
    })
    
    const sorted = Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
    return sorted
  }, [seasons])

  if (!data.length) return null

  const colors = [
    'rgba(79, 70, 229, 0.85)',
    'rgba(6, 182, 212, 0.85)',
    'rgba(34, 197, 94, 0.85)',
    'rgba(239, 68, 68, 0.85)',
    'rgba(168, 85, 247, 0.85)',
    'rgba(244, 114, 182, 0.85)',
    'rgba(59, 130, 246, 0.85)',
    'rgba(249, 115, 22, 0.85)',
    'rgba(14, 165, 233, 0.85)',
    'rgba(132, 204, 22, 0.85)',
    'rgba(236, 72, 153, 0.85)',
    'rgba(139, 92, 246, 0.85)',
  ]

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Victorias',
        data: data.map(d => d.count),
        backgroundColor: data.map((_, i) => colors[i % colors.length]),
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  }

  // Plugin para mostrar valores en las barras
  const dataLabelsPlugin = {
    id: 'datalabels',
    afterDatasetsDraw(chart) {
      const { ctx, chartArea } = chart
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i)
        meta.data.forEach((element, index) => {
          const data = dataset.data[index]
          const { x, y, width, height } = element.getProps(['x', 'y', 'width', 'height'])
          
          ctx.font = 'bold 12px Arial'
          ctx.fillStyle = '#000'
          ctx.textAlign = 'left'
          ctx.textBaseline = 'middle'
          
          // Mostrar número al lado derecho de la barra
          const text = data.toString()
          //ctx.fillText(text, x + 8, y)
        })
      })
    },
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: { display: true },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { 
          stepSize: 1,
          font: { size: 12 }
        },
        grid: { color: 'rgba(0, 0, 0, 0.08)' },
      },
      y: {
        ticks: { 
          font: { size: 13, weight: '600' },
          autoSkip: false,
        },
        grid: { display: false },
      },
    },
  }

  return (
    <div className="season-section winners-section">
      <button className="season-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>Estadísticas de Ganadores</h2>
        <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="season-content">
          <p className="description">
            Total de victorias por freestyler en las temporadas 1, 2, 3, 4, BDM y Bronx SR.
          </p>
          <div className="winners-chart-container">
            <Bar 
              ref={chartRef} 
              data={chartData} 
              options={options}
              plugins={[dataLabelsPlugin]}
            />
          </div>
        </div>
      )}
    </div>
  )
}
