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
        background: '#222d60',
        foreground: '#f4f3ee',
        'deep-dark': '#2f3437',
        'error-red': '#e5383b',
        'success-green': '#55a630',
      },
    },
  },
  plugins: [],
} satisfies Config;
