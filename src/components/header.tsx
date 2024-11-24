import { IoMdSearch } from 'react-icons/io'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex w-full bg-primary-variant">
      <div className="flex items-center w-full justify-center gap-10 md:max-w-7xl mx-auto py-4 px-6">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold">Resultados</p>
            <span className="flex w-8 h-8 justify-center font-medium items-center bg-secondary text-white rounded-full">
              7
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="border w-[37.5rem] h-11 border-gray-300 rounded-lg items-center px-3 flex justify-center py-1">
              <input
                type="text"
                placeholder="Pesquisar"
                className="flex-1 bg-transparent outline-none"
              />
              <IoMdSearch className="text-secondary" size={24} />
            </div>
            <button className="bg-secondary-variant w-[12.5rem] text-xl font-bold text-white px-4 py-1 rounded-3xl hover:bg-secondary-dark transition">
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
