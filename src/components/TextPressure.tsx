// src/components/TextPressure.tsx
// Versión actualizada con mejor soporte multilingüe
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
    delay = 70, // Un poco más lento para una animación más suave
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
    
    // Detectar si el texto está en un idioma que requiere tratamiento especial
    const isComplexScript = () => {
        // Expresiones regulares para detectar diferentes sistemas de escritura
        const patterns = {
            devanagari: /[\u0900-\u097F]/,    // Hindi
            arabic: /[\u0600-\u06FF]/,        // Árabe
            cjk: /[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/  // Chino, Japonés, Coreano
        };
        
        return patterns.devanagari.test(text) || patterns.arabic.test(text) || patterns.cjk.test(text);
    };
    
    // Estrategia para dividir texto basada en el idioma
    const splitText = () => {
        if (isComplexScript()) {
            // Para scripts complejos, dividir cada caracter
            return text.split('');
        } else {
            // Para scripts latinos, también dividir por caracteres
            return text.split('');
        }
    };
    
    // Dividir el texto apropiadamente
    const chars = splitText();
    
    // Color del texto según el tema (adaptado para theme switching)
    const textColor = 'currentColor';
    
    // Configuración para la animación de entrada
    const from = { opacity: 0, transform: 'translate3d(0,40px,0)' };
    const to = { opacity: 1, transform: 'translate3d(0,0,0)' };
    
    // Crear springs para cada carácter o token
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
                // Configuración más suave para que la animación se sienta más fluida
                tension: 200,
                friction: 25,
                mass: 1.5
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
        
        // Configuración más segura para radio del efecto hover
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
        
        // Radio más pequeño para evitar desbordamiento
        const radius = 40;
        
        // Efecto solo si está dentro del radio
        if (distance < radius) {
        // Intensidad reducida para menor escala
        const intensity = Math.pow(1 - (distance / radius), 0.5);
        
        // Aplicar transformación con efecto más controlado
        char.style.transform = `scale(${1 + intensity * 0.2})`; // Efecto más sutil
        char.style.fontWeight = String(Math.min(800, 400 + intensity * 300)); // Menor cambio en el peso
        char.style.transition = 'transform 0.02s cubic-bezier(0, 0, 0.1, 1), font-weight 0.02s linear';
        } else {
        // Resetear estilo si está fuera del radio
            char.style.transform = 'scale(1)';
        char.style.fontWeight = '400';
        char.style.transition = 'transform 0.03s cubic-bezier(0, 0, 0.1, 1), font-weight 0.03s linear';
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
    
    // Determinar si se debe permitir ajuste de línea para idiomas complejos
    const needsWordWrap = isComplexScript();
    
    return (
        <div 
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'visible',
                whiteSpace: needsWordWrap ? 'normal' : 'pre-wrap',
                lineHeight: needsWordWrap ? '1.3' : '1.2',
                fontSize: needsWordWrap ? '3rem' : '3.5rem',
                fontWeight: 400,
                color: textColor,
                wordBreak: needsWordWrap ? 'break-word' : 'normal',
                overflowWrap: 'break-word',
                paddingRight: '0', // Quitar padding para no afectar el aspecto visual
            }}
        >
            <h1 style={{ fontSize: 'inherit', margin: 0, padding: 0, fontWeight: 'inherit' }}>
                {springs.map((spring, i) => (
                    <animated.div
                        key={i}
                        ref={el => charsRef.current[i] = el}
                        style={{
                            ...spring,
                            display: 'inline-block',
                            transformOrigin: 'center',
                            willChange: 'transform, opacity, font-weight',
                            whiteSpace: needsWordWrap ? 'normal' : 'pre',
                            marginRight: '0px', // Quitar margen entre caracteres
                            fontSize: 'inherit' // Usar tamaño de fuente heredado
                        }}
                    >
                        {chars[i]}
                    </animated.div>
                ))}
            </h1>
        </div>
    );
};

export default TextPressure;
