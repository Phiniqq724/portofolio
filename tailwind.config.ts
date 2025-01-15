import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3a3a3a",
        secondary: "#f3f3f3",
      },
      dropShadow: {
        "primary-c": "3px 3px 0px rgba(58, 58, 58, 1)",
        "secondary-c": "3px 3px 0px rgba(243, 243, 243, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
