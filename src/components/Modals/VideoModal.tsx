import React, { useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(42);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#00174b]/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#101b35] text-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden z-10 border border-[#3c4662]">
        {/* Video Player Header */}
        <div className="px-6 py-4 bg-[#0a1020] border-b border-[#3c4662]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#dae2ff]">
                Dr. Julian Vance, MD, FACS • Surgical Theater Capture
              </span>
              <span className="text-sm font-semibold text-white">
                Endoscopic Disc Arthroplasty & Robotic Motion Preservation (2:14)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
          {/* Background image preview */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlvLivNPU333FFtKVUldoU5jCc43lF2lk2iBj809p_HBlaVtJof0k4YFOP_iOoWV8KEq74McPhk3LuvTKnUsw7feeJ-5Qiv_54s2RVqJkBTk_GCfhuaQX38LxAta_ULnTAHTrjhczpJqt6qcxfUNGau1FXuDpq2UH99mkrJ6rVQo_X9xXd2LzDHCy4IjyBG7MCPvGyvHNoHBcfRAwJAEmSnrtTTy3qA8arE4NIUstskLXgcZGXQGHuaw"
            alt="Surgical robotics briefing"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Clinical Telemetry Overlay / HUD */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono text-xs space-y-0.5">
              <div className="text-[#38bdf8] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                <span>ROBOTIC ARM 3-AXIS NAV: LOCKED</span>
              </div>
              <div className="text-white/80">INSPECTION LEVEL: L4-L5 DISK HEIGHT</div>
              <div className="text-[#7bd0ff]">FLUOROSCOPY CADENCE: 0.12 mSv LOW-DOSE</div>
            </div>

            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-right">
              <span className="text-[10px] uppercase font-bold text-[#b4c5ff] tracking-wider block">
                HD 4K CLINICAL ARCHIVE
              </span>
              <span className="text-xs font-mono text-white">RECALL CODE: JV-ED-2025</span>
            </div>
          </div>

          {/* Center Play Button Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-[#0051d5]/90 hover:bg-[#316bf3] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105"
            aria-label={isPlaying ? 'Pause briefing' : 'Play briefing'}
          >
            <span className="material-symbols-outlined text-[36px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Bottom Scrub Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col gap-2">
            {/* Progress bar */}
            <div
              className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setCurrentProgress(Math.round((clickX / rect.width) * 100));
              }}
            >
              <div
                className="bg-[#316bf3] h-full relative"
                style={{ width: `${currentProgress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#dae2ff]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white flex items-center"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span>00:58 / 02:14</span>
                <span className="text-[#38bdf8] hidden sm:inline">• Chapter: Cannula Insertion & Decompression</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white">
                  volume_up
                </span>
                <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white">
                  fullscreen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Notes & Doctor Bio */}
        <div className="p-6 bg-[#101b35] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQi1Gvqfl_8pBdddmf9nvzRIsJJZ6POAPdkTXCN6H_z6wnxc8oy4d4BSuY0bOfp-XapEqv7gygbl_Zr592TbHbv_IvDYuClprJokEebLPikoJL6ScmcOuMOm_PkNciCtUldK5MwWZWPoFjWviB8hInzVwL1frg84KyWayrJV645tUcWG0Bi5rrKbblPIRSilGtiKkWVj5p__Ztt37n8tRBKdRuKhwz9jC_Iqfb0RNKwiGI7TBfxeig_Q"
              alt="Dr. Julian Vance"
              className="w-12 h-12 rounded-xl object-cover border border-[#3c4662]"
            />
            <div>
              <h4 className="text-sm font-bold text-white">Dr. Julian Vance, MD, FACS</h4>
              <p className="text-xs text-[#bcc6e8]">
                Mayo Clinic & Johns Hopkins Fellow • 3,200+ Spinal Arthroplasties
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-[#3c4662] text-xs font-semibold text-[#dae2ff] hover:bg-white/5 transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#0051d5] hover:bg-[#316bf3] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>Book Surgical Priority Intake</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
