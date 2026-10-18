import { useState, useEffect } from 'react';
import { SiteContentProvider, useSiteContent } from './context/SiteContentContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Methodology } from './components/Methodology';
import { DiscretionStandard } from './components/DiscretionStandard';
import { AuthorityCalculator } from './components/AuthorityCalculator';
import { FAQ } from './components/FAQ';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';

// Modals & Dashboard
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { CaseStudyModal } from './components/Modals/CaseStudyModal';
import { VideoModal } from './components/Modals/VideoModal';
import { BookingModal } from './components/Modals/BookingModal';
import { ServiceBlueprintModal } from './components/Modals/ServiceBlueprintModal';
import { CaseStudy, ServiceItem } from './data/mockData';

function AppContent() {
  const { content, setIsDashboardOpen, setActiveDashboardTab, toastMessage } = useSiteContent();

  const [activeSection, setActiveSection] = useState('home');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [calculatorDetails, setCalculatorDetails] = useState<{
    specialty: string;
    monthlyConsults: number;
    avgValue: number;
    projectedLift: number;
  } | null>(null);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'our-work', 'how-it-works', 'calculator', 'faq', 'contact-audit'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyCalculatorToConsultation = (details: {
    specialty: string;
    monthlyConsults: number;
    avgValue: number;
    projectedLift: number;
  }) => {
    setCalculatorDetails(details);
    scrollToSection('contact-audit');
  };

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0051d5] selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#101b35] text-white px-4 py-2.5 rounded-xl shadow-2xl border border-[#3c4662] text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">info</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Fixed Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenConsultation={() => scrollToSection('contact-audit')}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-28 bg-[#faf8ff] flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => scrollToSection('contact-audit')}
          onExplorePortfolios={() => scrollToSection('our-work')}
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* 4-Item Proof Metrics Strip */}
        <Metrics />

        {/* Tailored Clinical Architecture (Services) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* Case Studies / Our Work */}
        <CaseStudies onSelectCase={(study) => setSelectedCase(study)} />

        {/* Concierge Methodology (How It Works) */}
        <Methodology />

        {/* MedFrame Discretion Standard (Compliance & Trust) */}
        <DiscretionStandard />

        {/* Physician ROI & Authority Calculator */}
        <AuthorityCalculator onApplyToConsultation={handleApplyCalculatorToConsultation} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Confidential Strategy Briefing / Consultation Form */}
        <ConsultationForm initialDetails={calculatorDetails} />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenConsultation={() => scrollToSection('contact-audit')}
      />

      {/* Floating Dashboard Quick Launch Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setActiveDashboardTab('overview');
            setIsDashboardOpen(true);
          }}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#101b35] hover:bg-[#0051d5] text-white font-bold text-xs rounded-full shadow-2xl border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer group"
          title="Open Studio Content Dashboard"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping" />
          <span className="material-symbols-outlined text-[18px] text-[#38bdf8] group-hover:text-white">
            tune
          </span>
          <span>Studio CMS Dashboard</span>
        </button>
      </div>

      {/* Full-Screen CMS Admin Dashboard */}
      <AdminDashboard />

      {/* Interactive Modals */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenConsultation={() => {
          setSelectedCase(null);
          scrollToSection('contact-audit');
        }}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookConsultation={() => {
          setIsVideoModalOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctorName={content.hero.featuredDoctor.doctorName}
      />

      <ServiceBlueprintModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={() => {
          setSelectedService(null);
          scrollToSection('contact-audit');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <SiteContentProvider>
      <AppContent />
    </SiteContentProvider>
  );
}
