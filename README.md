# 🐕 IndieCare AI — Modern UI Redesign & Multi-Page Platform

A redesign of [IndieCare.ai](https://indiecare.ai/) — India's premier AI-driven platform for scientific stray dog management, canine digital identification ("Dog Aadhaar"), and Animal Birth Control (ABC Rules 2023) compliance.

Built with **React 18 + Vite + Tailwind CSS + Lucide Icons + React Router**.

---

## 🚀 Quick Start (Running in your IDE)

To launch the web app with instant hot-reloading:

```bash
# 1. Start development server
npm run dev
```

The app will start at `http://localhost:3000/` and open automatically in your browser.

To generate an optimized production build:
```bash
npm run build
npm run preview
```

---

## 🌟 What Was Changed & Why (Redesign Highlights)

| Feature | Original WordPress Site (`indiecare.ai`) | Modern IndieCare Remake |
| :--- | :--- | :--- |
| **Visual Aesthetics** | Generic stock banners, dated WordPress blog aesthetic, inconsistent padding | High-impact GovTech / CivicTech SaaS styling (Linear / Stripe level polish), warm terracotta brand accents, crisp micro-interactions, dark glassmorphism preview cards |
| **Canine AI Face Scanner** | Static mention of "Dog Aadhaar" without real demonstration | **Interactive Simulated AI Scanner** with live viewfinder HUD, muzzle feature-point tracking (98.6% confidence), laser scanline, and instant Aadhaar pass generation |
| **Information Architecture** | Disorganized subpages and slow loading times | Modular multi-page React architecture with sticky header, instant route transitions, and responsive mobile drawer |
| **Stakeholder Navigation** | Long text blocks with unclear pathways | **Interactive Stakeholder Switcher Hub** catering to Municipalities, Corporates/Refineries, NGOs/Shelters, and Street Feeder Networks |
| **Adoption & Fostering** | Basic static text and email links | **Searchable & Filterable Adoption Hub** with live status tags, puppy filters, and 1-click adoption application drawer |
| **Incident Reporting** | Generic contact form | **Dedicated 24/7 Citizen Grievance Portal** with simulated GPS location grabber, incident triage (bite vs trauma rescue), and instant Ticket Reference generation |
| **Government Compliance** | Buried in sub-paragraphs | Highlighted throughout hero, footer, and cards: **Animal Birth Control (ABC) Rules 2023** compliance, Panvel Municipal Corp pilot, and SMILE Council incubation |

---

## 📁 Project Directory Structure

```
indicare/
├── index.html                 # Main HTML shell with Plus Jakarta Sans typography
├── package.json               # Fast dependencies (React 18, Vite 6, Tailwind CSS, Lucide)
├── vite.config.js             # Vite configuration with auto-port 3000
├── tailwind.config.js         # Custom warm brand palette & subtle glow animations
└── src/
    ├── main.jsx               # React entry point wrapped in BrowserRouter
    ├── App.jsx                # Global router, scroll restoration, and AI scanner modal state
    ├── index.css              # Custom Tailwind utility layers and scanline animations
    ├── data/
    │   └── mockData.js        # Realistic stray dog registry, statistics, services & FAQ
    ├── components/
    │   ├── Navbar.jsx         # Sticky glassmorphic navbar with notification ticker & CTAs
    │   ├── Footer.jsx         # Civic footer with official Mumbai offices, helpline, & legal
    │   ├── AiScannerModal.jsx # Interactive Canine Biometric Scanner simulator
    │   ├── HeroScannerDemo.jsx# Live camera HUD preview in the homepage hero
    │   └── StakeholderTabs.jsx# Interactive portal switcher for Municipalities, NGOs, etc.
    └── pages/
        ├── Home.jsx           # Flagship redesigned landing page
        ├── DogAadhaar.jsx     # Deep dive on AI facial recognition vs microchips
        ├── Solutions.jsx      # Detailed breakdown of all 6 core services & training drives
        ├── Adopt.jsx          # Interactive stray dog adoption & foster showcase
        ├── IncidentReport.jsx # 24/7 citizen dog-bite & injured animal reporting tool
        ├── About.jsx          # Founding story (Manohar & Madhura Bidaye), SMILE Council
        └── Contact.jsx        # Demo booking form, Mumbai office addresses, phone & email
```

---

## 🛠️ How to Customize in your IDE

1. **Add or Edit Dogs in the Registry**: Open `src/data/mockData.js` and modify `SAMPLE_DOGS` (change names, photos, vaccination status, or locations).
2. **Update Brand Colors**: Open `tailwind.config.js` to modify `colors.brand`.
3. **Change Contact / Address Details**: Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
4. **Add New Pages**: Create a file in `src/pages/` and add the route in `src/App.jsx`.
