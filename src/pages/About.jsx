import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  PawPrint
} from 'lucide-react';
import { TRUSTED_PARTNERS } from '../data/mockData';

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F3] border border-[#D0EBE5] text-[#104C4B] text-xs sm:text-sm font-bold">
          <PawPrint className="w-4 h-4 text-[#289E92]" />
          <span>Our Mission &amp; Genesis</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Transforming Humane Coexistence Through Technology
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          IndieCare AI was founded in Mumbai with a singular conviction: street animals cannot advocate for themselves, but science and computer vision can give every street dog a voice and a verified identity.
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172E2D] tracking-tight">
            The Problem: India's Stray Dog Crisis &amp; Broken Paper Records
          </h2>
          <p>
            Across India's urban landscape, over 35 million free-roaming dogs live alongside citizens. For decades, municipal corporations and animal shelters operated on manual paper registers, unscientific estimates, and reactive crisis firefighting.
          </p>
          <p>
            The result? Sterilized dogs were caught repeatedly, rabies vaccination gaps caused public health alarms, and street dogs were subjected to illegal territorial dumping—causing human dog-bite incidents.
          </p>
          <p className="font-semibold text-slate-900 border-l-4 border-brand-500 pl-4 py-1 italic bg-brand-50/50 rounded-r-lg">
            "We asked a simple question: If every Indian citizen can have an Aadhaar digital ID, why can't every neighborhood indie dog have a tamper-proof digital profile?"
          </p>
          <p>
            Founded by <strong>Manohar Bidaye</strong> and <strong>Madhura Bidaye</strong> in 2024, IndieCare AI developed proprietary canine facial biometrics that can identify individual stray dogs from simple phone cameras, linking them immediately to verified health records.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10 rounded-3xl text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="font-black text-xl text-white">Incubated at SMILE Council</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            IndieCare AI was selected and incubated under the <strong>Society for Mumbai Incubation Lab to Entrepreneurship Council (SMILE)</strong>, validating our AI biometric algorithms and municipal workflow architecture.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span>Panvel Municipal Corporation: First city-wide AI dog enumeration pilot</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span>BPCL Industrial Premises: Zero-incident campus coexistence model</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span>Full compliance with Animal Birth Control (ABC) Rules 2023</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            Administrative HQ: SMILE Council, 1st Floor, Kanakia Atrium-I, Andheri East, Mumbai
          </div>
        </div>
      </div>

      {/* Leadership & Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Our Core Pillars
          </h2>
          <p className="text-slate-600 text-sm">
            Guiding principles that steer our technology and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Zero Guesswork</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every vaccination, surgical sterilization, and dog sighting is logged with sub-meter GPS and photo verification to ensure complete municipal transparency.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Compassion at Scale</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Humane population management doesn't mean culling or cruel relocations. We believe that structured sterilization and community care create safe, rabies-free cities.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Community Empowerment</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We bridge municipal authorities with grassroots animal caregivers and feeders, replacing friction and hostility with mutual accountability.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
