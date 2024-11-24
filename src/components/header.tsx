import { IoMdSearch } from 'react-icons/io'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex w-full bg-primary-variant">
      <div className="flex flex-wrap items-center w-full justify-between lg:justify-center gap-4 lg:gap-10 mx-auto py-4 px-6">
        <img src={logo} alt="Logo" className="h-8 lg:h-10" />

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <p className="text-sm lg:text-base font-bold">Resultados</p>
            <span className="flex w-6 h-6 lg:w-8 lg:h-8 justify-center font-medium items-center bg-secondary text-white rounded-full">
              7
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-5">
            <div className="border w-full md:w-[30rem] lg:w-[37.5rem] h-10 lg:h-11 border-gray-300 rounded-lg flex items-center px-3">
              <input
                type="text"
                placeholder="Pesquisar"
                className="flex-1 bg-transparent outline-none text-sm lg:text-base"
              />
              <IoMdSearch className="text-secondary" size={20} />
            </div>

            <button className="bg-secondary-variant w-full md:w-auto text-sm lg:text-xl font-bold text-white px-3 py-1 lg:px-4 lg:py-1 rounded-3xl hover:bg-secondary-dark transition">
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
