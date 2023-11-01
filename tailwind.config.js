/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('src/images/hero-banner.png')",
				service: "url('src/images/service-banner.png')",
				expCover: "url('src/images/expCover.jpeg')"
			},

      fontFamily: {
        generalLi: ["GeneralSansLi"],
        generalRg: ["GeneralSansRg"],
        generalMd: ["GeneralSansMd"],
        generalSb: ["GeneralSansSb"],
        generalBd: ["GeneralSansBd"],
        InterBlack: ["InterBlack"],
        InterLi: ["InterLi"],
        InterRg: ["InterRg"],
        InterMd: ["InterMd"],
        InterSb: ["InterSb"],
        InterBd: ["InterBd"],
      },

      dropShadow: {
        text: "0 10px 20px rgba(0, 0, 0, 0.25)",
      },

      boxShadow: {
        innerBlue: "inset 0 5px 10px 0px #D0DDFF",
      },
    },
  },
  plugins: [],
};
