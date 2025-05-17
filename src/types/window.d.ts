// Extendemos la interfaz Window para incluir nuestras funciones de modales
interface Window {
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}
