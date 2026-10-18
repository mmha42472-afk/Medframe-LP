import { SiteContent } from '../types/siteContent';
import { CASE_STUDIES, SERVICES, FAQS } from './mockData';

export const DEFAULT_SITE_CONTENT: SiteContent = {
  hero: {
    topPillText: 'THE PREMIER DIGITAL AGENCY FOR ELITE PHYSICIANS & SPECIALISTS',
    headlinePrefix: 'Your Medical Expertise Deserves a ',
    headlineHighlight: 'World–Class',
    headlineSuffix: ' Digital Identity.',
    subheadline:
      'We design bespoke personal brands, authority medical websites, and clinical reputation engines for surgeons, specialists, and private practitioners looking to command patient trust and elite peer referrals.',
    primaryCtaText: 'Get Your Free Brand Audit & Consultation',
    secondaryCtaText: 'Explore Doctor Portfolios',
    guarantee1Text: '100% Medical Board & HIPAA Compliant',
    guarantee2Text: 'Zero Clinical Downtime',
    featuredDoctor: {
      domain: 'drjulianvance.com',
      liveBadgeText: 'LIVE PORTFOLIO',
      boardBadgeText: 'BOARD - CERTIFIED FELLOW',
      doctorName: 'Dr. Julian Vance, MD, FACS',
      doctorTitle: 'Minimally Invasive Spine Specialist & Robotic Surgery Director',
      doctorImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQi1Gvqfl_8pBdddmf9nvzRIsJJZ6POAPdkTXCN6H_z6wnxc8oy4d4BSuY0bOfp-XapEqv7gygbl_Zr592TbHbv_IvDYuClprJokEebLPikoJL6ScmcOuMOm_PkNciCtUldK5MwWZWPoFjWviB8hInzVwL1frg84KyWayrJV645tUcWG0Bi5rrKbblPIRSilGtiKkWVj5p__Ztt37n8tRBKdRuKhwz9jC_Iqfb0RNKwiGI7TBfxeig_Q',
      proceduresCount: '3,200+',
      reviewsRating: '4.98 ★',
      reviewsCount: '240+ Reviews',
      trainingInstitution: 'Mayo/Hopkins Trained',
      videoTitle: 'Procedure Briefing',
      videoSubtitle: 'Endoscopic Disc Arthroplasty',
      videoDuration: '2:14',
      videoThumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlvLivNPU333FFtKVUldoU5jCc43lF2lk2iBj809p_HBlaVtJof0k4YFOP_iOoWV8KEq74McPhk3LuvTKnUsw7feeJ-5Qiv_54s2RVqJkBTk_GCfhuaQX38LxAta_ULnTAHTrjhczpJqt6qcxfUNGau1FXuDpq2UH99mkrJ6rVQo_X9xXd2LzDHCy4IjyBG7MCPvGyvHNoHBcfRAwJAEmSnrtTTy3qA8arE4NIUstskLXgcZGXQGHuaw',
      bookingHeadline: 'Priority Patient Scheduling',
      bookingAvailability: 'Next Consultation Available: This Thursday',
      bookingButtonText: 'Book Now',
    },
  },
  metrics: [
    {
      id: 'm1',
      value: '180+',
      label: 'Specialists Branded',
      sublabel: 'Surgical & Executive Focus',
      isAccent: false,
    },
    {
      id: 'm2',
      value: '4.9x',
      label: 'Direct Patient Inquiries',
      sublabel: 'Average within 90 days',
      isAccent: true,
    },
    {
      id: 'm3',
      value: '100%',
      label: 'HIPAA & Board Compliant',
      sublabel: 'State & Federal Tenets',
      isAccent: false,
    },
    {
      id: 'm4',
      value: '32 Days',
      label: 'Average Turnaround',
      sublabel: 'Rapid Concierge Build',
      isAccent: false,
    },
  ],
  services: SERVICES,
  caseStudies: CASE_STUDIES,
  methodology: [
    {
      id: 'step-1',
      num: '01',
      week: 'Week 1',
      title: 'Clinical Discovery & Audit',
      description:
        'A private 45-minute clinical interview examining your surgical philosophy, core demographic, highest-margin procedures, and local market vulnerabilities.',
      icon: 'clinical_notes',
      tag: 'Comprehensive Audit Dossier',
    },
    {
      id: 'step-2',
      num: '02',
      week: 'Week 2',
      title: 'Executive Design & Architecture',
      description:
        'We engineer bespoke typography, medical iconography, color systems, and conversion-first page structures designed to elicit immediate patient confidence.',
      icon: 'palette',
      tag: 'Complete Interactive Prototype',
    },
    {
      id: 'step-3',
      num: '03',
      week: 'Week 3',
      title: 'Engineering & Compliance Review',
      description:
        'Production deployment on secure cloud architecture. Full verification of HIPAA intake forms, state medical board advertising compliance, and mobile latency.',
      icon: 'lock',
      tag: 'HIPAA & Board Sign-Off',
    },
    {
      id: 'step-4',
      num: '04',
      week: 'Week 4',
      title: 'Launch & Pipeline Activation',
      description:
        'Flawless domain switchover, Google Knowledge Panel claiming, procedure SEO indexation, and handover to your practice manager with 24/7 technical liaison.',
      icon: 'rocket_launch',
      tag: 'Live Practice Elevation',
    },
  ],
  discretion: {
    eyebrow: 'The MedFrame Discretion Standard',
    title: 'Why Medical Leaders Reject Generic Agencies',
    description:
      'Most marketing outfits treat a spine surgeon like a plumber or a boutique coffee shop. We know that in clinical prestige, restraint is power and compliance is non-negotiable.',
    ndaTitle: 'Signed Mutual Non-Disclosure',
    ndaDesc: 'Strict clinical privacy on proprietary procedural techniques.',
    pillars: [
      {
        id: 'p1',
        icon: 'edit_note',
        title: 'Physician-First Copywriters',
        desc: 'Our writers hold biomedical or healthcare communications degrees. No simplistic fluff; your procedures are described with anatomical accuracy and patient clarity.',
      },
      {
        id: 'p2',
        icon: 'gavel',
        title: 'Medical Board Adherence',
        desc: 'We stringently comply with AMA and state-specific medical board advertising codes regarding superlatives, patient testimonials, and disclaimer mandates.',
      },
      {
        id: 'p3',
        icon: 'lock_clock',
        title: 'Turnkey Concierge Flow',
        desc: 'Your clinical operating calendar is sacred. We interact directly with your practice manager or executive assistant to collect assets and approvals effortlessly.',
      },
      {
        id: 'p4',
        icon: 'hub',
        title: 'EHR & Schedule Sync',
        desc: 'Seamless embeds and routing with Epic MyChart, Cerner, Zocdoc, Nextech, Modernizing Medicine, or custom clinical intake forms.',
      },
    ],
  },
  faqs: FAQS,
  consultation: {
    eyebrow: 'CONFIDENTIAL STRATEGY BRIEFING',
    title: 'Ready to Build an Online Presence Worthy of Your Medical Career?',
    description:
      "Book a confidential 30-minute digital strategy session. We'll analyze your current online footprint, evaluate peer positioning in your specialty, and deliver a custom growth blueprint.",
    guarantee1: '100% confidential & tailored to your specific clinical specialty',
    guarantee2: 'Strict no-obligation consultation policy',
    guarantee3: 'Protected under mutual medical agency non-disclosure',
    submitButtonText: 'Claim Complimentary Consultation',
    successMessage:
      'Confidential request received. Our medical director will connect within 24 business hours.',
  },
  footer: {
    agencyDescription:
      'The premier digital architectural agency crafting bespoke personal brands, physician authority ecosystems, and surgical portfolios for distinguished clinicians worldwide.',
    tag1: 'Board-Certified Focus',
    tag2: 'HIPAA Aware',
    tag3: '100% White-Glove',
    directEmail: 'direct@medframestudio.com',
    phone: '+1 (888) 492-MEDF',
    locations: 'New York • Zurich • London',
    copyright: '© 2025 MedFrame Studio LLC. All rights reserved. Strict Medical Discretion Guaranteed.',
    legalNotice:
      'Notice: MedFrame Studio is a strategic branding consultancy. We do not offer medical advice, diagnostic services, or legal medical board representation. Content strategies adhere to state medical board advertising regulations and HIPAA privacy tenets.',
  },
};
