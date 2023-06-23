/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'hextech-blue-1': '#CDFAFA',
        'hextech-blue-2': '#0AC8B9',
        'hextech-blue-3': '#0397AB',
        'hextech-blue-4': '#005A82',
        'hextech-blue-5': '#0A323C',
        'hextech-blue-6': '#091428',
        'hextech-blue-7': '#0A1428',
      },
    },
  },
  plugins: [],
}
