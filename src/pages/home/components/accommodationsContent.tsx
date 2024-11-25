import { useAccommodation } from '../../../context/AccommodationContext'
import { AccommodationCard } from './accommodationCard'

export function AccommodationsContent() {
  const { accommodationData } = useAccommodation()

  return (
    <section className="justify-start items-center overflow-y-auto gap-8 flex flex-col h-full min-h-[50rem] max-w-screen-xl w-full">
      {accommodationData.map((accommodation) => (
        <AccommodationCard
          key={accommodation.id}
          accommodation={accommodation}
        />
      ))}
    </section>
  )
}
