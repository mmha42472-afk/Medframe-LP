import React from 'react';
import { CaseStudy } from '../../data/mockData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenConsultation,
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#00174b]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 border border-[#e2e7ff]">
        {/* Header Image & Close */}
        <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101b35] via-[#101b35]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close case study details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Badges in header */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-[#0051d5] tracking-wider uppercase shadow-sm">
              {caseStudy.categoryLabel}
            </span>
            <span className="bg-[#101b35]/90 text-[#dae2ff] backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[13px] text-[#316bf3]">trending_up</span>
              {caseStudy.badgeMetric}
            </span>
          </div>

          {/* Title block */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs font-semibold text-[#bcc6e8] uppercase tracking-wider mb-1">
              {caseStudy.location} • {caseStudy.credentials}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {caseStudy.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#dae2ff] mt-1 font-medium">
              {caseStudy.fullCase.institution}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 bg-[#f2f3ff] p-4 rounded-xl text-center border border-[#e2e7ff]">
            {caseStudy.fullCase.outcomes.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-[#0051d5]">
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-[#131b2e] mt-0.5">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#45464d] hidden sm:block mt-0.5">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Clinical Challenge */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0051d5] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">priority_high</span>
              The Clinical & Positioning Challenge
            </h3>
            <p className="text-sm sm:text-base text-[#45464d] leading-relaxed bg-[#faf8ff] p-4 rounded-xl border border-[#eaedff]">
              {caseStudy.fullCase.challenge}
            </p>
          </div>

          {/* The Strategic Architecture */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0051d5] mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">design_services</span>
              MedFrame Architectural Intervention
            </h3>
            <ul className="space-y-3">
              {caseStudy.fullCase.strategy.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#131b2e] bg-[#ffffff] p-3 rounded-lg border border-[#eaedff]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#316bf3] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctor Testimonial */}
          <div className="bg-[#101b35] text-white p-5 rounded-xl border border-[#3c4662] relative">
            <span className="material-symbols-outlined text-[#316bf3] text-3xl mb-2 block opacity-80">
              format_quote
            </span>
            <p className="italic text-sm sm:text-base text-[#dae2ff] leading-relaxed">
              "{caseStudy.fullCase.testimonial.quote}"
            </p>
            <div className="mt-3 pt-3 border-t border-[#3c4662]/50 flex items-center justify-between">
              <div>
                <span className="font-bold text-sm block text-white">
                  {caseStudy.fullCase.testimonial.author}
                </span>
                <span className="text-xs text-[#bcc6e8]">
                  {caseStudy.fullCase.testimonial.title}
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7bd0ff] bg-white/10 px-2.5 py-1 rounded">
                Verified Specialist
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#eaedff]">
            <div className="text-xs text-[#45464d] text-center sm:text-left">
              Bespoke architecture tailored to your clinical specialty.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-[#c6c6ce] text-xs font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-all"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#0051d5] hover:bg-[#316bf3] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Similar Strategy Blueprint</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
