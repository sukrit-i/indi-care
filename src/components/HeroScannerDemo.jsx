import React, { useState } from 'react';
import { 
  Scan, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Activity, 
  Sparkles, 
  QrCode,
  ChevronRight,
  Eye
} from 'lucide-react';
import { SAMPLE_DOGS } from '../data/mockData';

export default function HeroScannerDemo({ onOpenFullScanner }) {
  const [activeDogIndex, setActiveDogIndex] = useState(0);
  const dog = SAMPLE_DOGS[activeDogIndex];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      
      {/* Background ambient decorative glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Glass Card */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-5 text-white overflow-hidden">
        
        {/* Top Header of Simulated Interface */}
        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase">
              AI Biometric Feed • Camera 01
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono bg-slate-800/80 px-2 py-0.5 rounded text-brand-400 border border-slate-700">
            <span>RES: 1080P</span>
            <span>•</span>
            <span>CONF: 99.2%</span>
          </div>
        </div>

        {/* Viewport Frame with Simulated HUD */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-slate-800">
          <img 
            src={dog.image} 
            alt={dog.name} 
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Biometric Scan Bounding Box */}
          <div className="absolute top-[22%] left-[24%] w-[52%] h-[56%] border-2 border-brand-400/90 bg-brand-500/10 rounded-xl pointer-events-none transition-all duration-300">
            
            {/* Corner Crosshairs */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white"></div>

            {/* Simulated Keypoint Trackers */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping"></div>
            <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></div>
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-400 shadow-[0_0_8px_#fb923c]"></div>

            {/* Floating Tag */}
            <div className="absolute -top-6 left-0 bg-slate-950/90 text-brand-300 text-[10px] font-mono px-2 py-0.5 rounded border border-brand-500/40 flex items-center gap-1 shadow">
              <Scan className="w-2.5 h-2.5" />
              <span>{dog.id}</span>
            </div>
          </div>

          {/* Moving Scan Line Animation */}
          <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_12px_#ea580c] animate-scanline pointer-events-none"></div>

          {/* Quick Info Overlay at Bottom */}
          <div className="absolute bottom-2 inset-x-2 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-extrabold text-white">{dog.name}</h4>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-1.5 py-0.2 rounded border border-emerald-500/30">
                  Rabies Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-brand-400" />
                {dog.location}
              </p>
            </div>

            <button
              onClick={onOpenFullScanner}
              type="button"
              className="px-2.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-md shadow-brand-500/30"
            >
              <span>View Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Dog Switcher & Mini Info */}
        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium">Switch sample:</span>
            {SAMPLE_DOGS.slice(0, 3).map((d, index) => (
              <button
                key={d.id}
                onClick={() => setActiveDogIndex(index)}
                className={`text-[11px] font-semibold px-2 py-0.5 rounded transition-colors ${
                  activeDogIndex === index
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span>Sterilized: {dog.sterilized ? 'Yes (Ear-Notched)' : 'Scheduled'}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
