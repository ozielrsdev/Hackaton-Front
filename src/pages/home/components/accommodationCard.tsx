import hotelImg from '../../../assets/hotel2.jpg'
import { Modal } from './modal'
import { useState } from 'react'

export function AccommodationCard({ accommodation }) {
  const { name, city, state, description, stars, thumb, amenities } =
    accommodation
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div className="md:flex grid lg:grid lg:grid-flow-col md:grid-cols-2 grid-cols-1 gap-7 rounded-3xl items-center border h-auto p-6 border-secondary">
      <img
        src={thumb || hotelImg}
        className="w-48 lg:w-60 md:w-48 rounded-lg h-48 lg:h-60 object-cover mx-auto"
        alt={city}
      />
      <div className="flex w-full h-full flex-col text-center md:text-left">
        <h1 className="font-bold text-secondary text-2xl md:text-2xl lg:text-4xl">
          {name}
        </h1>
        <div className="flex justify-center md:justify-start gap-6 my-2">
          <p className="text-black text-sm md:text-base lg:text-lg font-normal border-b-2 border-secondary">
            {city}
          </p>
          <p className="text-black text-sm md:text-base lg:text-lg font-normal border-b-2 border-secondary">
            {state}
          </p>
        </div>
        <article className="font-normal text-ellipsis text-sm md:text-base  lg:text-lg mt-3">
          {description || 'Descrição não disponível.'}
        </article>
      </div>
      <div className="flex md:justify-between flex-col lg:grid h-auto md:h-[200px] items-center gap-4 md:gap-4">
        <div className="bg-secondary transform rotate-45 flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14">
          <h1 className="transform -rotate-45 text-white font-bold text-xl md:text-2xl">
            {stars}
          </h1>
        </div>
        <button
          className="bg-secondary-variant w-[12.5rem] h-9 text-base font-normal text-white px-4 py-1 rounded-3xl hover:bg-secondary-dark transition self-center"
          onClick={handleOpen}
        >
          Reserve agora
        </button>
      </div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        lodgingName={name}
        city={city}
        state={state}
        stars={stars || 0}
        description={description || 'Sem descrição disponível.'}
        amenities={
          Array.isArray(amenities) ? amenities.map((b) => b.label) : []
        }
        thumb={thumb || hotelImg}
      />
    </div>
  )
}
