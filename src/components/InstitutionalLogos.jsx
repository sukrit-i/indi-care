import React from 'react';

// 1. SMILE Council of BMC (Society for Mumbai Incubation Lab to Entrepreneurship Council)
export function BmcSmileLogo() {
  return (
    <div className="flex flex-col items-center justify-between text-center h-full min-h-[160px] py-2">
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/logos/bmc-smile.png" 
          alt="Society for Mumbai Incubation Lab to Entrepreneurship Council (BMC)"
          className="h-20 sm:h-22 w-auto object-contain" 
        />
      </div>
      <p className="text-xs text-slate-500 font-medium max-w-[240px] leading-snug mt-3">
        Society for Mumbai Incubation Lab to Entrepreneurship Council
      </p>
    </div>
  );
}

// 2. SINE at IIT Bombay (Society for Innovation and Entrepreneurship)
export function SineIitBombayLogo() {
  return (
    <div className="flex flex-col items-center justify-between text-center h-full min-h-[160px] py-2">
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/logos/sine-iitb.png" 
          alt="SINE IIT Bombay Incubation Partner"
          className="h-14 sm:h-16 w-auto object-contain" 
        />
      </div>
      <p className="text-xs text-slate-500 font-medium max-w-[240px] leading-snug mt-3">
        Incubation Partner
      </p>
    </div>
  );
}

// 3. IIT Guwahati
export function IitGuwahatiLogo() {
  return (
    <div className="flex flex-col items-center justify-between text-center h-full min-h-[160px] py-2">
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/logos/iit-guwahati.png" 
          alt="IIT Guwahati Technology Validated"
          className="h-20 sm:h-22 w-auto object-contain" 
        />
      </div>
      <p className="text-xs text-slate-500 font-medium max-w-[240px] leading-snug mt-3">
        Technology Validated
      </p>
    </div>
  );
}
