// Shape of the site content. Edit en.ts / pt.ts (and profile.ts for shared data).
// Components only read from these files — you never need to touch them to update text.

/** "YYYY-MM". Components format it per language (e.g. "Jan 2022" / "jan 2022"). */
export type YearMonth = `${number}-${string}`;

/** Career chapter, shown as a text label on case studies. */
export type Domain = 'bank' | 'health';

export interface Link {
  label: string;
  href: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  domain: Domain;
  role: string;
  company: string;
  client?: string;
  location: string;
  start: YearMonth;
  end: YearMonth | null; // null = present
  summary: string;
  /** Short index bullets. Detail lives in the linked case studies. */
  bullets: string[];
  /** ids of projects to link as case studies (may be empty). */
  cases: string[];
  stack: string[];
}

export interface Project {
  id: string;
  domain: Domain;
  title: string;
  tagline: string;
  client: string;
  period: string;
  role: string;
  context: string;
  contributions: string[];
  outcome: string[];
  stack: string[];
  links: Link[];
}

export interface Capability {
  title: string;
  /** One sentence: what you do well, in plain words. */
  proof: string;
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SiteContent {
  lang: 'en' | 'pt';
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    skipToContent: string;
    switchLanguage: string;
    switchLanguageShort: string;
    toggleTheme: string;
  };
  hero: {
    title: string;
    headline: string;
    lede: string;
    availability: string;
    photoAlt: string;
    ctaDownloadCv: string;
    ctaLinkedIn: string;
    ctaContact: string;
  };
  highlights: Highlight[];
  clients: {
    label: string;
    names: string[];
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  experience: {
    heading: string;
    present: string;
    clientLabel: string;
    stackLabel: string;
    casesLabel: string;
    items: Experience[];
  };
  projects: {
    heading: string;
    intro: string;
    contextLabel: string;
    contributionsLabel: string;
    outcomeLabel: string;
    builtWithLabel: string;
    domainLabels: Record<Domain, string>;
    items: Project[];
  };
  skills: {
    heading: string;
    capabilities: Capability[];
  };
  education: {
    heading: string;
    certificationsHeading: string;
    items: Education[];
    certifications: Certification[];
  };
  contact: {
    heading: string;
    text: string;
    emailLabel: string;
    linkedinLabel: string;
  };
  footer: {
    builtWith: string;
  };
}
