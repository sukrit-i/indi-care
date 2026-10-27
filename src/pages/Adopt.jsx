import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  Search, 
  X, 
  Send, 
  Sparkles,
  PawPrint
} from 'lucide-react';
import { SAMPLE_DOGS } from '../data/mockData';

export default function Adopt({ onOpenScanner }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedDogForInquiry, setSelectedDogForInquiry] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredDogs = SAMPLE_DOGS.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dog.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dog.breed.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'adoptable') return matchesSearch && dog.availableForAdoption;
    if (filterType === 'puppy') return matchesSearch && dog.age.includes('Month');
    return matchesSearch;
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedDogForInquiry(null);
    }, 2000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F3] border border-[#D0EBE5] text-[#104C4B] text-xs sm:text-sm font-bold">
          <Heart className="w-4 h-4 text-[#289E92] fill-[#289E92]" />
          <span>Indie Adoption &amp; Foster Hub</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172E2D] tracking-tight leading-tight">
          Give an Indian Indie a Forever Home
        </h1>
        <p className="text-[#617472] text-sm sm:text-base leading-relaxed">
          Every rescued Indie listed here has been digitally enumerated, vaccinated against rabies, dewormed, and assessed for temperament.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by dog name, ward, or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              filterType === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Dogs ({SAMPLE_DOGS.length})
          </button>
          <button
            onClick={() => setFilterType('adoptable')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              filterType === 'adoptable' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Ready for Adoption
          </button>
          <button
            onClick={() => setFilterType('puppy')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              filterType === 'puppy' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Puppies (Under 6 Mos)
          </button>
        </div>
      </div>

      {/* Dogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDogs.map((dog) => (
          <div 
            key={dog.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-400 transition-all flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img 
                src={dog.image} 
                alt={dog.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md">
                {dog.id}
              </div>
              <span className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                {dog.availableForAdoption ? 'Adoptable' : 'Campus Protected'}
              </span>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-extrabold text-lg text-slate-900">{dog.name}</h3>
                  <span className="text-xs text-slate-500 font-semibold">{dog.gender}</span>
                </div>

                <p className="text-xs text-brand-600 font-semibold">{dog.breed} • {dog.age}</p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{dog.location}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mt-2 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
                  "{dog.story}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => setSelectedDogForInquiry(dog)}
                  className="w-full py-2.5 text-center rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Adopt / Foster {dog.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Adopt an Indie? Info Section */}
      <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Adopt an Indian Indie Dog?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Centuries of natural selection have made Indian native dogs the most resilient, loving, and intelligent canine companions on earth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-emerald-600 font-bold text-sm block">🛡️ Superior Immunity</span>
            <p className="text-xs text-slate-600">
              High natural resistance to tropical infections, skin diseases, and tick fever compared to fragile foreign breeds.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-brand-500 font-bold text-sm block">☀️ Climate Adaptive</span>
            <p className="text-xs text-slate-600">
              Short, sleek coat designed naturally for humid summers and monsoons. No intense artificial air conditioning needed.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-indigo-600 font-bold text-sm block">🧠 High Street IQ</span>
            <p className="text-xs text-slate-600">
              Quick problem-solvers, highly alert, and naturally potty-trained with minimal guidance.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-amber-600 font-bold text-sm block">❤️ Unconditional Loyalty</span>
            <p className="text-xs text-slate-600">
              Rescued street dogs form deep, unbreakable bonds of gratitude with the family that welcomes them.
            </p>
          </div>
        </div>
      </div>

      {/* Modal / Inquiry Drawer */}
      {selectedDogForInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl relative">
            <button 
              onClick={() => setSelectedDogForInquiry(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inquiry Received!</h3>
                <p className="text-xs text-slate-600">
                  Our adoption coordinator and local caregiver will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <img 
                    src={selectedDogForInquiry.image} 
                    alt={selectedDogForInquiry.name} 
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-extrabold text-slate-900">Adopt {selectedDogForInquiry.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{selectedDogForInquiry.id}</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <input required type="text" placeholder="e.g. Ananya Sharma" className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number (WhatsApp)</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your City / Locality</label>
                  <input required type="text" placeholder="e.g. Bandra West, Mumbai" className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Housing Type &amp; Pet Experience</label>
                  <textarea rows="2" placeholder="Apartment / Independent house, prior dog experience..." className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Adoption Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
