// TitleAnimation.tsx
// Componente para la animación del título con GSAP
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface TitleAnimationProps {
  title: string;
  subtitle: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export default function TitleAnimation({
  title,
  subtitle,
  colors
}: TitleAnimationProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;
    
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
  
  return (
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
  );
}
