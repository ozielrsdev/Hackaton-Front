import { CategoryCard } from './components/categoryCard'

export function Home() {
  return (
    <main className="w-full flex-grow flex flex-col gap-9 items-center justify-center">
      <section className="border pt-7 px-12 border-secondary rounded-xl h-60 w-full max-w-7xl flex items-center justify-center">
        <CategoryCard
          tooltipTitle="Hotel"
          tooltipContent="Hospedagem confortável com serviços como recepção, café da manhã e lazer, ideal para lazer ou negócios."
          bgImage="bg-hotelImg"
        >
          Hotel
        </CategoryCard>
        <CategoryCard
          tooltipTitle="Pousada"
          tooltipContent="Ambiente acolhedor, com poucos quartos e atendimento familiar, perfeito para descansar."
          bgImage="bg-pousadaImg"
        >
          Pousada
        </CategoryCard>
        <CategoryCard
          tooltipTitle="Hotel ou Albergue"
          tooltipContent="Opção econômica com quartos coletivos e áreas comuns, ideal para socializar."
          bgImage="bg-hostelOuAlbergueImg"
        >
          Hotel ou Albergue
        </CategoryCard>
        <CategoryCard
          tooltipTitle="Resort"
          tooltipContent="Hospedagem luxuosa com lazer completo, excelente para quem quer relaxar."
          bgImage="bg-resortImg"
        >
          Resort
        </CategoryCard>
        <CategoryCard
          tooltipTitle="Hotel Fazenda"
          tooltipContent="Hospedagem rural com contato com a natureza e atividades no campo, ideal para famílias"
          bgImage="bg-hotelFazendaImg"
        >
          Hotel Fazenda
        </CategoryCard>
        <CategoryCard
          tooltipTitle="Flat ou Apartamento"
          tooltipContent="Combina serviços de hotel com estrutura de apartamento, ideal para estadias longas ou independentes."
          bgImage="bg-flatImg"
        >
          Flat ou Apartamento
        </CategoryCard>
      </section>
      <section className="bg-zinc-700 bg-bannerImg bg-cover bg-center flex items-center rounded-xl text-6xl justify-center h-64 w-full max-w-7xl"></section>
    </main>
  )
}
