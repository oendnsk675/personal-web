'use client';
import { useEffect } from 'react';

export function useShortcut(key: string, callback: () => void) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === key) {
        const el = document.activeElement;
        const isTyping =
          el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement ||
          el?.getAttribute('contenteditable') === 'true';

        if (isTyping) return;

        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [key, callback]);
}
