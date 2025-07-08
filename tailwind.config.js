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
        bronze: {
          DEFAULT: "#BF6019",
          50: "#FDF4ED",
          100: "#F9E6D3",
          200: "#F2CCA6",
          300: "#E8A873",
          400: "#DC8340",
          500: "#BF6019",
          600: "#A54F15",
          700: "#8A4112",
          800: "#6F340E",
          900: "#54270B",
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
        darkGrey: {
          DEFAULT: "#6B574E",
          50: "#F7F5F4",
          100: "#EFEAE8",
          200: "#DFD5D1",
          300: "#CFC0BA",
          400: "#BFABA3",
          500: "#AF968C",
          600: "#9F8175",
          700: "#8F6C5E",
          800: "#6B574E",
          900: "#54453E",
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
