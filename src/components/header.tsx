import { IoMdSearch } from 'react-icons/io';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="flex w-full justify-center items-center min-h-16 bg-primary-variant">
      <div className="flex items-center w-full justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-10 mx-auto py-3 sm:py-4 px-4 sm:px-5">
        <img src={logo} alt="Logo" className="hidden lg:block h-5 sm:h-6 md:h-8 lg:h-10" />
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Resultados</p>
          <span className="flex w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 justify-center font-medium items-center bg-secondary text-white rounded-full">
            7
          </span>
        </div>

        <div className="flex sm:flex-row sm:gap-4 md:gap-5 lg:gap-6 w-full items-center justify-center gap-3">
        
          <div className="border border-secondary w-full sm:w-[16rem] md:w-[24rem] lg:w-[37.5rem] h-8 sm:h-9 md:h-10 lg:h-12 rounded-lg flex items-center justify-center px-2 sm:px-3 md:px-4 bg-white">
            <input
              type="text"
              placeholder="Pesquisar"
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm md:text-base lg:text-lg border-none"
            />
            <IoMdSearch className="text-secondary" size={18} />
          </div>
          <div className='flex justify-center items-center gap-2'>
            <label htmlFor='accommodations' className='font-semibold text-xs'>Filtrar</label>
            <select name='accommodations' id='accommodations' className='bg-slate-50 h-10 rounded w-[85px]'>
              <option defaultValue={""} value=''>Nenhum</option>
              <option value='Hotel'>Hotel</option>
              <option value='Hostel'>Hostel</option>
              <option value='Pousada'>Pousada</option>
              <option value='Flat ou apartamento'>Flat/Apartamento</option>
              <option value='Hotel fazenda'>Hotel fazenda</option>
              <option value='Resort'>Resort</option>
            </select>
          </div>
          <button className="md:flex items-center justify-center bg-secondary-variant w-full md:w-[80px] hidden sm:w-auto text-xs sm:text-sm lg:text-xl font-bold text-white px-2 sm:px-3 md:px-4 lg:px-5 py-[0.3rem] sm:py-1 md:py-[0.6rem] lg:py-2 rounded-3xl hover:bg-secondary-dark transition mt-3 sm:mt-0">
            Pesquisar
          </button>
        </div>
      </div>
    </header>
  );
}
