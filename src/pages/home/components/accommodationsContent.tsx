import { AccommodationCard } from './accommodationCard'

export function AccommodationsContent() {
  return (
    <section className="justify-start items-center overflow-y-auto gap-8 flex flex-col h-full min-h-[50rem] max-w-screen-xl w-full">
      <AccommodationCard />
      <AccommodationCard />
      <AccommodationCard />
      <AccommodationCard />
    </section>
  )
}
