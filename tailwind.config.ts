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
        // Journey-Inspired Rich Color Palette
        'ocean-blue': {
          DEFAULT: '#0D3B66', // Deep ocean blue - mysterious depths
          light: '#1E5A8E',   // Mediterranean waters
          dark: '#051F34',    // Midnight ocean
        },
        'terracotta': {
          DEFAULT: '#C1666B', // Rich desert clay
          light: '#D4878C',   // Sunset terra
          dark: '#A34E52',    // Deep earth
        },
        'sage': {
          DEFAULT: '#778D74', // Lush mountain sage
          light: '#95A893',   // Morning meadow
          dark: '#5C6E5A',    // Forest shadow
        },
        'amber': {
          DEFAULT: '#D4A574', // Warm golden hour
          light: '#E3BC92',   // Sun-kissed sand
          dark: '#B8884F',    // Rich amber
        },
        'coral': {
          DEFAULT: '#E96B56', // Vibrant sunset coral
          light: '#F2887A',   // Soft coral glow
          dark: '#D14E3C',    // Deep coral reef
        },
        'purple': {
          DEFAULT: '#7B6D8D', // Twilight lavender
          light: '#9A8DA8',   // Misty purple
          dark: '#5E5270',    // Deep plum
        },
        'teal': {
          DEFAULT: '#4ECDC4', // Tropical waters
          light: '#6FD9D2',   // Lagoon shimmer
          dark: '#3AA39C',    // Deep teal
        },
        'sunset-orange': {
          DEFAULT: '#F38D68', // Rich sunset
          light: '#F7A98A',   // Peachy glow
          dark: '#E0734D',    // Deep orange
        },
        // Neutrals - Rich and Warm
        'charcoal': '#2C3639',      // Deep charcoal
        'warm-grey': '#A0937D',     // Warm stone
        'sand': '#F4F1E8',          // Warm sand
        'cream': '#FFFCF7',         // Creamy white
        'earth-brown': '#6B4F3C',   // Rich earth
        // Status Colors
        'status-red': '#D64550',
        'status-yellow': '#E8A547',
        'status-green': '#4A9B8E',
        // Legacy colors (backwards compatibility)
        'navy-deep': '#0A2E4D',
        'gold': '#D4A574',
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
