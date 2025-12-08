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
        // PRD Primary Colors
        'ocean-blue': {
          DEFAULT: '#1B4965',
          light: '#2A5F7E',
          dark: '#0F2E3D',
        },
        'terracotta': {
          DEFAULT: '#D4704E',
          light: '#E08968',
          dark: '#B85A3D',
        },
        // PRD Secondary Colors
        'sage': {
          DEFAULT: '#8B9D83',
          light: '#A4B59D',
          dark: '#6D7D67',
        },
        'amber': {
          DEFAULT: '#E6A85C',
          light: '#EDB876',
          dark: '#D89145',
        },
        // PRD Accent Colors
        'coral': {
          DEFAULT: '#FF6B6B',
          light: '#FF8585',
          dark: '#E85555',
        },
        'purple': {
          DEFAULT: '#6B4E71',
          light: '#856589',
          dark: '#533C58',
        },
        // PRD Neutrals
        'charcoal': '#2D3142',
        'warm-grey': '#8B8B8B',
        'cream': '#F8F5F1',
        // Quiz Status Colors
        'status-red': '#E63946',
        'status-yellow': '#F4A261',
        'status-green': '#2A9D8F',
        // Legacy colors (for gradual migration)
        'navy-deep': '#0A2E4D',
        'gold': '#F5A623',
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
