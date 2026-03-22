// components/BackgroundFx.jsx
// Purely decorative background layers — gradient mesh + noise texture.
// aria-hidden so screen readers skip it entirely.

import styles from './BackgroundFx.module.css';

export default function BackgroundFx() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.gradient} />
      <div className={styles.noise} />
    </div>
  );
}
