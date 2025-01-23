/** @type {import('tailwindcss').Config} */
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
        textcolor: "var(--text-color)",
        navcolor: 'var(--nav-color)',
        primary: 'var(--primary-color)',
        maincolor: 'var(--main-color)'
      },
    },
  },
  plugins: [],
};
