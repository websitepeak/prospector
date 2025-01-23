import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import type { FooterProps } from '../model/types';

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className || ''}`} role="contentinfo">
      <div className={styles.footer__content}>
        <nav className={styles.footer__section} aria-labelledby="product-nav">
          <h3 id="product-nav" className={styles.footer__title}>Product</h3>
          <Link to="/features" className={styles.footer__link}>Features</Link>
          <Link to="/pricing" className={styles.footer__link}>Pricing</Link>
          <Link to="/docs" className={styles.footer__link}>Documentation</Link>
        </nav>
        <nav className={styles.footer__section} aria-labelledby="company-nav">
          <h3 id="company-nav" className={styles.footer__title}>Company</h3>
          <Link to="/about" className={styles.footer__link}>About</Link>
          <Link to="/blog" className={styles.footer__link}>Blog</Link>
          <Link to="/careers" className={styles.footer__link}>Careers</Link>
        </nav>
        <nav className={styles.footer__section} aria-labelledby="legal-nav">
          <h3 id="legal-nav" className={styles.footer__title}>Legal</h3>
          <Link to="/privacy" className={styles.footer__link}>Privacy Policy</Link>
          <Link to="/terms" className={styles.footer__link}>Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
} 