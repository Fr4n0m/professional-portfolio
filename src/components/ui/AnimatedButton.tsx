// AnimatedButton.tsx
// Componente React que usa Motion para crear un botón animado

import { useState } from 'react';
import React from 'react';

// Creamos componentes de fallback para motion
const MotionButton = ({ className, children, ...props }: any) => (
  <button className={className} {...props}>{children}</button>
);

const MotionSpan = ({ className, children, ...props }: any) => (
  <span className={className} {...props}>{children}</span>
);

const MotionSvg = ({ className, children, ...props }: any) => (
  <svg className={className} {...props}>{children}</svg>
);

// Definimos nuestro propio objeto motion para evitar errores
const motion = {
  button: MotionButton,
  span: MotionSpan,
  svg: MotionSvg
};

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
}

export default function AnimatedButton({
  text,
  onClick,
  primary = true,
  className = '',
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Colores según tema y estado
  const baseColors = primary 
    ? {
        bg: 'bg-blue-600',
        hoverBg: 'bg-blue-700',
        text: 'text-white',
        border: 'border-blue-700'
      }
    : {
        bg: 'bg-transparent',
        hoverBg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-600'
      };
  
  return (
    <motion.button
      className={`relative px-6 py-3 rounded-lg border ${baseColors.bg} ${baseColors.text} ${baseColors.border} font-medium ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 } 
      }}
    >
      {/* Efecto de ondas al hacer clic */}
      <motion.span
        className="absolute inset-0 rounded-lg bg-white opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { 
          scale: [0, 1],
          opacity: [0.2, 0],
          transition: { duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }
        } : { scale: 0, opacity: 0 }}
      />
      
      {/* Contenido */}
      <motion.span 
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{ x: isHovered ? 3 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {text}
        {isHovered && (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </motion.svg>
        )}
      </motion.span>
    </motion.button>
  );
}
