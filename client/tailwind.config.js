/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        "xxl": "1480px",
        "xl3": "1700px",
        "phone": "300px",
        "tablet": "500px"

      },
      colors: {
        aqua: {
          300: "rgba(50, 230, 195)",
          400: "rgba(52, 211, 153)"
        },
        navWhite: {
          500: "rgba(255, 255, 255, 0.5)"
        },
        boxShadow: {
          "custom": "0 0 5px 2px gray"
        },
      },
    },
  },
  plugins: [
    require(`@tailwindcss/typography`),
  ],
}
