// src/components/TextPressure.tsx
import { useEffect, useRef, useState } from 'react';
import { useSprings, animated, config } from '@react-spring/web';

interface TextPressureProps {
    text?: string;
    darkMode?: boolean;
    delay?: number;
    threshold?: number;
    rootMargin?: string;
    onAnimationComplete?: () => void;
}

const TextPressure: React.FC<TextPressureProps> = ({
    text = 'Hey, soy Fran',
    darkMode = false,
    delay = 50, // Más rápido para mejor experiencia
    threshold = 0.1,
    rootMargin = "-100px",
    onAnimationComplete
}) => {
    // Referencias
    const containerRef = useRef<HTMLDivElement>(null);
    const charsRef = useRef<(HTMLDivElement | null)[]>([]);
    
    // Estado para detectar cuando el elemento está en el viewport
    const [inView, setInView] = useState(false);
    const [isInteractive, setIsInteractive] = useState(false);
    const animatedCount = useRef(0);
    
    // Dividir el texto en caracteres individuales
    const chars = text.split('');
    
    // Color del texto según el tema (adaptado para theme switching)
    const textColor = 'currentColor';
    
    // Configuración para la animación de entrada
    const from = { opacity: 0, transform: 'translate3d(0,40px,0)' };
    const to = { opacity: 1, transform: 'translate3d(0,0,0)' };
    
    // Crear springs para cada carácter
    const springs = useSprings(
        chars.length,
        chars.map((_, i) => ({
            from,
            to: inView 
                ? async (next) => {
                    await next(to);
                    animatedCount.current += 1;
                    if (animatedCount.current === chars.length) {
                        // Cuando termine la animación, activamos la interactividad
                        setIsInteractive(true);
                        if (onAnimationComplete) {
                            onAnimationComplete();
                        }
                    }
                }
                : from,
            delay: i * delay,
            config: { 
                tension: 300,
                friction: 20
            }
        }))
    );
    
    // Detectar cuando el elemento está en el viewport
    useEffect(() => {
        if (!containerRef.current) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(containerRef.current!);
                }
            },
            { threshold, rootMargin }
        );
        
        observer.observe(containerRef.current);
        
        return () => observer.disconnect();
    }, [threshold, rootMargin]);
    
    // Efecto para manejar la interacción del mouse (solo después de la animación inicial)
    useEffect(() => {
        if (!isInteractive || !containerRef.current) return;
        
        // Variables para la posición del mouse
        let mouseX = -1;
        let mouseY = -1;
        let boundingRect: DOMRect;
        
        // Función para actualizar la posición del mouse
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (!boundingRect) {
                boundingRect = containerRef.current!.getBoundingClientRect();
            }
            
            // Aplicamos la animación inmediatamente en el evento mousemove
            // para mayor fluidez en lugar de esperar al requestAnimationFrame
            updateChars();
        };
        
        // Función para actualizar los caracteres basado en la posición del mouse
        const updateChars = () => {
            if (mouseX < 0 || charsRef.current.length === 0) return;
            
            charsRef.current.forEach((char) => {
                if (!char) return;
                
                // Obtener posición y dimensiones del caracter
                const charRect = char.getBoundingClientRect();
                const charCenterX = charRect.left + charRect.width / 2;
                const charCenterY = charRect.top + charRect.height / 2;
                
                // Calcular distancia desde el mouse al caracter
                const distX = mouseX - charCenterX;
                const distY = mouseY - charCenterY;
                const distance = Math.sqrt(distX * distX + distY * distY);
                
                // Radio de influencia (menor = efecto más concentrado y rápido)
                const radius = 120;
                
                // Efecto solo si está dentro del radio
                if (distance < radius) {
                    // Calcular intensidad (1 = cerca, 0 = lejos)
                    const intensity = 1 - (distance / radius);
                    
                    // Aplicar transformación - mayor escala máxima para efecto más visible
                    char.style.transform = `scale(${1 + intensity * 0.3})`;
                    char.style.fontWeight = String(Math.min(900, 400 + intensity * 500));
                    // Transición más rápida para mayor fluidez
                    char.style.transition = 'transform 0.05s cubic-bezier(0.34, 1.56, 0.64, 1), font-weight 0.05s ease-out';
                } else {
                    // Resetear estilo si está fuera del radio
                    char.style.transform = 'scale(1)';
                    char.style.fontWeight = '400';
                    // Transición de retorno más rápida
                    char.style.transition = 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1), font-weight 0.1s ease-out';
                }
            });
        };
        
        // Agregar listener de mouse
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        
        // Listener de resize para actualizar el bounding rect
        const handleResize = () => {
            boundingRect = containerRef.current!.getBoundingClientRect();
        };
        
        window.addEventListener('resize', handleResize);
        boundingRect = containerRef.current.getBoundingClientRect();
        
        // Limpiar al desmontar
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [isInteractive]);
    
    return (
        <div 
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'visible',
                whiteSpace: 'nowrap',
                lineHeight: '1.2',
                fontSize: '2.5rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
                fontWeight: 400,
                color: textColor
            }}
        >
            {springs.map((spring, i) => (
                <animated.div
                    key={i}
                    ref={el => charsRef.current[i] = el}
                    style={{
                        ...spring,
                        display: 'inline-block',
                        transformOrigin: 'center',
                        willChange: 'transform, opacity, font-weight',
                        whiteSpace: 'pre'
                    }}
                >
                    {chars[i]}
                </animated.div>
            ))}
        </div>
    );
};

export default TextPressure;
