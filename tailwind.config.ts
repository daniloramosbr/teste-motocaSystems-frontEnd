import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "385": "385px",
        "332": "332px",
        "419": "419px",
      },
      height: {
        "35": "35px",
        "50" : "50px",
        "45": "45px",
      },
      colors: {
        "custom-gray": "#CAC9CD",
        "custom-border": "#342B4A",
        "custom-purple": "#2a233c",
        "custom-blue": "#3BADFB;",
        "custom-purle2": "#8C57FF;",
        "custom-prod": "#312D4B",
        "custom-text": "#E7E3FC;",
        "custom-bg-green": "#354546",
        "custom-bg-red": "#55304C",
        "custom-bg-yellow": "#544146",
        'custom-color-green': '#56CA00',
        'custom-color-red': '#FF4C51',
        'custom-color-yellow': '#FFB400'
      },
      fontSize: {
        "25px": "25px",
        "15px": "15px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
