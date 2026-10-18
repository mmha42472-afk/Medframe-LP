import React, { useState } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'calculator', label: 'Practice ROI' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const openEditor = (tabId: string) => {
    setActiveDashboardTab(tabId);
    setIsDashboardOpen(true);
    setUserDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Advisory Pill Bar */}
      <div className="w-full bg-[#101b35] text-[#dae2ff] border-b border-[#dae2fd]/20 py-1.5 px-4 md:px-12 text-center flex items-center justify-between sm:justify-center relative">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#bcc6e8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3] animate-pulse" />
          {content.hero.topPillText}
        </span>

        {/* Quick Edit pill on top bar */}
        <button
          onClick={() => openEditor('hero')}
          className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold text-[#38bdf8] hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-all cursor-pointer absolute right-4"
          title="Edit top announcement"
        >
          <span className="material-symbols-outlined text-[13px]">edit</span>
          <span>Edit Bar</span>
        </button>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-[#c6c6ce]/30 shadow-[0_4px_20px_-4px_rgba(11,22,48,0.06)]">
        <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-12 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => handleLinkClick('home', e)}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WeWzl00XG0EcSac_qLte14M29n_JpbevlNvp8u4NZV4ZnYX-Zd5Hlya4sGBDCw-nabAtuq_x5aqSARrW67ZUF01SNnuMH5dI-7bg8908e-NKB0X1H0fDLAZXkrPkEDtGV1E-1nqI6YLKkBUWbQF8LXBU-8dc9Nwc7flL1iQc1MCHuhrROe47Ly8VpR835LQf6vyTpMre8OB3nHzjCIbEog-JuEAOpeaJn-h0qsP4jRyUd3A0zfb9-HdHrebhXf5sfi5RxsK6na9tI"
                alt="MedFrame Studio Logo"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#131b2e] group-hover:text-[#0051d5] transition-colors">
                  MedFrame<span className="font-normal text-[#45464d] ml-1">Studio</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#45464d]/70">
                  Your Expertise. Your Identity.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`px-4 py-2 transition-all rounded-lg text-sm ${
                    isActive
                      ? 'bg-[#e2e7ff] text-[#131b2e] font-bold shadow-xs'
                      : 'text-[#45464d] font-semibold hover:text-[#131b2e] hover:bg-[#eaedff]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Direct Studio CMS Dashboard Button */}
            <button
              onClick={() => {
                setActiveDashboardTab('overview');
                setIsDashboardOpen(true);
              }}
              className="inline-flex items-center gap-1.5 bg-[#101b35] hover:bg-[#0051d5] text-white px-3.5 py-2 rounded-lg font-semibold text-xs shadow-sm transition-all duration-200 cursor-pointer"
              title="Open Section Editor Dashboard"
            >
              <span className="material-symbols-outlined text-[16px] text-[#38bdf8]">tune</span>
              <span className="hidden sm:inline">Edit Sections</span>
            </button>

            {/* Free Consultation CTA */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 bg-[#0051d5] hover:bg-[#316bf3] text-white px-4 py-2.5 rounded-lg font-semibold text-xs lg:text-sm shadow-[0_8px_20px_-4px_rgba(0,81,213,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none cursor-pointer"
            >
              <span>Get Your Free Consultation</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </button>

            {/* Profile Avatar / Concierge Menu */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                aria-label="Doctor Concierge Profile"
                className="w-9 h-9 rounded-full bg-[#000000] hover:bg-[#101b35] flex items-center justify-center shrink-0 ring-2 ring-[#c6c6ce]/40 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-white text-[18px]">person</span>
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e2e7ff] py-2 z-50 text-left">
                  <div className="px-4 py-2 border-b border-[#eaedff]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0051d5] block">
                      Studio CMS & Concierge
                    </span>
                    <span className="text-xs font-bold text-[#131b2e] block">
                      Content Management System
                    </span>
                    <span className="text-[11px] text-[#45464d]">
                      Direct line: {content.footer.directEmail}
                    </span>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => openEditor('overview')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-[#0051d5] hover:bg-[#eaedff] flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">tune</span>
                      Open All-Section Dashboard
                    </button>
                    <button
                      onClick={() => openEditor('hero')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#45464d] hover:bg-[#f2f3ff] flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[15px]">badge</span>
                      Edit Hero & Featured Doctor
                    </button>
                    <button
                      onClick={() => openEditor('services')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#45464d] hover:bg-[#f2f3ff] flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[15px]">medical_services</span>
                      Edit 4 Core Services
                    </button>
                    <button
                      onClick={() => openEditor('cases')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#45464d] hover:bg-[#f2f3ff] flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[15px]">folder_special</span>
                      Edit Case Studies
                    </button>
                    <button
                      onClick={() => openEditor('backup')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#45464d] hover:bg-[#f2f3ff] flex items-center gap-2 border-t border-[#eaedff] mt-1 pt-2"
                    >
                      <span className="material-symbols-outlined text-[15px]">file_download</span>
                      Export / Backup Site JSON
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-[#131b2e] hover:bg-[#eaedff] rounded-lg focus:outline-none"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e2e7ff] px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-[#e2e7ff] text-[#0051d5]'
                    : 'text-[#45464d] hover:bg-[#f2f3ff]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#eaedff] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEditor('overview');
                }}
                className="w-full py-2.5 bg-[#101b35] text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-[#38bdf8]">tune</span>
                <span>Open Section Dashboard</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#0051d5] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get Your Free Consultation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
