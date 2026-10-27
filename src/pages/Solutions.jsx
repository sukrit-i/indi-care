import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Scan, 
  Activity, 
  Building2, 
  AlertCircle, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/mockData';

export default function Solutions({ onOpenScanner }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);

  const activeServiceData = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F3] border border-[#D0EBE5] text-[#104C4B] text-xs sm:text-sm font-bold">
          <ShieldCheck className="w-4 h-4 text-[#289E92]" />
          <span>Full-Spectrum Humane Dog Management</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Enterprise &amp; Civic Solutions
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          Integrated hardware, mobile applications, veterinary management dashboards, and community engagement protocols engineered for Indian cities and campuses.
        </p>
      </div>

      {/* Interactive Solution Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Menu / Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          {SERVICES.map((s) => {
            const isSelected = s.id === selectedService;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {s.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm">{s.title}</h4>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 ml-2 ${isSelected ? 'text-brand-400' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Active Solution Deep Dive (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-100">
            <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest">
              {activeServiceData.badge} • Specification
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              {activeServiceData.stats}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {activeServiceData.title}
            </h2>
            <p className="text-sm font-semibold text-brand-600 mt-1">
              {activeServiceData.subtitle}
            </p>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {activeServiceData.description}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Technical Deliverables &amp; Outcomes:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeServiceData.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              Request Implementation Proposal
            </Link>
            {activeServiceData.id === 'aadhaar' && (
              <button
                onClick={onOpenScanner}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Scan className="w-4 h-4 text-brand-400" />
                <span>Test Live Biometric Demo</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Structured Feeding & Dog Behavior Training Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-brand-400 font-bold text-xs uppercase tracking-widest">
            On-Ground Methodology
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Behavior Training &amp; Structured Feeding Drives
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Aggression in free-roaming dogs is primarily caused by hunger, territorial boundary disputes, and human panic. IndieCare's behavioral conditioning turns feral packs into peaceful campus guardians.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
            <span className="text-brand-400 font-mono text-xs font-bold">Module 01</span>
            <h4 className="font-bold text-white text-base">Recall Training</h4>
            <p className="text-xs text-slate-300">
              Conditioning dogs to respond to specific verbal whistles or cues for smooth veterinary intake and census without net-traps.
            </p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
            <span className="text-brand-400 font-mono text-xs font-bold">Module 02</span>
            <h4 className="font-bold text-white text-base">Basic Obedience</h4>
            <p className="text-xs text-slate-300">
              Sit, stay, and human-greeting etiquette to eliminate chasing bikes, barking at security guards, or approaching delivery staff aggressively.
            </p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
            <span className="text-brand-400 font-mono text-xs font-bold">Module 03</span>
            <h4 className="font-bold text-white text-base">Designated Feeding Spots</h4>
            <p className="text-xs text-slate-300">
              Mapping hygienic, isolated feeding stations away from pedestrian walkways to prevent food guarding and territorial aggression.
            </p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
            <span className="text-brand-400 font-mono text-xs font-bold">Module 04</span>
            <h4 className="font-bold text-white text-base">Leash &amp; Mat Habituation</h4>
            <p className="text-xs text-slate-300">
              Preparing rescued Indies for rapid transition into foster homes and adoptive families through calm leash association.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
