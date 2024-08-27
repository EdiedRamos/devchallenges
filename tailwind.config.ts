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
      },
    },
  },
  plugins: [],
};
export default config;
