import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

export const Metrics: React.FC = () => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 -mt-8 sm:-mt-12 relative z-20 group/metrics">
      {/* Edit Badge */}
      <button
        onClick={() => {
          setActiveDashboardTab('metrics');
          setIsDashboardOpen(true);
        }}
        className="absolute right-8 -top-3.5 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/metrics:opacity-100 z-30"
        title="Edit Metrics"
      >
        <span className="material-symbols-outlined text-[15px]">edit</span>
        <span>Edit Metrics</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl border border-[#e2e7ff] p-6 sm:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#eaedff]">
          {content.metrics.map((m, idx) => (
            <div
              key={m.id || idx}
              className={`flex flex-col items-center ${idx > 0 ? 'pt-6 md:pt-0' : 'pt-2 md:pt-0'}`}
            >
              <span
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
                  m.isAccent ? 'text-[#0051d5]' : 'text-[#131b2e]'
                }`}
              >
                {m.value}
              </span>
              <span className="text-sm font-semibold text-[#45464d] mt-1.5">{m.label}</span>
              <span
                className={`text-xs mt-0.5 ${
                  m.isAccent ? 'text-[#45464d]' : 'text-[#0051d5] font-medium'
                }`}
              >
                {m.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
