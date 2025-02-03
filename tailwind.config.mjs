/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary':"#59E2C9",
        'secondary': "#FAEC84",
      },
      backgroundImage:{
        'hero': "url('/LayerTest.png')"
      },
      fontFamily:{
        source_sans: ['var(--font-source_sans)'],
        serif4: ['var(--font-source_serif)']
      },
      boxShadow:{
        'skill-box' :'0px 4px 15px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
