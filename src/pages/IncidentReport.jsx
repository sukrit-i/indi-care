import React, { useState } from 'react';
import { 
  AlertTriangle, 
  MapPin, 
  Camera, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldAlert,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function IncidentReport() {
  const [incidentType, setIncidentType] = useState('bite');
  const [locationText, setLocationText] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleGetLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocationText('Sector 15, Vashi, Navi Mumbai (19.0771° N, 72.9986° E)');
      setIsLocating(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `INC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newId);
    setSubmitted(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <span>24/7 Citizen &amp; Municipal Grievance Desk</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Report Stray Dog Incident or Trauma
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          Direct dispatch to municipal animal birth control vans, emergency rescue squads, and certified community feeders.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center space-y-5 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900">Incident Ticket Dispatched</h2>
            <p className="text-xs font-mono font-bold text-brand-600">Ticket Reference: {ticketId}</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Your report has been logged into the municipal command center. The nearest verified rescue volunteer squad and animal ambulance have been notified.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 text-left">
            <p><strong>Estimated Response SLA:</strong> Under 45 Minutes</p>
            <p><strong>Tracking SMS:</strong> Sent to your registered mobile number</p>
            <p><strong>Emergency Contact:</strong> +91 9004843851</p>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Submit Another Report
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Category Selector */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                1. Select Incident Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: 'bite', label: 'Dog Bite / Aggressive Pack', priority: 'High Priority', color: 'red' },
                  { id: 'injured', label: 'Injured / Sick Dog', priority: 'Ambulance Dispatch', color: 'amber' },
                  { id: 'vaccination', label: 'Rabies Vaccination Drive', priority: 'Municipal Routine', color: 'emerald' },
                  { id: 'feeding', label: 'Feeding Spot Dispute', priority: 'Mediation', color: 'blue' },
                  { id: 'puppies', label: 'Abandoned Litter of Pups', priority: 'Foster Care', color: 'purple' },
                  { id: 'relocation', label: 'Illegal Dog Relocation', priority: 'Legal Violation', color: 'rose' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIncidentType(item.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      incidentType === item.id
                        ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">{item.label}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 block">
                      {item.priority}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location & GPS */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                2. Exact Incident Location
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Pinpoint GPS location helps rescue squads reach immediately.</p>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. Near HDFC Bank ATM, Sector 15, Kharghar..."
                  value={locationText}
                  onChange={(e) => setLocationText(e.target.value)}
                  className="flex-1 text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"
                />
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={isLocating}
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  <span>{isLocating ? 'Locating...' : 'Auto GPS'}</span>
                </button>
              </div>
            </div>

            {/* Description & Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  3. Incident Description
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe what happened: condition of dog, visible injuries, pack behavior, or ear notch status..."
                  className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"
                ></textarea>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  4. Attach Photo (Optional for AI Match)
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-brand-400 cursor-pointer transition-colors bg-slate-50/50 flex flex-col items-center justify-center h-[116px]">
                  <Camera className="w-6 h-6 text-slate-400 mb-1" />
                  <span className="text-xs font-semibold text-slate-700">Click to upload photo</span>
                  <span className="text-[10px] text-slate-400">AI will automatically check if the dog is already registered</span>
                </div>
              </div>
            </div>

            {/* Reporter details */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                <input required type="text" placeholder="e.g. Ramesh Iyer" className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (For updates)</label>
                <input required type="tel" placeholder="+91 98200 12345" className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Response teams active 24/7 across Navi Mumbai &amp; MMR
              </span>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-brand-600 hover:from-red-700 hover:to-brand-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Emergency Ticket</span>
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
