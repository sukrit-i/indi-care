import React from 'react';
import { motion } from 'framer-motion';
import { Camera, UploadCloud, Cpu, CheckCircle2, Check, RefreshCw, Sparkles } from 'lucide-react';

export default function AiStepPipeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="w-full relative">
      {/* Flowing Laser Connector Line (Desktop) */}
      <div className="hidden lg:block absolute top-[145px] inset-x-20 h-1 bg-[#DCE9E5] z-0 overflow-hidden rounded-full">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#289E92] to-transparent animate-beam"></div>
      </div>

      {/* 5-Step Connected Flow Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
      >
        
        {/* Step 1 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          {/* Mini Phone Frame */}
          <div className="w-44 h-72 bg-slate-900 rounded-[28px] p-2 border-2 border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:border-[#289E92] transition-all flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-2 inset-x-0 mx-auto w-12 h-3 bg-slate-950 rounded-full z-20"></div>
            
            <div className="relative w-full h-full bg-black rounded-[20px] overflow-hidden flex flex-col justify-between p-2">
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80" 
                alt="Camera viewfinder"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* White Viewfinder Brackets with Pulse */}
              <div className="absolute inset-4 border-2 border-dashed border-emerald-400/70 rounded-xl pointer-events-none animate-hud-bracket">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white"></div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></div>
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scanline"></div>
              </div>

              <div className="relative z-10 text-[9px] text-white/90 font-mono text-center pt-2 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Scanning Target...</span>
              </div>

              {/* Red Shutter Button */}
              <div className="relative z-10 flex justify-center pb-1">
                <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-red-600 shadow animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#397B78] text-white font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[#289E92] group-hover:scale-110 transition-all">
            1
          </div>
          <p className="text-xs font-semibold text-[#172E2D] max-w-[170px] leading-snug">
            Click a photo of any stray dog you come across
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          <div className="w-44 h-72 bg-slate-900 rounded-[28px] p-2 border-2 border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:border-[#289E92] transition-all flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-2 inset-x-0 mx-auto w-12 h-3 bg-slate-950 rounded-full z-20"></div>
            
            <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col justify-between p-3 text-center">
              <span className="text-[9px] font-bold text-[#104C4B] pt-2">IndieCare AI</span>

              <div className="space-y-2">
                <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto shadow border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80" 
                    alt="Upload thumbnail" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Progress bar with flowing shimmer */}
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200 relative">
                  <div className="bg-[#289E92] h-full w-4/5 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-beam"></div>
                  </div>
                </div>
                <span className="text-[8px] text-slate-500 font-mono">Uploading photo... 82%</span>
              </div>

              <div className="py-1 px-3 bg-slate-100 rounded-lg text-[9px] text-[#104C4B] font-semibold flex items-center justify-center gap-1">
                <UploadCloud className="w-3 h-3 text-[#397B78] animate-bounce" />
                <span>Cloud Sync</span>
              </div>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#397B78] text-white font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[#289E92] group-hover:scale-110 transition-all">
            2
          </div>
          <p className="text-xs font-semibold text-[#172E2D] max-w-[170px] leading-snug">
            Upload the photo to the app for identification
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          <div className="w-44 h-72 bg-slate-950 rounded-[28px] p-2 border-2 border-cyan-800 shadow-xl group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] group-hover:border-cyan-400 transition-all flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-2 inset-x-0 mx-auto w-12 h-3 bg-slate-900 rounded-full z-20"></div>
            
            <div className="relative w-full h-full bg-[#081820] rounded-[20px] overflow-hidden flex flex-col justify-between p-3 text-center text-white">
              <span className="text-[9px] font-mono text-cyan-400 pt-2 tracking-widest animate-pulse flex items-center justify-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Processing...</span>
              </span>

              {/* Glowing Neural Network Graphic with Concentric Spin */}
              <div className="relative my-auto flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full border border-cyan-400/60 bg-cyan-950/80 flex items-center justify-center shadow-[0_0_20px_#22d3ee]">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '8s' }}></div>
                  <Cpu className="w-8 h-8 text-cyan-300 animate-pulse" />
                </div>

                {/* AI feature labels */}
                <div className="grid grid-cols-2 gap-1 w-full pt-2 text-[7px] font-mono">
                  <span className="bg-cyan-950/80 text-cyan-300 px-1 py-0.5 rounded border border-cyan-700/50">Facial cues</span>
                  <span className="bg-cyan-950/80 text-cyan-300 px-1 py-0.5 rounded border border-cyan-700/50">Body cues</span>
                  <span className="bg-cyan-950/80 text-cyan-300 px-1 py-0.5 rounded border border-cyan-700/50 col-span-2">Behaviour cues</span>
                </div>
              </div>

              <span className="text-[8px] text-cyan-400/80 font-mono">Matching 128 Vectors...</span>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#397B78] text-white font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[#289E92] group-hover:scale-110 transition-all">
            3
          </div>
          <p className="text-xs font-semibold text-[#172E2D] max-w-[170px] leading-snug">
            AI processes and matches the image to our database
          </p>
        </motion.div>

        {/* Step 4 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          <div className="w-44 h-72 bg-slate-900 rounded-[28px] p-2 border-2 border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:border-[#289E92] transition-all flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-2 inset-x-0 mx-auto w-12 h-3 bg-slate-950 rounded-full z-20"></div>
            
            <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col justify-between p-2 text-left">
              <span className="text-[9px] font-bold text-center text-[#104C4B] pt-1 block">IndieCare AI</span>

              <div className="space-y-1.5">
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto border-2 border-[#104C4B] shadow-sm relative">
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=150&q=80" 
                    alt="Sheru profile" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
                </div>

                <div className="text-center">
                  <strong className="text-xs font-bold text-slate-800">Sheru</strong>
                  <span className="text-[8px] text-slate-400 block font-mono">ID: 100076</span>
                </div>

                {/* Details list */}
                <div className="text-[8px] space-y-0.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                  <div className="flex justify-between"><span className="text-slate-400">Eye:</span> <strong>Brown</strong></div>
                  <div className="flex justify-between"><span className="text-slate-400">Behaviour:</span> <strong className="text-emerald-700">Calm</strong></div>
                  <div className="flex justify-between"><span className="text-slate-400">Colour:</span> <strong>Orange / Fawn</strong></div>
                  <div className="flex justify-between"><span className="text-slate-400">Breed:</span> <strong>Stray Indie</strong></div>
                  <div className="flex justify-between"><span className="text-slate-400">Gender:</span> <strong>Male</strong></div>
                </div>
              </div>

              <div className="text-[7px] text-center text-emerald-700 font-bold flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Match Confirmed</span>
              </div>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#397B78] text-white font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[#289E92] group-hover:scale-110 transition-all">
            4
          </div>
          <p className="text-xs font-semibold text-[#172E2D] max-w-[170px] leading-snug">
            The app identifies the dog and shows its details
          </p>
        </motion.div>

        {/* Step 5 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          <div className="w-44 h-72 bg-slate-900 rounded-[28px] p-2 border-2 border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:border-[#289E92] transition-all flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-2 inset-x-0 mx-auto w-12 h-3 bg-slate-950 rounded-full z-20"></div>
            
            <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col justify-between p-3 text-center">
              <span className="text-[9px] font-bold text-[#104C4B] pt-1">IndieCare AI</span>

              <div className="my-auto space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-[#289E92] text-[#289E92] flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8 stroke-[3] animate-pulse" />
                </div>

                <strong className="text-xs font-black text-slate-800 block">Dog Identified!</strong>
                <p className="text-[8px] text-slate-500">Record updated with latest GPS coordinates.</p>
              </div>

              <button className="w-full py-1.5 rounded-lg bg-[#289E92] hover:bg-[#20897F] text-white text-[9px] font-bold shadow transition-colors">
                OK
              </button>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#397B78] text-white font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[#289E92] group-hover:scale-110 transition-all">
            5
          </div>
          <p className="text-xs font-semibold text-[#172E2D] max-w-[170px] leading-snug">
            Identification complete! Search for another stray
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
