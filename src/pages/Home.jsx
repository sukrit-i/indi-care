import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scan, 
  MapPin, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Phone,
  ArrowRight,
  MessageCircle,
  Play,
  Pause,
  Video,
  Quote,
  FileText,
  Instagram,
  Linkedin,
  Plus,
  Minus,
  Check
} from 'lucide-react';
import { 
  PhoneFrame, 
  DogAadhaarScreen, 
  LocationScreen, 
  VaccinationScreen, 
  ReportScreen 
} from '../components/PhoneMockup';
import AiStepPipeline from '../components/AiStepPipeline';
import { BmcSmileLogo, SineIitBombayLogo, IitGuwahatiLogo } from '../components/InstitutionalLogos';

export default function Home({ onOpenScanner }) {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0); // 1st FAQ open by default as in screenshot
  const [callbackSent, setCallbackSent] = useState(false);
  
  // Authentic Indian Street Dog Video Streams for Hero Background
  const HERO_VIDEO_FEEDS = [
    {
      id: 'urban-street',
      shortLabel: 'CAM 01',
      name: 'Urban Street Indie',
      src: '/videos/curious-street-dog.mp4',
      badge: 'URBAN STREET LIVE FEED',
      location: '18.9894° N, 73.1175° E (Navi Mumbai)',
      landmarks: '128 Biometric Facial Points'
    },
    {
      id: 'village-desi',
      shortLabel: 'CAM 02',
      name: 'Community Desi Dog',
      src: '/videos/indian-indie-dog.mp4',
      badge: 'COMMUNITY HABITAT FEED',
      location: '19.0760° N, 72.8777° E (Mumbai Ward K)',
      landmarks: 'Ear-Notch & Coat Mapping'
    },
    {
      id: 'neighborhood-indie',
      shortLabel: 'CAM 03',
      name: 'Neighborhood Indie',
      src: '/videos/playful-yellow-indie.mp4',
      badge: 'NEIGHBORHOOD ROAMING FEED',
      location: '18.9220° N, 72.8347° E (South Bombay)',
      landmarks: 'Canine Demographics & Vax Log'
    }
  ];

  const [activeFeedIndex, setActiveFeedIndex] = useState(0);
  const activeFeed = HERO_VIDEO_FEEDS[activeFeedIndex];

  // Hero background video state
  const heroVideoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    if (heroVideoRef.current) {
      if (heroVideoRef.current.paused) {
        heroVideoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        heroVideoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };
  
  // Structured feeding carousel state
  const [feedingIndex, setFeedingIndex] = useState(0);
  const FEEDING_SLIDES = [
    { src: "/images/feeding-1.png", title: "Clean raised trough feeding for neighborhood indie pups" },
    { src: "/images/feeding-2.png", title: "Two community dogs feeding peacefully side by side" },
    { src: "/images/feeding-3.png", title: "Caregiver serving fresh species-appropriate food" },
  ];

  const handleNextFeeding = () => {
    setFeedingIndex((prev) => (prev + 1) % FEEDING_SLIDES.length);
  };

  const handlePrevFeeding = () => {
    setFeedingIndex((prev) => (prev - 1 + FEEDING_SLIDES.length) % FEEDING_SLIDES.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    setCallbackSent(true);
    setTimeout(() => setCallbackSent(false), 4000);
  };

  const FAQS = [
    {
      q: "1. What is IndieCare AI?",
      a: "IndieCare AI is an AI platform for structured and scientific stray dog management. It combines on-ground programs (enumeration, tagging, vaccination, sterilization, coordination, training, monitoring, and updating the animal register) with a tracking layer so action becomes organised, consistent, and transparent. The platform connects with Municipal Corporations, Local Bodies, NGOs, shelters, caregivers, and the general public."
    },
    {
      q: "2. Who is IndieCare AI meant for?",
      a: "IndieCare AI is built for Municipal Corporations, Smart City councils, Corporates and Industrial campuses, Animal Welfare NGOs, Veterinary clinics, and Community Feeders seeking transparent, data-driven stray dog welfare and human-animal conflict reduction."
    },
    {
      q: "3. What services do you provide under \"stray dog management\"?",
      a: "We provide comprehensive ward-level GIS enumeration surveys, zero-contact canine biometric digital profiling ('Dog Aadhaar'), Anti-Rabies Vaccination tracking, Animal Birth Control (ABC Rules 2023) surgical lifecycle monitoring, behavior conditioning, and structured feeding station establishment."
    },
    {
      q: "4. What happens after an organisation contacts IndieCare AI?",
      a: "Our field team conducts a preliminary baseline assessment of your ward or campus, calculates the estimated dog population and sterilization gaps, presents a customized implementation roadmap, and initiates surveyor training and on-ground digital onboarding."
    },
    {
      q: "5. What kind of reporting or proof do we get?",
      a: "Clients receive real-time admin dashboard access with GPS-tagged photo evidence for every dog, batch-verified vaccination certificates, sterilization surgical logs, and automated compliance reports for Animal Welfare Board of India (AWBI) audit trails."
    },
    {
      q: "6. Is dog food included in the program?",
      a: "Yes. Under our Campus and Structured Feeding modules, we set up customized feeding stations and coordinate hygienic, species-appropriate nutritional meal programs to ensure resident dogs remain calm, nourished, and non-territorial."
    },
    {
      q: "7. How is IndieCare AI different from an NGO/CSR-style approach?",
      a: "Unlike traditional ad-hoc drives, IndieCare AI deploys verifiable technology—facial recognition biometrics, sub-meter geolocation, and digital audit trails—so municipal bodies and corporate ESG leads have transparent, auditable accountability for every rupee invested."
    },
    {
      q: "8. As a caregiver, how can I use IndieCare AI?",
      a: "Community caregivers can use our mobile app to create digital Dog Aadhaar cards for their neighborhood packs, log daily feeding rounds, receive booster vaccination reminders, and report sick or relocated dogs with automated priority dispatch."
    },
    {
      q: "9. What can I do through IndieCare AI if I'm an individual user?",
      a: "Individual citizens can instantly scan and look up a street dog's vaccination status, report dog bites or injured strays 24/7 for emergency dispatch, explore verified Indie adoptions, and connect with local neighborhood feeders."
    }
  ];

  const INSIGHTS = [
    {
      title: "Animal Care Jobs in India: Join IndieCare AI in Mumbai",
      excerpt: "We're expanding our Mumbai field operations. Explore high-impact roles in canine enumeration, veterinary coordination, and community engagement.",
      tag: "CAREERS",
      tagColor: "bg-[#16A34A]",
      image: "/images/insight-1.png",
      date: "October 22, 2026 • No Comments",
      link: "/about"
    },
    {
      title: "One Health, One Deadline: India's Path to Rabies Elimination",
      excerpt: "How mass canine immunization and digital Dog Aadhaar surveillance are breaking the rabies transmission chain across municipal wards.",
      tag: "ANIMAL WELFARE",
      tagColor: "bg-[#16A34A]",
      image: "/images/insight-2.png",
      date: "September 1, 2026 • No Comments",
      link: "/solutions"
    },
    {
      title: "IndieCare AI on the Cover of SiliconIndia: A Two Year Journey",
      excerpt: "SiliconIndia features IndieCare AI's technological breakthroughs in humane stray dog population management and AI facial recognition.",
      tag: "MEDIA",
      tagColor: "bg-[#16A34A]",
      image: "/images/insight-3.png",
      date: "August 14, 2026 • No Comments",
      link: "/about"
    },
    {
      title: "Help Injured Stray Dogs with Just One Click",
      excerpt: "Our 24/7 emergency incident reporting module connects citizens with municipal rescue teams and mobile veterinary clinics in real time.",
      tag: "NEWSLETTER",
      tagColor: "bg-[#16A34A]",
      image: "/images/insight-4.png",
      date: "July 30, 2026 • No Comments",
      link: "/report"
    }
  ];

  return (
    <div className="w-full m-0 p-0 overflow-x-hidden bg-[#F7F8F6] text-[#172E2D] relative font-sans">
      
      {/* --------------------------------------------------------
          FLOATING WIDGETS
         -------------------------------------------------------- */}
      
      {/* Floating Left Tab: "JOIN OUR CHANNEL" */}
      <a
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-[10px] tracking-widest py-3 px-1.5 rounded-r-xl shadow-lg shadow-green-900/30 flex items-center justify-center [writing-mode:vertical-rl] transition-transform hover:scale-105 select-none"
        title="Join IndieCare Community Channel"
      >
        JOIN OUR CHANNEL
      </a>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919004843851?text=Hello%20IndieCare%20AI%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20stray%20dog%20management."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp: +91 9004843851"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>


      {/* ========================================================
          1. CINEMATIC HERO SECTION WITH SOLID CENTERED CARD
             ANIMATIONS: Ambient Ken Burns, Live HUD Scanning Reticle, Spring Entrance
         ======================================================== */}
      <section className="relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-slate-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Video Background Scene (IndieCare AI Live Vision Feed) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
          <video
            ref={heroVideoRef}
            key={activeFeed.src}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.10] scale-[1.02]"
          >
            <source src={activeFeed.src} type="video/mp4" />
            <source src="/videos/hero-dog.mp4" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=80" 
              alt="Indian Street Dog Management"
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Dynamic Laser Scanning Line across the video */}
          <motion.div 
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#289E92]/25 to-transparent pointer-events-none"
            animate={{ y: ['-100%', '600%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* High-tech Cyber Grid Mesh Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(40,158,146,0.35) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />

          {/* Cinematic Vignette Gradients for Depth & Legibility */}
          <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

          {/* Futuristic Live Biometric Scanning HUD & Camera Feed Selector (Top-Left) */}
          <div className="hidden md:flex flex-col gap-2.5 absolute top-7 left-7 z-20">
            {/* Canine Vision Active Badge */}
            <div className="bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-emerald-500/40 text-[10px] font-mono text-emerald-400 space-y-1.5 shadow-2xl pointer-events-none">
              <div className="flex items-center gap-2 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="tracking-widest uppercase text-emerald-300">CANINE VISION ACTIVE</span>
              </div>
              <div className="text-slate-300 text-[9px] flex items-center gap-2">
                <span>ENGINE: RESNET-V4</span>
                <span className="text-emerald-400 font-bold">● 99.4% CONF</span>
              </div>
              <div className="text-emerald-300/80 text-[9px]">{activeFeed.landmarks}</div>
            </div>

            {/* Live Camera Stream Selector */}
            <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/10 text-[10px] font-mono text-white flex items-center gap-2 shadow-2xl w-fit">
              <span className="flex items-center gap-1.5 text-rose-400 font-bold tracking-wider mr-1">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                LIVE
              </span>
              {HERO_VIDEO_FEEDS.map((feed, idx) => (
                <button
                  key={feed.id}
                  onClick={() => setActiveFeedIndex(idx)}
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                    activeFeedIndex === idx
                      ? 'bg-[#289E92] text-white shadow-md'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                  title={`${feed.name} — ${feed.badge}`}
                >
                  {feed.shortLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Left Side: Live AI Canine Detection Viewport HUD (Desktop) */}
          <div className="hidden xl:block absolute left-7 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-64 p-3.5 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-emerald-500/30 text-white space-y-2.5 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  BIOMETRIC RETICLE
                </span>
                <span className="text-slate-400 text-[9px] font-mono">99.4% MATCH</span>
              </div>

              {/* Target Reticle Simulation */}
              <div className="relative h-20 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-950/20 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent animate-pulse" />
                <div className="text-[10px] font-mono text-emerald-300 font-bold tracking-widest uppercase">
                  INDIE CANINE DETECTED
                </div>
                <div className="text-[9px] font-mono text-slate-300 mt-0.5">
                  STATUS: VERIFIED &amp; MAPPED
                </div>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-0.5">
                <span>DOG ID: #IND-2024</span>
                <span className="text-emerald-400 font-semibold">● ABC VERIFIED</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom-Left Controls & Telemetry */}
          <div className="absolute bottom-6 left-6 z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Interactive Stream Controls */}
            <button
              onClick={toggleVideoPlayback}
              className="bg-slate-950/80 hover:bg-slate-900/95 text-white/90 hover:text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[10px] font-mono flex items-center gap-2 shadow-xl transition-all cursor-pointer hover:border-[#289E92]/80"
              title={isVideoPlaying ? "Pause background stream" : "Resume background stream"}
            >
              {isVideoPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#289E92]" />
                  <span className="hidden sm:inline">LIVE VIDEO RUNNING</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span className="hidden sm:inline">RESUME VIDEO</span>
                </>
              )}
            </button>

            {/* GPS Telemetry & Active Feed Indicator */}
            <div className="hidden md:block bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#289E92]/50 text-[10px] font-mono text-white pointer-events-none shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[#289E92] font-bold">{activeFeed.badge}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300 text-[9px]">{activeFeed.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container — Placed on the Right Side of the Video */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center lg:justify-end items-center">
          
          {/* Solid White Hero Card positioned on the Right */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg lg:max-w-xl bg-white p-7 sm:p-9 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-5 text-center lg:text-left relative overflow-hidden group lg:my-4"
          >
            {/* Shimmer gleam sweep across card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="w-[150%] h-full bg-gradient-to-r from-transparent via-emerald-100/25 to-transparent animate-gleam"></div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF5F3] text-[#104C4B] text-[11px] font-extrabold uppercase tracking-wider border border-[#D0EBE5] shadow-xs mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#289E92] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Field Verified Technology</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#104C4B] tracking-tight leading-snug max-w-xl mx-auto lg:mx-0">
              Stray Dog Management for High-Risk Industrial Sites
            </h1>

            {/* Subhead */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
              End-to-end dog population management for your site through <strong className="text-[#104C4B] font-semibold">Scientific Enumeration</strong>, AI Registration, Deworming, Vaccination, Sterilization, Medical Records &amp; First Aid Management.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#289E92]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Site Assessment</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </motion.div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenScanner}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1F262B] hover:bg-[#151B1F] text-white font-bold text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <Scan className="w-4 h-4 text-[#289E92]" />
                <span>Try AI Face Scan</span>
              </motion.button>
            </div>

            {/* Trust Signals Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ABC Rules 2023 Compliant</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#289E92]" />
                <span>Panvel MC &amp; BPCL Validated</span>
              </span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* ========================================================
          1.5 MANIFESTO: INDIA'S 35M FREE-ROAMING COMMUNITY DOGS & THE "DOG AADHAAR" VISION
         ======================================================== */}
      <section className="w-full bg-gradient-to-b from-slate-950 via-[#0B2524] to-[#104C4B] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#289E92]/30">
        
        {/* Ambient Subtle Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#289E92]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          
          {/* Header Tag & Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>India's Stray Animal Challenge // 35 Million Community Dogs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Across India's Urban Landscape, Over 35 Million Free-Roaming Dogs Live Alongside Citizens
            </h2>
          </motion.div>

          {/* Central Story & Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            
            {/* Story Paragraphs & Direct Quote */}
            <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                For decades, municipal corporations and animal shelters operated on <strong className="text-white font-semibold">manual paper registers, unscientific estimates, and reactive crisis firefighting</strong>.
              </p>
              <p>
                The result? <span className="text-rose-300 font-medium">Sterilized dogs were caught repeatedly</span>, rabies vaccination gaps caused public health alarms, and street dogs were subjected to illegal territorial dumping—causing human dog-bite incidents.
              </p>
              
              {/* Highlight Quote Box */}
              <div className="relative pl-5 py-4 border-l-4 border-[#289E92] bg-gradient-to-r from-[#289E92]/15 to-transparent rounded-r-2xl">
                <Quote className="w-6 h-6 text-[#289E92] mb-1.5 opacity-80" />
                <p className="font-serif italic text-base sm:text-lg text-emerald-200 font-medium leading-snug">
                  "We asked a simple question: If every Indian citizen can have an Aadhaar digital ID, why can't every neighborhood indie dog have a tamper-proof digital profile?"
                </p>
                <span className="block text-xs font-mono text-emerald-400/80 mt-2 tracking-wide uppercase">
                  — The Founding Vision of IndieCare AI
                </span>
              </div>
            </div>

            {/* 3 Metric Impact Columns */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:border-[#289E92]/50 transition-colors">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">The Scale of Challenge</div>
                <div className="text-2xl font-black text-white">35,000,000+</div>
                <p className="text-xs text-slate-400">Free-roaming community dogs living alongside Indian citizens</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:border-[#289E92]/50 transition-colors">
                <div className="text-[11px] font-mono text-[#289E92] uppercase tracking-widest">Ending Repeated Recaptures</div>
                <div className="text-2xl font-black text-white">100% Non-Invasive</div>
                <p className="text-xs text-slate-400">No ear-tags, no microchips, instant phone camera biometric scan</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 sm:col-span-2 lg:col-span-1 hover:border-emerald-400/50 transition-colors">
                <div className="text-[11px] font-mono text-amber-300 uppercase tracking-widest">Public Health Safeguard</div>
                <div className="text-2xl font-black text-white">70%+ Herd Immunity</div>
                <p className="text-xs text-slate-400">Eliminating rabies vaccination gaps &amp; territorial dumping</p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* ========================================================
          2. THE 4 REAL SMARTPHONE FEATURE MOCKUPS
             ANIMATIONS: Staggered Scroll-Triggered Reveal & Floating Oscillations
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
              Just One Photo Gives You A Stray Dog's ID, Location, Medical History &amp; Incidence Reporting
            </h2>
            <p className="text-sm sm:text-base text-[#617472]">
              Tap into India's first digital canine registry on standard mobile phones. No invasive microchips or painful tags.
            </p>
          </motion.div>

          {/* Staggered Phone Mockups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dog Aadhaar", desc: "Get info of Age, Breed, Gender, Caregiver & more", component: <DogAadhaarScreen />, floatDelay: 0 },
              { title: "Location", desc: "See both Registered & Scanned locations of dog", component: <LocationScreen />, floatDelay: 0.8 },
              { title: "Vaccination", desc: "View Vaccine Details & Due Date, Sterilization Status & more", component: <VaccinationScreen />, floatDelay: 1.6 },
              { title: "Report a Dog", desc: "Trigger alerts for Bites, Injuries Or Dog Needing Help", component: <ReportScreen />, floatDelay: 2.4 },
            ].map((phone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.14, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-[#F7F8F6] p-5 rounded-3xl border border-[#DCE9E5] shadow-card-soft hover:shadow-card-hover hover:border-[#289E92]/50 transition-all flex flex-col items-center text-center space-y-4 group"
              >
                <div>
                  <h3 className="text-lg font-black text-[#104C4B] group-hover:text-[#289E92] transition-colors">{phone.title}</h3>
                  <p className="text-xs text-[#617472] mt-0.5">{phone.desc}</p>
                </div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, delay: phone.floatDelay, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneFrame>{phone.component}</PhoneFrame>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          3. CREDIBILITY & VALIDATION SECTION
             "BACKED BY INDIA'S BEST — Incubated & Validated"
             ANIMATIONS: Staggered Fade Up with Hover Scale
         ======================================================== */}
      <section className="w-full bg-[#F7F8F6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto text-center space-y-9">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-[#289E92] uppercase tracking-widest block">
              BACKED BY INDIA'S BEST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight">
              Incubated &amp; Validated
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] max-w-2xl mx-auto leading-relaxed">
              IndieCare AI Solutions Private Limited is incubated by the <strong className="text-[#104C4B] font-bold">SMILE Council of BMC</strong> &amp; by <strong className="text-[#104C4B] font-bold">SINE at IIT Bombay</strong>. Its technology has been validated by <strong className="text-[#104C4B] font-bold">IIT Guwahati</strong> for building scientific humane stray dog management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {[
              { id: 'smile', component: <BmcSmileLogo /> },
              { id: 'sine', component: <SineIitBombayLogo /> },
              { id: 'iitg', component: <IitGuwahatiLogo /> },
            ].map((logo, idx) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.25 } }}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#289E92]/50 transition-all flex items-center justify-center group"
              >
                {logo.component}
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          4. THE 5-STEP MOBILE APP AI PROCESS PIPELINE
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#397B78] uppercase tracking-widest block">
              CURRENTLY ON THE GROUND
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172E2D]">
              Delivering AI technology-enabled scientific stray dog management programs at scale
            </h2>
            <p className="text-xs sm:text-sm text-[#617472]">
              How the mobile application identifies and catalogs free-roaming dogs in 5 seamless steps:
            </p>
          </div>

          <AiStepPipeline />

        </div>
      </section>


      {/* ========================================================
          5. IMPLEMENT AT YOUR SITE + GOOGLE PLAY STORE BANNER
             ANIMATIONS: 3D Holographic Tilt, Card Float, Shimmer Sheen
         ======================================================== */}
      <section className="w-full bg-[#104C4B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient background glow orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#289E92]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#289E92]/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 space-y-6 text-center sm:text-left"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Implement a Stray Dog Management Program at Your Site
              </h2>
              <p className="text-xs sm:text-sm text-teal-soft leading-relaxed max-w-lg">
                Connect with IndieCare AI to deploy baseline surveys, AI biometric registration, designated feeding spots, and veterinary care at your facility.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black border border-white/20 hover:border-white/40 shadow-lg transition-transform"
                >
                  <svg viewBox="0 0 512 512" className="w-7 h-7">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00e676" />
                    <path d="M47 36.3v439.4l278.3-241.4L47 36.3z" fill="#00b0ff" />
                    <path d="M407.9 285.5L325.3 234.3l-60.1 60.1 60.1 60.1 82.6-69z" fill="#ffd600" />
                    <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#ff3d00" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 block">GET IT ON</span>
                    <strong className="text-sm font-bold text-white">Google Play</strong>
                  </div>
                </motion.a>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                  >
                    Book Program Demo
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Rani's Floating Dog Aadhaar Card with 3D Tilt Perspective */}
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex justify-center [perspective:1000px]"
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ rotateY: 6, rotateX: -5, scale: 1.04, transition: { duration: 0.25 } }}
                className="w-full max-w-xs bg-white text-slate-800 p-5 rounded-3xl shadow-2xl border-4 border-white/20 text-left space-y-3 relative overflow-hidden group cursor-pointer"
              >
                {/* Shimmer gleam reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent animate-gleam pointer-events-none"></div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80" 
                    alt="Rani Dog Aadhaar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                    <span>Campus Resident</span>
                  </span>
                </div>

                <div className="text-center pt-1 border-b border-slate-100 pb-2">
                  <span className="text-[10px] text-slate-400 font-bold block">Dog Aadhaar ID:</span>
                  <span className="text-base font-extrabold text-[#104C4B] font-mono">100076</span>
                  <p className="text-xs font-bold text-slate-800">Animal Name: Rani</p>
                  <p className="text-[10px] text-slate-500">Jurisdiction: Industrial Campus Gate 3</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[9px]">Gender:</span>
                    <strong>Female</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">Color:</span>
                    <strong>Black / White</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">Breed:</span>
                    <strong>Indie Desi</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">DOB:</span>
                    <strong>Oct-2021</strong>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================
          6. TRAINING—FREE-ROAMING DOGS (NEW COMPONENT 1)
             ANIMATIONS: Staggered Fade Up + Concentric Pulse on Play Icons
         ======================================================== */}
      <section className="w-full bg-[#F4F9F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Training—Free-Roaming Dogs
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] leading-relaxed">
              Behaviour training isn't just about commands, it's about reducing stress, building trust, and creating safer public spaces. These sessions demonstrate how structured guidance helps community dogs stay calm, responsive, and confident in everyday situations.
            </p>
          </motion.div>

          {/* 3 Video Cards Grid matching Screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Recall Training",
                img: "/images/train-recall.png",
                desc: "Recall training helps Ash respond reliably to guidance, building trust and making her safer and easier to manage.",
              },
              {
                title: "Basic Obedience",
                img: "/images/train-obedience.png",
                desc: "Teaching calm pedestrian greetings and eliminating territorial barking around high-traffic campus zones.",
              },
              {
                title: "Mat Training",
                img: "/images/train-mat.png",
                desc: "Habituating community dogs to dedicated rest mats away from high-risk machinery and vehicle routes.",
              },
            ].map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-full max-w-[270px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative group-hover:shadow-2xl transition-all">
                  <img 
                    src={video.img} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    {/* Concentric pulsing radar waves behind Play */}
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-14 h-14 rounded-full bg-white/40 animate-ping pointer-events-none"></span>
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#104C4B] flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform relative z-10">
                        <Play className="w-5 h-5 fill-[#104C4B] ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 max-w-[260px]">
                  <h3 className="font-bold text-base text-[#104C4B] group-hover:text-[#289E92] transition-colors">{video.title}</h3>
                  <p className="text-[11px] text-[#617472] leading-snug">
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          7. STRUCTURED FEEDING DRIVES THAT GO BEYOND NOURISHMENT (NEW COMPONENT 2)
             ANIMATIONS: Interactive Animated Slide Carousel + Image Lift
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            {/* Carousel navigation controls with hover motion */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={handlePrevFeeding}
                className="w-9 h-9 rounded-xl bg-[#397B78] text-white flex items-center justify-center hover:bg-[#289E92] shadow-md transition-colors"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              
              <div className="flex items-center gap-1.5 px-2">
                {FEEDING_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeedingIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      feedingIndex === i ? 'w-6 bg-[#289E92]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={handleNextFeeding}
                className="w-9 h-9 rounded-xl bg-[#397B78] text-white flex items-center justify-center hover:bg-[#289E92] shadow-md transition-colors"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Structured Feeding Drives That Go Beyond Nourishment
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] leading-relaxed max-w-2xl mx-auto">
              When stray dogs are left to survive on leftovers, spicy food, or garbage, their health is affected. By providing safe &amp; balanced meals in a consistent and organized way, IndieCare AI improves their nourishment while gradually building trust between humans and dogs.
            </p>
          </div>

          {/* 3 Real Feeding Photos with Interactive Staggered Zoom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEEDING_SLIDES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => setFeedingIndex(idx)}
                className={`rounded-3xl overflow-hidden shadow-lg border-2 aspect-[4/3] group relative cursor-pointer transition-all ${
                  feedingIndex === idx ? 'border-[#289E92] ring-4 ring-[#289E92]/20 shadow-2xl' : 'border-slate-200 bg-slate-100'
                }`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs text-white font-semibold drop-shadow">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          8. FOLLOW US ON YOUR INSTAGRAM (NEW COMPONENT 3)
             ANIMATIONS: Playful Dynamic Hover Tilts & Gleam Sweep
         ======================================================== */}
      <section className="w-full bg-[#F4F9F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Follow Us On Your Instagram
            </h2>

            {/* Profile Header Snippet */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1F262B] p-1.5 shadow shrink-0">
                <img src="/indiecare-logo.png" alt="indiecare_ai" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <strong className="text-sm font-bold text-slate-900 block">indiecare_ai</strong>
                <p className="text-[11px] text-[#617472] leading-tight">
                  AI for Scientific Stray Dog Management for Local Bodies &amp; Corporates. Incubated by SMILE Council BMC &amp; SINE IIT Bombay. Validated by IIT Guwahati. 🐕
                </p>
              </div>
            </div>
          </div>

          {/* 4 Instagram Posts Grid with Staggered Dynamic Tilt on Hover */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "/images/ig-1.png", alt: "Instagram Post 1" },
              { img: "/images/ig-2.png", alt: "Instagram Post 2" },
              { img: "/images/ig-3.png", alt: "Instagram Post 3" },
              { img: "/images/ig-4.png", alt: "Instagram Post 4" },
            ].map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1.5 : -1.5, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-square group bg-slate-900 relative cursor-pointer"
              >
                <img 
                  src={post.img} 
                  alt={post.alt} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button" 
              className="px-6 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs uppercase tracking-wider shadow transition-colors"
            >
              LOAD MORE
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://instagram.com/indiecare_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#E1306C] hover:bg-[#C13584] text-white font-extrabold text-xs flex items-center gap-1.5 shadow transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </motion.a>
          </div>

        </div>
      </section>


      {/* ========================================================
          9. FOLLOW US ON LINKEDIN BANNER (NEW COMPONENT 4)
             ANIMATIONS: Shimmer Sheen Gliding Across Banner
         ======================================================== */}
      <section className="w-full py-6 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#DCE9E5]">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.25 } }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group"
        >
          {/* Shimmer gleam sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-gleam pointer-events-none z-20"></div>

          <img 
            src="/images/linkedin-banner.png" 
            alt="Follow IndieCare AI on LinkedIn" 
            className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          <a 
            href="https://linkedin.com/company/indiecare-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-30"
            title="Open IndieCare AI LinkedIn"
          >
            <span className="sr-only">Follow us on LinkedIn</span>
          </a>
        </motion.div>
      </section>


      {/* ========================================================
          10. CALLBACK FORM + FAQS SPLIT SECTION (NEW COMPONENT 5)
              (From Screenshot 5: Dark Form on Left + 9 Accordions on Right)
              BALANCED HEIGHT: items-stretch + h-full flex flex-col
         ======================================================== */}
      <section className="w-full bg-[#F4F9F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Dark Slate Callback Form (5 cols) — Equal Vertical Height */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="h-full bg-[#16222F] text-white p-7 sm:p-9 rounded-3xl shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden">
                {/* Shimmer light pass */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-gleam pointer-events-none"></div>

                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#289E92]/20 border border-[#289E92]/40 text-[#289E92] text-[11px] font-bold uppercase tracking-wider mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Request a Call Back</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    How can we help you manage stray dogs?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Leave your organization details below. Our municipal coordinators and field leads will reach out within 24 hours.
                  </p>
                </div>

                {callbackSent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-950/80 border border-emerald-500/50 p-8 rounded-2xl text-center space-y-3 my-auto"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7 stroke-[3] animate-pulse" />
                    </div>
                    <strong className="text-white text-base block font-bold">Callback Request Received!</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Our field team has logged your inquiry. A senior stray dog management coordinator will contact you at your preferred number.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-4 my-auto">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Full Name <span className="text-[#289E92]">*</span>
                      </label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Enter Your Name" 
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                          Email Address <span className="text-[#289E92]">*</span>
                        </label>
                        <input 
                          required 
                          type="email" 
                          placeholder="Enter Your Email Address" 
                          className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                          Mobile Number <span className="text-[#289E92]">*</span>
                        </label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="Enter your mobile number" 
                          className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Organization / Entity Type
                      </label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92]"
                        defaultValue="campus"
                      >
                        <option value="campus">Corporate / Industrial Campus</option>
                        <option value="municipal">Municipal Corporation / Local Body</option>
                        <option value="rwa">Housing Society / RWA</option>
                        <option value="ngo">Animal Welfare NGO / Shelter</option>
                        <option value="feeder">Community Feeder / Independent Caregiver</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Message &amp; Site Details
                      </label>
                      <textarea 
                        rows="4" 
                        required 
                        placeholder="Tell us about your campus, city, estimated stray dog population, or specific requirements..." 
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400 resize-none transition-all"
                      ></textarea>
                    </div>

                    {/* reCAPTCHA Simulation Box */}
                    <div className="p-3 bg-white rounded-xl border border-slate-300 flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" required className="w-5 h-5 rounded text-[#289E92] focus:ring-0 cursor-pointer" />
                        <span className="text-xs font-semibold text-slate-700">I'm not a robot</span>
                      </label>
                      <div className="flex flex-col items-center">
                        <img 
                          src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                          alt="reCAPTCHA" 
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-[7px] text-slate-400 font-mono">reCAPTCHA</span>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full py-3.5 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#289E92]/30 flex items-center justify-center gap-2"
                    >
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </motion.button>
                  </form>
                )}

                {/* Direct Helpline & Response Guarantee at bottom */}
                <div className="pt-4 border-t border-slate-700/70 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Guaranteed 24-Hour Response</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">ABC Rules 2023</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Direct Grievance Helpline</span>
                      <a href="tel:+919004843851" className="text-sm font-bold text-white hover:text-[#289E92] transition-colors flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#289E92]" />
                        <span>+91 9004843851</span>
                      </a>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Support Desk</span>
                      <span className="text-[11px] font-semibold text-[#289E92]">Mon–Sat 9AM–7PM</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: 9-Question FAQ Accordion (7 cols) with Smooth AnimatePresence */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#289E92] uppercase tracking-widest block">
                  Learn More From
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#172E2D] tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-2.5 pt-1 flex-grow">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-xs hover:shadow-md hover:border-[#289E92]/40"
                    >
                      <button 
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#172E2D] hover:text-[#104C4B] transition-colors"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <motion.span 
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="w-6 h-6 rounded-full bg-[#EBF5F3] text-[#104C4B] flex items-center justify-center shrink-0"
                        >
                          {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#617472] leading-relaxed border-t border-slate-100 bg-[#FAFBFB]">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================
          11. READ OUR LATEST INSIGHTS (NEW COMPONENT 6)
             ANIMATIONS: Staggered Cards, Image Depth Zoom, Hover Elevation
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Read Our Latest Insights
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] max-w-xl mx-auto">
              Field updates, technological innovations, and policy perspectives shaping India's humane street dog management landscape.
            </p>
          </motion.div>

          {/* 4 Insights Cards Grid — Bigger, High-Resolution, Staggered Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {INSIGHTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#289E92] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Photo with Category Badge — Clean High-Resolution 600x360 Photo */}
                  <div className="relative aspect-[16/11] bg-slate-900 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
                    <span className={`absolute top-3 right-3 ${item.tagColor} text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider backdrop-blur-xs`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Body — Clean Single Title & Excerpt */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-base text-[#172E2D] group-hover:text-[#104C4B] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#617472] leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>

                    <Link 
                      to={item.link} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] group-hover:text-[#138038] hover:underline pt-2 uppercase tracking-wide group"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Published Date Bar */}
                <div className="px-5 py-3.5 border-t border-slate-100 text-[11px] text-slate-400 bg-slate-50/50">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>

          {/* "Show More" Button with Spring Motion */}
          <div className="text-center pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-colors"
              >
                Show More
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
