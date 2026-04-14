import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Legado</span>
          <p className={styles.description}>
            Financial guidance for immigrants settling abroad.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Legal</h4>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
            <Link href="/cookies" className={styles.link}>Cookies Policy</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {currentYear} Legado. All rights reserved.</p>
      </div>
    </footer>
  );
}
