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
      },
      colors: {
        // multi-step register
        "msr-purple-100": "#845EEE",
        "msr-purple-200": "#652CD1",
        "msr-black": "#121826",
        "msr-dark": "#212936",
        "msr-gray-300": "#394150",
        "msr-gray-200": "#4D5562",
        "msr-gray-100": "#A1A1A9",
        "msr-white": "#E5E7EB",
        // single homepage
        "sh-blue": "#2A4DD0",
        "sh-green": "#4CA154",
        "sh-black": "#111729",
        "sh-dark": "#223344",
        "sh-gray": "#909193",
        "sh-light": "#F2F9FE",
        "sh-white": "#FFFFFF",
      },
      fontSize: {
        "cs-12": "12px",
        "cs-14": "14px",
        "cs-16": "16px",
        "cs-18": "18px",
        "cs-20": "20px",
        "cs-60": "60px",
      },
    },
  },
  plugins: [],
};
export default config;
