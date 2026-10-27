// Comprehensive Verified Data for IndieCare AI Platform

// -------------------------------------------------------------
// 1. Homepage Editorial Redesign Data (Teal-and-White Identity)
// -------------------------------------------------------------

export const CREDIBILITY_PARTNERS = [
  {
    name: 'SMILE Council of BMC',
    fullTitle: 'Society for Mumbai Incubation Lab to Entrepreneurship Council',
    role: 'Incubated by Municipal Lab of Mumbai',
    status: 'Incubation Partner',
    description: 'Empaneled by Brihanmumbai Municipal Corporation to incubate scientific civic-tech and stray animal management innovations.',
    badge: 'Municipal Incubation'
  },
  {
    name: 'SINE at IIT Bombay',
    fullTitle: 'Society for Innovation and Entrepreneurship, IIT Bombay',
    role: 'Deep-Tech Incubation Partner',
    status: 'Incubation Partner',
    description: 'Nurtured within India’s leading institutional deep-technology incubator for scalable AI computer vision systems.',
    badge: 'Institutional Partner'
  },
  {
    name: 'IIT Guwahati',
    fullTitle: 'Indian Institute of Technology Guwahati',
    role: 'Technology Validated',
    status: 'Validation Authority',
    description: 'Core canine biometric recognition and algorithmic models academically evaluated for accuracy in natural outdoor lighting.',
    badge: 'Academic Validation'
  }
];

export const CORE_CAPABILITIES = [
  {
    id: 'enumeration',
    title: 'Dog Enumeration & Population Surveys',
    description: 'Execute ward-by-ward digital censuses with GPS-stamped photo entries, demographic clustering, and ABC sterilization gap analysis.',
    icon: 'MapPin',
    highlight: 'Ward-level GIS precision'
  },
  {
    id: 'identification',
    title: 'Digital Dog Identification & Profiling',
    description: 'Generate immutable "Dog Aadhaar" digital records using non-invasive canine facial biometrics, muzzle geometry, and unique fur patterns.',
    icon: 'Scan',
    highlight: 'Zero-contact identification'
  },
  {
    id: 'vaccination',
    title: 'Vaccination & Healthcare Tracking',
    description: 'Log Anti-Rabies Vaccination (ARV) batch numbers, monitor annual booster schedules, and visualize neighborhood herd immunity in real time.',
    icon: 'ShieldCheck',
    highlight: 'Verified digital health cards'
  },
  {
    id: 'sterilization',
    title: 'Sterilization Support & Monitoring',
    description: 'Enforce strict compliance with Animal Birth Control (ABC) Rules 2023 through geo-verified capture and release location matching.',
    icon: 'Activity',
    highlight: 'ABC Rules 2023 compliant'
  },
  {
    id: 'reporting',
    title: 'Incident Reporting & Coordinated Action',
    description: 'Provide citizens and municipal squads a 24/7 ticketing conduit for dog bites, injured street animals, and emergency medical triage.',
    icon: 'AlertCircle',
    highlight: 'Fast community dispatch'
  },
  {
    id: 'management',
    title: 'Municipal & Institutional Program Management',
    description: 'Centralized admin dashboards tailored for city corporations, high-risk industrial campuses, animal shelters, and veterinary teams.',
    icon: 'Building2',
    highlight: 'Multi-stakeholder command'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'On-Street Photo Capture',
    description: 'Field workers or citizens take a natural photograph of a free-roaming dog from 1 to 3 metres away using a standard mobile phone.',
    detail: 'Automatic sub-meter geo-coordinates and timestamp are recorded.'
  },
  {
    step: '02',
    title: 'AI Biometric Feature Matching',
    description: 'Our proprietary computer vision models analyze facial landmark vectors, muzzle contours, ear notches, and distinct color distribution.',
    detail: 'Distinguishes individual street dogs without stressful physical restraining.'
  },
  {
    step: '03',
    title: 'Digital Dog Aadhaar Creation',
    description: 'The dog is assigned a permanent unique identification record containing its age estimate, sex, locality, and assigned community caregivers.',
    detail: 'Eliminates duplicate municipal counting and lost paper registers.'
  },
  {
    step: '04',
    title: 'Healthcare & Welfare Coordination',
    description: 'Authorised veterinarians log rabies vaccination batches, deworming, and surgical sterilization details directly to the dog’s digital record.',
    detail: 'Instant digital verification for inspectors, shelters, and residents.'
  },
  {
    step: '05',
    title: 'Active Program Monitoring',
    description: 'Authorities track territorial population dynamics, census density heatmaps, and resolve community grievances transparently.',
    detail: 'Measurable progress toward zero human-rabies transmission.'
  }
];

