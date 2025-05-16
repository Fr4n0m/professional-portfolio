import { useState, useRef, useEffect } from 'react';
import styles from './BackgroundMap.module.css';

export default function BackgroundMap({ lat = 36.7213, lng = -4.4213 }) {
  const mapRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Simular calles y caminos en el mapa
  useEffect(() => {
    if (isVisible && mapRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = mapRef.current.clientWidth * 2; // Para mayor resolución
      canvas.height = mapRef.current.clientHeight * 2;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '1';
      
      const ctx = canvas.getContext('2d');
      
      // Dibujar un fondo de mapa simplificado
      if (ctx) {
        // Establece un fondo claro
        ctx.fillStyle = 'rgba(233, 241, 255, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dibuja calles principales
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 5;
        
        // Calle horizontal principal
        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2);
        ctx.lineTo(canvas.width, canvas.height/2);
        ctx.stroke();
        
        // Calle vertical principal
        ctx.beginPath();
        ctx.moveTo(canvas.width/2, 0);
        ctx.lineTo(canvas.width/2, canvas.height);
        ctx.stroke();
        
        // Calles secundarias
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 3;
        
        // Horizontales
        for (let i = 1; i < 4; i++) {
          const y = (canvas.height / 4) * i;
          if (Math.abs(y - canvas.height/2) > 10) { // Evitar superposición con la calle principal
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
        
        // Verticales
        for (let i = 1; i < 4; i++) {
          const x = (canvas.width / 4) * i;
          if (Math.abs(x - canvas.width/2) > 10) { // Evitar superposición con la calle principal
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
        }
        
        // Añadir áreas verdes
        ctx.fillStyle = 'rgba(144, 238, 144, 0.3)';
        ctx.beginPath();
        ctx.arc(canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.1, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.15, 0, Math.PI * 2);
        ctx.fill();
        
        // Agua (mar para Málaga)
        ctx.fillStyle = 'rgba(135, 206, 235, 0.3)';
        ctx.beginPath();
        ctx.rect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);
        ctx.fill();
      }
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(canvas);
    }
  }, [isVisible]);
  
  useEffect(() => {
    // Cuando el componente padre indique visibilidad
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'class' &&
            mapRef.current && 
            mapRef.current.closest(`.${styles.bgMapVisible}`) !== null) {
          setIsVisible(true);
        }
      });
    });
    
    if (mapRef.current && mapRef.current.parentElement) {
      observer.observe(mapRef.current.parentElement, { attributes: true });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className={styles.bgMap}></div>
  );
}
