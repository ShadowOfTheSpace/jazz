/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "jz-main": "#0D0D0D",
        "jz-white": "#FFFFFF",
        "jz-gold": "#B57400",
        "jz-gray": "#171717",
        "jz-light-gray": "#808080",
      },
      screens: {
        "has-hover": { raw: "(hover: hover) and (pointer: fine)" },
        "no-hover": { raw: "(hover: none) or (pointer: coarse)" },
      },
    },
    fontFamily: {
      inter: ["Inter"],
      kameron: ["Kameron"],
      karantina: ["Karantina"],
      kaushan: ["Kaushan Script"],
    },
  },
  plugins: [],
};