export const IMPLEMENTATIONS = [
  {
    category: 'City-Wide Municipal Enumeration',
    partner: 'Panvel Municipal Corporation',
    title: 'India’s First Ward-by-Ward AI Stray Dog Census',
    description: 'Deployed across urban and rural wards to replace manual clipboard tallies with photo-verified digital enumeration. Enabled the municipal health department to plan targeted Animal Birth Control drives based on verified data rather than guesswork.',
    metrics: ['Ward-by-ward GIS coverage', 'Zero duplicate counting', 'ABC operational roadmap'],
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'High-Risk Industrial Sites',
    partner: 'BPCL Industrial Premises & Campuses',
    title: 'Enterprise Coexistence & Campus Dog Management',
    description: 'High-risk facilities such as petroleum refineries and manufacturing plants require stringent worker safety. IndieCare deployed structured enumeration, collar QR pairing, and health tracking to establish peaceful coexistence and eliminate bite risks.',
    metrics: ['100% resident dog vaccination', 'Zero bite incidents recorded', 'Safety protocol alignment'],
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Humane Conditioning',
    partner: 'Free-Roaming Dog Welfare Units',
    title: 'Behavioral Training & Structured Feeding Protocols',
    description: 'Behavioral conditioning helps street dogs remain calm in high-footfall areas. By combining designated hygienic feeding stations with basic recall and human-greeting training, territorial aggression and food-guarding are significantly reduced.',
    metrics: ['Structured feeding zones', 'Recall & obedience conditioning', 'De-escalation of pack friction'],
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80'
  }
];

// -------------------------------------------------------------
// 2. Sample Dog Profiles for Aadhaar Simulator & Adoption Hub
// -------------------------------------------------------------

export const SAMPLE_DOGS = [
  {
    id: 'MH-04-IND-100076',
    name: 'Sheru',
    gender: 'Male',
    age: '2.5 Years',
    breed: 'Indian Pariah (Indie)',
    coat: 'Golden Brown with White Markings',
    location: 'Sector 19, Kharghar, Panvel Ward 12',
    status: 'Verified & Vaccinated',
    vaccinationStatus: 'Anti-Rabies Verified • Due Sep 2026',
    lastVaccineDate: '12 Sep 2025',
    nextDue: 'Sep 2026',
    sterilized: true,
    nfcTagId: 'QR-100076-PAN',
    temperament: 'Calm, friendly with pedestrians, food-conditioned',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    availableForAdoption: true,
    rescuer: 'Panvel Ward 12 Volunteer Unit',
    story: 'Sheru was enumerated during the Panvel municipal drive. Fully socialized, gentle, and food-conditioned.'
  },
  {
    id: 'MH-04-IND-100089',
    name: 'Rani',
    gender: 'Female',
    age: '3 Years',
    breed: 'Indie Desi',
    coat: 'Black & White Piebald',
    location: 'Refinery Campus Gate 3, Chembur',
    status: 'Campus Registered',
    vaccinationStatus: 'Fully Vaccinated (ARV + 9-in-1)',
    lastVaccineDate: '15 Jan 2025',
    nextDue: 'Jan 2026',
    sterilized: true,
    nfcTagId: 'QR-100089-REF',
    temperament: 'Gentle, mat-trained, campus habituated',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    availableForAdoption: false,
    rescuer: 'Campus Animal Welfare Unit',
    story: 'Rani is registered at the Chembur campus. Enjoys structured feeding routines and routine checkups.'
  },
  {
    id: 'MH-04-IND-1089',
    name: 'Kaju & Badam',
    gender: 'Pair (Female & Male)',
    age: '4 Months',
    breed: 'Indie Desi Pups',
    coat: 'Fawn & Piebald',
    location: 'Near SMILE Tech Hub, Andheri East',
    status: 'Ready for Foster / Adoption',
    vaccinationStatus: 'Puppy Shots Complete',
    lastVaccineDate: '04 Oct 2025',
    nextDue: 'Nov 2025',
    sterilized: false,
    nfcTagId: 'QR-99104-AND',
    temperament: 'Playful, curious, affectionate',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    availableForAdoption: true,
    rescuer: 'Andheri Rescuers Collective',
    story: 'Rescued from monsoon drainage and fostered. Vaccinated and looking for a loving home.'
  },
  {
    id: 'MH-04-IND-3199',
    name: 'Tara',
    gender: 'Female',
    age: '1.5 Years',
    breed: 'Classic Indie',
    coat: 'Black & Tan with Hazel Eyes',
    location: 'Sector 5, Airoli Bridge Junction',
    status: 'Treated & Recovered',
    vaccinationStatus: 'Fully Vaccinated',
    lastVaccineDate: '22 Aug 2025',
    nextDue: 'Aug 2026',
    sterilized: true,
    nfcTagId: 'QR-77123-AIR',
    temperament: 'Affectionate, walks on leash',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    availableForAdoption: true,
    rescuer: 'Airoli Stray Caregivers Network',
    story: 'Completely healed and evaluated for adoption readiness.'
  }
];

