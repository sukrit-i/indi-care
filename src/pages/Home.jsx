import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
         ======================================================== */}
      <section className="relative w-full min-h-[540px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background Full Photographic Scene (Crisp Dog Photo) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=90" 
            alt="Stray Dog Management for High-Risk Industrial Sites"
            className="w-full h-full object-cover object-center brightness-100 contrast-[1.02]"
          />
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/35 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Container — Centered & Proportionally Balanced */}
        <div className="relative z-10 w-full max-w-xl lg:max-w-2xl mx-auto flex justify-center">
          
          {/* Solid White Centered Card */}
          <div className="w-full bg-white p-7 sm:p-9 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-5 text-center animate-fade-in">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF5F3] text-[#104C4B] text-[11px] font-extrabold uppercase tracking-wider border border-[#D0EBE5] shadow-xs mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#289E92]" />
              <span>Field Verified Technology</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#104C4B] tracking-tight leading-snug max-w-xl mx-auto">
              Stray Dog Management for High-Risk Industrial Sites
            </h1>

            {/* Subhead */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
              End-to-end dog population management for your site through <strong className="text-[#104C4B] font-semibold">Scientific Enumeration</strong>, AI Registration, Deworming, Vaccination, Sterilization, Medical Records &amp; First Aid Management.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#289E92]/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Book Site Assessment</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </Link>

              <button
                type="button"
                onClick={onOpenScanner}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1F262B] hover:bg-[#151B1F] text-white font-bold text-xs sm:text-sm shadow transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Scan className="w-4 h-4 text-[#289E92]" />
                <span>Try AI Face Scan</span>
              </button>
            </div>

            {/* Trust Signals Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-500 font-semibold">
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

          </div>

        </div>

      </section>


      {/* ========================================================
          2. THE 4 REAL SMARTPHONE FEATURE MOCKUPS
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
              Just One Photo Gives You A Stray Dog's ID, Location, Medical History &amp; Incidence Reporting
            </h2>
            <p className="text-sm sm:text-base text-[#617472]">
              Tap into India's first digital canine registry on standard mobile phones. No invasive microchips or painful tags.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F7F8F6] p-5 rounded-3xl border border-[#DCE9E5] shadow-card-soft hover:shadow-card-hover transition-all flex flex-col items-center text-center space-y-4">
              <div>
                <h3 className="text-lg font-black text-[#104C4B]">Dog Aadhaar</h3>
                <p className="text-xs text-[#617472] mt-0.5">Get info of Age, Breed, Gender, Caregiver &amp; more</p>
              </div>
              <PhoneFrame><DogAadhaarScreen /></PhoneFrame>
            </div>

            <div className="bg-[#F7F8F6] p-5 rounded-3xl border border-[#DCE9E5] shadow-card-soft hover:shadow-card-hover transition-all flex flex-col items-center text-center space-y-4">
              <div>
                <h3 className="text-lg font-black text-[#104C4B]">Location</h3>
                <p className="text-xs text-[#617472] mt-0.5">See both Registered &amp; Scanned locations of dog</p>
              </div>
              <PhoneFrame><LocationScreen /></PhoneFrame>
            </div>

            <div className="bg-[#F7F8F6] p-5 rounded-3xl border border-[#DCE9E5] shadow-card-soft hover:shadow-card-hover transition-all flex flex-col items-center text-center space-y-4">
              <div>
                <h3 className="text-lg font-black text-[#104C4B]">Vaccination</h3>
                <p className="text-xs text-[#617472] mt-0.5">View Vaccine Details &amp; Due Date, Sterilization Status &amp; more</p>
              </div>
              <PhoneFrame><VaccinationScreen /></PhoneFrame>
            </div>

            <div className="bg-[#F7F8F6] p-5 rounded-3xl border border-[#DCE9E5] shadow-card-soft hover:shadow-card-hover transition-all flex flex-col items-center text-center space-y-4">
              <div>
                <h3 className="text-lg font-black text-[#104C4B]">Report a Dog</h3>
                <p className="text-xs text-[#617472] mt-0.5">Trigger alerts for Bites, Injuries Or Dog Needing Help</p>
              </div>
              <PhoneFrame><ReportScreen /></PhoneFrame>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          3. CREDIBILITY & VALIDATION SECTION
             "BACKED BY INDIA'S BEST — Incubated & Validated"
         ======================================================== */}
      <section className="w-full bg-[#F7F8F6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto text-center space-y-9">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#289E92] uppercase tracking-widest block">
              BACKED BY INDIA'S BEST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight">
              Incubated &amp; Validated
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] max-w-2xl mx-auto leading-relaxed">
              IndieCare AI Solutions Private Limited is incubated by the <strong className="text-[#104C4B] font-bold">SMILE Council of BMC</strong> &amp; by <strong className="text-[#104C4B] font-bold">SINE at IIT Bombay</strong>. Its technology has been validated by <strong className="text-[#104C4B] font-bold">IIT Guwahati</strong> for building scientific humane stray dog management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              <BmcSmileLogo />
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              <SineIitBombayLogo />
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              <IitGuwahatiLogo />
            </div>
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
         ======================================================== */}
      <section className="w-full bg-[#104C4B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Implement a Stray Dog Management Program at Your Site
              </h2>
              <p className="text-xs sm:text-sm text-teal-soft leading-relaxed max-w-lg">
                Connect with IndieCare AI to deploy baseline surveys, AI biometric registration, designated feeding spots, and veterinary care at your facility.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black border border-white/20 hover:border-white/40 shadow-lg transition-transform hover:scale-105"
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
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                >
                  Book Program Demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-white text-slate-800 p-5 rounded-3xl shadow-2xl border-4 border-white/20 text-left space-y-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80" 
                    alt="Rani Dog Aadhaar" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    Campus Resident
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
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          6. TRAINING—FREE-ROAMING DOGS (NEW COMPONENT 1)
             (From Screenshot 1: 3 Video Cards with Trainers)
         ======================================================== */}
      <section className="w-full bg-[#F4F9F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Training—Free-Roaming Dogs
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] leading-relaxed">
              Behaviour training isn't just about commands, it's about reducing stress, building trust, and creating safer public spaces. These sessions demonstrate how structured guidance helps community dogs stay calm, responsive, and confident in everyday situations.
            </p>
          </div>

          {/* 3 Video Cards Grid matching Screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Recall Training */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full max-w-[270px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative group">
                <img 
                  src="/images/train-recall.png" 
                  alt="Recall Training session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#104C4B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-[#104C4B] ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-1 max-w-[260px]">
                <h3 className="font-bold text-base text-[#104C4B]">Recall Training</h3>
                <p className="text-[11px] text-[#617472] leading-snug">
                  Recall training helps Ash respond reliably to guidance, building trust and making her safer and easier to manage.
                </p>
              </div>
            </div>

            {/* Card 2: Basic Obedience */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full max-w-[270px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative group">
                <img 
                  src="/images/train-obedience.png" 
                  alt="Basic Obedience training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#104C4B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-[#104C4B] ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-1 max-w-[260px]">
                <h3 className="font-bold text-base text-[#104C4B]">Basic Obedience</h3>
                <p className="text-[11px] text-[#617472] leading-snug">
                  Teaching calm pedestrian greetings and eliminating territorial barking around high-traffic campus zones.
                </p>
              </div>
            </div>

            {/* Card 3: Mat Training */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full max-w-[270px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative group">
                <img 
                  src="/images/train-mat.png" 
                  alt="Mat Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#104C4B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-[#104C4B] ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-1 max-w-[260px]">
                <h3 className="font-bold text-base text-[#104C4B]">Mat Training</h3>
                <p className="text-[11px] text-[#617472] leading-snug">
                  Habituating community dogs to dedicated rest mats away from high-risk machinery and vehicle routes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          7. STRUCTURED FEEDING DRIVES THAT GO BEYOND NOURISHMENT (NEW COMPONENT 2)
             (From Screenshot 2: Carousel with 3 Real Trough Photos)
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            {/* Carousel navigation controls */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <button 
                type="button"
                className="w-8 h-8 rounded-lg bg-[#397B78] text-white flex items-center justify-center hover:bg-[#289E92] shadow transition-colors"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                type="button"
                className="w-8 h-8 rounded-lg bg-[#397B78] text-white flex items-center justify-center hover:bg-[#289E92] shadow transition-colors"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Structured Feeding Drives That Go Beyond Nourishment
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] leading-relaxed max-w-2xl mx-auto">
              When stray dogs are left to survive on leftovers, spicy food, or garbage, their health is affected. By providing safe &amp; balanced meals in a consistent and organized way, IndieCare AI improves their nourishment while gradually building trust between humans and dogs.
            </p>
          </div>

          {/* 3 Real Feeding Photos from Screenshot 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3] group">
              <img 
                src="/images/feeding-1.png" 
                alt="Caregiver in white IndieCare polo feeding pups at clean trough" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3] group">
              <img 
                src="/images/feeding-2.png" 
                alt="Two dogs feeding peacefully side by side from a raised metal trough" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3] group">
              <img 
                src="/images/feeding-3.png" 
                alt="Caregiver serving fresh food into the trough while dogs eat calmly" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          8. FOLLOW US ON YOUR INSTAGRAM (NEW COMPONENT 3)
             (From Screenshot 3: Profile Header + 4 Posts)
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

          {/* 4 Instagram Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-square group bg-slate-900 relative">
              <img src="/images/ig-1.png" alt="Instagram Post 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-square group bg-slate-900 relative">
              <img src="/images/ig-2.png" alt="Instagram Post 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-square group bg-slate-900 relative">
              <img src="/images/ig-3.png" alt="Instagram Post 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-square group bg-slate-900 relative">
              <img src="/images/ig-4.png" alt="Instagram Post 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button 
              type="button" 
              className="px-6 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs uppercase tracking-wider shadow transition-colors"
            >
              LOAD MORE
            </button>
            <a 
              href="https://instagram.com/indiecare_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#E1306C] hover:bg-[#C13584] text-white font-extrabold text-xs flex items-center gap-1.5 shadow transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>

        </div>
      </section>


      {/* ========================================================
          9. FOLLOW US ON LINKEDIN BANNER (NEW COMPONENT 4)
             (From Screenshot 4: Wide Mint Banner with Worker & Phone)
         ======================================================== */}
      <section className="w-full py-6 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#DCE9E5]">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group">
          <img 
            src="/images/linkedin-banner.png" 
            alt="Follow IndieCare AI on LinkedIn" 
            className="w-full h-auto object-cover object-center"
          />
          <a 
            href="https://linkedin.com/company/indiecare-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            title="Open IndieCare AI LinkedIn"
          >
            <span className="sr-only">Follow us on LinkedIn</span>
          </a>
        </div>
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
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full bg-[#16222F] text-white p-7 sm:p-9 rounded-3xl shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6">
                
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
                  <div className="bg-emerald-950/80 border border-emerald-500/50 p-8 rounded-2xl text-center space-y-3 my-auto">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                    <strong className="text-white text-base block font-bold">Callback Request Received!</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Our field team has logged your inquiry. A senior stray dog management coordinator will contact you at your preferred number.
                    </p>
                  </div>
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
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400"
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
                          className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400"
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
                          className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400"
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
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#289E92] placeholder-slate-400 resize-none"
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

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-full bg-[#289E92] hover:bg-[#20897F] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#289E92]/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
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
            </div>

            {/* Right Column: 9-Question FAQ Accordion (7 cols) — Equal Vertical Height */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
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
                        <span className="w-6 h-6 rounded-full bg-[#EBF5F3] text-[#104C4B] flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#617472] leading-relaxed border-t border-slate-100 bg-[#FAFBFB]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          11. READ OUR LATEST INSIGHTS (NEW COMPONENT 6)
              (From Screenshot 6: 4 High-Res Cards + Show More)
              ENHANCED: Larger crisp display photos, rich excerpts, no duplicated text
         ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DCE9E5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D]">
              Read Our Latest Insights
            </h2>
            <p className="text-xs sm:text-sm text-[#617472] max-w-xl mx-auto">
              Field updates, technological innovations, and policy perspectives shaping India's humane street dog management landscape.
            </p>
          </div>

          {/* 4 Insights Cards Grid — Bigger, High-Resolution, Editorial Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {INSIGHTS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#289E92] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] group-hover:text-[#138038] hover:underline pt-2 uppercase tracking-wide"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>

                {/* Published Date Bar */}
                <div className="px-5 py-3.5 border-t border-slate-100 text-[11px] text-slate-400 bg-slate-50/50">
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          {/* "Show More" Button */}
          <div className="text-center pt-2">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Show More
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
