/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        boxAnalycs: "0px 0px 9px 1px #aaaaaa29",
      },
      backgroundImage: {
        background_gradient_2:
          "linear-gradient(15deg, #4585bd 50%, #F8F8F8 50%);",
        background_gradient_1:
          "linear-gradient(143deg, rgb(62 67 85) 25%, rgb(189 189 189) 74%)",
        background_gradient_gray: "linear-gradient(90deg, #cbcbcb, #ffffff)",
        background_gradient_blue: "linear-gradient(90deg, #a3bbf1, #ffffff)",
        background_gradient_green: "linear-gradient(90deg, #bfffbd, #ffffff)",
        background_gradient_purple: "linear-gradient(90deg, #847aff, #ffffff)",
        background_gradient_yellow: "linear-gradient(90deg, #fff2ad, #ffffff)",

        background_gradient_3:
          "linear-gradient(90deg, #fff09e , #ffeb80, #e9bb45);",
        // background_img_1: ""
      },
    },
  },
  plugins: [],
};
