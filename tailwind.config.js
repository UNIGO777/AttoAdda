/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF832A',
        secondary: '#000000',
        cars: '#106099',
        customers: '#8B5CF6',
        garage: '#EF4444',
        spareparts: '#FFA828',
        otherservice: '#79B3B9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}

