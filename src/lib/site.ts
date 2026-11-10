import type { SiteContent, YearMonth } from '../content/types';

type Lang = SiteContent['lang'];

/** Prefix a path with the configured base ("/" or "/repo-name"). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

/** Root URL of a language version: "/" for English, "/pt/" for Portuguese. */
export function localeHome(lang: Lang): string {
  return lang === 'en' ? withBase('') : withBase('pt/');
}

const months: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
};

export function formatMonth(value: YearMonth, lang: Lang): string {
  const [year, month] = value.split('-');
  return `${months[lang][Number(month) - 1]} ${year}`;
}

export function formatPeriod(start: YearMonth, end: YearMonth | null, lang: Lang, present: string): string {
  return `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : present}`;
}

