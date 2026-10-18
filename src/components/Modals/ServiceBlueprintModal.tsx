import React from 'react';
import { ServiceItem } from '../../data/mockData';

interface ServiceBlueprintModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceBlueprintModal: React.FC<ServiceBlueprintModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#00174b]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 border border-[#e2e7ff]">
        {/* Header */}
        <div className="bg-[#101b35] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close service blueprint"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#316bf3] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7bd0ff]">
              {service.tag} Blueprint
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#dae2ff] mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Blueprint Deliverables Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between p-3.5 bg-[#f2f3ff] rounded-xl border border-[#e2e7ff]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#131b2e]">
              <span className="material-symbols-outlined text-[#0051d5] text-[18px]">timer</span>
              <span>Production Turnaround:</span>
            </div>
            <span className="text-xs font-bold text-[#0051d5] bg-white px-2.5 py-1 rounded shadow-sm">
              {service.turnaround}
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0051d5] mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">task_alt</span>
              Core Architectural Deliverables
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-sm text-[#131b2e]"
                >
                  <span className="material-symbols-outlined text-[#0051d5] text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#faf8ff] p-4 rounded-xl border border-[#eaedff] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#131b2e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#316bf3] text-[16px]">verified</span>
              Compliance & Medical Discretion Seal
            </div>
            <p className="text-xs text-[#45464d] leading-relaxed">
              Every deliverable is reviewed by our biomedical copy team and regulatory compliance counsel to ensure seamless alignment with AMA and state medical board advertising codes.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#eaedff]">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#c6c6ce] text-xs font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-all"
            >
              Back to Services
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0051d5] hover:bg-[#316bf3] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Initiate Discovery for This Module</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
