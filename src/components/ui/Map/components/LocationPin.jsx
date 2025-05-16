import styles from './LocationPin.module.css';

export default function LocationPin() {
  return (
    <>
      <div className={styles.locationPin}>
        <div className={styles.pulseRing}></div>
      </div>
      {/* Puntos parpadeantes de fondo */}
      <div className={styles.backgroundDot}></div>
      <div className={styles.backgroundDot}></div>
      <div className={styles.backgroundDot}></div>
    </>
  );
}
