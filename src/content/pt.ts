import type { SiteContent } from './types';

export const pt: SiteContent = {
  lang: 'pt',

  meta: {
    title: 'Ítalo Carvalho | Senior Software Engineer · Mobile & Web',
    description:
      'Senior Software Engineer com mais de 9 anos em mobile. Uno profundidade em iOS nativo à velocidade do React Native e já entreguei apps para bancos e saúde regulada.',
    ogImageAlt: 'Ítalo Carvalho, Senior Software Engineer, Mobile & Web',
  },

  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Skills',
    education: 'Formação',
    contact: 'Contato',
    skipToContent: 'Pular para o conteúdo',
    switchLanguage: 'View in English',
    switchLanguageShort: 'EN',
    toggleTheme: 'Alternar modo escuro',
  },

  hero: {
    title: 'Senior Software Engineer · Mobile & Web',
    headline: 'Construo apps mobile em que as pessoas podem confiar.',
    lede: 'Profundidade em iOS nativo com a velocidade do React Native. Mais de 9 anos entregando apps críticos em bancos e saúde regulada, para Banco do Brasil, Sanofi, CSL Behring e Roche.',
    availability: 'Aberto a oportunidades remotas',
    photoAlt: 'Retrato de Ítalo Carvalho',
    ctaDownloadCv: 'Baixar CV',
    ctaLinkedIn: 'LinkedIn',
    ctaContact: 'Contato',
  },

  highlights: [
    { value: '9+ anos', label: 'construindo apps mobile' },
    { value: 'Milhões', label: 'de usuários no app bancário em que trabalhei' },
    { value: '4 meses', label: 'do kickoff à publicação do B SUPPORT' },
    { value: '4,7★', label: 'MyWay na App Store, ~1,9 mil avaliações' },
  ],

  clients: {
    label: 'Os apps em que trabalhei são usados por clientes e pacientes de',
    names: ['Banco do Brasil', 'Sanofi', 'Regeneron', 'CSL Behring', 'Roche'],
  },

  about: {
    heading: 'Sobre',
    paragraphs: [
      'Sou engenheiro de software sênior, com mais de 9 anos construindo apps mobile em que erro custa caro: o app do Banco do Brasil, usado por milhões de pessoas, e apps de saúde regulados para Sanofi, CSL Behring e Roche.',
      'Trabalho dos dois lados: iOS nativo (e Android quando preciso) e React Native. Isso cobre o trabalho que muitos devs React Native evitam, como integrações brownfield, módulos nativos, segurança e sincronização offline, sem perder a velocidade do cross-platform.',
      'Gosto de construir as fundações sobre as quais outros engenheiros constroem: módulos reutilizáveis, motores de UI server-driven e camadas offline. Trabalho junto com tech leads em arquitetura, faço code review, mentoro devs em React Native e TypeScript e cuido dos detalhes que tornam um app confiável.',
    ],
  },

  experience: {
    heading: 'Experiência',
    present: 'Atual',
    clientLabel: 'Cliente',
    stackLabel: 'Stack',
    casesLabel: 'Cases',
    items: [
      {
        id: 'bairesdev',
        domain: 'health',
        role: 'Senior Mobile Developer',
        company: 'BairesDev',
        client: 'BrightInsight',
        location: 'Remoto',
        start: '2022-01',
        end: null,
        summary:
          'A BrightInsight é uma plataforma de saúde digital regulada, do Vale do Silício e apoiada por venture capital. Construo apps para pacientes, classificados como dispositivos médicos, para Sanofi, Regeneron, CSL Behring e Roche, em um time de 3 a 4 devs e um tech lead.',
        bullets: [
          'Construí o CSL Modules, biblioteca de componentes de UI e fluxos compartilhados (login, consentimento, criação de conta) que virou a base do Hizentra App, do B SUPPORT e de outros apps da BrightInsight.',
          'Construí a fundação de UI e o leitor de QR code do produto no Hizentra App.',
          'Trabalho com o tech lead em arquitetura, reviso pull requests, mentoro devs em React Native, TypeScript e Jest, e ajudei a validar o spec-driven development com IA em um app grande da Sanofi.',
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
        location: 'Brasília, Brasil',
        start: '2019-09',
        end: '2022-01',
        summary:
          'Trabalhei no app do Banco do Brasil, usado por milhões de clientes, e nas plataformas internas que os squads usam para entregar funcionalidades.',
        bullets: [
          'Redesenhei a área de finanças pessoais para o Open Finance, exibindo lançamentos de outros bancos, incluindo a agenda do mês e os gráficos de gastos por categoria.',
          'Unifiquei o analytics em uma interface única e extensível que envia eventos para Firebase, Matomo e outras ferramentas, e defini os eventos com o time de negócio.',
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
        location: 'Brasília, Brasil',
        start: '2017-09',
        end: '2019-08',
        summary:
          'Ajudei a levar o grande app nativo do Banco do Brasil para React Native um fluxo de cada vez, sem pará-lo.',
        bullets: [
          'Participei dos releases, resolvendo problemas rapidamente para minimizar o impacto nos usuários.',
        ],
        cases: ['bb-migration'],
        stack: ['React Native', 'JavaScript', 'Objective-C', 'Swift', 'Android', 'Bridges nativas', 'VoiceOver'],
      },
      {
        id: 'cast',
        domain: 'bank',
        role: 'iOS Developer',
        company: 'Cast Group',
        client: 'Banco do Brasil',
        location: 'Brasília, Brasil',
        start: '2017-03',
        end: '2017-09',
        summary: 'Construí funcionalidades da área de finanças pessoais e orçamento do app iOS nativo do Banco do Brasil.',
        bullets: [
          'Desenhei gráficos do zero com Core Graphics, sem bibliotecas de terceiros, incluindo uma barra de orçamento que muda entre os estados "dentro do orçamento", "atenção" e "estourou" conforme os gastos.',
          'Construí componentes de UI reutilizáveis e altamente customizáveis com view code e NIBs.',
          'Armazenei os dados localmente com Core Data, buscando uma vez e consultando no dispositivo, o que deixou a navegação rápida.',
        ],
        cases: [],
        stack: ['Objective-C', 'Swift', 'UIKit', 'Core Graphics', 'Core Data', 'REST APIs'],
      },
    ],
  },

  projects: {
    heading: 'Projetos em destaque',
    intro: 'Quatro projetos com mais detalhe: o problema, o que eu fiz e o que mudou.',
    contextLabel: 'Contexto',
    contributionsLabel: 'O que eu fiz',
    outcomeLabel: 'Resultado',
    builtWithLabel: 'Stack',
    domainLabels: { bank: 'Bancos', health: 'Saúde' },
    items: [
      {
        id: 'kodiak',
        domain: 'bank',
        title: 'Kodiak',
        tagline: 'Plataforma low-code por trás do app do Banco do Brasil',
        client: 'Banco do Brasil',
        period: '2019 – 2022',
        role: 'Senior Mobile Developer (Capgemini)',
        context:
          'Entregar uma nova funcionalidade no app do Banco do Brasil exigia especialistas mobile e uma nova versão na loja. O banco queria que os squads montassem telas e fluxos mais rápido, com UI consistente e sem depender de atualização do app.',
        contributions: [
          'Ajudei a idealizar a plataforma e a construir sua fundação.',
          'Construí boa parte do motor em Node.js e TypeScript: ele recebe as instruções de tela (ex.: "lista com botão que navega para outra tela") e devolve um payload pronto para o app renderizar.',
          'Construí o renderer em React Native que transforma esses payloads em telas dentro do app do banco, incluindo templates, estados de carregamento e navegação.',
          'Desenhei templates de tela com o time de UX e apresentei a plataforma para outros times.',
        ],
        outcome: [
          'O Banco do Brasil divulgou depois que o Kodiak reduziu o desenvolvimento de funcionalidades no app de cerca de 60 para 7 dias (testes de 2025).',
          'Telas e fluxos podem mudar sem atualização do app.',
        ],
        stack: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'React Native'],
        links: [
          { label: 'Blog de tecnologia do BB', href: 'https://blog.bb.com.br/kodiak-the-new-technology-behind-the-bb-app' },
          { label: 'Matéria na imprensa', href: 'https://www.letsmoney.com.br/noticias/bb-kodiak-plataforma-no-code-app/' },
        ],
      },
      {
        id: 'b-support',
        domain: 'health',
        title: 'B SUPPORT',
        tagline: 'App para pacientes com hemofilia B',
        client: 'CSL Behring · BrightInsight',
        period: '2023',
        role: 'Senior Mobile Developer (BairesDev)',
        context:
          'Pessoas com hemofilia B que consideram a terapia gênica (HEMGENIX) precisam registrar sangramentos, atividade do fator IX e como se sentem, e levar esses dados ao médico. O app é regulado e foi construído do zero com prazo apertado.',
        contributions: [
          'Construí o fluxo de consentimento: quando o paciente retira o consentimento, os dados remotos são apagados e mantidos só no dispositivo; quando consente de novo, voltam a sincronizar.',
          'Construí a camada offline e a sincronização de dados do app.',
          'Construí a visualização de dados e o journal do paciente: componentes que mostram o progresso conforme os questionários são respondidos.',
          'Construí a seção educacional, renderizada dinamicamente a partir do conteúdo.',
        ],
        outcome: [
          'Publicado na App Store e no Google Play nos EUA quatro meses após o kickoff.',
          'Reaproveitou módulos de base do CSL Modules, que ajudei a construir.',
        ],
        stack: ['React Native', 'TypeScript', 'Redux', 'Sincronização offline', 'Visualização de dados'],
        links: [
          { label: 'App Store', href: 'https://apps.apple.com/us/app/b-support/id1667769684' },
          {
            label: 'Anúncio de lançamento',
            href: 'https://brightinsight.com/blog/brightinsight-and-csl-behring-launch-b-support-patient-app-for-hemgenix-hemophilia-b-gene-therapy',
          },
        ],
      },
      {
        id: 'myway',
        domain: 'health',
        title: 'MyWay',
        tagline: 'App de suporte a pacientes em tratamento com DUPIXENT',
        client: 'Sanofi & Regeneron · BrightInsight',
        period: '2024 – atual',
        role: 'Senior Mobile Developer (BairesDev)',
        context:
          'App de suporte a pacientes em tratamento com DUPIXENT: calendário de doses, registro de injeções, diário de sintomas e ajuda com o plano de saúde. Por ser um dispositivo médico regulado, cada versão passa por uma longa validação, então publicar conteúdo pelas lojas é lento.',
        contributions: [
          'Construí um motor de conteúdo server-driven: componentes reutilizáveis (cards, textos HTML, carrosséis, vídeos, imagens, links) renderizados a partir do payload do backend.',
          'Construí o registro offline-first de injeções e questionários, com sincronização.',
          'Trabalhei no fluxo principal de injeção, no cálculo da próxima dose (online e offline) e na seleção do local do corpo.',
          'Criptografei dados sensíveis, usei Keychain/Keystore e corrigi achados de pentest.',
          'Adicionei lembretes push e locais, relatórios em PDF gerados no dispositivo, melhorias de acessibilidade e suporte a japonês e árabe (RTL).',
        ],
        outcome: [
          'O cliente publica e atualiza conteúdo educacional sem nova versão do app e passou a publicar com mais frequência.',
          'O app tem nota 4,7★ com cerca de 1,9 mil avaliações na App Store.',
        ],
        stack: ['React Native', 'TypeScript', 'Keychain/Keystore', 'Notificações push', 'i18n/RTL', 'Geração de PDF'],
        links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/myway-patient-support/id6443848439' }],
      },
      {
        id: 'bb-migration',
        domain: 'bank',
        title: 'Do nativo ao React Native',
        tagline: 'Migrando o app do Banco do Brasil sem pará-lo',
        client: 'Banco do Brasil',
        period: '2017 – 2019',
        role: 'Mobile Developer (Stefanini)',
        context:
          'O app do Banco do Brasil era uma grande base de código nativa usada por milhões de clientes. Reescrever tudo de uma vez não era opção, então o React Native precisava viver dentro do app nativo e crescer fluxo a fluxo.',
        contributions: [
          'Estudei como o React Native funciona por dentro para embuti-lo nos fluxos nativos existentes.',
          'Construí o carregamento sob demanda de bundles JavaScript dentro de view controllers nativas, além das bridges nativas e da navegação nos dois sentidos.',
          'Migrei dezenas de telas: pagamentos, transferências, extrato, Minhas Finanças e seguros.',
          'Construí comandos de voz e melhorei a acessibilidade com VoiceOver nas novas telas em React Native.',
        ],
        outcome: [
          'O banco adotou o React Native de forma gradual, funcionalidade por funcionalidade, enquanto o app nativo continuava sendo entregue aos usuários.',
        ],
        stack: ['React Native', 'JavaScript', 'Objective-C', 'Swift', 'Android', 'Bridges nativas'],
        links: [],
      },
    ],
  },

  skills: {
    heading: 'Skills',
    capabilities: [
      {
        title: 'Mobile cross-platform',
        proof: 'Funcionalidades de ponta a ponta, do desenho técnico à publicação nas lojas, em iOS e Android.',
        tech: ['React Native', 'TypeScript', 'Redux', 'React Navigation', 'Expo', 'Jest'],
      },
      {
        title: 'Profundidade nativa',
        proof: 'Integração brownfield, módulos nativos e bugs de plataforma que a maioria dos devs React Native evita.',
        tech: ['Swift', 'Objective-C', 'UIKit', 'Core Data', 'Core Graphics', 'Android (native modules, Gradle)'],
      },
      {
        title: 'Dados confiáveis',
        proof: 'Apps offline-first que sincronizam com segurança e respeitam o consentimento, em produtos de saúde regulados.',
        tech: ['Sincronização offline', 'Keychain/Keystore', 'Criptografia', 'Correções de pentest', 'Notificações push', 'Deep linking'],
      },
      {
        title: 'Plataformas para times',
        proof: 'Fundações sobre as quais outros engenheiros constroem: motores de UI server-driven e módulos compartilhados.',
        tech: ['Node.js', 'Express', 'MongoDB', 'APIs REST', 'UI server-driven', 'Bibliotecas de componentes'],
      },
      {
        title: 'Apps inclusivos e globais',
        proof: 'Apps que funcionam com leitores de tela e em outros idiomas, incluindo escrita da direita para a esquerda.',
        tech: ['VoiceOver', 'TalkBack', 'i18n', 'Layouts RTL', 'Geração de PDF no dispositivo'],
      },
      {
        title: 'Qualidade e forma de trabalho',
        proof: 'Entrega em ambiente regulado, code review e mentoria, com IA no fluxo de trabalho.',
        tech: ['Code review', 'CI/CD com Bitrise', 'Firebase Crashlytics', 'Spec-driven development', 'Desenvolvimento assistido por IA (Claude)', 'Agile/Scrum'],
      },
    ],
  },

  education: {
    heading: 'Formação',
    certificationsHeading: 'Certificações',
    items: [
      {
        institution: 'Universidade Católica de Brasília',
        degree: 'Bacharelado em Ciência da Computação',
        period: '2013 – 2017',
      },
      {
        institution: 'Apple Developer Academy',
        degree: 'Programa de formação em desenvolvimento iOS',
        period: '2015 – 2017',
        note: 'Desenvolvi dois jogos e um app durante o programa.',
      },
      {
        institution: 'Instituto de Educação Superior de Brasília (IESB)',
        degree: 'Especialização (Lato Sensu) em Desenvolvimento Mobile',
        period: '2018 – 2020',
      },
    ],
    certifications: [
      { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: '2024' },
      { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
    ],
  },

  contact: {
    heading: 'Contato',
    text: 'Contratando para uma vaga mobile ou full-stack TypeScript, ou precisa de ajuda com um app? Vou gostar de conversar.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
  },

  footer: {
    builtWith: 'Feito com Astro. Hospedado no GitHub Pages.',
  },
};
