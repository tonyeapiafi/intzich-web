import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          950: '#1A1540',
          900: '#26215C',
          800: '#3C3489',
          700: '#534AB7',
          100: '#CECBF6',
          50: '#EEEDFE',
        },
        teal: {
          900: '#04342C',
          800: '#085041',
          700: '#0F6E56',
          600: '#1D9E75',
          100: '#9FE1CB',
          50: '#E1F5EE',
        },
        amber: {
          900: '#412402',
          800: '#633806',
          700: '#854F0B',
          600: '#BA7517',
          100: '#FAC775',
          50: '#FAEEDA',
        },
        gray: {
          950: '#1C1C1A',
          900: '#2C2C2A',
          800: '#444441',
          700: '#5F5E5A',
          500: '#888780',
          200: '#D3D1C7',
          100: '#F1EFE8',
          50: '#FAFAF8',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        lead: ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '20px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08)',
        cta: '0 4px 16px rgba(60,52,137,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