// -------------------------------------------------------------
// 3. Backward Compatible Exports for Subpages (Solutions, etc.)
// -------------------------------------------------------------

export const SERVICES = [
  {
    id: 'enumeration',
    title: 'Scientific Enumeration & GIS Census',
    subtitle: 'Replacing manual clipboards with geo-stamped spatial intelligence',
    description: 'Ward-by-ward mobile survey that maps stray dog populations, identifies density clusters, and calculates precise sterilization ratios.',
    badge: 'Civic Core',
    icon: 'MapPin',
    stats: '100% Ward Coverage',
    bullets: [
      'Sub-meter GPS tagging with photo evidence',
      'Population demographic breakdowns (pups, lactating, packs)',
      'Automated sterilization gap calculation (ABC compliance)',
      'Real-time municipal admin command dashboard'
    ]
  },
  {
    id: 'aadhaar',
    title: 'Dog Aadhaar & AI Canine Biometrics',
    subtitle: 'Canine facial recognition & NFC digital ID',
    description: 'Just one camera snap identifies an individual dog from muzzle geometry, ear notches, and distinct fur patterns. Links directly to lifetime medical records.',
    badge: 'Patent Pending AI',
    icon: 'ScanFace',
    stats: '98.6% Accuracy',
    bullets: [
      'Zero-contact facial recognition from 1-3 meters',
      'Dual-layer verification with lightweight QR/NFC collars',
      'Cloud medical history updated by authorized vets & volunteers',
      'Lost dog & relocation alert matching across zones'
    ]
  },
  {
    id: 'veterinary',
    title: 'TNR & Anti-Rabies Vaccination Ops',
    subtitle: 'End-to-end Trap-Neuter-Return surgical lifecycle tracking',
    description: 'Digitizes every step of Animal Birth Control (ABC) — from humane catch and pre-op quarantine to surgery and release at exact capture coordinates.',
    badge: 'Govt Compliant',
    icon: 'Activity',
    stats: 'Zero Misplacements',
    bullets: [
      'Strict release coordinate validation via geo-fencing',
      'Digital vaccine batch tracking with QR-coded certificates',
      'Rabies immunity heatmaps for municipal public health',
      'Surgeon logs and post-operative recovery monitoring'
    ]
  },
  {
    id: 'campus',
    title: 'Campus & Industrial Site Dog Management',
    subtitle: 'Humane coexistence programs for corporate and industrial campuses',
    description: 'Customized animal welfare programs for refineries, tech parks, factories, and university campuses. Eliminates aggressive pack behavior through structured feeding.',
    badge: 'Enterprise',
    icon: 'Building2',
    stats: 'Used by BPCL Sites',
    bullets: [
      'Designated hygienic feeding zone mapping & monitoring',
      'Basic obedience and human-desensitization training',
      'Campus safety protocol integration and zero-bite milestones',
      'Employee engagement & volunteer animal committee software'
    ]
  },
  {
    id: 'reporting',
    title: 'Citizen Incident & Bite Grievance Redressal',
    subtitle: 'Instant reporting pipeline from street sighting to rescue',
    description: 'Allows citizens and local residents to report aggressive incidents, injured strays, sick dogs, or illegal relocation with immediate ticketing.',
    badge: 'Citizen 311',
    icon: 'AlertCircle',
    stats: '< 45 min Dispatch',
    bullets: [
      'WhatsApp bot & web app photo reporting with automated GPS',
      'Priority triage: emergency trauma vs non-urgent vaccination',
      'Transparent tracking updates sent directly to reporter',
      'Reduction in human-animal conflicts through fast mediation'
    ]
  },
  {
    id: 'adoption',
    title: 'Verified Stray Adoption & Fostering Hub',
    subtitle: 'Giving India’s resilient Indies the loving homes they deserve',
    description: 'Direct showcase of fully evaluated, vaccinated, and socialized street dogs ready for family homes.',
    badge: 'Community',
    icon: 'HeartHandshake',
    stats: '3,000+ Rehomed',
    bullets: [
      'Behavior and temperament assessment scorecards',
      'Home-check verification and digital adoption deed',
      'Pre-adoption foster-to-adopt trial workflow',
      'Post-adoption booster reminders and community support'
    ]
  }
];

