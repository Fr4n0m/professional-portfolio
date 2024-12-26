import { useState } from 'react';

const ProjectsDescription = ({ description }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(prev => !prev);
	};

	return (
		<div className='relative mb-4'>
			<div
				className={`${
					expanded ? 'line-clamp-none' : 'line-clamp-3'
				} overflow-hidden text-pretty text-gray-500/90 dark:text-white`}
			>
				{description}
			</div>
			<div className='flex w-full justify-end'>
				{description.length > 220 && (
					<button
						className='text-blue-500 underline text-sm'
						onClick={toggleExpand}
					>
						{expanded ? 'Ver menos' : 'Ver más'}
					</button>
				)}
			</div>
		</div>
	);
};

export default ProjectsDescription;
