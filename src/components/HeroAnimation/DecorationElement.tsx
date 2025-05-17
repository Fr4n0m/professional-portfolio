// DecorationElement.tsx
// Componente para el elemento decorativo con Motion
import React from 'react';

// Creamos componentes de fallback para motion
const MotionDiv = ({ className, children, ...props }: any) => (
  <div className={className} {...props}>{children}</div>
);

// Definimos nuestro propio objeto motion para evitar errores
const motion = {
  div: MotionDiv
};

interface DecorationElementProps {
  color: string;
  prefersReducedMotion: boolean;
}

export default function DecorationElement({
  color,
  prefersReducedMotion
}: DecorationElementProps) {
  if (prefersReducedMotion) {
    return null; // No mostrar decoración si se prefiere movimiento reducido
  }
  
  return (
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
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}
