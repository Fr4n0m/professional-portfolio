import React from 'react';

interface CarouselIndicatorsProps {
  total: number;
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  total,
  currentIndex,
  onIndicatorClick
}) => {
  return (
    <div className='absolute z-1 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2'>
      {Array.from({ length: total }).map((_, index) => (
        <button
          type='button'
          key={index}
          className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
          aria-current={index === currentIndex ? 'true' : 'false'}
          aria-label={`Slide ${index + 1}`}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
