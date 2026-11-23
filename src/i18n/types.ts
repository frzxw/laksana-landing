/**
 * Type definitions for i18n translations
 * This ensures type-safety and auto-complete across the application
 */

export interface Translations {
  nav: {
    home: string;
    services: string;
    work: string;
    about: string;
    faq: string;
    careers: string;
    blog: string;
    contact: string;
    pricing: string;
    getStarted: string;
  };
  home: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      cta: string;
      viewWork: string;
      clients: string;
      clientValue: string;
      satisfaction: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
      stat4Value: string;
      stat4Label: string;
    };
    services: {
      title: string;
      subtitle: string;
      mobile: {
        title: string;
        desc: string;
      };
      web: {
        title: string;
        desc: string;
      };
      landing: {
        title: string;
        desc: string;
      };
      inventory: {
        title: string;
        desc: string;
      };
      booking: {
        title: string;
        desc: string;
      };
      pos: {
        title: string;
        desc: string;
      };
    };
    work: {
      title: string;
      subtitle: string;
      viewCase: string;
      viewAll: string;
      projects: {
        project1: { title: string; category: string; description: string };
        project2: { title: string; category: string; description: string };
        project3: { title: string; category: string; description: string };
        project4: { title: string; category: string; description: string };
        project5: { title: string; category: string; description: string };
        project6: { title: string; category: string; description: string };
      };
    };
    clients: {
      title: string;
      subtitle: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      quote1: string;
      author1: string;
      role1: string;
      quote2: string;
      author2: string;
      role2: string;
      quote3: string;
      author3: string;
      role3: string;
    };
    stats: {
      title: string;
      projects: string;
      users: string;
      transactions: string;
      uptime: string;
    };
    techStack: {
      title: string;
      subtitle: string;
    };
    howWeWork: {
      title: string;
      subtitle: string;
      step1: {
        title: string;
        desc: string;
      };
      step2: {
        title: string;
        desc: string;
      };
      step3: {
        title: string;
        desc: string;
      };
    };
    faq: {
      title: string;
      subtitle: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
      q5: string;
      a5: string;
      q6: string;
      a6: string;
      q7: string;
      a7: string;
      q8: string;
      a8: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  services: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    main: {
      mobileApps: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      webApps: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      landing: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      inventory: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      booking: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      pos: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
      custom: {
        title: string;
        tagline: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
    };
    ui: {
      whatsIncluded: string;
      timeline: string;
      investment: string;
      getStarted: string;
      processTitle: string;
      processSubtitle: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
      secondaryButton: string;
    };
  };
  work: {
    hero: {
      title: string;
      subtitle: string;
    };
    stats: {
      stat1: {
        value: string;
        label: string;
      };
      stat2: {
        value: string;
        label: string;
      };
      stat3: {
        value: string;
        label: string;
      };
    };
    featured: {
      category: string;
      results: string;
      tags: string;
      viewCase: string;
    };
    moreProjects: {
      title: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  about: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    stats: {
      founded: string;
      foundedLabel: string;
      projects: string;
      projectsLabel: string;
      team: string;
      teamLabel: string;
      countries: string;
      countriesLabel: string;
    };
    story: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
    };
    values: {
      title: string;
      subtitle: string;
      excellence: {
        title: string;
        desc: string;
      };
      partnership: {
        title: string;
        desc: string;
      };
      innovation: {
        title: string;
        desc: string;
      };
      integrity: {
        title: string;
        desc: string;
      };
    };
    team: {
      title: string;
      subtitle: string;
      founder: {
        name: string;
        role: string;
        bio: string;
      };
      cofounder1: {
        name: string;
        role: string;
        bio: string;
      };
      cofounder2: {
        name: string;
        role: string;
        bio: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      careers: string;
      partner: string;
    };
  };
  careers: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    benefits: {
      title: string;
      subtitle: string;
      salary: {
        title: string;
        desc: string;
      };
      remote: {
        title: string;
        desc: string;
      };
      flexible: {
        title: string;
        desc: string;
      };
      growth: {
        title: string;
        desc: string;
      };
      healthcare: {
        title: string;
        desc: string;
      };
      equipment: {
        title: string;
        desc: string;
      };
    };
    positions: {
      title: string;
      subtitle: string;
      applyNow: string;
      fullStackEngineer: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
      mobileDeveloper: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
      productDesigner: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
      devOpsEngineer: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
      techPM: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
      bizDevManager: {
        title: string;
        dept: string;
        location: string;
        type: string;
        desc: string;
        req1: string;
        req2: string;
        req3: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  testimonials: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
  faq: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      badge: string;
    };
    general: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
    };
    process: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    technical: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    pricingSupport: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    gettingStarted: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    contact: {
      title: string;
      chat: {
        title: string;
        desc: string;
        action: string;
      };
      email: {
        title: string;
        desc: string;
        action: string;
      };
      phone: {
        title: string;
        desc: string;
        action: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  pricing: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      roiBadge: string;
    };
    packages: {
      starter: {
        name: string;
        tagline: string;
        price: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        feature7: string;
        timeline: string;
        cta: string;
      };
      professional: {
        name: string;
        tagline: string;
        price: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        feature7: string;
        feature8: string;
        feature9: string;
        feature10: string;
        feature11: string;
        timeline: string;
        cta: string;
        badge: string;
      };
      enterprise: {
        name: string;
        tagline: string;
        price: string;
        desc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        feature7: string;
        feature8: string;
        feature9: string;
        feature10: string;
        feature11: string;
        feature12: string;
        timeline: string;
        cta: string;
      };
      timelineLabel: string;
    };
    addons: {
      title: string;
      subtitle: string;
      platform: string;
      analytics: string;
      realtime: string;
      payment: string;
      admin: string;
      api: string;
      maintenance: string;
      priority: string;
    };
    faqs: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  contact: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    form: {
      title: string;
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      name: string;
      email: string;
      company: string;
      projectType: string;
      projectTypePlaceholder: string;
      budgetRange: string;
      budgetPlaceholder: string;
      message: string;
      send: string;
      sending: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      nameError: string;
      emailError: string;
      messageError: string;
      success: string;
      error: string;
    };
    projectTypes: {
      mobile: string;
      web: string;
      landing: string;
      inventory: string;
      booking: string;
      pos: string;
      custom: string;
    };
    budgetOptions: {
      range1: string;
      range2: string;
      range3: string;
      range4: string;
    };
    methods: {
      title: string;
      liveChat: {
        title: string;
        detail: string;
        desc: string;
      };
      email: {
        title: string;
        detail: string;
        desc: string;
      };
      phone: {
        title: string;
        detail: string;
        desc: string;
      };
      office: {
        title: string;
        detail: string;
        desc: string;
      };
    };
    responseTime: {
      title: string;
      desc: string;
    };
    offices: {
      title: string;
      subtitle: string;
      bandung: {
        city: string;
        address: string;
      };
    };
  };
  blog: {
    hero: {
      title: string;
      subtitle: string;
    };
    categories: {
      all: string;
    };
    featured: {
      badge: string;
      readArticle: string;
    };
    latest: {
      title: string;
    };
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    resources: string;
    legal: string;
    rights: string;
    links: {
      about: string;
      careers: string;
      contact: string;
      blog: string;
      mobileApps: string;
      webApps: string;
      landing: string;
      caseStudies: string;
      support: string;
      privacy: string;
      terms: string;
      security: string;
    };
  };
  support: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    channels: {
      title: string;
      subtitle: string;
      chat: {
        title: string;
        desc: string;
        availability: string;
        responseTime: string;
        action: string;
      };
      email: {
        title: string;
        desc: string;
        availability: string;
        responseTime: string;
        action: string;
      };
      phone: {
        title: string;
        desc: string;
        availability: string;
        responseTime: string;
        action: string;
      };
    };
    resources: {
      title: string;
      subtitle: string;
      docs: {
        title: string;
        desc: string;
        link: string;
      };
      quickStart: {
        title: string;
        desc: string;
        link: string;
      };
      knowledge: {
        title: string;
        desc: string;
        link: string;
      };
    };
    faqs: {
      title: string;
      subtitle: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  status: {
    hero: {
      title: string;
      subtitle: string;
      operational: string;
    };
    metrics: {
      responseTime: {
        label: string;
        value: string;
      };
      uptime: {
        label: string;
        value: string;
      };
      deployments: {
        label: string;
        value: string;
      };
    };
    services: {
      title: string;
      website: string;
      api: string;
      portal: string;
      support: string;
      cloud: string;
      operational: string;
      uptime: string;
    };
    incidents: {
      title: string;
      incident1: {
        date: string;
        title: string;
        desc: string;
        duration: string;
      };
      incident2: {
        date: string;
        title: string;
        desc: string;
        duration: string;
      };
      resolved: string;
    };
    subscribe: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
  };
  privacy: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      updated: string;
    };
    sections: {
      collect: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
      };
      use: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      security: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      sharing: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      rights: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      compliance: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  terms: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
      updated: string;
    };
    sections: {
      acceptance: {
        title: string;
        p1: string;
        p2: string;
      };
      services: {
        title: string;
        intro: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      obligations: {
        title: string;
        intro: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
      };
      ip: {
        title: string;
        intro: string;
        item1: string;
        item2: string;
        item3: string;
      };
      liability: {
        title: string;
        p1: string;
        p2: string;
      };
      termination: {
        title: string;
        p1: string;
        p2: string;
      };
      law: {
        title: string;
        p1: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  security: {
    hero: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    framework: {
      title: string;
    };
    measures: {
      encryption: {
        title: string;
        desc: string;
      };
      auth: {
        title: string;
        desc: string;
      };
      infrastructure: {
        title: string;
        desc: string;
      };
      privacy: {
        title: string;
        desc: string;
      };
      code: {
        title: string;
        desc: string;
      };
      incident: {
        title: string;
        desc: string;
      };
    };
    certifications: {
      title: string;
      cert1: string;
      cert2: string;
      cert3: string;
      cert4: string;
      cert5: string;
      cert6: string;
    };
    practices: {
      title: string;
      practice1: string;
      practice2: string;
      practice3: string;
      practice4: string;
      practice5: string;
      practice6: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    cancel: string;
    save: string;
    close: string;
    back: string;
    next: string;
    submit: string;
    learnMore: string;
    readMore: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    home: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
    work: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    careers: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    pricing: {
      title: string;
      description: string;
    };
    blog: {
      title: string;
      description: string;
    };
    faq: {
      title: string;
      description: string;
    };
  };
  aria: {
    nav: {
      main: string;
      toggle: string;
      closeMenu: string;
    };
    language: {
      switch: string;
      current: string;
    };
    scroll: {
      toTop: string;
      toSection: string;
    };
    social: {
      facebook: string;
      twitter: string;
      linkedin: string;
      instagram: string;
    };
  };
  visualShowcase: {
    mobileFirst: {
      title: string;
      desc: string;
    };
    webExcellence: {
      title: string;
      desc: string;
    };
    crossPlatform: {
      title: string;
      desc: string;
    };
    projects: {
      project1: {
        title: string;
        category: string;
      };
      project2: {
        title: string;
        category: string;
      };
      project3: {
        title: string;
        category: string;
      };
    };
  };
}

/**
 * Deeply partial type for translation validation
 */
export type PartialTranslations = {
  [K in keyof Translations]?: Translations[K] extends object
  ? PartialTranslations | Translations[K]
  : Translations[K];
};

/**
 * Technical terms that should NOT be translated
 */
export const TECH_TERMS_EXCLUSIONS = [
  // Technologies
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Flutter',
  'React Native',
  'iOS',
  'Android',
  'API',
  'SDK',
  'OAuth',
  'JWT',
  'GDPR',
  'HIPAA',
  'OWASP',
  'PWA',
  'CMS',
  'SEO',
  'CSS',
  'HTML',
  'SQL',
  'NoSQL',
  'REST',
  'GraphQL',
  'WebSocket',

  // Products & Brands
  'Laksana',
  'TechFlow',
  'ShopHub',
  'FinanceAI',
  'App Store',
  'Google Play',

  // Business Terms
  'MVP',
  'IPO',
  'B2B',
  'B2C',
  'SaaS',
  'PaaS',
  'IaaS',
  'Series A',
  'FinTech',

  // Technical Concepts
  'Mobile App',
  'Web App',
  'Landing Page',
  'POS',
  'E-Commerce',
  'A/B testing',
  'Agile',
];

/**
 * Validation helper to ensure translation structure matches
 */
export function validateTranslationStructure(
  translations: unknown
): translations is Translations {
  // This is a runtime type guard that can be enhanced
  return typeof translations === 'object' && translations !== null;
}
