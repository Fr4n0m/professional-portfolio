import { useEffect, useRef, useState } from 'react';
import styles from './LocationHover.module.css';

const MAP_CONFIG = {
  coordinates: {
    lat: 36.7213, // Málaga, España
    lng: -4.4213
  },
  zoom: 15,
  leaflet: {
    css: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    js: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  },
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};

const useLeafletMap = (mapContainerRef, location) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const loadMap = async () => {
      try {
        // Verificar si Leaflet ya está cargado
        if (window.L && mapContainerRef.current) {
          initializeMap();
          return;
        }

        // Cargar CSS de Leaflet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = MAP_CONFIG.leaflet.css;
        document.head.appendChild(link);

        // Cargar JS de Leaflet
        const script = document.createElement('script');
        script.src = MAP_CONFIG.leaflet.js;
        script.async = true;
        
        script.onload = () => {
          if (mapContainerRef.current && window.L) {
            initializeMap();
          }
        };

        document.body.appendChild(script);
      } catch (error) {
        console.error('Error cargando el mapa:', error);
      }
    };

    const initializeMap = () => {
      // Crear el mapa
      const map = window.L.map(mapContainerRef.current).setView(
        [MAP_CONFIG.coordinates.lat, MAP_CONFIG.coordinates.lng], 
        MAP_CONFIG.zoom
      );
      
      // Agregar la capa de tiles con estilo moderno
      window.L.tileLayer(MAP_CONFIG.tileLayer.url, {
        attribution: MAP_CONFIG.tileLayer.attribution,
        maxZoom: 19
      }).addTo(map);
      
      // Crear marcador personalizado con LocationHover
      const customIcon = window.L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="location-hover-wrapper">
            <div class="${styles.markerContainer}">
              <div class="${styles.marker}"></div>
            </div>
            <div class="${styles.hoverCard}">
              <div class="${styles.cloud}"></div>
              <div class="${styles.cloud}"></div>
              <div class="${styles.cloud}"></div>
              <div class="${styles.cloud}"></div>
              <div class="${styles.innerCard}">
                <div class="${styles.bgMap}"></div>
                <div class="${styles.location}"></div>
                <div class="${styles.elements}">
                  <div class="${styles.description}">
                    <div class="${styles.blurItem}"></div>
                    <span class="${styles.mainTitle}">${location.city || 'Málaga'}</span>
                    <p class="${styles.secondTitle}">${location.region || 'Andalucía'}</p>
                    <p class="${styles.addressText}">${location.address || 'Playa de la Malagueta'}</p>
                  </div>
                  <div class="${styles.details}">
                    <div class="${styles.peoples}">
                      <div class="${styles.people}"></div>
                      <div class="${styles.people}"></div>
                      <div class="${styles.people}"></div>
                    </div>
                  </div>
                  <div class="${styles.action}" onclick="window.open('https://maps.apple.com/?ll=${MAP_CONFIG.coordinates.lat},${MAP_CONFIG.coordinates.lng}&z=20', '_blank')">
                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3669B6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        iconSize: [44.8, 44.8],
        iconAnchor: [22.4, 44.8]
      });

      // Agregar el marcador
      const marker = window.L.marker([MAP_CONFIG.coordinates.lat, MAP_CONFIG.coordinates.lng], { icon: customIcon })
        .addTo(map);
      
      // Agregar comportamiento de hover después de crear el marcador
      setTimeout(() => {
        const markerElement = document.querySelector('.custom-marker');
        if (markerElement) {
          // Asegurar que el marcador tenga el z-index correcto
          markerElement.style.zIndex = '10000';
          
          // Agregar evento hover con delay
          const hoverCard = markerElement.querySelector(`.${styles.hoverCard}`);
          const locationWrapper = markerElement.querySelector('.location-hover-wrapper');
          let timeoutId;
          
          if (hoverCard && locationWrapper) {
            // Mostrar hover inmediatamente al entrar
            locationWrapper.addEventListener('mouseenter', () => {
              clearTimeout(timeoutId); // Cancelar cualquier cierre pendiente
              hoverCard.style.transform = 'translateX(-50%) scale(1)';
              hoverCard.style.filter = 'blur(0px)';
              hoverCard.style.pointerEvents = 'all';
            });
            
            // Ocultar hover con delay al salir
            locationWrapper.addEventListener('mouseleave', () => {
              timeoutId = setTimeout(() => {
                hoverCard.style.transform = 'translateX(-50%) scale(0)';
                hoverCard.style.filter = 'blur(10px)';
                hoverCard.style.pointerEvents = 'none';
              }, 1000); // 1 segundo de delay
            });
            
            // También mantener el hover abierto cuando el ratón está sobre la tarjeta
            hoverCard.addEventListener('mouseenter', () => {
              clearTimeout(timeoutId);
            });
            
            // Cerrar el hover cuando sale de la tarjeta
            hoverCard.addEventListener('mouseleave', () => {
              timeoutId = setTimeout(() => {
                hoverCard.style.transform = 'translateX(-50%) scale(0)';
                hoverCard.style.filter = 'blur(10px)';
                hoverCard.style.pointerEvents = 'none';
              }, 500); // 0.5 segundos de delay adicional
            });
          }
        }
      }, 100);
      
      setMapInstance(map);
      setMapLoaded(true);
    };

    loadMap();

    // Cleanup
    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [location]);

  return { mapLoaded };
};

