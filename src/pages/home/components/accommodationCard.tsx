import hotelImg from '../../../assets/hotel2.jpg';

export function AccommodationCard() {
  return (
    <div className="grid lg:grid-flow-col md:grid-cols-2 grid-cols-1 gap-7 rounded-3xl place-content-center items-center border h-auto p-6 border-secondary">
      <img
        src={hotelImg}
        className="w-48 lg:w-60 md:w-48 rounded-lg h-48 lg:h-60 object-cover mx-auto"
        alt="Hotel"
      />
      <div className="flex w-full h-full flex-col text-center md:text-left">
        <h1 className="font-bold text-secondary text-2xl md:text-2xl lg:text-4xl">Hotel</h1>
        <div className="flex justify-center md:justify-start gap-6 my-2">
          <p className="text-black text-sm md:text-base lg:text-lg font-normal border-b-2 border-secondary">
            Recife
          </p>
          <p className="text-black text-sm md:text-base lg:text-lg font-normal border-b-2 border-secondary">
            Pernambuco
          </p>
        </div>
        <article className="font-normal text-sm md:text-base lg:text-lg mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          odio beatae velit minus, quam dolor maiores natus sit impedit
          quibusdam culpa rem consectetur ea illo animi et! Sed, autem iste.
        </article>
      </div>
      <div className="flex flex-col lg:grid h-auto md:h-[200px] items-center gap-4 md:gap-0">
        <div className="bg-secondary transform rotate-45 flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14">
          <h1 className="transform -rotate-45 text-white font-bold text-xl md:text-2xl">
            9.2
          </h1>
        </div>
        <button className="bg-secondary-variant w-[12.5rem] h-9 md:h-9 lg:h-12 text-base md:text-base lg:text-xl font-normal text-white px-4 py-1 rounded-3xl hover:bg-secondary-dark transition">
          Reserve agora
        </button>
      </div>
    </div>
  );
}
