// HeroAnimation.tsx
// Componente que combina GSAP para la animación principal y Motion para elementos interactivos

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'motion';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Colores según el tema
  const colors = {
    primary: darkMode ? '#facc15' : '#1F429F',
    secondary: darkMode ? '#e5e7eb' : '#374151',
    accent: darkMode ? '#fde047' : '#3563bd',
  };
  
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !containerRef.current) return;
    
    // Configuración inicial
    gsap.set(titleRef.current, { opacity: 0 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    
    // Timeline de GSAP para animación secuencial
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animación del título con TextPlugin (efecto de escritura)
    tl.to(titleRef.current, {
      opacity: 1,
      duration: 0.5,
    }).to(titleRef.current, {
      duration: 2,
      text: title,
      ease: "none",
    }).to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=1"); // Superposición con la animación anterior
    
    // Cleanup
    return () => {
      tl.kill();
    };
  }, [title]);
  
  // Verificar si se prefiere movimiento reducido para Motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  // Variants para Motion (solo se aplican si no se prefiere movimiento reducido)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 2.5, // Esperar a que termine la animación GSAP
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67] // Power2.out
      }
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center md:text-left">
        {/* Título animado con GSAP */}
        <h1 
          ref={titleRef}
          className="text-4xl lg:text-6xl font-extrabold tracking-tight"
          style={{ 
            color: colors.primary,
            minHeight: '70px'
          }}
        >
          {/* El contenido se completará con GSAP */}
          &nbsp;
        </h1>
        
        {/* Subtítulo animado con GSAP */}
        <p
          ref={subtitleRef}
          className="text-xl mt-4"
          style={{ color: colors.secondary }}
        >
          {subtitle}
        </p>
      </div>
      
      {/* Botones animados con Motion */}
      <motion.div
        ref={containerRef}
        className="flex flex-wrap gap-4 justify-center md:justify-start"
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <button 
            onClick={onPrimaryClick} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {primaryButtonText}
          </button>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <button 
            onClick={onSecondaryClick} 
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            {secondaryButtonText}
          </button>
        </motion.div>
        
        {/* Elemento decorativo con Motion */}
        <motion.div 
          className="absolute -z-10 right-0 top-1/2"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1, 
            x: 0,
            transition: { 
              duration: 1.5, 
              delay: 3,
              ease: [0.34, 1.56, 0.64, 1] // Back.out
            }
          }}
        >
          <div 
            className="w-60 h-60 rounded-full blur-3xl opacity-30" 
            style={{ backgroundColor: colors.accent }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
