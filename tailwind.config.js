/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        ink: {
          900: "#0B1220",
          800: "#131C2E",
          700: "#1E293B",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
        },
        brand: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#16A34A",
          600: "#0F8A3C",
          700: "#0C7232",
          800: "#0A5C2A",
          900: "#063D1B",
        },
        gold: {
          400: "#F4C95D",
          500: "#E0A93B",
          600: "#C2872A",
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11,18,32,0.08)",
        card: "0 2px 12px rgba(11,18,32,0.06)",
        glow: "0 0 0 1px rgba(22,163,74,0.08), 0 12px 32px -8px rgba(22,163,74,0.25)",
      },
      backgroundImage: {
        "mint-radial": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(167,243,208,0.55), rgba(255,255,255,0))",
        "hero-band": "linear-gradient(90deg,#86EFAC 0%,#BBF7D0 50%,#D1FAE5 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
