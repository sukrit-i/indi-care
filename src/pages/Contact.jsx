import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Building, 
  HeartHandshake
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F3] border border-[#D0EBE5] text-[#104C4B] text-xs sm:text-sm font-bold">
          <Mail className="w-4 h-4 text-[#289E92]" />
          <span>Connect With IndieCare AI</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Partner With Us for a Stray-Safe India
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          Whether you are a municipal commissioner, corporate campus safety head, NGO director, or concerned pet parent, we are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info & Office Addresses (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Communication</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-xs">Official Helpline</span>
                  <a href="tel:+919004843851" className="text-white font-bold hover:text-brand-400 transition-colors">
                    +91 9004843851
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-xs">Email Support</span>
                  <a href="mailto:support@indiecare.ai" className="text-white font-semibold hover:text-brand-400 transition-colors">
                    support@indiecare.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-xs">Working Hours</span>
                  <span className="text-slate-200">Monday to Friday: 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Offices */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Headquarters &amp; Innovation Labs</h3>
            
            <div className="space-y-5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Admin Lab (SMILE Incubation Council):</strong>
                  <p className="mt-0.5">
                    1st Floor, A-Wing, 215-Kanakia Atrium-I, Beside Marriott Hotel, Andheri East, Mumbai – 400059, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Registered Office:</strong>
                  <p className="mt-0.5">
                    IndieCare AI Solutions Pvt. Ltd., 1902, A Wing, Oberoi Gardens, Thakur Village, Kandivali (E), Mumbai – 400101, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contact / RFP Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Thank You for Connecting!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Our municipal and enterprise partnership team has received your message and will reach out to you within 1 business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Request Demo or Consultation</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details to explore a pilot deployment for your municipal ward, university, or corporate site.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <input required type="text" placeholder="e.g. Dr. Rajesh Kulkarni" className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Official Email Address</label>
                  <input required type="email" placeholder="name@organization.gov.in" className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Contact Phone</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Organization / Entity Type</label>
                  <select className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500">
                    <option>Municipal Corporation / Local Body</option>
                    <option>Corporate Campus / Industrial Site</option>
                    <option>Animal Welfare NGO / Shelter</option>
                    <option>Veterinary Clinic / Hospital</option>
                    <option>Housing Society / Gated Community</option>
                    <option>Independent Rescuer / Citizen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">City &amp; Estimated Stray Dog Population</label>
                <input type="text" placeholder="e.g. Navi Mumbai, approx 1,500 dogs across 4 wards" className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Requirements / Message</label>
                <textarea rows="4" required placeholder="Describe your current stray dog challenges, census requirements, ABC surgery tracking, or campus safety goals..." className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partnership Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
