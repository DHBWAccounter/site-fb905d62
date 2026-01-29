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
        primary: '#3D9991',
        dark: '#1F1F1F',
        'dark-gray': '#2a2a2a',
      },
      fontFamily: {
        'proxima': ['proxima-nova', 'sans-serif'],
        'garamond': ['adobe-garamond-pro', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
    },
  },
  plugins: [],
}
export default config
