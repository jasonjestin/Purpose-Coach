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
        'navy-deep': '#0A2E4D',
        'coral': '#FF6B4A',
        'gold': '#F5A623',
        'teal': '#06B6D4',
        // Keep legacy colors for other pages
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        ocean: {
          light: '#3d5a80',
          DEFAULT: '#293241',
          dark: '#1a1f2e',
        },
        earth: {
          light: '#8b7355',
          DEFAULT: '#6b5b4f',
          dark: '#4a3f35',
        },
        accent: {
          light: '#f4a261',
          DEFAULT: '#e76f51',
          dark: '#d45d3f',
        },
      },
      fontFamily: {
        'script': ['var(--font-caveat)', 'cursive'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
