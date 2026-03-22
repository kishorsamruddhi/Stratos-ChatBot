// components/MessageBubble.jsx
// Renders a single chat message — user or assistant.

import styles from './MessageBubble.module.css';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.wrapper} ${isUser ? styles.user : styles.assistant}`}>
      {!isUser && (
        <div className={styles.avatar} aria-hidden="true">S</div>
      )}
      <div
        className={`${styles.bubble} ${isUser ? styles.bubbleUser : styles.bubbleAssistant}`}
        role="article"
        aria-label={`${isUser ? 'You' : 'StratosAI'} said`}
      >
        {message.content}
      </div>
    </div>
  );
}
