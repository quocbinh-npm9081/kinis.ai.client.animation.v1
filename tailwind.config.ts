import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F3742D",
        secondary: "#222222",
      },
      boxShadow: {
        'shadow-footer': '0px 1px 10px 0px #0000001A'
      },
      backgroundColor: {
        cardExperienceDark: "#F3742D",
        cardExperienceLight: "#FAFAFA",
      },
      borderColor: {
        experience: "#0B0A0A",
      },
    },
   
  },
  fontFamily:{
    primary: 'var(--font-rubik)',
    secondary: 'var(--font-cormorant-garamond)',
  },
  container:{
		center: true,
		padding: '1rem',
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
      '2xl': '1536px',
      '3xl': '1792px',
      '4xl': '2048px',
		}
	},
  plugins: [],
};
export default config;
