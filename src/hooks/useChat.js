// hooks/useChat.js
// Encapsulates all chat state: messages, loading, error, and send action.
// Keeping logic out of components makes them easy to test and reuse.

import { useState, useCallback } from 'react';
import { sendMessage as apiSendMessage } from '@/services/api';

/**
 * @typedef {Object} Message
 * @property {'user'|'assistant'} role
 * @property {string} content
 * @property {number} id  — timestamp-based unique id
 */

/**
 * @returns {{
 *   messages: Message[],
 *   isLoading: boolean,
 *   error: string|null,
 *   hasStarted: boolean,
 *   send: (text: string) => Promise<void>,
 *   clearError: () => void,
 * }}
 */
export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasStarted = messages.length > 0;

  const clearError = useCallback(() => setError(null), []);

  const send = useCallback(async (text) => {
    const trimmed = text?.trim();
    if (!trimmed || isLoading) return;

    setError(null);

    const userMessage = { role: 'user', content: trimmed, id: Date.now() };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Build payload without internal `id` field
      const payload = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content,
      }));

      const reply = await apiSendMessage(payload);

      const assistantMessage = {
        role: 'assistant',
        content: reply,
        id: Date.now() + 1,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  return { messages, isLoading, error, hasStarted, send, clearError };
}