export const STATS = [
  { value: '48,500+', label: 'Dogs Digitally Enumerated', change: '+18% this quarter' },
  { value: '98.6%', label: 'AI Facial Match Precision', change: 'Patent-pending canine biometrics' },
  { value: '24,200+', label: 'Rabies Vaccinations Tracked', change: '100% digital batch verification' },
  { value: '18 Wards', label: 'Municipal Coverage Active', change: 'Panvel, Navi Mumbai & expanding' },
  { value: '3,100+', label: 'Successful Adoptions & Fosters', change: 'Verified pet-parent tracking' }
];

export const TRUSTED_PARTNERS = [
  { name: 'Panvel Municipal Corporation', role: 'Municipal Enumeration Partner', tag: 'Govt Partner' },
  { name: 'SMILE Council of BMC', role: 'Incubation Partner', tag: 'Incubation Partner' },
  { name: 'SINE at IIT Bombay', role: 'Deep-Tech Incubation Partner', tag: 'Incubation Partner' },
  { name: 'IIT Guwahati', role: 'Technology Validated', tag: 'Validation Authority' },
  { name: 'BPCL Industrial Sites', role: 'Campus Dog Management Drive', tag: 'Corporate Pilot' }
];

export const STAKEHOLDERS = [
  {
    id: 'municipalities',
    label: 'Municipal Corporations',
    tagline: 'Achieve zero-rabies and compliance with ABC Rules 2023',
    description: 'Transform stray dog management into an accountable, transparent, data-driven municipal service with GIS census and veterinary performance dashboards.',
    highlights: [
      'Ward-by-ward digital census dashboards',
      'Anti-Rabies Vaccination (ARV) coverage tracking',
      'Contractor SLA & surgical accountability monitoring',
      'Citizen grievance automated escalation'
    ],
    cta: 'Book Municipal Pilot Demo',
    caseStudy: 'Panvel Municipal Corporation surveyed over 30,000+ dogs across 20 wards in record time with 0 manual paperwork.'
  },
  {
    id: 'corporates',
    label: 'Corporates & Campuses',
    tagline: 'Ensure campus safety while honoring animal welfare CSR',
    description: 'Manage stray dog populations in oil refineries, IT parks, and industrial premises safely, legally, and humanely.',
    highlights: [
      'Structured feeding zone management',
      'Professional pack de-escalation & behavior training',
      'Daily census and health logbook for security teams',
      'CSR compliance reporting and ESG credits'
    ],
    cta: 'Request Campus Assessment',
    caseStudy: 'Deployed at BPCL facilities to safely manage resident dogs with 0 bite incidents and full employee coexistence.'
  },
  {
    id: 'ngos',
    label: 'NGOs & Dog Shelters',
    tagline: 'Shelter management software built specifically for street animals',
    description: 'Track every intake, outpatient treatment, sterilization batch, and foster placement with canine facial scans.',
    highlights: [
      'Digital patient case sheets with photo timeline',
      'Inventory management for vaccines and surgical kits',
      'Foster & adoption screening workflow',
      'Donor report generation with verifiable impact metrics'
    ],
    cta: 'Get Free NGO Access',
    caseStudy: 'Shelters save 12+ hours every week on filing and cross-referencing repeat animal treatments.'
  },
  {
    id: 'caregivers',
    label: 'Community Caregivers & Citizens',
    tagline: 'Neighborhood dog care, unified in your pocket',
    description: 'Log daily feeds, report sick strays, get vaccination reminders for street packs, and connect with nearby veterinarians.',
    highlights: [
      'Dog Aadhaar card generator for street dogs you feed',
      'Instant alert when an unfamiliar dog enters your territory',
      'Subsidized sterilization slots booking',
      'Citizen volunteer badge & feeder identification card'
    ],
    cta: 'Register as Community Feeder',
    caseStudy: 'Over 4,500 active community feeders use IndieCare daily to coordinate morning and evening feeding rounds.'
  }
];

export const FAQS = [
  {
    q: "What is IndieCare AI and how does it work?",
    a: "IndieCare AI is an artificial intelligence platform that uses computer vision, canine facial recognition, and geolocation data to create unique digital profiles ('Dog Aadhaar') for free-roaming and stray dogs."
  },
  {
    q: "How does the 'Dog Aadhaar' AI facial recognition work?",
    a: "Every dog possesses unique facial features, including muzzle wrinkle geometry, ear notches, fur color gradients, and eye spacing. Our AI model analyzes photos taken on any standard smartphone to match the dog with an accuracy rate of 98.6%."
  },
  {
    q: "How does IndieCare comply with the Animal Birth Control (ABC) Rules 2023?",
    a: "IndieCare is architected strictly around the Ministry's Animal Birth Control Rules 2023. Our GPS-verified capture and release module guarantees that sterilized dogs are safely released back into the exact territorial pocket they were picked up from."
  }
];
