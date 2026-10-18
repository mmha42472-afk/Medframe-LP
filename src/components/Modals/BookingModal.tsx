import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  doctorName = 'Dr. Julian Vance, MD, FACS',
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('Thursday, 2:30 PM');
  const [selectedType, setSelectedType] = useState<string>('Surgical Second Opinion');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const availableSlots = [
    { day: 'This Thursday', time: '2:30 PM', label: 'Priority Tele-Consult' },
    { day: 'This Friday', time: '11:00 AM', label: 'In-Suite Clinical Intake' },
    { day: 'Next Tuesday', time: '9:15 AM', label: 'Robotic Evaluation' },
    { day: 'Next Thursday', time: '3:45 PM', label: 'Imaging Review & PACS' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#00174b]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 border border-[#e2e7ff]">
        {/* Header */}
        <div className="bg-[#101b35] text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7bd0ff] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#316bf3] animate-pulse" />
            Verified Direct Scheduling Integration
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            Priority Consultation Booking
          </h3>
          <p className="text-xs text-[#bcc6e8] mt-1">
            Practicing with {doctorName}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#f2f3ff] text-[#0051d5] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-xl font-bold text-[#131b2e]">
              Priority Slot Reserved
            </h4>
            <p className="text-sm text-[#45464d] leading-relaxed">
              Your appointment request for{' '}
              <strong className="text-[#0051d5]">{selectedSlot}</strong> has been transmitted
              directly to {doctorName}'s surgical coordinator under confidential HIPAA encryption.
            </p>
            <div className="bg-[#faf8ff] p-4 rounded-xl border border-[#eaedff] text-xs text-[#45464d] text-left space-y-1">
              <div><strong>Patient:</strong> {patientName || 'Clinical Candidate'}</div>
              <div><strong>Type:</strong> {selectedType}</div>
              <div><strong>Status:</strong> Coordinator Review & Telehealth Link Dispatch</div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#0051d5] hover:bg-[#316bf3] text-white font-semibold rounded-lg text-sm shadow-md transition-all"
            >
              Done & Return to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Procedure Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1.5">
                Consultation Nature
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
              >
                <option value="Surgical Second Opinion">Surgical Second Opinion (PACS Review)</option>
                <option value="Minimally Invasive Disc Arthroplasty">Minimally Invasive Disc Arthroplasty</option>
                <option value="Robotic Spine Consultation">Robotic Spine Motion Preservation</option>
                <option value="Executive Lumbar Screening">Executive Lumbar Spine Screening</option>
              </select>
            </div>

            {/* Select Slot */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1.5">
                Select Priority Time Slot
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot, idx) => {
                  const val = `${slot.day}, ${slot.time}`;
                  const isSelected = selectedSlot === val;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSlot(val)}
                      className={`p-2.5 rounded-lg text-left text-xs transition-all border ${
                        isSelected
                          ? 'border-[#0051d5] bg-[#eaedff] text-[#0051d5] font-bold shadow-sm'
                          : 'border-[#e2e7ff] bg-[#faf8ff] text-[#45464d] hover:bg-[#f2f3ff]'
                      }`}
                    >
                      <div className="font-semibold text-[#131b2e]">{slot.day}</div>
                      <div className="text-[11px] text-[#0051d5]">{slot.time}</div>
                      <div className="text-[10px] text-[#76777e] truncate">{slot.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Patient Credentials */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                  Candidate Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Sterling"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="direct@email.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f2f3ff] rounded-lg text-sm text-[#131b2e] border border-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#0051d5] hover:bg-[#316bf3] text-white font-semibold rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Priority Reservation</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#76777e] mt-2">
                <span className="material-symbols-outlined text-[#0051d5] text-[14px]">lock</span>
                <span>Encrypted EHR scheduling pipeline (HIPAA & AMA Compliant)</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
