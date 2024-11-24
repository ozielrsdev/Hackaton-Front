/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#267FFA',
        error: '#712107',
        'primary-variant': '#F4F8FF',
        'secondary-variant': '#FF5A05',
      },
    },
  },
  plugins: [],
}
