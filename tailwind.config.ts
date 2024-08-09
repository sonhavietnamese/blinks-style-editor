import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        dot: 'radial-gradient(circle at 0 0, rgba(0, 0, 0, .1) 1px, transparent 0), radial-gradient(circle at 100% 0, rgba(0, 0, 0, .1) 1px, transparent 0), radial-gradient(circle at 0 100%, rgba(0, 0, 0, .1) 1px, transparent 0), radial-gradient(circle at 100% 100%, rgba(0, 0, 0, .1) 1px, transparent 0);',
      },
    },
  },
  plugins: [],
}
export default config
