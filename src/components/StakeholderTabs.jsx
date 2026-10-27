import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Building2, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  FileCheck2,
  Stethoscope
} from 'lucide-react';
import { STAKEHOLDERS } from '../data/mockData';

export default function StakeholderTabs() {
  const [activeTab, setActiveTab] = useState(STAKEHOLDERS[0].id);

  const getIcon = (id) => {
    switch (id) {
      case 'municipalities': return Building;
      case 'corporates': return Building2;
      case 'ngos': return HeartHandshake;
      case 'caregivers': return Users;
      default: return Building;
    }
  };

  const currentStakeholder = STAKEHOLDERS.find(s => s.id === activeTab) || STAKEHOLDERS[0];

  return (
    <div className="w-full">
      {/* Tab navigation pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl max-w-3xl mx-auto border border-slate-200">
        {STAKEHOLDERS.map((s) => {
          const Icon = getIcon(s.id);
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-200 border border-slate-200/80 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-brand-500' : 'text-slate-400'}`} />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Card */}
      <div className="mt-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Tailored Ecosystem Solution</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentStakeholder.tagline}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentStakeholder.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentStakeholder.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <span>{currentStakeholder.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                Learn more about workflows &rarr;
              </Link>
            </div>
          </div>

          {/* Right Proof Card / Case Highlight (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>

            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-bold">
                  Real-World Deployment
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  Verified Result
                </span>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 font-medium italic leading-relaxed">
                "{currentStakeholder.caseStudy}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-brand-400" />
                  SMILE &amp; Municipal Validated
                </span>
                <span className="font-semibold text-white">100% Traceable</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
