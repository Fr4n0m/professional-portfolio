import React, { useEffect } from 'react';

interface FooterItem {
  title: string;
  url: string;
}

interface FooterNavProps {
  footerItems: FooterItem[];
}

const FooterNav: React.FC<FooterNavProps> = ({ footerItems }) => {
  useEffect(() => {
    // Script para el botón "Subir"
    const handleBackToTop = (e: MouseEvent) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    const backToTopLink = document.getElementById('back-to-top-link');
    if (backToTopLink) {
      backToTopLink.addEventListener('click', handleBackToTop);
    }
    
    return () => {
      // Cleanup event listeners
      if (backToTopLink) {
        backToTopLink.removeEventListener('click', handleBackToTop);
      }
    };
  }, []);
  
  return (
    <ul className="flex flex-wrap gap-y-2 md:gap-y-0 justify-center items-center mb-6 text-gray-700 dark:text-white/80">
      {footerItems.map((item, index) => (
        item.title === "Subir" ? (
          <li key={index}>
            <a
              href={item.url}
              className="hover:underline flex flex-row items-center justify-center group gap-[2px] transition-all duration-300"
              aria-label="Volver al inicio de la página"
              id="back-to-top-link"
            >
              {item.title}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="size-4 group-hover:-translate-y-[2px] transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </li>
        ) : (
          <li key={index}>
            <a
              href={item.url}
              className="mr-4 hover:underline md:mr-6 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
              target={item.url.startsWith('http') || item.url.startsWith('mailto:') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ transform: 'translateY(0)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {item.title}
            </a>
          </li>
        )
      ))}
    </ul>
  );
};

export default FooterNav;
