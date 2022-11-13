/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: true,
    themes: [
      "light",
      {
        dark: {
          primary: "#31748f",
          secondary: "#f6c177",
          accent: "#eb6f92",
          neutral: "#232136",
          "base-100": "#191724",
          info: "#3e8fb0",
          success: "#9ccfd8",
          warning: "#ebbcba",
          error: "#eb6f92",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
