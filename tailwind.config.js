/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // light peach?
        regolith: "#ffeadb",
        // text on "regolith" background, also used as box background, which then has "regolith" text color
        // dark blue
        nebula: "#15252d",
        // highlight color
        // intense orange
        horizon: "#fc5200",
        // alternative background color
        // light blue
        satellite: "#cfd7d6",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "2.8rem",
      },
    },
  },
  plugins: [],
};
