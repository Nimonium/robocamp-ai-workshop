import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#613900",
        "surface-dim": "#d8dadc",
        "outline": "#867462",
        "primary-fixed": "#ffddbb",
        "surface-container-low": "#f2f4f6",
        "inverse-surface": "#2d3133",
        "tertiary-fixed-dim": "#f2c011",
        "on-surface-variant": "#534434",
        "pure-white": "#FFFFFF",
        "primary-fixed-dim": "#ffb869",
        "on-tertiary-fixed": "#241a00",
        "tertiary": "#755b00",
        "tertiary-fixed": "#ffe08e",
        "on-surface": "#191c1e",
        "on-secondary-container": "#065782",
        "secondary": "#1e638f",
        "background": "#f7f9fb",
        "surface": "#f7f9fb",
        "tertiary-container": "#d5a900",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#673d00",
        "inverse-on-surface": "#eff1f3",
        "secondary-fixed": "#cbe6ff",
        "surface-bright": "#f7f9fb",
        "error-red": "#CF2917",
        "surface-container-highest": "#e0e3e5",
        "on-tertiary": "#ffffff",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#584400",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#523f00",
        "inverse-primary": "#ffb869",
        "on-secondary-fixed": "#001e30",
        "surface-variant": "#e0e3e5",
        "primary": "#885200",
        "ink-blue": "#002D45",
        "secondary-container": "#91cdfe",
        "surface-tint": "#885200",
        "surface-container": "#eceef0",
        "error": "#ba1a1a",
        "on-background": "#191c1e",
        "on-primary-fixed": "#2b1700",
        "secondary-fixed-dim": "#91cdfe",
        "primary-container": "#f59a19",
        "outline-variant": "#d9c3ae",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#004b72",
        "surface-container-high": "#e6e8ea"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "base": "8px",
        "gutter": "24px",
        "margin-desktop": "48px",
        "container-max": "1200px"
      },
      fontFamily: {
        "caption": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-bold": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "caption": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "label-bold": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [forms, containerQueries],
}
