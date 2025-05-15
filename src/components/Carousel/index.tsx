import React, { useRef, useState } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';

interface CarouselProps {
  images: string[];
}

/**
 * Componente principal de carrusel
 * Permite visualizar imágenes en una presentación deslizable con controles de navegación
 */
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalItems = images.length;

  /**
   * Actualiza la posición del carrusel
   */
  const updateCarousel = (newIndex: number) => {
    if (wrapperRef.current) {
      const offset = -newIndex * 100;
      wrapperRef.current.style.transform = `translateX(${offset}%)`;
    }
    setCurrentIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % totalItems;
    updateCarousel(newIndex);
  };

  const handleIndicatorClick = (index: number) => {
    updateCarousel(index);
  };

  return (
    <div
      className='rounded-lg relative w-full overflow-hidden'
      data-carousel='slide'
    >
      <div
        className='relative flex transition-transform duration-700 ease-in-out'
        data-carousel-wrapper
        ref={wrapperRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <CarouselSlide key={index} image={image} index={index} />
        ))}
      </div>
      
      <CarouselIndicators 
        total={totalItems} 
        currentIndex={currentIndex} 
        onIndicatorClick={handleIndicatorClick} 
      />
      
      <CarouselControls 
        onPrevClick={handlePrevClick} 
        onNextClick={handleNextClick} 
      />
    </div>
  );
};

export default Carousel;
