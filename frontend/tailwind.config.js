/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Apple-style clean font
      },
      lineClamp: {
        3: '3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}