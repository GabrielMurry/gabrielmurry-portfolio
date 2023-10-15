/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivoBlack: ["Archivo Black", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        corben: ["Corben", "cursive"],
        inter: ["Inter", "sans-serif"],
        kronaOne: ["Krona One", "sans-serif"],
        kodchasan: ["kodchasan", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"], // For Main Title
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(70% 50% at 50% 35%, rgb(233, 236, 200, 0.75), rgb(222, 236, 220, 0.75), rgb(234, 219, 220, 0.75), #ece4dc)",
        "gradient-radial-dark":
          "radial-gradient(70% 50% at 50% 35%, rgb(65, 70, 41, 0.5), rgb(45, 77, 71, 0.5), rgb(43, 71, 61, 0.5), #233931)",
      },
      animation: {
        "gradient-x": "gradient-x 45s ease-in-out infinite",
        "gradient-y": "gradient-y 3s ease-in-out infinite",
        "gradient-xy": "gradient-xy 15s ease-in-out infinite",
      },
      transitionProperty: {
        "shrink-letter-space": "letter-spacing",
      },
      margin: {
        "mb-smooth": "margin-bottom",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "100% 100%",
            "background-position": "center bottom",
          },
          "50%": {
            "background-size": "150% 150%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "125% 125%",
            "background-position": "50%",
          },
          "50%": {
            "background-size": "125% 125%",
            "background-position": "1000%",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "shrink-letter-space": {
          "0%": {
            "letter-spacing": "3rem",
          },
          "100%": {
            "letter-spacing": "1rem",
          },
        },
        "mb-smooth": {
          "0%": {
            "margin-bottom": "0rem",
          },
          "100%": {
            "margin-bottom": "18rem",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
};
