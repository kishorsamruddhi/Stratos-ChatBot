// components/TypingIndicator.jsx
// Animated "AI is thinking" indicator shown while the API responds.

import styles from './TypingIndicator.module.css';

export default function TypingIndicator() {
  return (
    <div className={styles.wrapper} role="status" aria-label="StratosAI is thinking">
      <div className={styles.avatar} aria-hidden="true">S</div>
      <div className={styles.bubble}>
        <span className={styles.dot} style={{ animationDelay: '0s' }} />
        <span className={styles.dot} style={{ animationDelay: '0.2s' }} />
        <span className={styles.dot} style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
}
