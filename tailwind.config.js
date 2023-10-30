/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/images/hero-banner.png')",
      },

      fontFamily: {
        generalRg: ["GeneralSansRg"],
        generalMd: ["GeneralSansMd"],
        generalSb: ["GeneralSansSb"],
        generalBd: ["GeneralSansBd"],
      },

      dropShadow: {
        text: "0 10px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
