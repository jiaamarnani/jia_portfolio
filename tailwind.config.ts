import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansita: ["var(--font-sansita)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;