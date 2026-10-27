import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiScannerModal from './components/AiScannerModal';

// Pages
import Home from './pages/Home';
import DogAadhaar from './pages/DogAadhaar';
import Solutions from './pages/Solutions';
import Adopt from './pages/Adopt';
import IncidentReport from './pages/IncidentReport';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F7F8F6] text-[#172E2D] antialiased font-sans overflow-x-hidden">
      <ScrollToTop />
      
      {/* Global Navigation Header (Full Width) */}
      <Navbar onOpenScanner={() => setIsScannerOpen(true)} />

      {/* Main Content Area (Full Width) */}
      <main className="w-full flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenScanner={() => setIsScannerOpen(true)} />} />
          <Route path="/dog-aadhaar" element={<DogAadhaar onOpenScanner={() => setIsScannerOpen(true)} />} />
          <Route path="/solutions" element={<Solutions onOpenScanner={() => setIsScannerOpen(true)} />} />
          <Route path="/adopt" element={<Adopt onOpenScanner={() => setIsScannerOpen(true)} />} />
          <Route path="/report" element={<IncidentReport />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global Footer (Full Width) */}
      <Footer />

      {/* Interactive Simulated Biometric Camera Modal */}
      <AiScannerModal 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
      />
    </div>
  );
}
