import { CaseStudy, ServiceItem, FaqItem } from '../data/mockData';

export interface HeroContent {
  topPillText: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  guarantee1Text: string;
  guarantee2Text: string;
  featuredDoctor: {
    domain: string;
    liveBadgeText: string;
    boardBadgeText: string;
    doctorName: string;
    doctorTitle: string;
    doctorImage: string;
    proceduresCount: string;
    reviewsRating: string;
    reviewsCount: string;
    trainingInstitution: string;
    videoTitle: string;
    videoSubtitle: string;
    videoDuration: string;
    videoThumbnail: string;
    bookingHeadline: string;
    bookingAvailability: string;
    bookingButtonText: string;
  };
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  isAccent?: boolean;
}

export interface MethodologyStep {
  id: string;
  num: string;
  week: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface DiscretionPillar {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface DiscretionContent {
  eyebrow: string;
  title: string;
  description: string;
  ndaTitle: string;
  ndaDesc: string;
  pillars: DiscretionPillar[];
}

export interface ConsultationContent {
  eyebrow: string;
  title: string;
  description: string;
  guarantee1: string;
  guarantee2: string;
  guarantee3: string;
  submitButtonText: string;
  successMessage: string;
}

export interface FooterContent {
  agencyDescription: string;
  tag1: string;
  tag2: string;
  tag3: string;
  directEmail: string;
  phone: string;
  locations: string;
  copyright: string;
  legalNotice: string;
}

export interface SiteContent {
  hero: HeroContent;
  metrics: MetricItem[];
  services: ServiceItem[];
  caseStudies: CaseStudy[];
  methodology: MethodologyStep[];
  discretion: DiscretionContent;
  faqs: FaqItem[];
  consultation: ConsultationContent;
  footer: FooterContent;
}
