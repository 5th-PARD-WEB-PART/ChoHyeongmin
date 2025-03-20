import styles from '../styles/Favorites.module.css';

export default function Favorites() {
  return (
    <div className={styles.container}>
      <div className={styles.favorites}>
        <img src="/9.avif" alt="cross" className={styles.image} />
        <div className={styles.overlay}></div>
        <span className={styles.text}>예수님 📖</span>
      </div>
      
      <div className={styles.favorites}>
        <img src="/7.jpeg" alt="girl_f" className={styles.image} />
        <div className={styles.overlay}></div>
        <span className={styles.text}>여자친구 🥰</span>
      </div>
      
      <div className={styles.favorites}>
        <img src="/8.webp" alt="Music" className={styles.image} />
        <div className={styles.overlay}></div>
        <span className={styles.text}>악기 & 음악 🥁<br />(CCM & 장범준)</span>
      </div>
      
      <div className={styles.favorites}>
        <img src="/5.webp" alt="Pard" className={styles.image} />
        <div className={styles.overlay}></div>
        <span className={styles.text}>PARD 🌊</span>
      </div>
    </div>
  );
}
