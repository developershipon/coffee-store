module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      cursive: ["Limelight", "cursive"],
      serif: ["B612", "serif"],
    },
    extend: {
      screens: {
        standalone: { raw: "(display-mode:standalone)" },
      },
      backgroundImage: {
        "in-use": `transparent
    linear-gradient(
      111deg,
     rgba('#7ed56f',0.8), rgba('#28b485',0.8)),
    )
    0% 0% no-repeat padding-box`,
        "earning-bg": "url('/img/earning-bg.svg')",
        "news-bg": "url('/img/news-bg.png')",
        "contact-bg": "url('/img/shades.svg')",
      },
      colors: {
        primary: {
          50: "#FFF8F8",
          100: "#FFE3E3",
          200: "#FFBABA",
          300: "#FF9292",
          400: "#FF6969",
          500: "#FF4040",
          600: "#FF0808",
          700: "#CF0000",
          800: "#E6DB37",
          900: "#6aceb6fa",
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
      boxShadow: {
        menu: "0 4px 21px 0 rgb(49 49 49 / 10%)",
        form: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        input: "0 2px 4px 0 rgb(0 0 0 / 6%)",
        blogCard: "0 0 0 1px rgb(0 0 0 / 10%)",
        card: "0 1px 8px 0 rgb(49 49 49 / 10%)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};
