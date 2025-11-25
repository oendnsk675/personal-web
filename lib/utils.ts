import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);

  return truncated.substring(0, truncated.lastIndexOf(' ')).trim() + ' ...';
}

export function calcReadingTime(text: string, wordsPerMinute = 200): number {
  if (!text) return 0;

  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function getCookie(name: string) {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

  return match ? match[2] : null;
}