export default function LocationMap({ location }) {
  const mapContainerRef = useRef(null);
  const { mapLoaded } = useLeafletMap(mapContainerRef, location);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <div 
        ref={mapContainerRef} 
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] apple-style-map"
        style={{ zIndex: 1 }}
      >
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-400"></div>
              <div className="text-gray-600 text-sm">Cargando mapa...</div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx global>{`
        /* Estilo Apple Maps para Leaflet */
        .apple-style-map .leaflet-container {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          background: #f5f5f7;
        }
        
        /* Controles estilo Apple */
        .apple-style-map .leaflet-control-container .leaflet-top {
          top: 20px;
        }
        
        .apple-style-map .leaflet-control-container .leaflet-right {
          right: 20px;
        }
        
        .apple-style-map .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
          border-radius: 12px !important;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(10px);
        }
        
        .apple-style-map .leaflet-control-zoom a {
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 18px !important;
          color: #1d1d1f !important;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
          transition: background-color 0.2s;
        }
        
        .apple-style-map .leaflet-control-zoom a:last-child {
          border-bottom: none !important;
        }
        
        .apple-style-map .leaflet-control-zoom a:hover {
          background-color: rgba(0, 0, 0, 0.04) !important;
          color: #000 !important;
        }
        
        .apple-style-map .leaflet-control-zoom a:active {
          background-color: rgba(0, 0, 0, 0.08) !important;
        }
        
        /* Popup estilo Apple */
        .apple-style-map .leaflet-popup {
          margin-bottom: 20px;
        }
        
        .apple-style-map .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          border: 0.5px solid rgba(0, 0, 0, 0.08);
          padding: 0;
        }
        
        .apple-style-map .leaflet-popup-content {
          margin: 0;
          padding: 14px 16px;
          font-size: 14px;
          line-height: 1.4;
          color: #1d1d1f;
        }
        
        .apple-style-map .leaflet-popup-content strong {
          font-weight: 600;
          font-size: 15px;
          color: #000;
          display: block;
          margin-bottom: 4px;
        }
        
        .apple-style-map .leaflet-popup-tip-container {
          display: none;
        }
        
        .apple-style-map .leaflet-popup-close-button {
          top: 12px !important;
          right: 12px !important;
          width: 22px !important;
          height: 22px !important;
          font-size: 16px !important;
          color: #86868b !important;
          background: rgba(0, 0, 0, 0.04) !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.2s;
        }
        
        /* Atribución más discreta */
        .apple-style-map .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(10px);
          font-size: 11px !important;
          padding: 3px 8px !important;
          color: #86868b !important;
          border-radius: 4px;
          margin: 10px !important;
        }
        
        /* Marcador personalizado */
        .apple-style-map .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        /* Tiles con filtro para estilo Apple */
        .apple-style-map .leaflet-tile-pane {
          filter: brightness(1.02) contrast(1.08) saturate(0.9);
        }
      `}</style>
    </div>
  );
}
