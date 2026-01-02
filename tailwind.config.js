/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        augustus: ["Augustus", "Times New Roman", "serif"],
      },
      keyframes: {
        heroFade: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        trackPulse: {
          "0%, 100%": { transform: "scaleY(0.6)", opacity: "0.7" },
          "50%": { transform: "scaleY(1.3)", opacity: "1" },
        },
        splashOut: {
          "0%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        logoIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        logoReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        glowPulse: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1.05)" },
        },
        sheenSweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        noiseShift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(10px, -10px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      animation: {
        heroFade: "heroFade 0.8s ease-out forwards",
        trackPulse: "trackPulse 1.2s ease-in-out infinite",
        splashOut: "splashOut 2.2s ease forwards",
        logoIn: "logoIn 0.7s ease-out 0.1s both",
        logoReveal: "logoReveal 0.9s ease-out 0.15s both",
        glowPulse: "glowPulse 1.1s ease-in-out 0.1s both",
        sheenSweep: "sheenSweep 1s ease-out 0.15s forwards",
        noiseShift: "noiseShift 0.6s steps(2) infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
