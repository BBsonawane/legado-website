import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          green: "var(--accent-green)",
          "green-light": "var(--accent-green-light)",
          "green-border": "var(--accent-green-border)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
        },
        border: {
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
          subtle: "var(--border-subtle)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-dark": "var(--gradient-dark-section)",
      },
      animation: {
        "fade-in": "fadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
