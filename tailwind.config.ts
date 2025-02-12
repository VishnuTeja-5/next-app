import type { Config } from "tailwindcss";


export default {
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
        primary : "var(--PRIMARY)",
        secondary : "var(--SECONDARY)",
      },
      fontFamily:{
        heading: ['"Roboto Condensed"', 'sans-serif'],
        subheading: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      clipPath: {
        'polygon': 'polygon(50% 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
} satisfies Config;
