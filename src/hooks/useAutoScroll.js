// hooks/useAutoScroll.js
// Scrolls a ref element into view whenever `deps` change.

import { useEffect, useRef } from 'react';

/**
 * @param {Array} deps  — values that trigger a scroll (e.g. [messages, isLoading])
 * @returns {React.RefObject}  — attach to the element you want scrolled into view
 */
export function useAutoScroll(deps) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}
