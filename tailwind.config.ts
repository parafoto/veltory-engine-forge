import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#0d1522",
          "--foreground": "#e8edf5",
          "--card": "#101a2b",
          "--card-foreground": "#e8edf5",
          "--popover": "#101a2b",
          "--popover-foreground": "#e8edf5",
          "--primary": "#ff6600",
          "--primary-foreground": "#ffffff",
          "--secondary": "#1a2535",
          "--secondary-foreground": "#e8edf5",
          "--muted": "#1a2535",
          "--muted-foreground": "#b0b8c9",
          "--accent": "#ff6600",
          "--accent-foreground": "#ffffff",
          "--destructive": "#dc2626",
          "--destructive-foreground": "#ffffff",
          "--border": "#1f2a3a",
          "--input": "#1f2a3a",
          "--ring": "#ff6600",
          "--radius": "0.5rem",
        },
      });
    }),
  ],
};

export default config;
