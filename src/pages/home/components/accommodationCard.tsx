import hotelImg from '../../../assets/hotel2.jpg'
export function AccommodationCard() {
  return (
    <div className="grid grid-flow-col gap-7 rounded-3xl place-content-center items-center border h-60 p-6 border-secondary">
      <img
        src={hotelImg}
        className="w-48 rounded-lg h-48 object-cover"
        alt=""
      />
      <div className="flex w-full h-full flex-col">
        <h1 className="font-bold text-secondary text-2xl">Hotel</h1>
        <div className="flex gap-6">
          <p className="text-black text-sm font-normal border-b-2 border-secondary">
            Recife
          </p>
          <p className="text-black text-sm font-normal border-b-2 border-secondary">
            Pernambuco
          </p>
        </div>
        <article className="font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          odio beatae velit minus, quam dolor maiores natus sit impedit
          quibusdam culpa rem consectetur ea illo animi et! Sed, autem iste.
        </article>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 h-[200px]">
        <div className="bg-secondary transform rotate-45 flex items-center justify-center w-10 h-10 self-start ml-auto">
          <h1 className="transform -rotate-45 text-white font-bold text-xl">
            9.2
          </h1>
        </div>
        <button className="bg-secondary-variant w-[12.5rem] h-9 text-base font-normal text-white px-4 py-1 rounded-3xl hover:bg-secondary-dark transition self-center">
          Reserve agora
        </button>
      </div>
    </div>
  )
}
