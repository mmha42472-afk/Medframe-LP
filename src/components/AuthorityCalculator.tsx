import React, { useState } from 'react';

interface AuthorityCalculatorProps {
  onApplyToConsultation: (details: {
    specialty: string;
    monthlyConsults: number;
    avgValue: number;
    projectedLift: number;
  }) => void;
}

export const AuthorityCalculator: React.FC<AuthorityCalculatorProps> = ({
  onApplyToConsultation,
}) => {
  const [specialty, setSpecialty] = useState('ortho');
  const [monthlyConsults, setMonthlyConsults] = useState<number>(24);
  const [caseValue, setCaseValue] = useState<number>(18500);

  const specialtyMultipliers: Record<string, { label: string; multiplier: number; baseConversion: number }> = {
    ortho: { label: 'Orthopedic & Spine Surgery', multiplier: 3.4, baseConversion: 0.16 },
    plastics: { label: 'Plastic & Aesthetic Surgery', multiplier: 4.1, baseConversion: 0.14 },
    neuro: { label: 'Neurosurgery & Spine', multiplier: 3.8, baseConversion: 0.18 },
    longevity: { label: 'Longevity & Executive Medicine', multiplier: 4.6, baseConversion: 0.12 },
    derm: { label: 'Dermatology & Mohs Surgery', multiplier: 2.9, baseConversion: 0.22 },
  };

  const currentSpecialty = specialtyMultipliers[specialty] || specialtyMultipliers.ortho;

  // Calculations
  const currentConversions = Math.round(monthlyConsults * currentSpecialty.baseConversion);
  const projectedConversions = Math.round(currentConversions * currentSpecialty.multiplier);
  const monthlyLiftCases = Math.max(1, projectedConversions - currentConversions);
  const annualRevenueLift = monthlyLiftCases * caseValue * 12;
  const peerReferralLift = Math.round(monthlyConsults * 1.8);

  return (
    <section id="calculator" className="py-20 bg-[#faf8ff] border-y border-[#eaedff]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0051d5] text-[11px] font-bold uppercase tracking-widest block mb-2">
            Physician Practice ROI Modeling
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#131b2e] tracking-tight">
            Authority Impact & Patient Revenue Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] mt-2">
            Evaluate the projected clinical case velocity and financial impact of upgrading from a generic marketing footprint to a MedFrame authority architecture.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-[#e2e7ff] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 bg-[#ffffff]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-2">
                Clinical Sub-Specialty
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full px-4 py-3 bg-[#f2f3ff] rounded-xl text-sm font-semibold text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
              >
                <option value="ortho">Orthopedic & Spine Surgery</option>
                <option value="plastics">Plastic & Reconstructive Surgery</option>
                <option value="neuro">Neurosurgery & Spine Motion Preservation</option>
                <option value="longevity">Longevity & Executive Concierge Medicine</option>
                <option value="derm">Dermatology & Mohs Reconstructive Surgery</option>
              </select>
            </div>

            {/* Slider 1: Monthly Inquiries */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#131b2e]">
                  Current Monthly Consult Inquiries
                </label>
                <span className="px-3 py-1 bg-[#eaedff] text-[#0051d5] text-xs font-bold rounded-full">
                  {monthlyConsults} Inquiries / mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={monthlyConsults}
                onChange={(e) => setMonthlyConsults(Number(e.target.value))}
                className="w-full h-2 bg-[#dae2fd] rounded-lg appearance-none cursor-pointer accent-[#0051d5]"
              />
              <div className="flex justify-between text-[11px] text-[#76777e] mt-1">
                <span>5 / mo (Boutique)</span>
                <span>40 / mo (High Volume)</span>
                <span>80 / mo (Regional Center)</span>
              </div>
            </div>

            {/* Slider 2: Average Procedure / Retainer Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#131b2e]">
                  Average Surgical / Case Retainer Value
                </label>
                <span className="px-3 py-1 bg-[#eaedff] text-[#0051d5] text-xs font-bold rounded-full">
                  ${caseValue.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min="4000"
                max="45000"
                step="500"
                value={caseValue}
                onChange={(e) => setCaseValue(Number(e.target.value))}
                className="w-full h-2 bg-[#dae2fd] rounded-lg appearance-none cursor-pointer accent-[#0051d5]"
              />
              <div className="flex justify-between text-[11px] text-[#76777e] mt-1">
                <span>$4,000 (Minimally Invasive)</span>
                <span>$20,000 (Complex Spine / Deep-Plane)</span>
                <span>$45,000 (Tertiary Revision)</span>
              </div>
            </div>

            {/* Benchmark notice */}
            <div className="p-3.5 bg-[#f2f3ff] rounded-xl border border-[#e2e7ff] text-xs text-[#45464d] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#0051d5] text-[18px] shrink-0 mt-0.5">
                verified
              </span>
              <span>
                Based on audited 90-day intake velocity and fee restructuring across 180+ verified MedFrame physician platform deployments.
              </span>
            </div>
          </div>

          {/* Results Projection Column */}
          <div className="lg:col-span-6 bg-[#101b35] text-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#7bd0ff] text-[11px] font-bold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3] animate-pulse" />
                Projected Clinical Architecture Impact
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#bcc6e8] block mb-1">
                    Estimated Annual Direct Patient Revenue Expansion
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    +${annualRevenueLift.toLocaleString()}{' '}
                    <span className="text-lg sm:text-xl font-normal text-[#7bd0ff]">/ year</span>
                  </div>
                  <span className="text-xs text-[#bcc6e8] mt-1 block">
                    Derived from +{monthlyLiftCases} incremental high-intent procedure conversions monthly.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#3c4662]">
                  <div className="bg-[#1b2646] p-3.5 rounded-xl border border-[#3c4662]/50">
                    <span className="text-[11px] text-[#bcc6e8] uppercase font-semibold block">
                      Authority Multiplier
                    </span>
                    <span className="text-2xl font-bold text-[#38bdf8] mt-0.5 block">
                      {currentSpecialty.multiplier}x
                    </span>
                    <span className="text-[10px] text-[#dae2fd]">
                      Inquiry-to-retainer conversion
                    </span>
                  </div>

                  <div className="bg-[#1b2646] p-3.5 rounded-xl border border-[#3c4662]/50">
                    <span className="text-[11px] text-[#bcc6e8] uppercase font-semibold block">
                      Peer Referral Multiple
                    </span>
                    <span className="text-2xl font-bold text-[#38bdf8] mt-0.5 block">
                      +{peerReferralLift} Drs
                    </span>
                    <span className="text-[10px] text-[#dae2fd]">
                      Tertiary physician connections
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#bcc6e8]">
                  <span className="material-symbols-outlined text-[#316bf3] text-[18px]">
                    shield
                  </span>
                  <span>100% Medical Board compliance assurance across all 50 states</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() =>
                  onApplyToConsultation({
                    specialty: currentSpecialty.label,
                    monthlyConsults,
                    avgValue: caseValue,
                    projectedLift: annualRevenueLift,
                  })
                }
                className="w-full py-4 bg-[#0051d5] hover:bg-[#316bf3] text-white font-semibold rounded-xl text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>Include This Projection in My Free Strategy Audit</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
