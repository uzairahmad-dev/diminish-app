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
      }
    },
    colors: {
      "color-primary": "var(--color-primary)",
      "color-secondary": "var(--color-secondary)",
      "color-tertiary": "var(--color-tertiary)",
      "color-grey-light": "var(--color-grey-light)",
      "color-green": "var(--color-green)",
      "color-red": "var(--color-red)",
    },
  },
  plugins: [],
};
