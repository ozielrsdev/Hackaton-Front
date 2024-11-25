import { IoMdSearch } from 'react-icons/io'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex w-full justify-center items-center min-h-16 bg-primary-variant">
      <div className="flex items-center w-full justify-center max-w-7xl gap-4 sm:gap-5 md:gap-6 lg:gap-10 mx-auto py-3 sm:py-4 px-4 sm:px-5">
        <img
          src={logo}
          alt="Logo"
          className="hidden lg:block h-5 sm:h-6 md:h-8 lg:h-10"
        />
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
            Resultados
          </p>
          <span className="flex w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 justify-center font-medium items-center bg-secondary text-white rounded-full">
            7
          </span>
        </div>

        <div className="flex sm:flex-row sm:gap-4 md:gap-5 lg:gap-6 w-full items-center justify-center gap-3">
          <div className="border border-zinc-400 transition duration-300 ease  focus-within:border-secondary w-full sm:w-[16rem] md:w-[24rem] lg:w-[37.5rem] h-8 sm:h-9 md:h-10 lg:h-12 rounded-lg flex items-center justify-center px-2 sm:px-3 md:px-4 bg-white">
            <input
              type="text"
              placeholder="Busque por nome ou CEP"
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm md:text-base lg:text-lg border-none"
            />
            <IoMdSearch className="text-secondary" size={20} />
          </div>
          <div className="flex justify-center items-center relative sm:hidden gap-2">
            <label htmlFor="accommodations" className="font-semibold text-xs">
              Filtrar
            </label>
            <select
              name="accommodations"
              id="accommodations"
              className="bg-slate-50 border transition duration-300 ease focus:border-zinc-300 hover:border-zinc-400 shadow-sm focus:shadow-md pl-3 pr-8 py-2 border-slate-200 placeholder:text-slate-400 appearance-none h-10 rounded w-[85px] font-bold text-xs outline-none row-start-1 col-start-1"
            >
              <option className="" defaultValue={''} value="">
                Nenhum
              </option>
              <option value="Hotel">Hotel</option>
              <option value="Hostel">Hostel</option>
              <option value="Pousada">Pousada</option>
              <option value="Flat ou apartamento">Flat/Apartamento</option>
              <option value="Hotel fazenda">Hotel fazenda</option>
              <option value="Resort">Resort</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
          <button className="md:flex items-center justify-center bg-secondary-variant w-full md:w-20 lg:w-32 hidden sm:w-auto text-xs sm:text-sm lg:text-xl font-bold text-white px-2 sm:px-3 md:px-4 lg:px-5 py-[0.3rem] sm:py-1 md:py-[0.6rem] lg:py-2 rounded-3xl hover:bg-secondary-dark transition mt-3 sm:mt-0">
            Pesquisar
          </button>
        </div>
      </div>
    </header>
  )
}
