import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VIBRANT Journey-Inspired Palette - High Impact
        'ocean-blue': {
          DEFAULT: '#0A7AFF', // Electric ocean blue
          light: '#4D9FFF',   // Brilliant sky
          dark: '#0056B3',    // Deep vibrant blue
        },
        'terracotta': {
          DEFAULT: '#FF6B4A', // Vivid coral-red
          light: '#FF8F73',   // Peachy coral
          dark: '#E5533A',    // Deep coral
        },
        'sage': {
          DEFAULT: '#00D9A3', // Bright emerald green
          light: '#5FFFCB',   // Mint flash
          dark: '#00A67E',    // Rich jade
        },
        'amber': {
          DEFAULT: '#FFB627', // Bright golden yellow
          light: '#FFC957',   // Sunshine glow
          dark: '#E09A00',    // Rich gold
        },
        'coral': {
          DEFAULT: '#FF4D6D', // Electric pink-coral
          light: '#FF7A92',   // Soft pink glow
          dark: '#E62E4D',    // Deep magenta
        },
        'purple': {
          DEFAULT: '#A855F7', // Vibrant purple
          light: '#C084FC',   // Lavender pop
          dark: '#9333EA',    // Deep violet
        },
        'teal': {
          DEFAULT: '#14F195', // Fluorescent teal
          light: '#5FFAB8',   // Neon mint
          dark: '#0DBF7A',    // Deep teal
        },
        'sunset-orange': {
          DEFAULT: '#FF8C42', // Vivid sunset
          light: '#FFB380',   // Warm glow
          dark: '#E56D25',    // Deep orange
        },
        // Vibrant Neutrals with Pop
        'charcoal': '#1A1A2E',      // Deep indigo-black
        'warm-grey': '#94A3B8',     // Cool grey with blue tint
        'sand': '#FFF8E7',          // Warm cream
        'cream': '#FFFFFF',         // Pure white
        'earth-brown': '#8B5A3C',   // Warm brown
        // Ultra-Bright Status Colors
        'status-red': '#FF3B5C',
        'status-yellow': '#FFC700',
        'status-green': '#00F5A0',
        // Legacy
        'navy-deep': '#0A2E4D',
        'gold': '#FFB627',
      },
      fontFamily: {
        'script': ['var(--font-caveat)', 'cursive'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'section-mobile': '48px',
        'section-desktop': '96px',
      },
      borderRadius: {
        'card': '8px',
      },
    },
  },
  plugins: [],
}
export default config
