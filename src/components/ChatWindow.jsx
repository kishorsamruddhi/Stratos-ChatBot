// components/ChatWindow.jsx
// Renders the scrollable list of messages, typing indicator, and error banner.

import styles from './ChatWindow.module.css';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import ErrorBanner from './ErrorBanner';
import { useAutoScroll } from '@/hooks/useAutoScroll';

export default function ChatWindow({ messages, isLoading, error, onDismissError }) {
  const bottomRef = useAutoScroll([messages, isLoading]);

  return (
    <div className={styles.window} aria-label="Chat messages" aria-live="polite">
      <div className={styles.inner}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isLoading && <TypingIndicator />}

        <ErrorBanner message={error} onDismiss={onDismissError} />

        {/* Scroll anchor — extra height so content clears the fixed input bar */}
        <div ref={bottomRef} className={styles.anchor} />
      </div>
    </div>
  );
}
