// Common CSS classes used throughout the application
export const commonClasses = {
  // Typography con fuente Apple pero tamaños originales
  heading: {
    h1: 'text-3xl md:text-4xl lg:text-4xl font-bold text-gray-700 dark:text-white font-sf-pro',
    h2: 'text-3xl font-semibold text-gray-700 dark:text-white flex gap-x-3 items-center font-sf-pro',
    h3: 'text-2xl font-semibold text-blue-800/85 dark:text-yellow-200/90 font-sf-pro',
  },
  
  // Containers
  section: {
    base: 'px-4',
    padding: 'py-32 md:py-44 pb-32',
    paddingAlt: 'mt-24 md:mt-0',
    container: 'section scroll-m-28 w-full mx-auto container lg:w-[740px]',
    projectsContainer: 'section scroll-m-28 w-full mx-auto container lg:w-[740px] -mt-5 md:-mt-[110px] md:pb-24',
  },
  
  // Images
  profileImage: 'rounded-3xl mb-6 w-32 border-2 border-[#1F429F]/95 dark:border-yellow-200/95 shadow-md shadow-[#1d3a84]/50 dark:shadow-yellow-300/50',
  
  // Text colors + fuentes Apple
  textColors: {
    primary: 'text-gray-700 dark:text-white font-sf-pro',
    secondary: 'text-gray-600 dark:text-yellow-200/95 font-sf-pro',
    tertiary: 'text-gray-500 dark:text-blue-200/95 font-sf-pro',
    muted: 'text-gray-500 dark:opacity-95 dark:text-white/90 font-sf-pro',
    accent: 'text-red-500 dark:text-red-200/95 font-sf-pro',
    body: 'text-gray-700 dark:text-white font-sf-pro leading-relaxed',
    small: 'text-sm text-gray-600 dark:text-gray-400 font-sf-pro',
  },
  
  // Buttons - mantener estilos originales con fuente Apple
  button: {
    primary: 'text-white bg-gray-600/95 hover:bg-gray-600/85 active:bg-gray-600/75 dark:text-[#00091D] dark:bg-white/95 dark:hover:bg-white/85 dark:active:bg-white/75 font-sf-pro font-medium',
    rounded: 'rounded-full',
    flex: 'flex items-center gap-2',
    roundedPrimary: 'text-white bg-gray-600/95 hover:bg-gray-600/85 active:bg-gray-600/75 dark:text-[#00091D] dark:bg-white/95 dark:hover:bg-white/85 dark:active:bg-white/75 rounded-full flex items-center gap-2 font-sf-pro font-medium',
  },
  
  // Layout
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-center',
  
  // Icons
  iconSize: {
    small: 'size-4',
    medium: 'size-5',
    large: 'size-6',
    xl: 'size-7',
    xxl: 'size-9',
  },
  
  // Shadows and borders
  shadow: {
    card: 'shadow-[0_3px_10px_rgb(0,0,0,0.2)]',
    soft: 'shadow-md',
  },
  
  border: {
    subtle: 'border border-gray-100 dark:border-gray-500/20',
  },
  
  // Backgrounds
  background: {
    card: 'bg-white/90 dark:bg-gray-900/90',
    overlay: 'bg-white/50 dark:bg-gray-800/90',
    backdrop: 'backdrop-blur-md',
  },
  
  // Animations
  animation: {
    hover: 'hover:scale-125 transition',
    transition: 'transition-all',
  },
  
  // Spacing
  spacing: {
    sectionGap: 'gap-x-3',
    itemGap: 'gap-x-4',
  },
  
  // Responsive utilities
  responsive: {
    hideOnMobile: 'hidden md:block',
    showOnMobile: 'block md:hidden',
  },
} as const;
