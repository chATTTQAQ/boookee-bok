import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        card: "var(--color-card-bg)",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        display: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        heading: ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.2", fontWeight: "600" }],
      },
      spacing: {
        section: "120px",
      },
      borderRadius: {
        apple: "18px",
        pill: "980px",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
