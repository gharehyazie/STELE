/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        orange: {
          DEFAULT: "rgb(237, 109, 5)",
          50: "rgb(255, 248, 240)",
          100: "rgb(255, 237, 213)",
          200: "rgb(254, 215, 170)",
          300: "rgb(253, 186, 116)",
          400: "rgb(251, 146, 60)",
          500: "rgb(237, 109, 5)",
          600: "rgb(194, 65, 12)",
          700: "rgb(154, 52, 18)",
          800: "rgb(124, 45, 18)",
          900: "rgb(103, 41, 19)",
        },
        purple: {
          DEFAULT: "#271E4F",
          50: "#F4F3F8",
          100: "#E8E5F0",
          200: "#D1CBE1",
          300: "#B9B1D2",
          400: "#A297C3",
          500: "#8B7DB4",
          600: "#6B5A9A",
          700: "#4B3F7A",
          800: "#271E4F",
          900: "#1E1739",
        },
        beige: {
          DEFAULT: "#F5E6D3",
          50: "#FEFCFA",
          100: "#FDF9F5",
          200: "#FBF3EB",
          300: "#F9EDE1",
          400: "#F7E7D7",
          500: "#F5E6D3",
          600: "#F3DFCD",
          700: "#F1D8C7",
          800: "#EFD1C1",
          900: "#EDCABB",
        },
        mediumGrey: {
          DEFAULT: "#C6B7A7",
          50: "#FDFCFB",
          100: "#FAF8F6",
          200: "#F5F1ED",
          300: "#F0EAE4",
          400: "#EBE3DB",
          500: "#E6DCD2",
          600: "#E1D5C9",
          700: "#DCCEC0",
          800: "#C6B7A7",
          900: "#B0A18E",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
