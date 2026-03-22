// components/HeroLanding.jsx
// Shown when the conversation hasn't started yet.
// Displays the headline, tagline, and clickable suggestion chips.

import styles from './HeroLanding.module.css';
import { APP_NAME, APP_DESCRIPTION, SUGGESTIONS } from '@/constants/suggestions';

export default function HeroLanding({ onSuggest }) {
  return (
    <section className={styles.hero} aria-label="Welcome screen">
      <div className={styles.inner}>

        {/* Badge */}
        <div className={styles.badge}>
          BUSINESS INTELLIGENCE · STARTUP GUIDANCE
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Your AI<br />
          <span className={styles.shimmer}>Business Mentor</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>{APP_DESCRIPTION}</p>

        {/* Suggestion chips */}
        <div className={styles.chips} role="list" aria-label="Suggested topics">
          {SUGGESTIONS.map((s, i) => (
            <button
              key={s.label}
              role="listitem"
              className={styles.chip}
              style={{ animationDelay: `${i * 0.055}s` }}
              onClick={() => onSuggest(s.label)}
              aria-label={`Ask about: ${s.label}`}
            >
              <span className={styles.chipIcon} aria-hidden="true">{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
