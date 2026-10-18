import React, { useState, useEffect } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

interface ConsultationFormProps {
  initialDetails?: {
    specialty?: string;
    monthlyConsults?: number;
    avgValue?: number;
    projectedLift?: number;
  } | null;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialDetails }) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const formContent = content.consultation;

  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dossierDownloaded, setDossierDownloaded] = useState(false);

  useEffect(() => {
    if (initialDetails?.specialty) {
      if (initialDetails.specialty.includes('Orthopedic') || initialDetails.specialty.includes('Spine')) {
        setSpecialty('ortho');
      } else if (initialDetails.specialty.includes('Plastic') || initialDetails.specialty.includes('Aesthetic')) {
        setSpecialty('plastics');
      } else if (initialDetails.specialty.includes('Neurosurgery')) {
        setSpecialty('neuro');
      } else if (initialDetails.specialty.includes('Longevity')) {
        setSpecialty('longevity');
      } else if (initialDetails.specialty.includes('Dermatology')) {
        setSpecialty('derm');
      }
    }
  }, [initialDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadSampleDossier = () => {
    setDossierDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `MEDFRAME STUDIO — CLINICAL AUTHORITY & BRAND ARCHITECTURE DOSSIER\n` +
      `CONFIDENTIAL PHYSICIAN STRATEGY BRIEFING\n\n` +
      `Specialty: ${specialty || 'Surgical & Clinical Sub-Specialty'}\n` +
      `Doctor Name: ${name || 'Prospective Fellow / Medical Director'}\n` +
      `Practice: ${practiceName || 'Private Surgical Suite'}\n` +
      `Compliance Standard: HIPAA Safe Harbor & AMA Medical Board Advertising Adherence\n\n` +
      `Core Architectural Tenets:\n` +
      `1. Deep-Plane & Sub-Procedure Search Indexation\n` +
      `2. Editorial Clinical Photography Art Direction\n` +
      `3. Encrypted Consultation Intake Pipeline & PACS Integration\n` +
      `4. Tertiary Peer-to-Peer Referral Network Engine\n\n` +
      `Executive Advisory Hotline: ${content.footer.directEmail} | ${content.footer.phone}\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'MedFrame_Physician_Authority_Blueprint.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-20 md:py-28 bg-[#f2f3ff] relative group/consult" id="contact-audit">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Edit Section Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('consultation');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 -top-4 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/consult:opacity-100 z-20"
          title="Edit Consultation Form"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Form Section</span>
        </button>

        <div className="bg-[#101b35] text-white rounded-2xl p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden border border-[#3c4662]/50">
          {/* Decorative subtle radial glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#316bf3]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Authority Assurances */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#bcc6e8] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-[#316bf3] animate-pulse" />
                {formContent.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {formContent.title}
              </h2>

              <p className="text-sm sm:text-base text-[#bcc6e8] leading-relaxed">
                {formContent.description}
              </p>

              {initialDetails?.projectedLift && (
                <div className="bg-white/10 p-4 rounded-xl border border-white/15 my-1">
                  <div className="text-xs text-[#7bd0ff] font-semibold uppercase">
                    Custom ROI Projection Attached
                  </div>
                  <div className="text-lg font-bold text-white">
                    Estimated +${initialDetails.projectedLift.toLocaleString()}/yr practice revenue expansion
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2.5 pt-2 text-[#bcc6e8] text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#316bf3] text-[18px]">
                    verified
                  </span>
                  <span>{formContent.guarantee1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#316bf3] text-[18px]">
                    block
                  </span>
                  <span>{formContent.guarantee2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#316bf3] text-[18px]">
                    lock
                  </span>
                  <span>{formContent.guarantee3}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-6 bg-white text-[#131b2e] rounded-xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#e2e7ff]">
              {submitted ? (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#eaedff] text-[#0051d5] flex items-center justify-center mx-auto shadow-sm">
                    <span className="material-symbols-outlined text-[36px]">verified</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#131b2e]">
                      Confidential Request Received
                    </h3>
                    <p className="text-sm text-[#45464d] mt-2 leading-relaxed">
                      Thank you, <strong className="text-[#131b2e]">{name || 'Doctor'}</strong>. {formContent.successMessage}
                    </p>
                  </div>

                  <div className="bg-[#faf8ff] p-4 rounded-xl border border-[#eaedff] text-left text-xs space-y-1.5 text-[#45464d]">
                    <div>
                      <strong className="text-[#131b2e]">Direct Confirmation To:</strong> {email}
                    </div>
                    <div>
                      <strong className="text-[#131b2e]">Specialty Focus:</strong> {specialty ? specialty.toUpperCase() : 'General Surgical / Specialty'}
                    </div>
                    <div>
                      <strong className="text-[#131b2e]">Mutual NDA:</strong> Executed & Transmitted
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={handleDownloadSampleDossier}
                      className="w-full py-3 bg-[#eaedff] hover:bg-[#e2e7ff] text-[#0051d5] font-semibold rounded-lg text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>
                        {dossierDownloaded ? 'Dossier Downloaded ✓' : 'Download Sample Blueprint Dossier (.txt)'}
                      </span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#76777e] hover:text-[#131b2e] underline mt-1"
                    >
                      Submit another specialty inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="doctor-name">
                      Doctor Full Name & Title
                    </label>
                    <input
                      id="doctor-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Catherine Reynolds, MD"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="specialty">
                        Medical Specialty
                      </label>
                      <select
                        id="specialty"
                        required
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                      >
                        <option value="" disabled>Select Specialty</option>
                        <option value="ortho">Orthopedic & Spine Surgery</option>
                        <option value="plastics">Plastic & Reconstructive Surgery</option>
                        <option value="neuro">Neurosurgery</option>
                        <option value="cardio">Cardiology & Cardiothoracic</option>
                        <option value="derm">Dermatology & Mohs Surgery</option>
                        <option value="longevity">Longevity & Executive Medicine</option>
                        <option value="other">Other Clinical Sub-Specialty</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="practice-name">
                        Practice / Hospital
                      </label>
                      <input
                        id="practice-name"
                        type="text"
                        placeholder="e.g. Metro Spine Institute"
                        value={practiceName}
                        onChange={(e) => setPracticeName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="direct@practice.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="phone">
                        Direct Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider" htmlFor="website-current">
                      Current Website / Profile (Optional)
                    </label>
                    <input
                      id="website-current"
                      type="url"
                      placeholder="https://yourpractice.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-4 bg-[#0051d5] hover:bg-[#316bf3] text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{formContent.submitButtonText}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <div className="text-center text-[#76777e] text-[11px] pt-1">
                    Protected by strict mutual non-disclosure and HIPAA compliance protocols.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
