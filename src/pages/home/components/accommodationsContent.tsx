import { useState } from 'react'
import { useAccommodation } from '../../../context/AccommodationContext'
import { AccommodationCard } from './accommodationCard'

export function AccommodationsContent() {
  const { accommodationData } = useAccommodation()
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(10) // Quantos itens por página
  const totalPages = Math.max(1, Math.ceil(accommodationData.length / limit))

  // Dividindo os dados para a paginação local
  const paginatedData = accommodationData.slice(
    (currentPage - 1) * limit, 
    currentPage * limit
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section className="justify-start items-center overflow-y-auto gap-8 flex flex-col h-full min-h-[50rem] max-w-screen-xl w-full">
      {/* Renderização dos itens paginados */}
      {paginatedData.map((accommodation) => (
        <AccommodationCard
          key={accommodation.id}
          accommodation={accommodation}
        />
      ))}

      {/* Controle de Paginação */}
      <div className="pagination flex flex-col gap-4 items-center justify-center">
        <span>Página {currentPage} de {totalPages}</span>
        <div className="flex gap-4">
          <button
            className={`bg-secondary-variant text-white rounded w-24 ${
              currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
          >
            Anterior
          </button>
          <button
            className={`bg-secondary-variant text-white rounded w-24 ${
              currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          >
            Próxima
          </button>
        </div>
      </div>
    </section>
  )
}
