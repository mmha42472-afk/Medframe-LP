import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const foot = content.footer;

  return (
    <footer className="w-full bg-[#101b35] text-white pt-16 pb-12 border-t border-white/10 relative group/footer">
      {/* Quick Edit Badge for Footer */}
      <button
        onClick={() => {
          setActiveDashboardTab('consultation');
          setIsDashboardOpen(true);
        }}
        className="absolute right-8 top-6 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-[#38bdf8] border border-white/20 rounded-full text-xs font-bold transition-all cursor-pointer opacity-70 group-hover/footer:opacity-100 z-10"
        title="Edit Footer Content"
      >
        <span className="material-symbols-outlined text-[15px]">edit</span>
        <span>Edit Footer & Legal</span>
      </button>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WeWzl00XG0EcSac_qLte14M29n_JpbevlNvp8u4NZV4ZnYX-Zd5Hlya4sGBDCw-nabAtuq_x5aqSARrW67ZUF01SNnuMH5dI-7bg8908e-NKB0X1H0fDLAZXkrPkEDtGV1E-1nqI6YLKkBUWbQF8LXBU-8dc9Nwc7flL1iQc1MCHuhrROe47Ly8VpR835LQf6vyTpMre8OB3nHzjCIbEog-JuEAOpeaJn-h0qsP4jRyUd3A0zfb9-HdHrebhXf5sfi5RxsK6na9tI"
                alt="MedFrame Studio Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                MedFrame<span className="font-normal text-[#bcc6e8] ml-1">Studio</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#7983a3] max-w-sm leading-relaxed">
              {foot.agencyDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e2e7ff] text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3]" />
                {foot.tag1}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e2e7ff] text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3]" />
                {foot.tag2}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e2e7ff] text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3]" />
                {foot.tag3}
              </span>
            </div>
          </div>

          {/* Practice Solutions */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Practice Solutions
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#7983a3]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Doctor Personal Brand
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Custom Medical Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Authority Content Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-white transition-colors"
                >
                  HIPAA-Compliant Review Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Studio
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#7983a3]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('our-work');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('how-it-works');
                  }}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faq');
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Advisory Concierge */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Advisory Concierge
            </span>
            <p className="text-xs sm:text-sm text-[#7983a3]">
              Direct executive liaison for clinical chairs, fellows, and specialty practice founders.
            </p>
            <div className="flex flex-col gap-1 text-xs sm:text-sm text-[#e2e7ff] pt-1">
              <span className="text-white font-medium">{foot.directEmail}</span>
              <span>{foot.phone}</span>
              <span>{foot.locations}</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#7983a3] text-xs">
          <div>{foot.copyright}</div>
          <div className="text-[11px] text-[#7983a3]/70 max-w-xl text-left md:text-right leading-tight">
            {foot.legalNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
