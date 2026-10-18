import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';
import { ServiceItem } from '../data/mockData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();

  return (
    <section className="py-20 md:py-28 bg-[#f2f3ff] relative group/services" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('services');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 top-0 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/services:opacity-100 z-10"
          title="Edit Services"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Services</span>
        </button>

        {/* Section Header */}
        <div className="flex flex-col max-w-3xl mb-16">
          <span className="text-[#0051d5] text-[11px] font-bold uppercase tracking-widest mb-2">
            Tailored Clinical Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Tailored Specifically for Physicians, Surgeons, and Clinical Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#45464d] mt-4 leading-relaxed">
            Generic marketing agencies don't understand medical ethics, clinical credibility, or high-value patient psychology. We do. Every aesthetic decision aligns with your surgical distinction.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {content.services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-[#e2e7ff] hover:border-[#0051d5]/40 cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#0051d5] mb-6 group-hover:bg-[#0051d5] group-hover:text-white transition-colors duration-200">
                  <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#131b2e] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#45464d] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#131b2e] mb-8">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#0051d5] text-[18px]">
                        check_circle
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between text-[#0051d5] font-semibold text-sm border-t border-[#eaedff]">
                <span>{service.tag}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
