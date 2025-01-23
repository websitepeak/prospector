import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import styles from './Header.module.css';
import type { HeaderProps } from '../model/types';

export function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className || ''}`} role="banner">
      <Link to="/" className={styles.header__logo} aria-label="WebsitePeak Home">
        WebsitePeak
      </Link>
      <nav className={styles.header__nav} aria-label="Main navigation">
        <Button variant="secondary" aria-label="Go to Dashboard">Dashboard</Button>
        <Button aria-label="Start Prospecting">Start Prospecting</Button>
      </nav>
    </header>
  );
} 