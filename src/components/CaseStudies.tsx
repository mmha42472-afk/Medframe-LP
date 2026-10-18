import React, { useState } from 'react';
import { useSiteContent } from '../context/SiteContentContext';
import { CaseStudy } from '../data/mockData';

interface CaseStudiesProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCase }) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const [filter, setFilter] = useState<'all' | 'plastics' | 'spine' | 'longevity'>('all');

  const filteredCases = content.caseStudies.filter(
    (c) => filter === 'all' || c.category === filter
  );

  return (
    <section className="py-20 md:py-28 bg-[#faf8ff] relative group/cases" id="our-work">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('cases');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 top-0 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/cases:opacity-100 z-10"
          title="Edit Case Studies"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Case Studies</span>
        </button>

        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[#0051d5] text-[11px] font-bold uppercase tracking-widest mb-2 block">
              Curated Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
              Transforming How Patients and Peers Perceive Top Specialists
            </h2>
          </div>

          {/* Specialty Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#eaedff] rounded-xl border border-[#dae2fd]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0051d5] text-white shadow-sm'
                  : 'text-[#45464d] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              All Specialties
            </button>
            <button
              onClick={() => setFilter('plastics')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'plastics'
                  ? 'bg-[#0051d5] text-white shadow-sm'
                  : 'text-[#45464d] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              Plastic & Aesthetic
            </button>
            <button
              onClick={() => setFilter('spine')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'spine'
                  ? 'bg-[#0051d5] text-white shadow-sm'
                  : 'text-[#45464d] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              Spine & Neuro
            </button>
            <button
              onClick={() => setFilter('longevity')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'longevity'
                  ? 'bg-[#0051d5] text-white shadow-sm'
                  : 'text-[#45464d] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              Longevity & Medicine
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCase(study)}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-[#e2e7ff] group cursor-pointer"
            >
              {/* Photo & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#0051d5] shadow-xs">
                  {study.categoryLabel}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#101b35]/90 text-[#dae2ff] backdrop-blur px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#316bf3]">trending_up</span>{' '}
                  {study.badgeMetric}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#45464d] text-xs font-medium mb-1">
                    <span>{study.location}</span> • <span>{study.credentials}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#131b2e] mb-2 group-hover:text-[#0051d5] transition-colors">
                    {study.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#45464d] mb-4 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Impact Metrics Bar */}
                  <div className="bg-[#f2f3ff] rounded-lg p-3 flex items-center justify-between mb-4 border border-[#e2e7ff]">
                    <div>
                      <span className="text-[11px] text-[#45464d] block font-medium">
                        {study.feeLabel}
                      </span>
                      <span className="text-sm font-bold text-[#131b2e]">
                        {study.feeValue}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#45464d] block font-medium">
                        {study.highlightLabel}
                      </span>
                      <span className="text-sm font-bold text-[#0051d5]">
                        {study.highlightValue}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#eaedff] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">
                    {study.architectureType}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#0051d5] text-xs font-bold group-hover:translate-x-1 transition-transform">
                    View Case <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
