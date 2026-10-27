import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  Download,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1926] text-white pt-16 pb-10 border-t border-[#1C2C3D] m-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Overview (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block py-1">
              <img 
                src="/indiecare-logo.png" 
                alt="IndieCare AI — Scientific Stray Dog Management" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div className="space-y-1">
              <p className="text-sm font-bold text-[#289E92]">Scientific Stray Dog Management</p>
              <p className="text-xs font-semibold text-slate-300">IndieCare AI Solutions Pvt. Ltd.</p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              IndieCare AI is a structured, scientific stray dog management platform. We combine implementation programs with tracking and monitoring so every action stays organised, consistent, and transparent.
            </p>

            <div className="pt-2 text-xs text-slate-300">
              <span className="text-slate-400 block mb-0.5">Contact Person for Grievances or Queries:</span>
              <a href="tel:+919004843851" className="font-bold text-[#289E92] hover:underline">
                +91 9004843851
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3 text-slate-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#289E92] hover:text-white transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/indiecare_ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#289E92] hover:text-white transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#289E92] hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#289E92] hover:text-white transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#289E92] hover:text-white transition-colors" title="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services (2.5 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/solutions" className="hover:text-white transition-colors">Scientific Enumeration / Survey</Link></li>
              <li><Link to="/dog-aadhaar" className="hover:text-white transition-colors">Tagging and Digital Profiling</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Veterinary Care For Stray</Link></li>
              <li><Link to="/solutions" className="text-[#289E92] font-semibold hover:underline">Stray Vaccination</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Dog Caregivers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">NGOs</Link></li>
              <li><Link to="/adopt" className="hover:text-white transition-colors">Stray Adoption</Link></li>
              <li><Link to="/adopt" className="hover:text-white transition-colors">Stray Fostering</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Community Outreach</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Clients &amp; Partners</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Newsletters</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Return &amp; Refund Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Shipping &amp; Delivery Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch & Newsletter (3.5 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Get In Touch
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <strong className="text-slate-200 block">Registered Address:</strong>
                <span>1902, A Wing, Oberoi Gardens, Thakur Village, Kandivali (E), Mumbai 400101</span>
              </div>

              <div>
                <strong className="text-slate-200 block">Admin Address:</strong>
                <span>SMILE Council, 1st Floor, A-Wing, 215-Kanakia Atrium-I, Beside Marriott Hotel, Andheri East, Mumbai 400059</span>
              </div>

              <div className="pt-1 flex flex-col gap-1">
                <span>Email: <a href="mailto:support@indiecare.ai" className="text-slate-200 hover:text-[#289E92]">support@indiecare.ai</a></span>
                <span>Phone: <a href="tel:+919004843851" className="text-slate-200 hover:text-[#289E92] font-semibold">+91 9004843851</a></span>
                <span>Hours: <span className="text-slate-200">Mon-Fri 9:00AM - 6:00PM</span></span>
                <span className="font-mono text-[11px] text-slate-500">CIN: U62011MH2024PTC426484</span>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2">Join Our Newsletter</span>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#289E92]"
                />
                <button 
                  type="button" 
                  onClick={() => alert('Thank you for subscribing to IndieCare AI newsletter!')}
                  className="w-full py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  SIGN UP
                </button>
              </div>
            </div>

            <div className="pt-1">
              <a 
                href="/about" 
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 underline"
              >
                <Download className="w-3.5 h-3.5 text-[#289E92]" />
                <span>Download Form 5A</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} IndieCare AI. All Rights Reserved.</p>
          <p>Design &amp; Developed By Avexora AI</p>
        </div>

      </div>
    </footer>
  );
}
