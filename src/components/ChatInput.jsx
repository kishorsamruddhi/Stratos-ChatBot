// components/ChatInput.jsx
// Fixed bottom input bar with auto-growing textarea, send button,
// and quick-prompt chips shown before the first message.

import { useState, useRef, useCallback } from 'react';
import styles from './ChatInput.module.css';
import { QUICK_PROMPTS } from '@/constants/suggestions';

const MAX_ROWS_HEIGHT = 120; // px

export default function ChatInput({ onSend, isLoading, showQuickPrompts }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  // Auto-grow textarea up to MAX_ROWS_HEIGHT
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, MAX_ROWS_HEIGHT) + 'px';
  }, []);

  const submit = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.focus();
    }
  }, [value, isLoading, onSend]);

  const handleKey = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }, [submit]);

  const handleQuickPrompt = useCallback((prompt) => {
    onSend(prompt);
  }, [onSend]);

  const canSend = value.trim().length > 0 && !isLoading;

  return (
    <div className={styles.bar}>
      {/* Quick prompts — visible before first message */}
      {showQuickPrompts && (
        <div className={styles.quickRow} aria-label="Quick start prompts">
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q}
              className={styles.quickChip}
              onClick={() => handleQuickPrompt(q)}
              disabled={isLoading}
              aria-label={`Quick prompt: ${q}`}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input row */}
      <div className={styles.inputRow}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder="Ask about strategy, startups, markets, ideas…"
          rows={1}
          aria-label="Message input"
          aria-multiline="true"
          disabled={isLoading}
        />

        <button
          className={`${styles.sendBtn} ${canSend ? styles.sendActive : ''}`}
          onClick={submit}
          disabled={!canSend}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>

      <p className={styles.footer}>
        StratosAI · Powered by Claude · Built for Thinkly Labs
      </p>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
