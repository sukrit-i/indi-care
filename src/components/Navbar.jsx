import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Scan, 
  Heart, 
  MapPin, 
  Activity, 
  Building2, 
  AlertCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenScanner }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [stakeholdersDropdown, setStakeholdersDropdown] = useState(false);
  const location = useLocation();

  const servicesRef = useRef(null);
  const stakeholdersRef = useRef(null);

  // Close dropdowns on outside click or route change
  useEffect(() => {
    setServicesDropdown(false);
    setStakeholdersDropdown(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all font-sans">
      
      {/* --------------------------------------------------------
          1. TOP NOTIFICATION BAR (Vibrant Teal matching original)
         -------------------------------------------------------- */}
      <div className="w-full bg-[#289E92] text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between text-center">
          
          <Link 
            to="/adopt" 
            className="font-bold tracking-wide hover:underline inline-flex items-center gap-1.5 mx-auto sm:mx-0"
          >
            <span>Give an Indie a Forever Home.</span>
            <span className="font-extrabold text-amber-200">Click Here</span>
          </Link>

          {/* Right side contact snippet (desktop only) */}
          <div className="hidden md:flex items-center gap-4 text-[11px] font-medium text-white/90">
            <span>SMILE Council of BMC &amp; SINE IIT Bombay Incubated</span>
            <span className="text-white/40">|</span>
            <a href="tel:+919004843851" className="hover:underline flex items-center gap-1 font-semibold text-white">
              <Phone className="w-3 h-3 text-amber-200" />
              <span>+91 9004843851</span>
            </a>
          </div>

        </div>
      </div>

      {/* --------------------------------------------------------
          2. MAIN NAVBAR (Sleek Dark Slate #1F262B matching original)
         -------------------------------------------------------- */}
      <div className="w-full bg-[#1F262B] border-b border-[#2C363D] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo: Authentic IndieCare AI Logo */}
            <Link to="/" className="flex items-center py-1 group">
              <img 
                src="/indiecare-logo.png" 
                alt="IndieCare AI — Scientific Stray Dog Management" 
                className="h-12 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`py-1 transition-colors relative ${
                  isActive('/') 
                    ? 'text-white font-semibold border-b-2 border-[#289E92]' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* About Us */}
              <Link 
                to="/about" 
                className={`py-1 transition-colors ${
                  isActive('/about') 
                    ? 'text-white font-semibold border-b-2 border-[#289E92]' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                ref={servicesRef}
              >
                <button 
                  type="button"
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className={`flex items-center gap-1 py-1 transition-colors ${
                    isActive('/solutions') || servicesDropdown
                      ? 'text-white font-semibold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${servicesDropdown ? 'rotate-180 text-[#289E92]' : ''}`} />
                </button>

                {servicesDropdown && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-[#1B2227] border border-[#2D3941] shadow-2xl p-2.5 z-50 space-y-1 animate-fade-in">
                    <Link
                      to="/solutions"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Scientific Enumeration / Survey</strong>
                      <span className="text-[11px] text-slate-400">Ward-level GIS census &amp; mapping</span>
                    </Link>
                    <Link
                      to="/dog-aadhaar"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white flex items-center justify-between">
                        <span>Tagging &amp; Digital Profiling</span>
                        <span className="text-[9px] bg-[#289E92] text-white px-1.5 py-0.2 rounded font-bold">Dog Aadhaar</span>
                      </strong>
                      <span className="text-[11px] text-slate-400">Canine facial &amp; muzzle biometrics</span>
                    </Link>
                    <Link
                      to="/solutions"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Veterinary Care &amp; Vaccination</strong>
                      <span className="text-[11px] text-slate-400">Anti-rabies batch tracking &amp; TNR</span>
                    </Link>
                    <Link
                      to="/adopt"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white flex items-center gap-1">
                        <span>Stray Adoption &amp; Fostering</span>
                        <Heart className="w-3 h-3 text-[#289E92] fill-[#289E92]" />
                      </strong>
                      <span className="text-[11px] text-slate-400">Verified Indie rescue placements</span>
                    </Link>
                    <Link
                      to="/report"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Incident &amp; Grievance Reporting</strong>
                      <span className="text-[11px] text-slate-400">24/7 bite &amp; trauma dispatch desk</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Stakeholders Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setStakeholdersDropdown(true)}
                onMouseLeave={() => setStakeholdersDropdown(false)}
                ref={stakeholdersRef}
              >
                <button 
                  type="button"
                  onClick={() => setStakeholdersDropdown(!stakeholdersDropdown)}
                  className={`flex items-center gap-1 py-1 transition-colors ${
                    stakeholdersDropdown ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>Stakeholders</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${stakeholdersDropdown ? 'rotate-180 text-[#289E92]' : ''}`} />
                </button>

                {stakeholdersDropdown && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-[#1B2227] border border-[#2D3941] shadow-2xl p-2.5 z-50 space-y-1 animate-fade-in">
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Municipal Corporations</strong>
                      <span className="text-[11px] text-slate-400">ABC Rules 2023 &amp; ward administration</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Corporates &amp; Industrial Campuses</strong>
                      <span className="text-[11px] text-slate-400">BPCL model &amp; zero-bite safety protocols</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">NGOs &amp; Animal Shelters</strong>
                      <span className="text-[11px] text-slate-400">Intake records &amp; case sheet management</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <strong className="block text-white">Community Feeders &amp; Rescuers</strong>
                      <span className="text-[11px] text-slate-400">Feeding spots &amp; neighborhood pack tracking</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Dog Aadhaar */}
              <Link 
                to="/dog-aadhaar" 
                className={`py-1 transition-colors ${
                  isActive('/dog-aadhaar') 
                    ? 'text-white font-semibold border-b-2 border-[#289E92]' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Dog Aadhaar
              </Link>

              {/* Careers */}
              <Link 
                to="/about" 
                className="py-1 text-slate-300 hover:text-white transition-colors"
              >
                Careers
              </Link>

              {/* Projects */}
              <Link 
                to="/solutions" 
                className="py-1 text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </Link>

              {/* Media */}
              <Link 
                to="/about" 
                className="py-1 text-slate-300 hover:text-white transition-colors"
              >
                Media
              </Link>

            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              
              {/* Subtle AI Face Scan Pill */}
              <button
                onClick={onOpenScanner}
                type="button"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                title="Preview AI Canine Biometric Scanner"
              >
                <Scan className="w-3.5 h-3.5 text-[#289E92]" />
                <span>AI Face Scanner</span>
              </button>

              {/* Primary "Contact Us" Teal Pill Button (Exact match to original screenshot) */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#289E92] hover:bg-[#20897F] shadow-sm shadow-[#289E92]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Link>

            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenScanner}
                className="p-2 rounded-lg bg-white/10 text-white"
                aria-label="Scan Dog"
              >
                <Scan className="w-5 h-5 text-[#289E92]" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2C363D] bg-[#1B2227] px-4 pt-3 pb-6 space-y-2">
            <div className="grid gap-1 text-sm font-medium">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              >
                About Us
              </Link>
              <Link
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              >
                Services &amp; Solutions
              </Link>
              <Link
                to="/dog-aadhaar"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 flex items-center justify-between"
              >
                <span>Dog Aadhaar</span>
                <span className="text-[10px] bg-[#289E92] text-white px-2 py-0.5 rounded font-bold">AI Scanner</span>
              </Link>
              <Link
                to="/adopt"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              >
                Stray Adoption
              </Link>
              <Link
                to="/report"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              >
                Incident Desk (24/7)
              </Link>
            </div>

            <div className="pt-3 border-t border-[#2C363D] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScanner();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-white/10 text-white flex items-center justify-center gap-2 border border-white/20"
              >
                <Scan className="w-4 h-4 text-[#289E92]" />
                <span>Launch AI Face Scanner</span>
              </button>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-full text-center text-sm font-semibold bg-[#289E92] text-white block shadow"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
