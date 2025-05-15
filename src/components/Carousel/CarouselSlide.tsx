import React from 'react';

interface CarouselSlideProps {
  image: string;
  index: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, index }) => {
  return (
    <div
      className='flex-shrink-0 w-full h-56 md:h-96'
      data-carousel-item
    >
      <img
        src={image}
        className='rounded-lg w-full h-full object-cover'
        alt={`Slide ${index + 1}`}
      />
    </div>
  );
};

export default CarouselSlide;
