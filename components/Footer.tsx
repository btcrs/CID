import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>CAROTHERS</div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Carothers Interior Design. All rights reserved.
        </div>
        <div className={styles.social}>
        </div>
      </div>
    </footer>
  );
}
