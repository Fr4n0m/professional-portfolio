export type Theme = 'light' | 'dark' | 'system';

export const THEMES = ['Light', 'Dark', 'System'] as const;

export const getThemePreference = (): Theme => {
	if (typeof localStorage !== 'undefined') {
		return (localStorage.getItem('theme') as Theme) ?? 'system';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

export const updateThemeIcon = (themePreference: Theme) => {
	document.querySelectorAll('.theme-toggle-icon').forEach((element) => {
		const iconElement = element as HTMLElement;
		iconElement.style.scale = iconElement.id === themePreference ? '1' : '0';
	});
};

export const updateTheme = () => {
	const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
	const themePreference = getThemePreference();
	const isDark =
		themePreference === 'dark' ||
		(themePreference === 'system' && matchMedia.matches);

	updateThemeIcon(themePreference);
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
};

export const initThemeToggle = () => {
	let removeListener: (() => void) | null = null;
	const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
	const themesMenu = document.getElementById('themes-menu');

	const updateThemeWithListener = () => {
		if (removeListener !== null) {
			removeListener();
		}
		matchMedia.addEventListener('change', updateThemeWithListener);
		removeListener = () => {
			matchMedia.removeEventListener('change', updateThemeWithListener);
		};
		updateTheme();
	};

	updateThemeWithListener();

	// Close menu on click outside
	document.addEventListener('click', () =>
		themesMenu?.classList.remove('open')
	);

	// Toggle menu
	document.getElementById('theme-toggle-btn')?.addEventListener('click', (e) => {
		e.stopPropagation();
		const isClosed = !themesMenu?.classList.contains('open');
		themesMenu?.classList[isClosed ? 'add' : 'remove']('open');
	});

	// Theme selection
	document.querySelectorAll('.themes-menu-option').forEach((element) => {
		element.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			localStorage.setItem(
				'theme',
				target.innerText.toLowerCase().trim()
			);
			updateThemeWithListener();
		});
	});
};
