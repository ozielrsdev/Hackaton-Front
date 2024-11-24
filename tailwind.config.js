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
      backgroundImage: {
        hotelImg: "url('./src/assets/hotel.jpg')",
        pousadaImg: "url('./src/assets/pousada.jpg')",
        hostelOuAlbergueImg: "url('./src/assets/hostelOuAlbergue.jpg')",
        resortImg: "url('./src/assets/resort.jpg')",
        hotelFazendaImg: "url('./src/assets/hotelFazenda.jpg')",
        flatImg: "url('./src/assets/flat.jpg')",
        bannerImg: "url('./src/assets/bannerImg.jpg')",
      },
      dropShadow: {
        'shadow-thin': 'black 0 4px 4px',
      },
    },
  },
  plugins: [],
}
