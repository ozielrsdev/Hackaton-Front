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
        hotelImg: "url('/assets/hotel.jpg')",
        pousadaImg: "url('/assets/pousada.jpg')",
        hostelOuAlbergueImg: "url('/assets/hostelOuAlbergue.jpg')",
        resortImg: "url('/assets/resort.jpg')",
        hotelFazendaImg: "url('/assets/hotelFazenda.jpg')",
        flatImg: "url('/assets/flat.jpg')",
        bannerImg: "url('/assets/bannerImg.jpg')",
      },
      dropShadow: {
        'shadow-thin': 'black 0 4px 4px',
      },
    },
  },
  plugins: [],
}
