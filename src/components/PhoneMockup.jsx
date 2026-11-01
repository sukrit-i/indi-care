import React from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  QrCode, 
  Navigation,
  Calendar,
  Check
} from 'lucide-react';

// Realistic smartphone bezel container
export function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-[230px] sm:w-[240px] h-[460px] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-4 border-slate-700/80 ring-1 ring-black/20 flex flex-col justify-between overflow-hidden group">
      
      {/* Subtle Glass Gleam Sweep */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-hidden rounded-[34px]">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gleam pointer-events-none"></div>
      </div>

      {/* Speaker notch */}
      <div className="absolute top-3 inset-x-0 mx-auto w-20 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
        <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-slate-700 rounded-full ml-2"></div>
      </div>

      {/* Screen inner container */}
      <div className="relative w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col text-slate-800 font-sans select-none">
        
        {/* Status bar */}
        <div className="pt-2 px-4 pb-1 flex justify-between items-center text-[10px] text-slate-600 font-semibold z-20 bg-white/95">
          <span>8:05</span>
          <div className="flex items-center gap-1 text-[9px]">
            <span>5G</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>100%</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-hidden flex flex-col p-3">
          {children}
        </div>

        {/* Home bar */}
        <div className="py-1 bg-white flex justify-center">
          <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// 1. Phone Screen: Dog Aadhaar
export function DogAadhaarScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 group-hover:shadow-md transition-shadow">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80" 
            alt="Dog Aadhaar"
            className="w-full h-full object-cover" 
          />
          {/* Biometric Scanning Reticle HUD */}
          <div className="absolute inset-2 border border-emerald-400/50 rounded-lg pointer-events-none animate-hud-bracket">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scanline"></div>
          </div>

          <div className="absolute top-1.5 right-1.5 bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-ping"></span>
            <span>Active</span>
          </div>
        </div>

        <div className="text-center pt-2 pb-1 border-b border-slate-100">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Dog Aadhaar ID</span>
          <span className="text-sm font-extrabold text-[#104C4B] font-mono tracking-tight">100076</span>
          <p className="text-[10px] font-bold text-slate-800">Animal Name: <span className="text-[#397B78]">Sheru</span></p>
          <p className="text-[8px] text-slate-500">Jurisdiction: BMC Ward 12</p>
        </div>

        <div className="grid grid-cols-2 gap-1.5 pt-2 text-[9px] bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1">
          <div>
            <span className="text-slate-400 block text-[8px]">Gender</span>
            <strong className="text-slate-800">Male</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Color</span>
            <strong className="text-slate-800">Golden Brown</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Breed</span>
            <strong className="text-slate-800">Indie Pariah</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">DOB / Age</span>
            <strong className="text-slate-800">2.5 Years</strong>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[8px] text-slate-500">
        <span>Caregiver: Ward Unit</span>
        <span className="font-mono text-emerald-700 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          <span>Aadhaar Verified</span>
        </span>
      </div>
    </div>
  );
}

