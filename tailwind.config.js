/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black photography darkroom palette
        ink: {
          950: '#0a0a0b',
          900: '#101012',
          850: '#16161a',
          800: '#1c1c21',
          700: '#26262d',
          600: '#34343d',
        },
        // Warm amber viewfinder accent
        amber: {
          glow: '#ff9e3d',
          500: '#f5933a',
          400: '#ffb45f',
        },
        mist: {
          100: '#f4f4f6',
          300: '#c7c7d1',
          400: '#9a9aa6',
          500: '#74747f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px -6px rgba(255, 158, 61, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
