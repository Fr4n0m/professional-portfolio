export const initHeaderNavigation = () => {
	const sections = document.querySelectorAll('section[data-section]');
	const navItems = document.querySelectorAll('header nav a');

	if (sections.length === 0) {
		console.error('No se encontraron secciones con ID en el DOM');
		return;
	}

	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navItems.forEach((item) => {
					if (item.getAttribute('aria-label') === entry.target.id) {
						item.classList.add('dark:text-yellow-300', 'text-blue-800');
					} else {
						item.classList.remove('dark:text-yellow-300', 'text-blue-800');
					}
				});
			}
		});
	};

	const observer = new IntersectionObserver(callback, {
		root: null,
		rootMargin: '0px',
		threshold: 0.9,
	});

	sections.forEach((section) => observer.observe(section));

	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			observer.disconnect();
		} else {
			sections.forEach((section) => observer.observe(section));
		}
	});
};
