import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Modern Living,<br />Timeless Design.</h1>
        <p className={styles.subtitle}>Curating interiors that reflect your vision and elevate your lifestyle.</p>
        <a href="#contact" className={styles.cta}>Get in Touch</a>
      </div>
      <div className={styles.visual}>
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
          alt="Modern Living Interior" 
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
