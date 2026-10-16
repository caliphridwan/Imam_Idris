import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        paper: { DEFAULT: "#F6F2E9", deep: "#EDE6D6" },
        ink: { DEFAULT: "#17211D", soft: "#4E5953" },
        green: { DEFAULT: "#1E4D3F", deep: "#123329", light: "#DCE7E1" },
        gold: { DEFAULT: "#B8893A", text: "#7A5716", light: "#F1E4C7" },
        line: "#D9D0BD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};

export default config;
