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
        "fq-background": "url('/faq-page/faq-title-bg.png')",
        "ah-background": "url('/advanced-homepage/hero-image-huffie.png')",
        "ah-bg-circles": "url('/advanced-homepage/bg-1.svg')",
        "ah-bg-lines": "url('/advanced-homepage/bg-2.svg')",
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
        // process page
        "pp-purple": "#6B59D0",
        "pp-gray-100": "#DEDDEB",
        "pp-gray-200": "#6B7280",
        "pp-dark": "#374151",
        // faq page
        "fq-dark": "#12111F",
        "fq-white": "#F2F5F9",
        "fq-gray-100": "#CDD5E0",
        "fq-gray-200": "#97A3B6",
        "fq-gray-300": "#2B2936",
        // advanced homepage
        "ah-green": "#5DB082",
        "ah-blue": "#6281F7",
        "ah-yellow": "#F5C044",
        "ah-purple": "#6D4AE5",
        "ah-cyan": "#CAD4FA",
        "ah-white": "#F6F7FB",
        "ah-black": "#333333",
        "ah-gray": "#737F8B",
        "ah-dark": "#161739",
        // basic text to speech
        "ts-purple": "#6326A2",
        "ts-blue-100": "#263FA9",
        "ts-blue-200": "#2E5B84",
        "ts-blue-300": "#1E2A52",
        "ts-blue-400": "#1C1B43",
        "ts-white": "#E3E8EF",
        "ts-gray": "#677489",
        "ts-gray-dark": "#364153",
        // movie search app
        "ms-blue": "#3662E3",
        "ms-black": "#111729",
        "ms-dark": "#20293A",
        "ms-gray": "#97A3B6",
      },
      fontSize: {
        "cs-12": "12px",
        "cs-14": "14px",
        "cs-16": "16px",
        "cs-18": "18px",
        "cs-20": "20px",
        "cs-24": "24px",
        "cs-36": "36px",
        "cs-48": "48px",
        "cs-60": "60px",
        "cs-64": "64px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
