import React, { useRef, useState } from 'react';

interface Props {
	images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const totalItems = images.length;

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
					<div
						className='flex-shrink-0 w-full h-56 md:h-96'
						data-carousel-item
						key={index}
					>
						<img
							src={image}
							className='rounded-lg w-full h-full object-cover'
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</div>
			<div className='absolute z-1 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2'>
				{images.map((_, index) => (
					<button
						type='button'
						key={index}
						className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
						aria-current={index === currentIndex ? 'true' : 'false'}
						aria-label={`Slide ${index + 1}`}
						onClick={() => handleIndicatorClick(index)}
					/>
				))}
			</div>
			<button
				type='button'
				className='absolute top-0 start-0 z-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
				onClick={handlePrevClick}
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none'>
					<svg
						className='mr-0.5 w-4 h-4 text-white rtl:rotate-180'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M5 1 1 5l4 4'
						/>
					</svg>
					<span className='sr-only'>Previous</span>
				</span>
			</button>
			<button
				type='button'
				className='absolute top-0 end-0 z-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
				onClick={handleNextClick}
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none'>
					<svg
						className='ml-0.5 w-4 h-4 text-white rtl:rotate-180'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m1 9 4-4-4-4'
						/>
					</svg>
					<span className='sr-only'>Next</span>
				</span>
			</button>
		</div>
	);
};

export default Carousel;
