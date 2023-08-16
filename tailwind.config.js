/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F7EAF2",
          100: "#EFD3E5",
          200: "#E5A8CB",
          300: "#DC7DB2",
          400: "#D65298",
          500: "#733456",
          600: "#672E4E",
          700: "#5B2744",
          800: "#4F203B",
          900: "#451832",
          A100: "#FFC2E6",
          A200: "#FF8FD9",
          A400: "#FF5CCA",
          A700: "#FF41C3",
        },
        accent: {
          50: "#D5EAF2",
          100: "#ABD5E5",
          200: "#80C1D8",
          300: "#56ADC9",
          400: "#2B99BC",
          500: "#007197",
          600: "#006889",
          700: "#005C7B",
          800: "#00506D",
          900: "#00455F",
          A100: "#A8DFF5",
          A200: "#7CC9FF",
          A400: "#51B2FF",
          A700: "#38A2FF",
        },
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

