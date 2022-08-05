/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1.6rem'
    },
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/assets/svg/background.svg')"
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'lusitana': ['Lusitana', 'serif']
      }
    },
    colors: {
      "color-primary": "var(--color-primary)",
      "color-secondary": "var(--color-secondary)",
      "color-tertiary": "var(--color-tertiary)",
      "color-grey-light": "var(--color-grey-light)",
      "color-white": "var(--color-white)",
      "color-black": "var(--color-black)",
      "color-extra-1": "var(--color-extra-1)",
      "color-extra-2": "var(--color-extra-2)",
      "color-green": "var(--color-green)",
      "color-green-1": "var(--color-green-1)",
      "color-red": "var(--color-red)",
      "color-red-1": "var(--color-red-1)"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'in_md': {'max': '768px'},
      'in_sm': {'max': '640px'} 
    },
  },
  plugins: [],
};
