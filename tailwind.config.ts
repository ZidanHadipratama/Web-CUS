import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "catalog-landing": "url('/images/catalog/landing/bg.jpg')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        orange1: "#fd700d",
        orange2: "#e4650c",
        orange3: "#ca5a0a",
        orange4: "#be540a",
        orange5: "#984308",
        orange6: "#723206",
        orange7: "#592705",
      },
    },
  },
  plugins: [],
};
export default config;
