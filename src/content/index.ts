import { en } from './en';
import { pt } from './pt';
import type { SiteContent } from './types';

export { profile } from './profile';
export type * from './types';

export const content: Record<SiteContent['lang'], SiteContent> = { en, pt };
export const defaultLang: SiteContent['lang'] = 'en';
