import React, { useState, useEffect } from 'react';
import { 
  X, 
  Scan, 
  CheckCircle2, 
  AlertCircle, 
  Camera, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Download,
  Share2,
  RefreshCw,
  QrCode
} from 'lucide-react';
import { SAMPLE_DOGS } from '../data/mockData';

export default function AiScannerModal({ isOpen, onClose }) {
  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  const currentDog = SAMPLE_DOGS[selectedDogIndex];

  useEffect(() => {
    if (isOpen) {
      triggerScan();
    } else {
      setScanResult(null);
      setScanProgress(0);
      setIsScanning(false);
    }
  }, [isOpen, selectedDogIndex]);

  const triggerScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setScanProgress(15);

    const timer1 = setTimeout(() => setScanProgress(55), 400);
    const timer2 = setTimeout(() => setScanProgress(85), 800);
    const timer3 = setTimeout(() => {
      setScanProgress(100);
      setIsScanning(false);
      setScanResult(currentDog);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center border border-brand-500/30">
              <Scan className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                IndieCare AI Biometric Scanner
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold px-2 py-0.5 rounded-full">
                  Live Simulator v2.4
                </span>
              </h3>
              <p className="text-xs text-slate-400">Canine Facial &amp; Muzzle Geometry Recognition</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Interactive Camera / Viewport View (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            {/* Camera Viewport */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-slate-800 group shadow-inner">
              <img 
                src={currentDog.image} 
                alt={currentDog.name} 
                className="w-full h-full object-cover select-none"
              />

              {/* Viewfinder Target Overlays */}
              <div className="absolute inset-4 border-2 border-dashed border-white/25 rounded-xl pointer-events-none">
                {/* HUD Corners */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-brand-400"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-brand-400"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-brand-400"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-brand-400"></div>

                {/* Facial Keypoints (Only when finished or scanning) */}
                <div className="absolute top-[35%] left-[45%] w-3 h-3 rounded-full bg-brand-500/80 animate-ping"></div>
                <div className="absolute top-[36%] left-[46%] w-2 h-2 rounded-full bg-brand-400"></div>

                <div className="absolute top-[28%] left-[34%] w-2 h-2 rounded-full bg-emerald-400/90 shadow"></div>
                <div className="absolute top-[26%] right-[34%] w-2 h-2 rounded-full bg-emerald-400/90 shadow"></div>
                
                {/* Muzzle Tag Box */}
                <div className="absolute top-[35%] left-[32%] w-[36%] h-[35%] border border-emerald-400/80 bg-emerald-500/10 rounded-lg flex items-start justify-end p-1">
                  <span className="text-[9px] font-mono bg-emerald-950/90 text-emerald-300 px-1 rounded border border-emerald-600/40">
                    Muzzle: 98.6%
                  </span>
                </div>
              </div>

              {/* Laser Scanning Bar */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_15px_#f97316] animate-scan pointer-events-none"></div>
              )}

              {/* Status Top Strip */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`}></span>
                  {isScanning ? `Extracting feature points... ${scanProgress}%` : 'Match Found (Confidence: 98.6%)'}
                </span>
                <span className="text-slate-400">GPS: 18.9894° N, 73.1175° E</span>
              </div>

              {/* Rescan Button overlay */}
              <button
                onClick={triggerScan}
                className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-brand-500 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-700 transition-all font-medium backdrop-blur shadow"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>Rescan</span>
              </button>
            </div>

            {/* Test Sample Selector */}
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Try scanning another registered indie:
              </span>
              <div className="grid grid-cols-4 gap-2">
                {SAMPLE_DOGS.map((dog, idx) => (
                  <button
                    key={dog.id}
                    onClick={() => setSelectedDogIndex(idx)}
                    className={`flex items-center gap-2 p-1.5 rounded-lg text-left transition-all border ${
                      selectedDogIndex === idx
                        ? 'border-brand-500 bg-brand-500/10 text-white'
                        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <img 
                      src={dog.image} 
                      alt={dog.name} 
                      className="w-8 h-8 rounded-md object-cover"
                    />
                    <div className="truncate">
                      <p className="text-xs font-bold truncate text-slate-200">{dog.name}</p>
                      <p className="text-[9px] text-slate-400 truncate">{dog.id}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Digital "Dog Aadhaar Card" Output (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* The Digital Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 p-5 border border-slate-700/80 shadow-xl overflow-hidden">
              
              {/* Top Card Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-brand-500 flex items-center justify-center font-bold text-white text-[10px]">
                    ID
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white tracking-wider uppercase">
                      IndieCare Canine Registry
                    </h4>
                    <p className="text-[9px] text-slate-400">Govt. Municipal Verified Digital Identity</p>
                  </div>
                </div>
                <QrCode className="w-8 h-8 text-slate-300" />
              </div>

              {/* Card Body */}
              <div className="pt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h2 className="text-xl font-extrabold text-white tracking-tight">{currentDog.name}</h2>
                    <p className="text-xs text-brand-400 font-mono font-semibold">{currentDog.id}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Breed &amp; Age</span>
                    <span className="font-semibold text-slate-200">{currentDog.breed} • {currentDog.age}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">NFC / Collar Chip</span>
                    <span className="font-mono text-xs text-slate-200">{currentDog.nfcTagId}</span>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Rabies Vaccination</span>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Valid
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">{currentDog.vaccinationStatus}</p>
                  <p className="text-[10px] text-slate-400">Next Booster Due: <span className="text-slate-200">{currentDog.nextDue}</span></p>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[10px] block">Enumerated Territory</span>
                    <span className="font-medium">{currentDog.location}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-[11px] text-slate-300">
                  <span className="text-brand-400 font-bold block mb-0.5">Temperament &amp; Habits:</span>
                  {currentDog.temperament}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => alert(`Dog Aadhaar Profile for ${currentDog.name} (${currentDog.id}) copied!`)}
                  className="flex-1 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Aadhaar</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Share link generated for ${currentDog.name}`)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                  title="Share ID Card"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Micro FAQ pill */}
            <p className="text-[11px] text-slate-400 text-center">
              💡 Zero collars needed. The AI extracts 128 unique biometric facial landmarks that stay consistent over the dog's life.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
