// ButtonsAnimation.tsx
// Componente para la animación de los botones con Motion
import { motion } from 'motion';

interface ButtonsAnimationProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  prefersReducedMotion: boolean;
}

export default function ButtonsAnimation({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  prefersReducedMotion
}: ButtonsAnimationProps) {
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
    <motion.div
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
    </motion.div>
  );
}
