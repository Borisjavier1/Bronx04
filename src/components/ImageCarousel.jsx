import { useState } from 'react'
import './ImageCarousel.css'

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  // Si solo hay una imagen, mostrarla sin carousel
  if (images.length === 1) {
    return (
      <div className="champion-image-container">
        <img 
          src={images[0]} 
          alt="Imagen" 
          className="champion-image"
        />
      </div>
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img 
          src={images[currentIndex]} 
          alt={`Imagen ${currentIndex + 1}`} 
          className="carousel-image"
        />
      </div>
      
      <div className="carousel-controls">
        <button 
          className="carousel-button prev-button" 
          onClick={prevImage}
          aria-label="Imagen anterior"
        >
          ◀
        </button>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
          <span className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        
        <button 
          className="carousel-button next-button" 
          onClick={nextImage}
          aria-label="Siguiente imagen"
        >
          ▶
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel
