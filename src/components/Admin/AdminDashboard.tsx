import React, { useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { CaseStudy, ServiceItem } from '../../data/mockData';
import { MetricItem, MethodologyStep, DiscretionPillar } from '../../types/siteContent';

export const AdminDashboard: React.FC = () => {
  const {
    content,
    updateSection,
    resetToDefaults,
    exportJSON,
    importJSON,
    isDashboardOpen,
    setIsDashboardOpen,
    activeDashboardTab,
    setActiveDashboardTab,
    showToast,
  } = useSiteContent();

  const [jsonInput, setJsonInput] = useState('');
  const [showJsonModal, setShowJsonModal] = useState(false);

  // Active sub-item editors
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(null);
  const [editingCaseIndex, setEditingCaseIndex] = useState<number | null>(null);

  if (!isDashboardOpen) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'hero', label: 'Hero & Doctor', icon: 'badge' },
    { id: 'metrics', label: 'Proof Metrics', icon: 'analytics' },
    { id: 'services', label: 'Core Services', icon: 'medical_services' },
    { id: 'cases', label: 'Case Studies', icon: 'folder_special' },
    { id: 'methodology', label: 'Methodology', icon: 'timeline' },
    { id: 'discretion', label: 'Discretion & Trust', icon: 'shield' },
    { id: 'faq', label: 'FAQ Inquiries', icon: 'help_outline' },
    { id: 'consultation', label: 'Consultation & Footer', icon: 'edit_note' },
    { id: 'backup', label: 'Import / Export', icon: 'settings_backup_restore' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex bg-[#101b35]/70 backdrop-blur-md">
      {/* Dashboard Outer Container */}
      <div className="relative w-full h-full flex flex-col md:flex-row bg-[#faf8ff] text-[#131b2e] overflow-hidden shadow-2xl">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-72 bg-[#101b35] text-white flex flex-col justify-between shrink-0 border-r border-[#3c4662]/50">
          <div>
            {/* Studio Header in Sidebar */}
            <div className="p-5 border-b border-[#3c4662]/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#316bf3] animate-pulse" />
                <div>
                  <h2 className="text-base font-bold text-white tracking-tight">
                    MedFrame <span className="text-[#38bdf8] font-normal">CMS</span>
                  </h2>
                  <p className="text-[11px] text-[#bcc6e8]">Practice Studio Dashboard</p>
                </div>
              </div>
              <button
                onClick={() => setIsDashboardOpen(false)}
                className="md:hidden text-white/70 hover:text-white p-1"
                aria-label="Close dashboard"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Navigation Tabs List */}
            <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-220px)]">
              {tabs.map((tab) => {
                const isActive = activeDashboardTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveDashboardTab(tab.id);
                      setEditingServiceIndex(null);
                      setEditingCaseIndex(null);
                    }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#0051d5] text-white shadow-md'
                        : 'text-[#bcc6e8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Bottom Controls */}
          <div className="p-4 border-t border-[#3c4662]/60 space-y-2">
            <button
              onClick={() => setIsDashboardOpen(false)}
              className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>View Live Website</span>
            </button>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to revert all sections to factory clinical defaults?')) {
                  resetToDefaults();
                }
              }}
              className="w-full py-2 bg-transparent hover:bg-red-500/20 text-[#ffdad6] rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">restart_alt</span>
              <span>Reset Factory Defaults</span>
            </button>
          </div>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#f2f3ff]">
          {/* Top Bar */}
          <header className="h-16 bg-white border-b border-[#e2e7ff] px-6 flex items-center justify-between shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                Editing Section:
              </span>
              <span className="text-sm font-bold text-[#131b2e] capitalize">
                {tabs.find((t) => t.id === activeDashboardTab)?.label}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#45464d] bg-[#faf8ff] px-3 py-1 rounded-full border border-[#eaedff]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Auto-saved to Browser
              </span>
              <button
                onClick={() => setIsDashboardOpen(false)}
                className="px-4 py-2 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Done Editing</span>
                <span className="material-symbols-outlined text-[16px]">check</span>
              </button>
            </div>
          </header>

          {/* Tab Workspace Scroll Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* TAB 1: OVERVIEW */}
              {activeDashboardTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">tune</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131b2e]">
                          MedFrame Studio Section Editor
                        </h3>
                        <p className="text-xs text-[#45464d]">
                          Control and customize all copy, doctor media, credentials, case studies, and compliance pillars.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {tabs
                        .filter((t) => t.id !== 'overview')
                        .map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setActiveDashboardTab(t.id)}
                            className="p-4 bg-[#faf8ff] hover:bg-[#eaedff] rounded-xl border border-[#eaedff] hover:border-[#0051d5]/40 text-left transition-all group flex items-start justify-between cursor-pointer"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined text-[#0051d5] text-[18px]">
                                  {t.icon}
                                </span>
                                <span className="text-sm font-bold text-[#131b2e]">
                                  {t.label}
                                </span>
                              </div>
                              <span className="text-[11px] text-[#45464d]">
                                Click to edit copy & items
                              </span>
                            </div>
                            <span className="material-symbols-outlined text-[#76777e] group-hover:text-[#0051d5] text-[18px] group-hover:translate-x-1 transition-transform">
                              arrow_forward
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Quick Summary Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-[#e2e7ff] text-center">
                      <span className="text-xs font-semibold text-[#45464d] block">
                        Published Services
                      </span>
                      <span className="text-2xl font-bold text-[#0051d5] mt-1 block">
                        {content.services.length} Architectures
                      </span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-[#e2e7ff] text-center">
                      <span className="text-xs font-semibold text-[#45464d] block">
                        Doctor Portfolios
                      </span>
                      <span className="text-2xl font-bold text-[#0051d5] mt-1 block">
                        {content.caseStudies.length} Case Studies
                      </span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-[#e2e7ff] text-center">
                      <span className="text-xs font-semibold text-[#45464d] block">
                        Clinical FAQs
                      </span>
                      <span className="text-2xl font-bold text-[#0051d5] mt-1 block">
                        {content.faqs.length} Answers
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: HERO & FEATURED DOCTOR */}
              {activeDashboardTab === 'hero' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <h3 className="text-lg font-bold text-[#131b2e] pb-3 border-b border-[#eaedff]">
                    Hero Header & Typography
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                        Top Eyebrow Pill Text
                      </label>
                      <input
                        type="text"
                        value={content.hero.topPillText}
                        onChange={(e) =>
                          updateSection('hero', { ...content.hero, topPillText: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Headline Prefix
                        </label>
                        <input
                          type="text"
                          value={content.hero.headlinePrefix}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              headlinePrefix: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Highlight Word (Blue)
                        </label>
                        <input
                          type="text"
                          value={content.hero.headlineHighlight}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              headlineHighlight: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Headline Suffix
                        </label>
                        <input
                          type="text"
                          value={content.hero.headlineSuffix}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              headlineSuffix: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                        Subheadline Paragraph
                      </label>
                      <textarea
                        rows={3}
                        value={content.hero.subheadline}
                        onChange={(e) =>
                          updateSection('hero', { ...content.hero, subheadline: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Primary CTA Text
                        </label>
                        <input
                          type="text"
                          value={content.hero.primaryCtaText}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              primaryCtaText: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Secondary CTA Text
                        </label>
                        <input
                          type="text"
                          value={content.hero.secondaryCtaText}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              secondaryCtaText: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Compliance Chip 1
                        </label>
                        <input
                          type="text"
                          value={content.hero.guarantee1Text}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              guarantee1Text: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Compliance Chip 2
                        </label>
                        <input
                          type="text"
                          value={content.hero.guarantee2Text}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              guarantee2Text: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#131b2e] pt-6 pb-3 border-b border-[#eaedff]">
                    Hero Showcase Card (Dr. Julian Vance)
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Doctor Name & Fellowship
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.doctorName}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                doctorName: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Doctor Clinical Specialty Title
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.doctorTitle}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                doctorTitle: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Procedures Count
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.proceduresCount}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                proceduresCount: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Rating & Reviews
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.reviewsRating}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                reviewsRating: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Training / Pedigree
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.trainingInstitution}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                trainingInstitution: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                        Doctor Portrait Photo URL
                      </label>
                      <input
                        type="url"
                        value={content.hero.featuredDoctor.doctorImage}
                        onChange={(e) =>
                          updateSection('hero', {
                            ...content.hero,
                            featuredDoctor: {
                              ...content.hero.featuredDoctor,
                              doctorImage: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Video Teaser Title
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.videoSubtitle}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                videoSubtitle: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                          Booking Availability Notice
                        </label>
                        <input
                          type="text"
                          value={content.hero.featuredDoctor.bookingAvailability}
                          onChange={(e) =>
                            updateSection('hero', {
                              ...content.hero,
                              featuredDoctor: {
                                ...content.hero.featuredDoctor,
                                bookingAvailability: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff] focus:ring-2 focus:ring-[#0051d5]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PROOF METRICS BAR */}
              {activeDashboardTab === 'metrics' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
                    <div>
                      <h3 className="text-lg font-bold text-[#131b2e]">
                        Proof Strip Metrics (4 Counters)
                      </h3>
                      <p className="text-xs text-[#45464d]">
                        These numbers appear prominently beneath the hero section.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {content.metrics.map((metric, idx) => (
                      <div
                        key={metric.id}
                        className="p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] grid grid-cols-1 sm:grid-cols-3 gap-3"
                      >
                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                            Metric Value {idx + 1}
                          </label>
                          <input
                            type="text"
                            value={metric.value}
                            onChange={(e) => {
                              const updated = [...content.metrics];
                              updated[idx].value = e.target.value;
                              updateSection('metrics', updated);
                            }}
                            className="w-full px-3 py-2 bg-white rounded-lg text-sm font-bold border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                            Primary Label
                          </label>
                          <input
                            type="text"
                            value={metric.label}
                            onChange={(e) => {
                              const updated = [...content.metrics];
                              updated[idx].label = e.target.value;
                              updateSection('metrics', updated);
                            }}
                            className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                            Sub-note / Detail
                          </label>
                          <input
                            type="text"
                            value={metric.sublabel}
                            onChange={(e) => {
                              const updated = [...content.metrics];
                              updated[idx].sublabel = e.target.value;
                              updateSection('metrics', updated);
                            }}
                            className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: CORE SERVICES */}
              {activeDashboardTab === 'services' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff]">
                    <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
                      <div>
                        <h3 className="text-lg font-bold text-[#131b2e]">
                          Tailored Clinical Services ({content.services.length})
                        </h3>
                        <p className="text-xs text-[#45464d]">
                          Each card details a medical architecture service, deliverables, and blueprint modal.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const newService: ServiceItem = {
                            id: `service-${Date.now()}`,
                            icon: 'local_hospital',
                            title: 'New Clinical Service Architecture',
                            description: 'Description of bespoke clinical solution for specialists.',
                            tag: 'Specialty Architecture',
                            bullets: [
                              'Custom clinical framework',
                              'End-to-end encrypted integration',
                              'Medical board compliance review',
                            ],
                            deliverables: [
                              'Comprehensive strategy dossier',
                              'Production platform deployment',
                            ],
                            turnaround: '18 Business Days',
                          };
                          updateSection('services', [...content.services, newService]);
                          setEditingServiceIndex(content.services.length);
                        }}
                        className="px-3.5 py-2 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        <span>Add Service</span>
                      </button>
                    </div>

                    {/* Services List / Cards */}
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      {content.services.map((svc, idx) => (
                        <div
                          key={svc.id}
                          className="p-5 bg-[#faf8ff] rounded-xl border border-[#eaedff] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#eaedff] text-[#0051d5] flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[20px]">
                                {svc.icon}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-[#131b2e]">{svc.title}</h4>
                                <span className="text-[10px] font-bold uppercase bg-[#e2e7ff] text-[#0051d5] px-2 py-0.5 rounded">
                                  {svc.tag}
                                </span>
                              </div>
                              <p className="text-xs text-[#45464d] mt-1 line-clamp-1">
                                {svc.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => setEditingServiceIndex(idx)}
                              className="px-3 py-1.5 bg-white hover:bg-[#eaedff] border border-[#e2e7ff] rounded-lg text-xs font-semibold text-[#0051d5] flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">edit</span>
                              <span>Edit Card & Blueprint</span>
                            </button>
                            {content.services.length > 1 && (
                              <button
                                onClick={() => {
                                  if (confirm(`Delete "${svc.title}"?`)) {
                                    const updated = content.services.filter((_, i) => i !== idx);
                                    updateSection('services', updated);
                                    if (editingServiceIndex === idx) setEditingServiceIndex(null);
                                  }
                                }}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                                aria-label="Delete service"
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  delete
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Single Service Detailed Edit Form */}
                  {editingServiceIndex !== null && content.services[editingServiceIndex] && (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-[#0051d5]/40 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
                        <h4 className="text-base font-bold text-[#131b2e] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#0051d5]">edit</span>
                          Editing Service #{editingServiceIndex + 1}:{' '}
                          {content.services[editingServiceIndex].title}
                        </h4>
                        <button
                          onClick={() => setEditingServiceIndex(null)}
                          className="text-xs text-[#45464d] hover:text-[#131b2e] font-semibold"
                        >
                          Close Editor ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Service Title
                          </label>
                          <input
                            type="text"
                            value={content.services[editingServiceIndex].title}
                            onChange={(e) => {
                              const updated = [...content.services];
                              updated[editingServiceIndex].title = e.target.value;
                              updateSection('services', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Material Icon Name
                          </label>
                          <input
                            type="text"
                            value={content.services[editingServiceIndex].icon}
                            onChange={(e) => {
                              const updated = [...content.services];
                              updated[editingServiceIndex].icon = e.target.value;
                              updateSection('services', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Tag / Category Label
                          </label>
                          <input
                            type="text"
                            value={content.services[editingServiceIndex].tag}
                            onChange={(e) => {
                              const updated = [...content.services];
                              updated[editingServiceIndex].tag = e.target.value;
                              updateSection('services', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Production Turnaround Time
                          </label>
                          <input
                            type="text"
                            value={content.services[editingServiceIndex].turnaround}
                            onChange={(e) => {
                              const updated = [...content.services];
                              updated[editingServiceIndex].turnaround = e.target.value;
                              updateSection('services', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Service Description
                        </label>
                        <textarea
                          rows={2}
                          value={content.services[editingServiceIndex].description}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[editingServiceIndex].description = e.target.value;
                            updateSection('services', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>

                      {/* Bullets */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Key Feature Bullets (one per line)
                        </label>
                        <textarea
                          rows={3}
                          value={content.services[editingServiceIndex].bullets.join('\n')}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[editingServiceIndex].bullets = e.target.value
                              .split('\n')
                              .filter((line) => line.trim().length > 0);
                            updateSection('services', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>

                      {/* Deliverables in Blueprint Modal */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Blueprint Deliverables in Modal (one per line)
                        </label>
                        <textarea
                          rows={4}
                          value={content.services[editingServiceIndex].deliverables.join('\n')}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[editingServiceIndex].deliverables = e.target.value
                              .split('\n')
                              .filter((line) => line.trim().length > 0);
                            updateSection('services', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: CASE STUDIES */}
              {activeDashboardTab === 'cases' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff]">
                    <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
                      <div>
                        <h3 className="text-lg font-bold text-[#131b2e]">
                          Doctor Case Studies & Portfolios ({content.caseStudies.length})
                        </h3>
                        <p className="text-xs text-[#45464d]">
                          Filterable by specialty (plastics, spine, longevity) with deep-dive modal stats.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const newCase: CaseStudy = {
                            id: `case-${Date.now()}`,
                            category: 'plastics',
                            categoryLabel: 'Plastic & Reconstructive Surgery',
                            badgeMetric: '+250% Inquiries',
                            name: 'Dr. New Specialist, MD',
                            location: 'San Francisco, CA',
                            credentials: 'Board-Certified',
                            summary: 'Summary of clinical positioning transformation.',
                            image: content.hero.featuredDoctor.doctorImage,
                            imageAlt: 'Portrait of surgeon in private consultation suite',
                            feeLabel: 'Consultation Fee',
                            feeValue: '$1,000 Retainer',
                            highlightLabel: 'Practice Growth',
                            highlightValue: '3.8x Volume',
                            architectureType: 'Full Brand Architecture',
                            fullCase: {
                              specialty: 'Clinical Specialty',
                              institution: 'Private Surgical Institute',
                              challenge: 'Generic market competition and low brand distinction.',
                              strategy: ['High-intent procedural indexing', 'Editorial clinical photography'],
                              outcomes: [
                                { label: 'Inquiries', value: '+250%', detail: 'Direct conversions' },
                                { label: 'Average Retainer', value: '$25,000', detail: 'Up from baseline' },
                                { label: 'Waitlist', value: '6 Months', detail: 'Fully booked' },
                              ],
                              testimonial: {
                                quote: 'MedFrame transformed our physician presence completely.',
                                author: 'Dr. New Specialist, MD',
                                title: 'Founding Surgeon',
                              },
                            },
                          };
                          updateSection('caseStudies', [...content.caseStudies, newCase]);
                          setEditingCaseIndex(content.caseStudies.length);
                        }}
                        className="px-3.5 py-2 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        <span>Add Case Study</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-6">
                      {content.caseStudies.map((study, idx) => (
                        <div
                          key={study.id}
                          className="p-5 bg-[#faf8ff] rounded-xl border border-[#e2e7ff] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={study.image}
                              alt={study.name}
                              className="w-14 h-14 rounded-xl object-cover border border-[#e2e7ff] shrink-0"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-[#131b2e]">{study.name}</h4>
                                <span className="text-[10px] font-bold uppercase bg-[#e2e7ff] text-[#0051d5] px-2 py-0.5 rounded">
                                  {study.categoryLabel}
                                </span>
                              </div>
                              <span className="text-xs text-[#45464d] block">
                                {study.location} • {study.credentials}
                              </span>
                              <span className="text-xs font-semibold text-[#0051d5] mt-0.5 block">
                                {study.badgeMetric} • {study.feeValue}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => setEditingCaseIndex(idx)}
                              className="px-3 py-1.5 bg-white hover:bg-[#eaedff] border border-[#e2e7ff] rounded-lg text-xs font-semibold text-[#0051d5] flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">edit</span>
                              <span>Edit Case</span>
                            </button>
                            {content.caseStudies.length > 1 && (
                              <button
                                onClick={() => {
                                  if (confirm(`Delete case study "${study.name}"?`)) {
                                    const updated = content.caseStudies.filter((_, i) => i !== idx);
                                    updateSection('caseStudies', updated);
                                    if (editingCaseIndex === idx) setEditingCaseIndex(null);
                                  }
                                }}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                                aria-label="Delete case"
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  delete
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Detailed Editor */}
                  {editingCaseIndex !== null && content.caseStudies[editingCaseIndex] && (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-[#0051d5]/40 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
                        <h4 className="text-base font-bold text-[#131b2e] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#0051d5]">edit</span>
                          Editing Case: {content.caseStudies[editingCaseIndex].name}
                        </h4>
                        <button
                          onClick={() => setEditingCaseIndex(null)}
                          className="text-xs text-[#45464d] hover:text-[#131b2e] font-semibold"
                        >
                          Close Editor ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Doctor Name
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].name}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].name = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].location}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].location = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Credentials
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].credentials}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].credentials = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Filter Category Key
                          </label>
                          <select
                            value={content.caseStudies[editingCaseIndex].category}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].category = e.target.value as 'plastics' | 'spine' | 'longevity';
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          >
                            <option value="plastics">Plastic & Aesthetic (plastics)</option>
                            <option value="spine">Spine & Neuro (spine)</option>
                            <option value="longevity">Longevity & Medicine (longevity)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Category Label
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].categoryLabel}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].categoryLabel = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Badge Metric
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].badgeMetric}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].badgeMetric = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Fee Value
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].feeValue}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].feeValue = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                            Highlight Metric
                          </label>
                          <input
                            type="text"
                            value={content.caseStudies[editingCaseIndex].highlightValue}
                            onChange={(e) => {
                              const updated = [...content.caseStudies];
                              updated[editingCaseIndex].highlightValue = e.target.value;
                              updateSection('caseStudies', updated);
                            }}
                            className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Doctor Photo URL
                        </label>
                        <input
                          type="url"
                          value={content.caseStudies[editingCaseIndex].image}
                          onChange={(e) => {
                            const updated = [...content.caseStudies];
                            updated[editingCaseIndex].image = e.target.value;
                            updateSection('caseStudies', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Brief Card Summary
                        </label>
                        <textarea
                          rows={2}
                          value={content.caseStudies[editingCaseIndex].summary}
                          onChange={(e) => {
                            const updated = [...content.caseStudies];
                            updated[editingCaseIndex].summary = e.target.value;
                            updateSection('caseStudies', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Physician Testimonial Quote (Modal)
                        </label>
                        <textarea
                          rows={2}
                          value={content.caseStudies[editingCaseIndex].fullCase.testimonial.quote}
                          onChange={(e) => {
                            const updated = [...content.caseStudies];
                            updated[editingCaseIndex].fullCase.testimonial.quote = e.target.value;
                            updateSection('caseStudies', updated);
                          }}
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 6: METHODOLOGY */}
              {activeDashboardTab === 'methodology' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">
                      The Concierge Methodology (4-Week Lifecycle)
                    </h3>
                    <p className="text-xs text-[#45464d]">
                      Edit the title, week duration, deliverables tag, and description for each stage.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {content.methodology.map((step, idx) => (
                      <div
                        key={step.id}
                        className="p-5 bg-[#faf8ff] rounded-xl border border-[#e2e7ff] space-y-3"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Step Number
                            </label>
                            <input
                              type="text"
                              value={step.num}
                              onChange={(e) => {
                                const updated = [...content.methodology];
                                updated[idx].num = e.target.value;
                                updateSection('methodology', updated);
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm font-bold border border-[#e2e7ff]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Week Tag
                            </label>
                            <input
                              type="text"
                              value={step.week}
                              onChange={(e) => {
                                const updated = [...content.methodology];
                                updated[idx].week = e.target.value;
                                updateSection('methodology', updated);
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Stage Title
                            </label>
                            <input
                              type="text"
                              value={step.title}
                              onChange={(e) => {
                                const updated = [...content.methodology];
                                updated[idx].title = e.target.value;
                                updateSection('methodology', updated);
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm font-semibold border border-[#e2e7ff]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={step.description}
                            onChange={(e) => {
                              const updated = [...content.methodology];
                              updated[idx].description = e.target.value;
                              updateSection('methodology', updated);
                            }}
                            className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Deliverable Tag
                            </label>
                            <input
                              type="text"
                              value={step.tag}
                              onChange={(e) => {
                                const updated = [...content.methodology];
                                updated[idx].tag = e.target.value;
                                updateSection('methodology', updated);
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Material Icon
                            </label>
                            <input
                              type="text"
                              value={step.icon}
                              onChange={(e) => {
                                const updated = [...content.methodology];
                                updated[idx].icon = e.target.value;
                                updateSection('methodology', updated);
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: DISCRETION & TRUST PILLARS */}
              {activeDashboardTab === 'discretion' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">
                      The MedFrame Discretion Standard (Navy Section)
                    </h3>
                    <p className="text-xs text-[#45464d]">
                      Edit the headline, signed NDA guarantee, and the four clinical trust pillars.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Eyebrow Tag
                        </label>
                        <input
                          type="text"
                          value={content.discretion.eyebrow}
                          onChange={(e) =>
                            updateSection('discretion', {
                              ...content.discretion,
                              eyebrow: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Section Headline
                        </label>
                        <input
                          type="text"
                          value={content.discretion.title}
                          onChange={(e) =>
                            updateSection('discretion', {
                              ...content.discretion,
                              title: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Section Description
                      </label>
                      <textarea
                        rows={2}
                        value={content.discretion.description}
                        onChange={(e) =>
                          updateSection('discretion', {
                            ...content.discretion,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          NDA Badge Title
                        </label>
                        <input
                          type="text"
                          value={content.discretion.ndaTitle}
                          onChange={(e) =>
                            updateSection('discretion', {
                              ...content.discretion,
                              ndaTitle: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          NDA Sub-text
                        </label>
                        <input
                          type="text"
                          value={content.discretion.ndaDesc}
                          onChange={(e) =>
                            updateSection('discretion', {
                              ...content.discretion,
                              ndaDesc: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#131b2e] pt-4 border-t border-[#eaedff]">
                      4 Compliance & Operational Pillars
                    </h4>

                    <div className="space-y-3">
                      {content.discretion.pillars.map((pillar, idx) => (
                        <div
                          key={pillar.id}
                          className="p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] space-y-2"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="sm:col-span-2">
                              <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                                Pillar {idx + 1} Title
                              </label>
                              <input
                                type="text"
                                value={pillar.title}
                                onChange={(e) => {
                                  const updated = [...content.discretion.pillars];
                                  updated[idx].title = e.target.value;
                                  updateSection('discretion', {
                                    ...content.discretion,
                                    pillars: updated,
                                  });
                                }}
                                className="w-full px-3 py-2 bg-white rounded-lg text-sm font-semibold border border-[#e2e7ff]"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                                Icon Name
                              </label>
                              <input
                                type="text"
                                value={pillar.icon}
                                onChange={(e) => {
                                  const updated = [...content.discretion.pillars];
                                  updated[idx].icon = e.target.value;
                                  updateSection('discretion', {
                                    ...content.discretion,
                                    pillars: updated,
                                  });
                                }}
                                className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                              Explanation
                            </label>
                            <textarea
                              rows={2}
                              value={pillar.desc}
                              onChange={(e) => {
                                const updated = [...content.discretion.pillars];
                                updated[idx].desc = e.target.value;
                                updateSection('discretion', {
                                    ...content.discretion,
                                    pillars: updated,
                                });
                              }}
                              className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 8: FAQ */}
              {activeDashboardTab === 'faq' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
                    <div>
                      <h3 className="text-lg font-bold text-[#131b2e]">
                        Frequently Asked Questions ({content.faqs.length})
                      </h3>
                      <p className="text-xs text-[#45464d]">
                        Manage questions and answers displayed in the interactive clinical accordion.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const newFaq = {
                          question: 'New Clinical Question for Physicians?',
                          answer: 'Detailed response explaining medical board compliance, timeline, or concierge integration.',
                        };
                        updateSection('faqs', [...content.faqs, newFaq]);
                      }}
                      className="px-3.5 py-2 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      <span>Add Question</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-[#faf8ff] rounded-xl border border-[#e2e7ff] space-y-2 relative"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <label className="text-[11px] font-bold uppercase text-[#0051d5]">
                            Question #{idx + 1}
                          </label>
                          {content.faqs.length > 1 && (
                            <button
                              onClick={() => {
                                if (confirm('Delete this question?')) {
                                  const updated = content.faqs.filter((_, i) => i !== idx);
                                  updateSection('faqs', updated);
                                }
                              }}
                              className="text-red-500 hover:text-red-700 text-xs font-semibold"
                            >
                              Delete ✕
                            </button>
                          )}
                        </div>

                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const updated = [...content.faqs];
                            updated[idx].question = e.target.value;
                            updateSection('faqs', updated);
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg text-sm font-semibold border border-[#e2e7ff]"
                        />

                        <label className="block text-[11px] font-bold uppercase text-[#45464d] mt-2 mb-1">
                          Answer
                        </label>
                        <textarea
                          rows={3}
                          value={faq.answer}
                          onChange={(e) => {
                            const updated = [...content.faqs];
                            updated[idx].answer = e.target.value;
                            updateSection('faqs', updated);
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 9: CONSULTATION & FOOTER */}
              {activeDashboardTab === 'consultation' && (
                <div className="space-y-6">
                  {/* Consultation Form Copy */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-4">
                    <h3 className="text-lg font-bold text-[#131b2e] pb-3 border-b border-[#eaedff]">
                      Strategy Briefing & Consultation Section
                    </h3>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Form Eyebrow
                      </label>
                      <input
                        type="text"
                        value={content.consultation.eyebrow}
                        onChange={(e) =>
                          updateSection('consultation', {
                            ...content.consultation,
                            eyebrow: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Form Main Headline
                      </label>
                      <input
                        type="text"
                        value={content.consultation.title}
                        onChange={(e) =>
                          updateSection('consultation', {
                            ...content.consultation,
                            title: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={content.consultation.description}
                        onChange={(e) =>
                          updateSection('consultation', {
                            ...content.consultation,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                          Guarantee 1
                        </label>
                        <input
                          type="text"
                          value={content.consultation.guarantee1}
                          onChange={(e) =>
                            updateSection('consultation', {
                              ...content.consultation,
                              guarantee1: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-xs border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                          Guarantee 2
                        </label>
                        <input
                          type="text"
                          value={content.consultation.guarantee2}
                          onChange={(e) =>
                            updateSection('consultation', {
                              ...content.consultation,
                              guarantee2: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-xs border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#131b2e] mb-1">
                          Guarantee 3
                        </label>
                        <input
                          type="text"
                          value={content.consultation.guarantee3}
                          onChange={(e) =>
                            updateSection('consultation', {
                              ...content.consultation,
                              guarantee3: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-xs border border-[#e2e7ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Submit Button Text
                      </label>
                      <input
                        type="text"
                        value={content.consultation.submitButtonText}
                        onChange={(e) =>
                          updateSection('consultation', {
                            ...content.consultation,
                            submitButtonText: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>
                  </div>

                  {/* Footer Settings */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-4">
                    <h3 className="text-lg font-bold text-[#131b2e] pb-3 border-b border-[#eaedff]">
                      Footer Agency & Legal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Concierge Email
                        </label>
                        <input
                          type="email"
                          value={content.footer.directEmail}
                          onChange={(e) =>
                            updateSection('footer', {
                              ...content.footer,
                              directEmail: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Phone Hotline
                        </label>
                        <input
                          type="text"
                          value={content.footer.phone}
                          onChange={(e) =>
                            updateSection('footer', {
                              ...content.footer,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                          Global Office Locations
                        </label>
                        <input
                          type="text"
                          value={content.footer.locations}
                          onChange={(e) =>
                            updateSection('footer', {
                              ...content.footer,
                              locations: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#131b2e] mb-1">
                        Medical Discretion & Legal Notice
                      </label>
                      <textarea
                        rows={2}
                        value={content.footer.legalNotice}
                        onChange={(e) =>
                          updateSection('footer', {
                            ...content.footer,
                            legalNotice: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-[#f2f3ff] rounded-lg text-sm border border-[#e2e7ff]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 10: IMPORT / EXPORT / BACKUP */}
              {activeDashboardTab === 'backup' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e2e7ff] space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">
                      Configuration Backup & JSON Sync
                    </h3>
                    <p className="text-xs text-[#45464d]">
                      Export all edited site content to a portable JSON file, or restore configuration from previous versions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#faf8ff] rounded-xl border border-[#eaedff] flex flex-col justify-between space-y-4">
                      <div>
                        <span className="material-symbols-outlined text-[#0051d5] text-[32px] block mb-2">
                          file_download
                        </span>
                        <h4 className="text-sm font-bold text-[#131b2e]">
                          Export Site Configuration
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1">
                          Download a complete JSON snapshot of all sections, doctors, and services.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const json = exportJSON();
                          const blob = new Blob([json], { type: 'application/json' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = 'medframe_studio_config.json';
                          a.click();
                          URL.revokeObjectURL(url);
                          showToast('✓ Downloaded configuration JSON');
                        }}
                        className="w-full py-2.5 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Download JSON File</span>
                      </button>
                    </div>

                    <div className="p-5 bg-[#faf8ff] rounded-xl border border-[#eaedff] flex flex-col justify-between space-y-4">
                      <div>
                        <span className="material-symbols-outlined text-[#0051d5] text-[32px] block mb-2">
                          file_upload
                        </span>
                        <h4 className="text-sm font-bold text-[#131b2e]">
                          Import JSON Configuration
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1">
                          Paste or load JSON to instantly replace and update all sections.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowJsonModal(true)}
                        className="w-full py-2.5 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Paste / Upload JSON</span>
                      </button>
                    </div>
                  </div>

                  {/* Reset Box */}
                  <div className="p-5 bg-red-50/60 rounded-xl border border-red-200 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-red-900">
                        Restore Factory Clinical Defaults
                      </h4>
                      <p className="text-xs text-red-700 mt-0.5">
                        Discard all custom changes and restore original copy, Dr. Vance showcase, and default case studies.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm('Revert all sections to factory clinical defaults? This cannot be undone.')) {
                          resetToDefaults();
                        }
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shrink-0 cursor-pointer shadow-sm"
                    >
                      Reset Everything
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* JSON Import Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-[#e2e7ff] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#131b2e]">
                Paste Site Configuration JSON
              </h3>
              <button
                onClick={() => setShowJsonModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <textarea
              rows={10}
              placeholder='Paste JSON here, e.g. { "hero": { ... } }'
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full p-3 font-mono text-xs bg-[#f2f3ff] rounded-xl border border-[#e2e7ff] focus:outline-none"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowJsonModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (importJSON(jsonInput)) {
                    setShowJsonModal(false);
                    setJsonInput('');
                  }
                }}
                className="px-5 py-2 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                Apply Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
