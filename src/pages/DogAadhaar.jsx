import React, { useState } from 'react';
import { 
  Scan, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  MapPin, 
  QrCode, 
  Camera, 
  Activity, 
  FileCheck, 
  Download,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SAMPLE_DOGS } from '../data/mockData';

export default function DogAadhaar({ onOpenScanner }) {
  const [selectedDog, setSelectedDog] = useState(SAMPLE_DOGS[0]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F3] border border-[#D0EBE5] text-[#104C4B] text-xs sm:text-sm font-bold">
          <Sparkles className="w-4 h-4 text-[#289E92]" />
          <span>Proprietary Canine Computer Vision</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Dog Aadhaar: The First Digital Identity for India's Street Dogs
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          Just like Aadhaar unified identification for over 1.4 billion humans, IndieCare AI provides each free-roaming dog a tamper-proof biometric digital ID based on natural facial landmarks.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={onOpenScanner}
            className="px-6 py-3 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#289E92]/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Scan className="w-4 h-4" />
            <span>Launch Live Face Scanner</span>
          </button>
        </div>
      </div>

      {/* Interactive Biometric Demonstration */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Scanner HUD (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-slate-800 shadow-inner">
              <img 
                src={selectedDog.image} 
                alt={selectedDog.name} 
                className="w-full h-full object-cover"
              />

              {/* Computer Vision Matrix Overlay */}
              <div className="absolute inset-0 bg-brand-950/20 pointer-events-none"></div>

              {/* Bounding Box & Landmarks */}
              <div className="absolute top-[20%] left-[25%] w-[50%] h-[55%] border-2 border-brand-400 rounded-xl pointer-events-none">
                <span className="absolute -top-7 left-0 bg-brand-500 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                  CANINE_ID: {selectedDog.id}
                </span>

                {/* Keypoint Circles */}
                <div className="absolute top-[30%] left-[28%] w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] animate-ping"></div>
                <div className="absolute top-[30%] right-[28%] w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]"></div>
                <div className="absolute bottom-[30%] left-[50%] -translate-x-1/2 w-3 h-3 bg-brand-400 rounded-full shadow-[0_0_10px_#f97316]"></div>
              </div>

              {/* Scanline */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-scan pointer-events-none"></div>

              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur px-3 py-2 rounded-xl text-xs flex justify-between items-center border border-slate-700">
                <span className="text-emerald-400 font-mono font-semibold">● 128 Biometric Vectors Extracted</span>
                <span className="text-slate-400 font-mono">Match: 98.6%</span>
              </div>
            </div>

            {/* Switch dog sample */}
            <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 font-bold uppercase">Select sample:</span>
              <div className="flex gap-2">
                {SAMPLE_DOGS.map((dog) => (
                  <button
                    key={dog.id}
                    onClick={() => setSelectedDog(dog)}
                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${
                      selectedDog.id === dog.id
                        ? 'bg-brand-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {dog.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Aadhaar Digital Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-6 rounded-3xl border border-slate-700 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-black">
                    ID
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-wider text-white">
                      Official Canine Aadhaar Card
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">IndieCare AI National Stray Registry</p>
                  </div>
                </div>
                <QrCode className="w-10 h-10 text-slate-300" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Dog Name</span>
                  <p className="text-lg font-black text-white">{selectedDog.name}</p>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Aadhaar Unique ID</span>
                  <p className="text-sm font-mono font-bold text-brand-400">{selectedDog.id}</p>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Breed &amp; Age</span>
                  <p className="text-sm font-semibold text-slate-200">{selectedDog.breed} ({selectedDog.age})</p>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">NFC / RFID Tag</span>
                  <p className="text-sm font-mono text-slate-200">{selectedDog.nfcTagId}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Vaccination Verification</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Up-to-Date
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-medium">{selectedDog.vaccinationStatus}</p>
                <p className="text-[11px] text-slate-400">Next Booster: <span className="text-slate-300 font-semibold">{selectedDog.nextDue}</span></p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Geotagged Home Territory: <strong>{selectedDog.location}</strong></span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => alert(`Downloaded Dog Aadhaar Pass for ${selectedDog.name}`)}
                  className="flex-1 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 flex items-center justify-center gap-2 shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Aadhaar Pass</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Why Biometric Face Recognition Beats Outdated Methods */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172E2D]">
            Why Canine Biometrics Outperforms Microchips &amp; Ear Tags
          </h2>
          <p className="text-[#617472] text-xs sm:text-sm">
            Comparison of traditional identification techniques versus IndieCare’s zero-contact AI biometrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">
              ✕
            </div>
            <h3 className="font-bold text-base text-slate-900">Subcutaneous Microchips</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Require capturing the dog, invasive syringe insertion, and specialized wand scanners within 2 inches. Often migrate under muscle tissue and get lost.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
              ✕
            </div>
            <h3 className="font-bold text-base text-slate-900">Ear Tags &amp; Collars</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prone to tearing off in dog fights, causing painful ear infections or snagging on fences. Plastic collars strangle growing puppies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-emerald-300 shadow-md space-y-3 ring-2 ring-emerald-500/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <h3 className="font-bold text-base text-slate-900">IndieCare AI Biometrics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% non-invasive, zero-contact from 3 meters away. Analyzes immutable muzzle wrinkle patterns and ear contour geometry that stay unique for life.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
