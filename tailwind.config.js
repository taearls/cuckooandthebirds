module.exports = {
  content: [
    "./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      margin: {
        "21": "84px",
      },
      zIndex: {
        "100": 100,
      },
      maxWidth: {
        "65ch": "65ch",
      },
      fontFamily: {
        default: "Asul, sans-sarif",
      },
      height: {
        fit: "fit-content",
      },
      boxShadow: {
        "outline-light-blur": "0 0 3pt 2pt rgb(178 245 234)",
        "outline-light": "0 0 0 3px #22D3EE", // cyan-400
        "outline-dark": "0 0 0 3px #67E8F9", // cyan-300
        "outline-inset-dark":
          "inset 0 -0.125em 0 0 #111827, inset 0 -0.22em 0 0 #22D3EE", // coolgray-900, cyan-400
        "outline-inset-dark-fill": "inset 0 -0.125em 0 0 #111827, inset 0 -1em 0 0 #22D3EE", // coolgray-900, cyan-400
      },
      // cyan, coolgray are used. the others are from the tailwind 2.0 color palette for experimenting.
      colors: {
        "soft-black": "#121212",
        // GRAYS
        coolgray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
        // COLORS
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },
    },
  },
  variants: {
    cursor: ["responsive", "hover", "disabled"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "disabled"],
    padding: ["responsive", "disabled"],
  },
  plugins: [],
};
