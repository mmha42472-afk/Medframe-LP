import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolios: () => void;
  onOpenVideo: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExplorePortfolios,
  onOpenVideo,
  onOpenBooking,
}) => {
  const { content, setIsDashboardOpen, setActiveDashboardTab } = useSiteContent();
  const hero = content.hero;
  const doc = hero.featuredDoctor;

  return (
    <section className="relative overflow-hidden pt-6 pb-20 md:pb-28 group/hero" id="home">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Floating Section Edit Badge */}
        <button
          onClick={() => {
            setActiveDashboardTab('hero');
            setIsDashboardOpen(true);
          }}
          className="absolute right-6 top-0 hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#eaedff] text-[#0051d5] border border-[#e2e7ff] rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer opacity-70 group-hover/hero:opacity-100 z-10"
          title="Edit Hero & Doctor Card"
        >
          <span className="material-symbols-outlined text-[15px]">edit</span>
          <span>Edit Hero Section</span>
        </button>

        {/* Top Pill Eyebrow */}
        <div className="flex justify-start mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#eaedff] text-[#0051d5] text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0051d5] animate-ping" />
            <span>{hero.topPillText}</span>
          </span>
        </div>

        {/* Hero Grid: Typography + Architectural Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h1 className="font-headline-xl text-headline-xl text-[#131b2e] tracking-tight max-w-2xl font-bold">
              {hero.headlinePrefix}
              <span className="text-[#0051d5] inline-block">{hero.headlineHighlight}</span>
              {hero.headlineSuffix}
            </h1>

            <p className="font-body-lg text-body-lg text-[#45464d] max-w-xl leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Dual CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-[#0051d5] hover:bg-[#316bf3] text-white px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>{hero.primaryCtaText}</span>
              </button>

              <button
                onClick={onExplorePortfolios}
                className="inline-flex items-center justify-center gap-2 bg-[#eaedff] hover:bg-[#e2e7ff] text-[#131b2e] px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#0051d5]">visibility</span>
                <span>{hero.secondaryCtaText}</span>
              </button>
            </div>

            {/* Social Proof Guarantee Chips */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-[#45464d] text-sm">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[#0051d5] text-[18px]">verified</span>
                {hero.guarantee1Text}
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[#0051d5] text-[18px]">schedule</span>
                {hero.guarantee2Text}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase (Dr. Julian Vance) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Glow Circle */}
            <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#0051d5]/10 blur-3xl pointer-events-none" />

            {/* Physician Authority Mockup Card */}
            <div className="relative bg-white rounded-xl shadow-2xl border border-[#e2e7ff] overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
              {/* Simulated Browser/Card Top Bar */}
              <div className="bg-[#101b35] px-4 py-2.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dae2fd]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#316bf3]" />
                  <span className="ml-2 text-xs font-mono text-[#bcc6e8]">{doc.domain}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-[#e2e7ff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#316bf3] animate-pulse" /> {doc.liveBadgeText}
                </span>
              </div>

              {/* Profile Overview Block */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-md border border-[#e2e7ff]">
                    <img
                      className="w-full h-full object-cover"
                      alt={doc.doctorName}
                      src={doc.doctorImage}
                    />
                    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#0051d5] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[10px]">check</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="inline-flex items-center gap-1 text-[#0051d5] text-[11px] font-bold tracking-wider uppercase mb-0.5">
                      {doc.boardBadgeText}
                    </div>
                    <h3 className="text-xl font-bold text-[#131b2e] leading-tight">
                      {doc.doctorName}
                    </h3>
                    <p className="text-xs text-[#45464d] mt-0.5">
                      {doc.doctorTitle}
                    </p>
                  </div>
                </div>

                {/* Authority Proof Points Strip */}
                <div className="grid grid-cols-3 gap-2 bg-[#f2f3ff] rounded-lg p-3 text-center border border-[#e2e7ff]">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#131b2e]">{doc.proceduresCount}</span>
                    <span className="text-[11px] text-[#45464d]">Procedures</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#0051d5]">{doc.reviewsRating}</span>
                    <span className="text-[11px] text-[#45464d]">{doc.reviewsCount}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#131b2e]">{doc.trainingInstitution}</span>
                    <span className="text-[11px] text-[#45464d]">Trained</span>
                  </div>
                </div>

                {/* Video Authority Clip Teaser */}
                <div
                  onClick={onOpenVideo}
                  role="button"
                  tabIndex={0}
                  className="relative rounded-lg overflow-hidden bg-[#101b35] h-32 flex items-end p-3 shadow-inner cursor-pointer group"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 transition-opacity"
                    alt={doc.videoTitle}
                    src={doc.videoThumbnail}
                  />
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0051d5] group-hover:bg-[#316bf3] flex items-center justify-center shadow transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-white text-[16px]">play_arrow</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">{doc.videoTitle}</span>
                        <span className="text-[11px] text-[#bcc6e8] leading-none">
                          {doc.videoSubtitle} ({doc.videoDuration})
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-white/20 backdrop-blur px-2 py-0.5 rounded text-white">
                      HD 4K
                    </span>
                  </div>
                </div>

                {/* Patient Booking Integration Banner */}
                <div className="flex items-center justify-between bg-[#eaedff] p-3 rounded-lg border border-[#dae2fd]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0051d5] text-[20px]">
                      event_available
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold text-[#131b2e]">
                        {doc.bookingHeadline}
                      </span>
                      <span className="text-[11px] text-[#45464d]">
                        {doc.bookingAvailability}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0051d5] hover:bg-[#316bf3] text-white text-xs font-semibold px-3 py-1.5 rounded transition-all cursor-pointer shadow-sm"
                  >
                    {doc.bookingButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
