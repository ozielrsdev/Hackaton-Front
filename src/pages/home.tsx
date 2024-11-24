// import resortImg from '../assets/resort.jpg'
// import flatOuApartamentoImg from '../assets/flatOuApartamento.jpg'
// import hostelOuAlbergueImg from '../assets/hostelOuAlbergue.jpg'
// import hotelImg from '../assets/hotel.jpg'
// import hotelFazendaImg from '../assets/hotelFazenda.jpg'
// import pousadaImg from '../assets/pousada.jpg'

import { CategoryCard } from './components/categoryCard'

export function Home() {
  return (
    <main className="w-full flex-grow flex flex-col gap-9 items-center justify-center">
      <section className="border pt-7 px-12 border-secondary rounded-xl h-60 w-full max-w-7xl flex items-center justify-center">
        <CategoryCard bgImage="bg-hotelImg">Hotel</CategoryCard>
        <CategoryCard bgImage="bg-pousadaImg">Pousada</CategoryCard>
        <CategoryCard bgImage="bg-hostelOuAlbergueImg">
          Hotel ou Albergue
        </CategoryCard>
        <CategoryCard bgImage="bg-resortImg">Resort</CategoryCard>
        <CategoryCard bgImage="bg-hotelFazendaImg">Hotel Fazenda</CategoryCard>
        <CategoryCard bgImage="bg-flatImg">Flat ou Apartamento</CategoryCard>
      </section>
      <section className="bg-zinc-700 flex items-center rounded-xl text-6xl justify-center h-64 w-full max-w-7xl">
        <h1>Banner</h1>
      </section>
    </main>
  )
}
