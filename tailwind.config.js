/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Teal-Green & Soft Sage Editorial Identity
        teal: {
          deep: '#104C4B',     // Deep teal hero & accents
          dark: '#164F4D',     // Dark teal-green
          muted: '#397B78',    // Muted teal / topbar
          soft: '#DCE9E5',     // Soft sage border & badge tint
          light: '#EEF4F2',    // Subtle sage background tint
          DEFAULT: '#104C4B',
        },
        sage: {
          50: '#F7F8F6',      // Light neutral background
          100: '#EEF3F1',     // Light sage surface
          200: '#DCE9E5',     // Soft sage border & container
          300: '#C2D8D2',
          400: '#8FB5AC',
          500: '#5F9589',
          DEFAULT: '#DCE9E5',
        },
        surface: {
          bg: '#F7F8F6',       // Light neutral background
          card: '#FFFFFF',     // Pure white card
          primary: '#172E2D',  // Primary text on light
          secondary: '#617472',// Secondary text on light
          dark: '#104C4B',     // Dark section bg
          darker: '#0B3837',   // Deeper dark section bg
        },
        amber: {
          warm: '#F4B740',     // Restrained warm amber CTA
          hover: '#E5A830',
          light: '#FEF6E6',
          DEFAULT: '#F4B740',
        },
        brand: {
          50: '#F7F8F6',
          100: '#EEF3F1',
          200: '#DCE9E5',
          300: '#B8D1CA',
          400: '#397B78',
          500: '#164F4D',
          600: '#104C4B',
          700: '#0D3C3B',
          800: '#092A29',
          900: '#051818',
          DEFAULT: '#104C4B',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(16, 76, 75, 0.06), 0 2px 6px -1px rgba(16, 76, 75, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(16, 76, 75, 0.12), 0 4px 12px -2px rgba(16, 76, 75, 0.06)',
        'phone': '0 20px 40px -10px rgba(16, 76, 75, 0.18), 0 0 0 1px rgba(16, 76, 75, 0.08)',
        'amber-glow': '0 8px 24px -4px rgba(244, 183, 64, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { top: '5%' },
          '100%': { top: '90%' },
        }
      }
    },
  },
  plugins: [],
}
