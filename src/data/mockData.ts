export interface CaseStudy {
  id: string;
  category: 'plastics' | 'spine' | 'longevity';
  categoryLabel: string;
  badgeMetric: string;
  name: string;
  location: string;
  credentials: string;
  summary: string;
  image: string;
  imageAlt: string;
  feeLabel: string;
  feeValue: string;
  highlightLabel: string;
  highlightValue: string;
  architectureType: string;
  fullCase: {
    specialty: string;
    institution: string;
    challenge: string;
    strategy: string[];
    outcomes: {
      label: string;
      value: string;
      detail: string;
    }[];
    testimonial: {
      quote: string;
      author: string;
      title: string;
    };
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'elena-rostova',
    category: 'plastics',
    categoryLabel: 'Facial Plastic Surgery',
    badgeMetric: '+310% Private Inquiries',
    name: 'Dr. Elena Rostova, MD',
    location: 'Beverly Hills, CA',
    credentials: 'Triple Board-Certified',
    summary: 'Repositioned from general cosmetic practice to the premiere West Coast specialist for deep-plane facial rejuvenation and structural revision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChvidD5pSqKsRNAFp5SYHGC-LQEcjdUSKCsb6AWi1pw-lSiIqeBXmGh1BMJEZgAU_DX9P5I2EUP6ff4fxLhxMDuwZ1HTVUy1xaRub6fHqNumc5HsYc6p3flpvuY-gev8dssBeQJKzr-MYUoYM5HHoNDUFXWZW6PWO8WOB93ahyC_P53iHRgzPWhVt45NU-alyerAwIJOip1xMKLYViOF1OuT6512x4zL6Ov5ltnPqD0Zx_VEIsnAFdcA',
    imageAlt: 'Sophisticated female aesthetic plastic surgeon Dr. Elena Rostova reviewing 3D facial biometric scans in modern high-end architectural clinic, cool blue and soft ivory palette, confident medical leadership.',
    feeLabel: 'Consultation Fee',
    feeValue: '$1,200 Retainer',
    highlightLabel: 'Media Coverage',
    highlightValue: "Vogue & Harper's",
    architectureType: 'Full Brand Architecture',
    fullCase: {
      specialty: 'Aesthetic & Reconstructive Facial Surgery',
      institution: 'Rostova Facial Institute, Rodeo Drive Suite',
      challenge: 'Dr. Rostova was receiving high volume inquiries for lower-margin injectable treatments while competing with generic commercial medspas, diluting her world-class surgical pedigree.',
      strategy: [
        'Eliminated all mention of routine injectables from primary navigation, focusing solely on high-complexity deep-plane rhytidectomy and structural rhinoplasty.',
        'Commissioned editorial clinical photography capturing surgical dexterity, anatomical artistry, and private consultation discreetness.',
        'Instituted an exclusive $1,200 surgical consultation qualification retainer directly through an encrypted concierge portal.'
      ],
      outcomes: [
        { label: 'Surgical Retainer Volume', value: '+310%', detail: 'High-intent deep-plane candidate inquiries' },
        { label: 'Average Procedure Fee', value: '$38,500', detail: 'Up from $14,000 blended average' },
        { label: 'Surgical Waitlist', value: '11 Months', detail: 'Fully booked calendar with zero discounting' }
      ],
      testimonial: {
        quote: "MedFrame transformed our patient demographic within 60 days. We stopped fielding price-sensitive medspa calls and began welcoming discerning patients who flew in internationally specifically for my anatomical technique.",
        author: "Dr. Elena Rostova, MD",
        title: "Founder, Rostova Facial Institute"
      }
    }
  },
  {
    id: 'marcus-chen',
    category: 'spine',
    categoryLabel: 'Minimally Invasive Neurosurgery',
    badgeMetric: '#1 Regional Referral Hub',
    name: 'Dr. Marcus Chen, MD, FAANS',
    location: 'Boston, MA',
    credentials: 'FAANS Fellow',
    summary: 'Built an authoritative clinical platform detailing complex cervical and lumbar motion preservation, securing direct tertiary surgeon-to-surgeon referrals.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97yZw3_NYzVWKdV9cnmlBCypf6q9wDZGmY4K342e3kqIHo8pDgZiAs9AUwOXdCMwCetATuq4sHwt8blk5y5Qqv0aDyxwswirA_nDfapPj9RA8syzcjmtnaiXRRgZBKGZAJhPuUHuHsX3QAbA6SPF8tCW3GDSEeGpY1f38hCgm2jBqNB1EhOCmHU96vyKcrT4A7sOr1djsEvhtv2b2SdnIR42__1RlFvUYY80mxSgOVx8epl67HLU9Ow',
    imageAlt: 'Renowned Asian neurosurgeon Dr. Marcus Chen in tailored clinical attire standing beside advanced holographic neuro-navigation system, deep rich slate and navy studio tone.',
    feeLabel: 'Referral Network',
    feeValue: '+140 Physicians',
    highlightLabel: 'Case Complexity',
    highlightValue: 'Tertiary Tier',
    architectureType: 'Academic & Referral Hub',
    fullCase: {
      specialty: 'Cerebrovascular & Complex Spine Neurosurgery',
      institution: 'New England Spine & Neurological Consortium',
      challenge: 'Primary care and regional orthopedists were sending ambiguous referrals due to outdated academic hospital directory listings that failed to articulate Dr. Chen’s robotic motion-preservation fellowship.',
      strategy: [
        'Created a dedicated "Physician-to-Physician Tertiary Referral Channel" with expedited PACS imaging transfer and direct HIPAA-compliant coordination.',
        'Published 14 peer-reviewed case breakdowns illustrating motion preservation vs fusion outcomes with high-resolution 3D anatomical illustrations.',
        'Established regional CME digital briefings for referring physiatrists, neurologists, and sports medicine physicians.'
      ],
      outcomes: [
        { label: 'Surgeon Referrals', value: '+140 Doctors', detail: 'Direct peer referral pipeline across 4 states' },
        { label: 'Tertiary Case Share', value: '78%', detail: 'Highest-complexity revision spinal cases' },
        { label: 'Direct Peer Inquiries', value: '4.4x', detail: 'Accelerated through secure physician portal' }
      ],
      testimonial: {
        quote: "MedFrame speaks the clinical language of surgeons. They didn't propose cheesy slogans; they built an academic-grade referral apparatus that earned the respect of department heads across the entire Northeast.",
        author: "Dr. Marcus Chen, MD, FAANS",
        title: "Director of Spinal Motion Preservation"
      }
    }
  },
  {
    id: 'sarah-al-mansoor',
    category: 'longevity',
    categoryLabel: 'Longevity & Precision Health',
    badgeMetric: '400+ Waitlisted Execs',
    name: 'Dr. Sarah Al-Mansoor, MD',
    location: 'Zurich / New York',
    credentials: 'Double Boarded',
    summary: 'Created a private concierge longevity membership brand attracting high-net-worth executives, entrepreneurs, and athletes worldwide.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfao-dQ3F8xcUPKCe6ZuTNndSgpMJbJ-5QBam8knLwgrSZ8KofU9zyk-rawKqquXUc5qrzt9O7dbVPQ4xS1JajjmzigQdYpw6M57oCdCg7kSrh1o5o-vvyYoWppFIBHlcKn-cBtjlKwDzGL9VvZa-kp46cyyi_aeTJqxDPgnrjk8mH4ikOGQU-D7cfT0aq09T6-n4CKpw2ASdZrfNxCrayASsh7f6ShVGGS0dwMYfRyqgCfEKZhm1lYQ',
    imageAlt: 'Portrait of Dr. Sarah Al-Mansoor, an elite physician pioneer in cellular biology and preventive longevity medicine, serene minimal architectural private consultation office with floor-to-ceiling glass.',
    feeLabel: 'Annual Membership',
    feeValue: '$25,000 / yr',
    highlightLabel: 'Wait Time',
    highlightValue: '6 Months',
    architectureType: 'Concierge Membership',
    fullCase: {
      specialty: 'Epigenetics, Biomarker Sequencing & Cellular Longevity',
      institution: 'Aethelgard Precision Health Institute',
      challenge: 'Transitioning from institutional hospital practice to an invitation-only transatlantic concierge membership model with zero existing consumer branding.',
      strategy: [
        'Formulated a private club aesthetic combining Swiss medical precision with luxury hospitality restraint.',
        'Constructed an interactive "Biological Age & Diagnostic Biomarker Matrix" showcasing the scientific rigor of whole-body MRI, DNA methylation, and telomere diagnostics.',
        'Implemented a bespoke invitation request flow screening for serious executive health clients.'
      ],
      outcomes: [
        { label: 'Annual Retainers', value: '120 Active', detail: 'Capped executive roster at $25,000/year' },
        { label: 'Executive Waitlist', value: '400+ Vetted', detail: 'Spanning New York, Zurich, Dubai, and London' },
        { label: 'First Year ARR', value: '$3.0M', detail: 'Zero external advertising spend' }
      ],
      testimonial: {
        quote: "MedFrame delivered an identity that conveys absolute scientific authority without ever feeling transactional. The digital experience mirrors the white-glove privacy our executive clientele expect.",
        author: "Dr. Sarah Al-Mansoor, MD",
        title: "Founder & Chief Medical Officer"
      }
    }
  }
];

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
  bullets: string[];
  deliverables: string[];
  turnaround: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'branding',
    icon: 'badge',
    title: 'Doctor Personal Branding & Visual Identity',
    description: 'Establish peerless authority before the patient ever steps into your consultation suite. We refine your medical persona without sensationalism or commercial compromise.',
    tag: 'Identity Architecture',
    bullets: [
      'Bespoke typographic medical insignia & monogram',
      'Editorial clinical portrait art direction & style book',
      'Comprehensive digital authority & publication guidelines'
    ],
    deliverables: [
      'Custom Medical Seal, Monogram & Typography Suite',
      'Editorial Photography Moodboards & Shot-List Direction',
      'Executive Stationery, Referral Prescription Pads & Folders',
      'Medical Media Kit & Conference Keynote Deck Templates',
      'Digital Avatar & Social Header Architectural Standards'
    ],
    turnaround: '14 Business Days'
  },
  {
    id: 'websites',
    icon: 'laptop_chromebook',
    title: 'High-Performance Medical Websites',
    description: 'Lightning-fast, mobile-first web platforms optimized for sub-specialty procedures, patient reassurance, and frictionless appointment requests.',
    tag: 'Web Engineering',
    bullets: [
      'HIPAA-compliant intake and direct appointment booking flows',
      'Sub-procedure SEO architecture to dominate high-intent searches',
      'Mobile UX tuned for discerning patients & referring physicians'
    ],
    deliverables: [
      'Fully Responsive Custom Engineered Web Platform',
      'Sub-Specialty Procedure Deep-Dives with Interactive 3D/Video embeds',
      'End-to-End Encrypted HIPAA Clinical Consultation Intake Form',
      'Integrated Scheduling (Epic MyChart, Zocdoc, ModMed, or Concierge)',
      'Ultra-Fast CDN Hosting with Sub-Second Mobile Page Load'
    ],
    turnaround: '21 Business Days'
  },
  {
    id: 'thought-leadership',
    icon: 'military_tech',
    title: 'Clinical Authority & Thought Leadership',
    description: 'Position yourself as the definitive regional or global voice in your surgical niche, academic discipline, or medical breakthrough.',
    tag: 'Eminence Strategy',
    bullets: [
      'Peer-reviewed publication indexing & editorial press room',
      'Keynote, conference speaker, & medical media kits',
      'Executive ghostwriting for clinical commentary & podcasts'
    ],
    deliverables: [
      'PubMed / Google Scholar Interactive Publication Library',
      'National Media Press Kit & Speaker One-Sheet',
      'Monthly Clinical Ghostwritten Op-Eds and Case Breakdown Articles',
      'Podcast & Media Broadcast Guest Pitching Strategy',
      'Verified Google Knowledge Panel Optimization'
    ],
    turnaround: 'Ongoing Advisory Retainer'
  },
  {
    id: 'reputation',
    icon: 'verified_user',
    title: 'Reputation & Patient Trust Engine',
    description: 'Systematic, ethical collection of authenticated patient experiences that cultivate deep trust while strictly observing patient privacy rights.',
    tag: 'Trust Ecosystem',
    bullets: [
      'Verified patient testimonial video production workflows',
      'Automated post-op review dispatch compliant with FTC & HIPAA',
      'Search reputation defense & Google Knowledge Panel claim'
    ],
    deliverables: [
      'HIPAA-Compliant Patient Consent & Video Testimonial Capture Script',
      'Post-Op Automated SMS & Email Feedback Workflows',
      'Active Search Defamation Mitigation & Negative Review Defense',
      'Cross-Platform Review Sync (Google Business, Healthgrades, Vitals)',
      'Verified Surgeon Rating Showcase Badges'
    ],
    turnaround: 'Integrated at Launch'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How much of my clinical time does this require?',
    answer: 'Less than 3 hours total. We begin with a structured 45-minute clinical interview to understand your case philosophy and goals. From there, our medical copywriters and design architects conduct independent research, drafting your entire digital presence. You review at two key milestone checkpoints before go-live.'
  },
  {
    question: 'Are MedFrame websites compliant with medical board advertising standards and HIPAA?',
    answer: 'Yes, strictly so. Every site layout, form submission pipeline, and copy asset is designed within HIPAA guidelines and state medical board rules. We never make unverified medical claims or expose protected health information (PHI), and all patient inquiries are transmitted through end-to-end encrypted medical protocols.'
  },
  {
    question: 'How quickly can my new personal brand and website go live?',
    answer: 'Our standard concierge turnaround is 30 to 35 business days from your initial discovery session. If you have an impending conference keynote, book publication, or facility opening, we also offer an expedited 18-day priority track.'
  },
  {
    question: 'Can you integrate with my existing EHR or patient booking system?',
    answer: 'Absolutely. We seamlessly connect with all major systems including Epic MyChart, Cerner, AthenaHealth, Nextech, Kareo, ModMed, and Zocdoc. If you prefer bespoke concierge intake routing directly to a clinical coordinator via secure encrypted email, we construct that as well.'
  },
  {
    question: 'Do you handle ongoing thought leadership and surgical content?',
    answer: 'Yes. Beyond launching your identity and digital platform, MedFrame provides quarterly authority retainers. We produce peer-reviewed commentary summaries, clinical case breakdown editorials, media pitch kits, and LinkedIn executive positioning for department chairs and private practice founders.'
  }
];
