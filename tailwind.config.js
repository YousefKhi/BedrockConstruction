/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.2s ease-out",
        appearFromRight: "appearFromRight 0.2s ease-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.2s ease-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.95)", opacity: 0.8 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        // Custom colors for Shine Mobile Detailing
        'shine-blue': '#0066cc',
        'shine-dark': '#121212',
        'shine-silver': '#f5f5f5',
        'shine-gold': '#D4AF37',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#121212",
          "primary-content": "#D4AF37",
          "secondary": "#D4AF37",
          "secondary-content": "#121212", 
          "accent": "#D4AF37",
          "accent-content": "#121212",
          "neutral": "#121212",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#e5e5e5",
          "base-content": "#121212",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272"
        },
        dark: {
          "primary": "#121212",
          "primary-content": "#D4AF37",
          "secondary": "#D4AF37",
          "secondary-content": "#121212",
          "accent": "#D4AF37",
          "accent-content": "#121212",
          "neutral": "#0a0a0a",
          "neutral-content": "#ffffff",
          "base-100": "#121212",
          "base-200": "#0f0f0f",
          "base-300": "#080808",
          "base-content": "#D4AF37",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272"
        },
      },
    ],
  },
};

module.exports = config;
