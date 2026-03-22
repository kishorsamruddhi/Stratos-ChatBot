// App.jsx
// Root component. Composes layout and wires the useChat hook
// to all child components. No business logic lives here.

import styles from './App.module.css';
import Header       from '@/components/Header';
import BackgroundFx from '@/components/BackgroundFx';
import HeroLanding  from '@/components/HeroLanding';
import ChatWindow   from '@/components/ChatWindow';
import ChatInput    from '@/components/ChatInput';
import { useChat }  from '@/hooks/useChat';

export default function App() {
  const { messages, isLoading, error, hasStarted, send, clearError } = useChat();

  return (
    <div className={styles.layout}>
      {/* Decorative background — aria-hidden inside the component */}
      <BackgroundFx />

      {/* Fixed top navigation */}
      <Header />

      {/* Main content area sits between the header and the fixed input bar */}
      <main className={styles.main}>
        {!hasStarted ? (
          <HeroLanding onSuggest={send} />
        ) : (
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            error={error}
            onDismissError={clearError}
          />
        )}
      </main>

      {/* Fixed bottom input — always visible */}
      <ChatInput
        onSend={send}
        isLoading={isLoading}
        showQuickPrompts={!hasStarted}
      />
    </div>
  );
}
