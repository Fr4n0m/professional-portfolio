import { useState } from 'react';
import styles from './MapPinButton.module.css';

export default function MapPinButton({ lat, lng, className = '' }) {
  const [isActive, setIsActive] = useState(false);
  
  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsActive(true);
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
    setIsActive(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    
    // Añadir animación de pulsación visual
    setIsActive(true);
    
    // Simular un retraso antes de abrir el mapa
    setTimeout(() => {
      setIsActive(false);
      window.open(`https://maps.apple.com/?ll=${lat},${lng}&z=20`, '_blank');
    }, 150);
  };

  return (
    <div 
      className={`${styles.pinButton} ${isActive ? styles.active : ''} ${className}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsActive(false)}
    >
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20" className={styles.pinIcon}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3669B6"/>
      </svg>
    </div>
  );
}
