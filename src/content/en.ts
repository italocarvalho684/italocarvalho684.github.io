import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',

  meta: {
    title: 'Ítalo Carvalho | Senior Software Engineer · Mobile & Web',
    description:
      'Senior Software Engineer with 9+ years in mobile. I combine native iOS depth with React Native speed and have shipped apps for banking and regulated healthcare.',
    ogImageAlt: 'Ítalo Carvalho, Senior Software Engineer, Mobile & Web',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    skipToContent: 'Skip to content',
    switchLanguage: 'Ver em português',
    switchLanguageShort: 'PT',
    toggleTheme: 'Toggle dark mode',
  },

  hero: {
    title: 'Senior Software Engineer · Mobile & Web',
    headline: 'I build mobile apps people can rely on.',
    lede: 'Native iOS depth with React Native speed. 9+ years shipping high-stakes apps in banking and regulated healthcare, for Banco do Brasil, Sanofi, CSL Behring and Roche.',
    availability: 'Open to remote opportunities',
    photoAlt: 'Portrait of Ítalo Carvalho',
    ctaDownloadCv: 'Download CV',
    ctaLinkedIn: 'LinkedIn',
    ctaContact: 'Contact',
  },

  highlights: [
    { value: '9+ years', label: 'building mobile apps' },
    { value: 'Millions', label: 'of users on the banking app I worked on' },
    { value: '4 months', label: 'from kickoff to store launch on B SUPPORT' },
    { value: '4.7★', label: 'MyWay on the App Store, ~1.9K ratings' },
  ],

  clients: {
    label: "Apps I've worked on are used by customers and patients of",
    names: ['Banco do Brasil', 'Sanofi', 'Regeneron', 'CSL Behring', 'Roche'],
  },

  about: {
    heading: 'About',
    paragraphs: [
      "I'm a senior software engineer with 9+ years building mobile apps where mistakes are expensive: Banco do Brasil's banking app, used by millions of people, and regulated digital health apps for Sanofi, CSL Behring and Roche.",
      'I work on both sides: native iOS (and Android when needed) and React Native. That covers the work many React Native developers avoid, such as brownfield integrations, native modules, security and offline sync, without losing cross-platform speed.',
      'I enjoy building the foundations other engineers build on: reusable modules, server-driven UI engines and offline layers. I partner with tech leads on architecture, review code, mentor engineers on React Native and TypeScript, and care about the details that make an app trustworthy.',
    ],
  },

  experience: {
    heading: 'Experience',
    present: 'Present',
    clientLabel: 'Client',
    stackLabel: 'Stack',
    casesLabel: 'Case studies',
    items: [
      {
        id: 'bairesdev',
        domain: 'health',
        role: 'Senior Mobile Developer',
        company: 'BairesDev',
        client: 'BrightInsight',
        location: 'Remote',
        start: '2022-01',
        end: null,
        summary:
          'BrightInsight is a VC-backed Silicon Valley platform for regulated digital health. I build patient apps classified as medical devices for Sanofi, Regeneron, CSL Behring and Roche, in a team of 3 to 4 engineers and a tech lead.',
        bullets: [
          'Built CSL Modules, a library of reusable UI components and shared flows (login, consent, account creation) that became the foundation of the Hizentra App, B SUPPORT and other BrightInsight apps.',
          "Built the Hizentra App's UI foundation and its product QR code scanner.",
          'Partner with the tech lead on architecture, review pull requests, mentor engineers on React Native, TypeScript and Jest, and helped validate spec-driven development with AI on a large Sanofi app.',
        ],
        cases: ['b-support', 'myway'],
        stack: [
          'React Native',
          'TypeScript',
          'Redux',
          'React Navigation',
          'Jest',
          'Native Modules (iOS/Android)',
          'Keychain/Keystore',
          'Push Notifications',
          'Deep Linking',
          'i18n/RTL',
          'Bitrise',
          'Firebase Crashlytics',
        ],
      },
      {
        id: 'capgemini',
        domain: 'bank',
        role: 'Senior Mobile Developer',
        company: 'Capgemini',
        client: 'Banco do Brasil',
        location: 'Brasília, Brazil',
        start: '2019-09',
        end: '2022-01',
        summary:
          "Worked on Banco do Brasil's mobile banking app, used by millions of customers, and on the internal platforms its squads use to ship features.",
        bullets: [
          'Redesigned the personal finance area for Open Finance so it shows transactions from other banks, including the monthly agenda and spending-by-category charts.',
          'Unified analytics behind one extensible interface that sends events to Firebase, Matomo and other providers, and defined the events with the business team.',
        ],
        cases: ['kodiak'],
        stack: ['React Native', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Matomo'],
      },
      {
        id: 'stefanini',
        domain: 'bank',
        role: 'Mobile Developer',
        company: 'Stefanini Group',
        client: 'Banco do Brasil',
        location: 'Brasília, Brazil',
        start: '2017-09',
        end: '2019-08',
        summary:
          "Helped move Banco do Brasil's large native banking app to React Native one flow at a time, without stopping it.",
        bullets: [
          'Took part in releases, fixing issues quickly to minimize impact on users.',
        ],
        cases: ['bb-migration'],
        stack: ['React Native', 'JavaScript', 'Objective-C', 'Swift', 'Android', 'Native bridges', 'VoiceOver'],
      },
      {
        id: 'cast',
        domain: 'bank',
        role: 'iOS Developer',
        company: 'Cast Group',
        client: 'Banco do Brasil',
        location: 'Brasília, Brazil',
        start: '2017-03',
        end: '2017-09',
        summary: "Built features for the personal finance and budgeting area of Banco do Brasil's native iOS app.",
        bullets: [
          'Drew custom charts from scratch with Core Graphics, without third-party libraries, including a budget bar that shifts between on-track, warning and over-budget states as spending changes.',
          'Built reusable, highly customizable UI components with view code and NIBs.',
          'Stored data locally with Core Data so it was fetched once and queried on the device, making navigation fast.',
        ],
        cases: [],
        stack: ['Objective-C', 'Swift', 'UIKit', 'Core Graphics', 'Core Data', 'REST APIs'],
      },
    ],
  },

  projects: {
    heading: 'Selected work',
    intro: 'Four projects in more depth: the problem, what I did and what changed.',
    contextLabel: 'Context',
    contributionsLabel: 'What I did',
    outcomeLabel: 'Outcome',
    builtWithLabel: 'Stack',
    domainLabels: { bank: 'Banking', health: 'Health' },
    items: [
      {
        id: 'kodiak',
        domain: 'bank',
        title: 'Kodiak',
        tagline: "Low-code platform behind Banco do Brasil's app",
        client: 'Banco do Brasil',
        period: '2019 – 2022',
        role: 'Senior Mobile Developer (Capgemini)',
        context:
          "Shipping a new feature in Banco do Brasil's app required mobile specialists and an app store release. The bank wanted squads to build screens and flows faster, with consistent UI, without depending on app updates.",
        contributions: [
          'Helped conceive the platform and build its foundation.',
          'Built much of the engine in Node.js and TypeScript: it receives screen instructions (e.g. "list with a button that navigates to another screen") and returns a payload ready for the app to render.',
          'Built the React Native renderer that turns those payloads into screens inside the banking app, including templates, loading states and navigation.',
          'Designed screen templates with the UX team and presented the platform to other teams.',
        ],
        outcome: [
          'Banco do Brasil later reported that Kodiak cut feature development in the app from about 60 to 7 days (2025 tests).',
          'Screens and flows can change without an app update.',
        ],
        stack: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'React Native'],
        links: [
          { label: 'Banco do Brasil tech blog', href: 'https://blog.bb.com.br/kodiak-the-new-technology-behind-the-bb-app' },
          { label: 'Press coverage (PT)', href: 'https://www.letsmoney.com.br/noticias/bb-kodiak-plataforma-no-code-app/' },
        ],
      },
      {
        id: 'b-support',
        domain: 'health',
        title: 'B SUPPORT',
        tagline: 'Hemophilia B patient app',
        client: 'CSL Behring · BrightInsight',
        period: '2023',
        role: 'Senior Mobile Developer (BairesDev)',
        context:
          'People with hemophilia B considering gene therapy (HEMGENIX) need to track bleeds, factor IX activity and how they feel, and bring that data to their doctor. The app is regulated and was built from zero on a tight timeline.',
        contributions: [
          'Built the consent flow: when a patient withdraws consent, remote data is deleted and kept only on the device; when they consent again, it syncs back.',
          "Built the app's offline layer and data synchronization.",
          'Built the data visualization and patient journal: components that show progress as questionnaires are answered.',
          'Built the educational section, rendered dynamically from content.',
        ],
        outcome: [
          'Launched on the App Store and Google Play in the US four months after kickoff.',
          'Reused foundation modules from CSL Modules, which I helped build.',
        ],
        stack: ['React Native', 'TypeScript', 'Redux', 'Offline sync', 'Data visualization'],
        links: [
          { label: 'App Store', href: 'https://apps.apple.com/us/app/b-support/id1667769684' },
          {
            label: 'Launch announcement',
            href: 'https://brightinsight.com/blog/brightinsight-and-csl-behring-launch-b-support-patient-app-for-hemgenix-hemophilia-b-gene-therapy',
          },
        ],
      },
      {
        id: 'myway',
        domain: 'health',
        title: 'MyWay',
        tagline: 'Patient support app for DUPIXENT',
        client: 'Sanofi & Regeneron · BrightInsight',
        period: '2024 – present',
        role: 'Senior Mobile Developer (BairesDev)',
        context:
          'Support app for patients on DUPIXENT: dose calendar, injection tracking, symptom journal and insurance help. As a regulated medical device, every app release goes through long validation, so shipping content through the stores is slow.',
        contributions: [
          'Built a server-driven content engine: reusable components (cards, rich HTML text, carousels, video, images, links) rendered from backend payloads.',
          'Built offline-first logging for injections and questionnaires, with sync.',
          'Worked on the core injection flow, next-dose calculation (online and offline) and body-site selection.',
          'Encrypted sensitive data, used Keychain/Keystore and fixed penetration test findings.',
          'Added push and local reminders, on-device PDF reports, accessibility improvements and Japanese and Arabic (RTL) support.',
        ],
        outcome: [
          'The client publishes and updates educational content without an app release, and has started publishing more often.',
          'The app is rated 4.7★ from ~1.9K ratings on the App Store.',
        ],
        stack: ['React Native', 'TypeScript', 'Keychain/Keystore', 'Push notifications', 'i18n/RTL', 'PDF generation'],
        links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/myway-patient-support/id6443848439' }],
      },
      {
        id: 'bb-migration',
        domain: 'bank',
        title: 'Native to React Native',
        tagline: "Moving Banco do Brasil's app without stopping it",
        client: 'Banco do Brasil',
        period: '2017 – 2019',
        role: 'Mobile Developer (Stefanini)',
        context:
          "Banco do Brasil's app was a large native codebase used by millions of customers. Rewriting it at once was not an option, so React Native had to live inside the native app and grow flow by flow.",
        contributions: [
          'Learned how React Native works under the hood to embed it in existing native flows.',
          'Built on-demand loading of JavaScript bundles inside native view controllers, plus native bridges and two-way navigation.',
          'Migrated dozens of screens: payments, transfers, statements, personal finance and insurance.',
          'Built voice commands and improved VoiceOver accessibility in the new React Native screens.',
        ],
        outcome: [
          'The bank adopted React Native gradually, feature by feature, while the native app kept shipping to its users.',
        ],
        stack: ['React Native', 'JavaScript', 'Objective-C', 'Swift', 'Android', 'Native bridges'],
        links: [],
      },
    ],
  },

  skills: {
    heading: 'Skills',
    capabilities: [
      {
        title: 'Cross-platform mobile',
        proof: 'Features end to end, from technical design to store release, on iOS and Android.',
        tech: ['React Native', 'TypeScript', 'Redux', 'React Navigation', 'Expo', 'Jest'],
      },
      {
        title: 'Native depth',
        proof: 'Brownfield integration, native modules and platform bugs that most React Native developers avoid.',
        tech: ['Swift', 'Objective-C', 'UIKit', 'Core Data', 'Core Graphics', 'Android (native modules, Gradle)'],
      },
      {
        title: 'Data you can trust',
        proof: 'Offline-first apps that sync safely and respect consent, in regulated health products.',
        tech: ['Offline sync', 'Keychain/Keystore', 'Encryption', 'Penetration test fixes', 'Push notifications', 'Deep linking'],
      },
      {
        title: 'Platforms for teams',
        proof: 'Foundations other engineers build on: server-driven UI engines and shared modules.',
        tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Server-driven UI', 'Component libraries'],
      },
      {
        title: 'Inclusive, global apps',
        proof: 'Apps that work with screen readers and in other languages, including right-to-left scripts.',
        tech: ['VoiceOver', 'TalkBack', 'i18n', 'RTL layouts', 'On-device PDF generation'],
      },
      {
        title: 'Quality and ways of working',
        proof: 'Regulated delivery, code review and mentoring, with AI in the workflow.',
        tech: ['Code review', 'Bitrise CI/CD', 'Firebase Crashlytics', 'Spec-driven development', 'AI-assisted development (Claude)', 'Agile/Scrum'],
      },
    ],
  },

  education: {
    heading: 'Education',
    certificationsHeading: 'Certifications',
    items: [
      {
        institution: 'Universidade Católica de Brasília',
        degree: 'Bachelor of Computer Science',
        period: '2013 – 2017',
      },
      {
        institution: 'Apple Developer Academy',
        degree: 'iOS Development Training Program',
        period: '2015 – 2017',
        note: 'Built two games and an app during the program.',
      },
      {
        institution: 'Instituto de Educação Superior de Brasília (IESB)',
        degree: 'Graduate specialization (Lato Sensu) in Mobile Development',
        period: '2018 – 2020',
      },
    ],
    certifications: [
      { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: '2024' },
      { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
    ],
  },

  contact: {
    heading: 'Contact',
    text: "Hiring for a mobile or full-stack TypeScript role, or need help with a mobile app? I'd like to hear about it.",
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
  },

  footer: {
    builtWith: 'Built with Astro. Hosted on GitHub Pages.',
  },
};
