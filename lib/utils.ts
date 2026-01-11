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

/**
 * Format a date string into a human-readable format.
 * If no date is provided, the current date will be used.
 * The format is 'DD MMM YYYY'.
 * Example: '28 Jan 2022'
 * @param {string} date - the date string to format
 * @returns {string} the formatted date string
 */
export function formatDate(date?: string) {
  return new Date(date || '')
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace(',', '')
    .replace(/ /g, ' / ');
}

/**
 * Format a date string into a human-readable format with month and year.
 * If no date is provided, the current date will be used.
 * The format is 'MMM YYYY'.
 * Example: 'Jan 2022'
 * @param {Date} [date] - the date string to format
 * @returns {string} the formatted date string
 */
export function formatDateMonthYear(date?: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function updateQueryParams(updates: Record<string, string | null>) {
  const params = new URLSearchParams(window.location.search);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  return `${window.location.pathname}?${params.toString()}`;
}

export function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function matchTitle(title: string, keyword: string) {
  if (!keyword) return true;

  const escaped = escapeRegex(keyword);
  const regex = new RegExp(escaped, 'i');

  return regex.test(title);
}

export function getLanguageFromClassName(className?: string) {
  if (!className) return null;
  const match = className.match(/language-(\w+)/);
  return match ? match[1] : null;
}
