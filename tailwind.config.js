/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main surface — inspired by reown's #202020 dark surface
        background: "#202020",
        surface: "#202020",
        "surface-dim": "#202020",
        "surface-bright": "#363636",
        "surface-container": "#202020",
        "surface-container-low": "#363636",
        "surface-container-lowest": "#000000",
        "surface-container-high": "#363636",
        "surface-container-highest": "#4F4F4F",
        "surface-variant": "#4F4F4F",
        "inverse-surface": "#E9E9E9",
        "inverse-on-surface": "#202020",

        // Primary accent — reown blue #0988F0 → surface #379DEF
        primary: "#ffffff",
        "on-primary": "#202020",
        "primary-container": "#379DEF",
        "on-primary-container": "#202020",
        "primary-fixed": "#379DEF",
        "primary-fixed-dim": "#0988F0",
        "on-primary-fixed": "#202020",
        "on-primary-fixed-variant": "#FFFFFF",
        "inverse-primary": "#0988F0",

        // Secondary — reown blue base
        secondary: "#0988F0",
        "secondary-container": "#0988F0",
        "secondary-fixed": "#0988F0",
        "secondary-fixed-dim": "#0878D3",
        "on-secondary": "#FFFFFF",
        "on-secondary-fixed": "#E9E9E9",
        "on-secondary-container": "#FFFFFF",
        "on-secondary-fixed-variant": "#E9E9E9",

        // Tertiary — warm grey
        tertiary: "#FFFFFF",
        "tertiary-container": "#E3E3DD",
        "tertiary-fixed": "#E3E3DD",
        "tertiary-fixed-dim": "#C6C7C1",
        "on-tertiary": "#2F312D",
        "on-tertiary-fixed": "#1A1C19",
        "on-tertiary-container": "#636560",
        "on-tertiary-fixed-variant": "#464743",

        // Text
        "on-background": "#A0A0A0",
        "on-surface": "#E9E9E9",
        "on-surface-variant": "#9A9A9A",

        // Border / Outline
        outline: "#4F4F4F",
        "outline-variant": "#363636",

        // Functional
        error: "#F4624A",
        "on-error": "#FFFFFF",
        "error-container": "#F4624A",
        "on-error-container": "#FFFFFF",
        success: "#18AC65",
        streak: "#FFB800",
        "streak-muted": "rgba(255, 184, 0, 0.15)",
        "surface-tint": "#0988F0",
        "surface-banner": "#232F39",
      },
      borderRadius: {
        DEFAULT: "1rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "4rem",
        full: "9999px",
      },
      spacing: {
        "stack-xs": "0.5rem",
        "stack-sm": "1.5rem",
        "stack-md": "2rem",
        "stack-lg": "2.5rem",
        gutter: "0.5rem",
        "container-padding": "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        "label-caps": ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Mono/nav scale (reown-inspired: 22px nav, 16px buttons)
        "nav-mono": ["22px", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "400", fontFamily: "var(--font-jetbrains-mono)" }],
        "btn-mono": ["16px", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "400", fontFamily: "var(--font-jetbrains-mono)" }],
        "label-mono": ["14px", { lineHeight: "1", letterSpacing: "0", fontWeight: "400", fontFamily: "var(--font-jetbrains-mono)" }],
        
        // Display / Heading scale (reown-inspired)
        display: ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "heading-xl": ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "heading-lg": ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" }],
        "heading-md": ["20px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" }],
        "heading-sm": ["18px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" }],

        // Body scale (reown-inspired)
        "body-lead": ["18px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "300" }],
        "body-base": ["16px", { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};