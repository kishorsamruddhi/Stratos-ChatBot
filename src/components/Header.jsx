// components/Header.jsx
import styles from './Header.module.css';
import { APP_NAME } from '@/constants/suggestions';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.avatar} aria-hidden="true">S</div>
        <span className={styles.name}>
          {APP_NAME.slice(0, -2)}
          <span className={styles.accent}>{APP_NAME.slice(-2)}</span>
        </span>
      </div>

      <div className={styles.status} role="status" aria-label="Live indicator">
        <span className={styles.dot} />
        <span className={styles.statusText}>LIVE</span>
      </div>
    </header>
  );
}
