/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#05070A",
        cardBg: "#0B0F14",
        electricBlue: "#00B7FF",
        primaryBlue: "#0099FF",
        neonCyan: "#00F0FF",
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        subheading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 183, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 183, 255, 0.4)',
        'glow-lg': '0 0 35px rgba(0, 183, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
