import React, { useState } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

export const FAQ: React.FC = () => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf8ff] relative group/faq" id="faq">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('faq');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 top-0 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/faq:opacity-100 z-10"
          title="Edit FAQ"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit FAQs</span>
        </button>

        <div className="text-center mb-16">
          <span className="text-[#0051d5] text-[11px] font-bold uppercase tracking-widest">
            Clinical Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] mt-2">
            Clear, straightforward answers for physicians evaluating an overhaul of their personal digital footprint.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-xs border border-[#e2e7ff] transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-[#faf8ff] transition-colors"
                >
                  <span className="text-base sm:text-lg text-[#131b2e] font-semibold">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#0051d5] text-[24px] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#45464d] leading-relaxed border-t border-[#eaedff] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
