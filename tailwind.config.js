const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  corePlugins: {
    float: false,
  },
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
      },
    },
    fontFamily: {
      averta: [
        "Averta Std",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      "3xs": "0.75rem", // 12px
      "2xs": "0.875rem", // 14px
      xs: "1rem", // 16px
      sm: "1.125rem", // 18px
      base: "1.25rem", // 20px
      lg: "1.5rem", // 24px
      xl: "1.75rem", // 28px
      "2xl": "2rem", // 32px
      "3xl": "2.5rem", // 40px
      "4xl": "2.75rem", // 44px
      "5xl": "3rem", // 48px
      "6xl": "3.5rem", // 56px
      "7xl": "4rem", // 64px
      "8xl": "4.5rem", // 72px
      "9xl": "6rem", // 96px
      "10xl": "14.375rem", // 230px
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.33",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      opacity: "opacity",
      transform: "transform",
    },
  },
  variants: {},
  plugins: [],
};
