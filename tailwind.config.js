/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        skeleton: "skeleton 1.5s ease-in-out infinite",
      },
      backgroundImage: {
        skeleton:
          "linear-gradient(-45deg, #131313 0%, #131313 40%, #181818 50%, #181818 55%, #131313 65%, #131313 100%)",
      },
      colors: {
        "jz-main": "#0D0D0D",
        "jz-white": "#FFFFFF",
        "jz-gold": "#B57400",
        "jz-gray": "#171717",
        "jz-light-gray": "#808080",
        "jz-red": "#BC381F",
      },
      keyframes: {
        skeleton: {
          from: {
            "background-position": "100%",
          },
          to: {
            "background-position": "0%",
          },
        },
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
      oswald: ["Oswald"],
      marck: ["Marck Script"],
    },
  },
  plugins: [],
};
