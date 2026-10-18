import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

export const DiscretionStandard: React.FC = () => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const disc = content.discretion;

  return (
    <section className="py-20 md:py-24 bg-[#faf8ff] relative group/discretion">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('discretion');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 -top-4 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/discretion:opacity-100 z-20"
          title="Edit Discretion Standard"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Discretion Section</span>
        </button>

        <div className="bg-[#101b35] text-white rounded-2xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden border border-[#3c4662]/50">
          {/* Subtle background decorative glow */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#316bf3]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-[#dbe1ff] text-[11px] font-bold uppercase tracking-wider">
                {disc.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {disc.title}
              </h2>
              <p className="text-sm sm:text-base text-[#bcc6e8] leading-relaxed">
                {disc.description}
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm">
                  <span className="material-symbols-outlined text-[#316bf3] text-[28px] shrink-0">
                    shield_person
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {disc.ndaTitle}
                    </span>
                    <span className="text-xs text-[#bcc6e8]">
                      {disc.ndaDesc}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {disc.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col gap-2 hover:bg-white/8 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#dbe1ff] text-[26px]">
                    {pillar.icon}
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#bcc6e8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