// 2. Phone Screen: Location on Map
export function LocationScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div className="text-center pb-1">
        <span className="text-[10px] font-bold text-[#104C4B] block">Registered &amp; Scanned Location</span>
        <span className="text-[8px] text-slate-400">Panvel Municipal Ward 12</span>
      </div>

      {/* Simulated Map */}
      <div className="relative flex-1 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex flex-col justify-between p-2">
        {/* Map grid lines */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#104c4b_1px,transparent_1px)] [background-size:12px_12px]"></div>

        {/* Map roads SVG simulation */}
        <svg className="absolute inset-0 w-full h-full text-slate-300" fill="none" stroke="currentColor">
          <path d="M-10,30 Q80,45 250,20" strokeWidth="6" />
          <path d="M40,-10 L70,220" strokeWidth="8" />
          <path d="M160,-10 L130,220" strokeWidth="5" />
          <path d="M-10,140 Q100,120 250,160" strokeWidth="6" />
        </svg>

        {/* Pin 1: Registered with Radar Pulse */}
        <div className="relative z-10 self-start bg-white/95 px-2 py-1 rounded-md shadow-md border border-slate-200 text-[8px] flex items-center gap-1">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-[#104C4B]/40 animate-radar"></span>
            <MapPin className="w-3 h-3 text-[#104C4B] relative z-10" />
          </div>
          <div>
            <strong className="text-[#104C4B] block">Registered:</strong>
            <span className="text-slate-600">Sector 19 Park</span>
          </div>
        </div>

        {/* Pin 2: Current Sighting with Ping */}
        <div className="relative z-10 self-end bg-white/95 px-2 py-1 rounded-md shadow-md border border-slate-200 text-[8px] flex items-center gap-1">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-red-400/50 animate-radar"></span>
            <Navigation className="w-3 h-3 text-red-500 fill-red-500 relative z-10" />
          </div>
          <div>
            <strong className="text-red-600 block">Scanned Sighting:</strong>
            <span className="text-slate-600">40m from Home base</span>
          </div>
        </div>
      </div>

      <div className="pt-2 text-[8px] text-slate-500 text-center flex items-center justify-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#289E92] animate-pulse"></span>
        <span>GPS: 18.9894° N, 73.1175° E (Sub-meter accuracy)</span>
      </div>
    </div>
  );
}

// 3. Phone Screen: Vaccination & Sterilization
export function VaccinationScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <span className="text-[10px] font-bold text-[#104C4B]">Vaccination Record</span>
          <span className="bg-emerald-100 text-emerald-800 text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Valid</span>
          </span>
        </div>

        <div className="space-y-1.5 pt-2 text-[9px]">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-400 block text-[8px]">Registered Date</span>
            <strong className="text-slate-800">18-May-2023</strong>
          </div>

          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-400 block text-[8px]">Vaccine Name</span>
            <strong className="text-[#104C4B]">Rabies ARV (Batch #R-904)</strong>
          </div>

          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-400 block text-[8px]">Sterilization Status</span>
            <strong className="text-emerald-700 flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" /> Yes (Ear-Notched Right)
            </strong>
          </div>

          <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 relative overflow-hidden">
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent animate-beam pointer-events-none"></div>
            <span className="text-emerald-700 block text-[8px] font-semibold">Next Booster Due</span>
            <strong className="text-emerald-900 font-mono">21-May-2025</strong>
          </div>
        </div>
      </div>

      <p className="text-[8px] text-slate-400 text-center border-t border-slate-100 pt-1.5">
        Signed by Dr. Kulkarni (Reg #VET-MH-8821)
      </p>
    </div>
  );
}

// 4. Phone Screen: Report a Dog Incident
export function ReportScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <div className="text-center pb-1 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="text-[10px] font-bold text-red-600">Report an Incident</span>
        </div>
        <span className="text-[8px] text-slate-400 block text-center">Direct Municipal Squad Alert</span>

        <div className="pt-1.5">
          <span className="text-[8px] font-bold text-slate-600 uppercase block mb-1">Trigger Alert For:</span>
          <div className="grid grid-cols-2 gap-1 text-[8px]">
            {['Dog Bite', 'Vaccination', 'Sterilization', 'Malnourished', 'Abandoned', 'Injured'].map((opt, i) => (
              <div 
                key={i} 
                className={`py-1 px-1.5 rounded text-center font-semibold border transition-all ${
                  i === 0 
                    ? 'bg-red-500 text-white border-red-600 font-bold shadow-xs' 
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1.5 pt-2 text-[8px]">
          <input 
            type="text" 
            placeholder="Enter your name" 
            readOnly 
            value="Citizen Reporter" 
            className="w-full p-1.5 rounded border border-slate-200 bg-slate-50 text-[8px]"
          />
          <input 
            type="text" 
            placeholder="Mobile number" 
            readOnly 
            value="+91 98200 XXXXX" 
            className="w-full p-1.5 rounded border border-slate-200 bg-slate-50 text-[8px]"
          />
        </div>
      </div>

      <button 
        type="button"
        className="w-full py-1.5 rounded-lg bg-[#104C4B] text-white text-[9px] font-bold shadow text-center mt-1"
      >
        Raise An Alert
      </button>
    </div>
  );
}
