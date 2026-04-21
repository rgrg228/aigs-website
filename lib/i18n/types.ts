export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavItem[] };

export type Dictionary = {
  common: {
    bookDemo: string;
    contact: string;
    tryItOut: string;
    seeAllChannels: string;
    close: string;
    languageSwitcher: string;
  };
  header: {
    contactCta: string;
    bookDemo: string;
    groups: NavGroup[];
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { v: string; l: string }[];
  };
  partners: {
    heading: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { tag: string; title: string; body: string }[];
  };
  channels: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { name: string; body: string }[];
    multichannelAlt: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contactLink: string;
    items: { q: string; a: string }[];
  };
  cta: {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
  };
  footer: {
    tagline: string;
    groups: { title: string; items: NavItem[] }[];
    companyName: string;
    addressLines: string[];
    privacyLink: string;
    termsLink: string;
    copyrightSuffix: string;
  };
  chatMockup: {
    agentName: string;
    status: string;
    bubbles: { from: "bot" | "user"; text: string; typing?: boolean }[];
    recommended: string;
    recommendedTitle: string;
    recommendedBullets: string[];
    recommendedCta: string;
    inputPlaceholder: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    emailHeading: string;
    officeHeading: string;
    officeLines: string[];
    form: {
      heading: string;
      subtext: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      requirementLabel: string;
      requirementPlaceholderOption: string;
      requirementOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      errorDefault: string;
      consentBefore: string;
      consentTerms: string;
      consentMiddle: string;
      consentPrivacy: string;
      consentAfter: string;
    };
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string;
    minReadTemplate: string;
    backToIndex: string;
    ctaBox: {
      heading: string;
      subtitle: string;
      button: string;
    };
  };
  affiliate: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    perks: { title: string; body: string }[];
  };
  subPage: {
    whatYouGet: string;
    whatYouGetTitle: string;
    faqsEyebrow: string;
    faqsTitle: string;
    bookDemo: string;
    seeAllChannels: string;
  };
  legal: {
    eyebrow: string;
    privacyMetaTitle: string;
    privacyMetaDescription: string;
    privacyIntroTitle: string;
    privacyIntroBody: string;
    termsMetaTitle: string;
    termsMetaDescription: string;
    termsIntroTitle: string;
    termsIntroBody: string;
  };
};
