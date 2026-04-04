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
        background: "#f7f8fa",
        surface: "#ffffff",
        navy: {
          DEFAULT: "#0f1729",
          muted: "#1e293b",
        },
        accent: {
          DEFAULT: "#3b6cf0",
          soft: "#e8eefc",
        },
        success: {
          DEFAULT: "#2d8a6e",
          soft: "#e6f4f0",
        },
        danger: {
          DEFAULT: "#c45c5c",
          soft: "#f8ecec",
        },
        muted: {
          DEFAULT: "#64748b",
          foreground: "#475569",
        },
        border: "rgba(15, 23, 41, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.25rem,4vw+1rem,3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["clamp(1.625rem,2.2vw+0.75rem,2.125rem)", { lineHeight: "1.22", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        card: "18px",
        lg: "12px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 41, 0.05), 0 12px 32px rgba(15, 23, 41, 0.08)",
        soft: "0 1px 0 rgba(15, 23, 41, 0.04)",
        elevated:
          "0 1px 2px rgba(15, 23, 41, 0.04), 0 24px 48px rgba(15, 23, 41, 0.1), 0 0 0 1px rgba(15, 23, 41, 0.04)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        /** ~1152px — premium marketing column */
        content: "72rem",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #5b8def 0%, #3b6cf0 50%, #2f5ad6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
