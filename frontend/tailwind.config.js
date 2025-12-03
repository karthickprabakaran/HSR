module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all your JS/TS/React files
  ],
  safelist: [
    'bg-primary',
    'bg-secondary', 
    'bg-accent',
    'bg-dark',
    'text-primary',
    'text-secondary',
    'text-accent', 
    'text-dark',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:bg-accent',
    'hover:bg-dark',
    'border-primary',
    'border-secondary',
    'border-accent',
    'border-dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8b08a',       // major color
        secondary: '#7db6c0',     // secondary color
        accent: '#f5e1c3',        // lighter shade for buttons/hover
        dark: '#4a4a4a',          // text / headings
      },
    },
  },
  plugins: [],
};