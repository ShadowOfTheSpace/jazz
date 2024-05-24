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
          "linear-gradient(-45deg, #171717 0%, #171717 40%, #1B1B1B 50%, #1B1B1B 55%, #171717 65%, #171717 100%)",
      },
      colors: {
        "jz-main": "#0D0D0D",
        "jz-white": "#FFFFFF",
        "jz-gold": "#B57400",
        "jz-gray": "#171717",
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
    },
  },
  plugins: [],
};
