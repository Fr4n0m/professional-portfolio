// HeroAnimation.tsx
// Componente que combina GSAP para la animación principal y Motion para elementos interactivos
import { useRef } from 'react';
import TitleAnimation from './TitleAnimation';
import ButtonsAnimation from './ButtonsAnimation';
import DecorationElement from './DecorationElement';

interface HeroAnimationProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  darkMode?: boolean;
}

export default function HeroAnimation({
  title = "Hey, soy Fran",
  subtitle = "Desarrollador Web y Móvil",
  primaryButtonText = "Ver proyectos",
  secondaryButtonText = "Contactar",
  onPrimaryClick,
  onSecondaryClick,
  darkMode = false,
}: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Colores según el tema
  const colors = {
    primary: darkMode ? '#facc15' : '#1F429F',
    secondary: darkMode ? '#e5e7eb' : '#374151',
    accent: darkMode ? '#fde047' : '#3563bd',
  };
  
  // Verificar si se prefiere movimiento reducido para Motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  return (
    <div className="max-w-4xl mx-auto" ref={containerRef}>
      {/* Título y subtítulo con animación GSAP */}
      <TitleAnimation 
        title={title}
        subtitle={subtitle}
        colors={{
          primary: colors.primary,
          secondary: colors.secondary
        }}
      />
      
      {/* Botones con animación Motion */}
      <ButtonsAnimation
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
        prefersReducedMotion={prefersReducedMotion}
      />
      
      {/* Elemento decorativo con Motion */}
      <DecorationElement
        color={colors.accent}
        prefersReducedMotion={prefersReducedMotion}
      />
    </div>
  );
}
