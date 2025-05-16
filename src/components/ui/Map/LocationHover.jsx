import { useState, useRef, useEffect } from 'react';
import styles from './LocationHover.module.css';

export default function LocationHover({ 
  children, 
  city = "Málaga", 
  region = "Andalucía", 
  address = "Playa de la Malagueta",
  lat = 36.7213,
  lng = -4.4213,
  contactUrl = "/contacto",
  delay = 1000
}) {
  const [isHovering, setIsHovering] = useState(false);
  const hoverCardRef = useRef(null);
  const timeoutRef = useRef(null);

  // Coordenadas de Calle Pirandello 16, Málaga
  const diMapLat = 36.7201;
  const diMapLng = -4.4428;

  // Usamos las coordenadas según la dirección
  const actualLat = address.includes("Pirandello") ? diMapLat : lat;
  const actualLng = address.includes("Pirandello") ? diMapLng : lng;

  // Gestionar eventos de mouse
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, delay);
  };

  // Gestionar interacción con la tarjeta
  const handleCardMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleCardMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 500); // Delay más corto al salir de la tarjeta
  };

  // Gestionar clic en la tarjeta - redireccionar a contacto
  const handleCardClick = () => {
    window.location.href = contactUrl;
  };

  // Gestionar clic en el botón del mapa
  const handleMapButtonClick = (e) => {
    e.stopPropagation(); // Evitar que el clic se propague a la tarjeta
    window.open(`https://maps.apple.com/?ll=${actualLat},${actualLng}&z=20`, '_blank');
  };

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span 
      className={styles.hoverContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      <div
        ref={hoverCardRef}
        className={styles.hoverCard}
        style={{
          transform: isHovering ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
          filter: isHovering ? 'blur(0px)' : 'blur(10px)',
          pointerEvents: isHovering ? 'auto' : 'none'
        }}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        onClick={handleCardClick}
      >
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        <div className={styles.innerCard}>
          <div className={styles.bgMap}></div>
          <div className={styles.location}></div>
          <div className={styles.elements}>
            <div className={styles.description}>
              <div className={styles.blurItem}></div>
              <span className={styles.mainTitle}>{city}</span>
              <p className={styles.secondTitle}>{region}</p>
              <p className={styles.addressText}>{address}</p>
            </div>
            <div className={styles.details}>
              <div className={styles.peoples}>
                <div className={styles.people}></div>
                <div className={styles.people}></div>
                <div className={styles.people}></div>
              </div>
            </div>
            <div 
              className={styles.action}
              onClick={handleMapButtonClick}
            >
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3669B6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}
