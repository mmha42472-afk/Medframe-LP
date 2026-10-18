import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

export const Methodology: React.FC = () => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();

  return (
    <section className="py-20 md:py-28 bg-[#f2f3ff] relative group/methodology" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('methodology');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 top-0 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/methodology:opacity-100 z-10"
          title="Edit Methodology"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Methodology</span>
        </button>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0051d5] text-[11px] font-bold uppercase tracking-widest">
            The Concierge Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight mt-2">
            Engineered for Demanding Clinical Schedules
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] mt-3">
            We require less than 3 hours of your direct attention across the entire 30-day lifecycle. Our specialized healthcare strategists do the heavy lifting.
          </p>
        </div>

        {/* 4 Stages Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {content.methodology.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group border border-[#e2e7ff] hover:border-[#0051d5]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-[#316bf3]">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold uppercase px-2.5 py-1 bg-[#eaedff] text-[#0051d5] rounded-full">
                    {step.week}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#131b2e] mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f2f3ff] text-xs text-[#45464d] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0051d5]">
                  {step.icon}
                </span>
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
