import React from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  lodgingName: string
  city: string
  state: string
  rating: number
  description: string
  amenities: string[]
  stars: number
  imageUrl: string
}

const iconMap: { [key: string]: string[] } = {
  wifi: ['wifi', 'internet'],
  estacionamento: ['estacionamento', 'parking'],
  cafe: ['café', 'coffee'],
  recepcao: ['recepção 24h'],
  condicionado: ['ar condicionado', 'climatizador', 'air conditioning'],
  tv: ['tv a cabo'],
  piscina: ['piscina', 'pool'],
  academia: ['academia'],
  petFriendly: ['pet-friendly', 'petfriendly'],
  restaurante: ['restaurante'],
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  lodgingName,
  city,
  state,
  rating,
  stars,
  description,
  amenities,
  imageUrl,
}) => {
  if (!open) return null

  const getStars = (stars: number) => {
    const fullStars = Math.floor(stars)
    const halfStar = stars % 1 >= 1 ? '⭐️' : ''
    return '⭐️'.repeat(fullStars) + halfStar
  }

  const [showAllAmenities, setShowAllAmenities] = React.useState(false)
  const displayedAmenities = showAllAmenities
    ? amenities
    : amenities.slice(0, 3)

  const getIconForAmenity = (amenity: string) => {
    const amenityKey = amenity.toLowerCase()

    for (const [icon, keywords] of Object.entries(iconMap)) {
      if (keywords.some((keyword) => amenityKey.includes(keyword))) {
        return `/icons/${icon}.png`
      }
    }

    return '/icons/default.png'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-5xl mx-5 p-6 md:p-10 rounded-lg shadow-lg relative overflow-y-auto h-auto md:h-auto lg:h-auto max-h-screen">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="flex md:justify-center border-b pb-4 mb-4">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-2xl font-bold text-blue-500 ">{lodgingName}</h2>
            <h3 className="text-md text-gray-500">
              <span className="text-blue-400">{city}</span>,
              <span className="text-blue-400">{state}</span>
            </h3>
          </div>
          <div className="flex flex-col items-center gap-1 mt-4 md:justify-center text-center">
            <p className="text-2xl font-bold text-blue-500">{rating.toFixed(1)}</p>
            <div className="text-yellow-500 text-lg">{getStars(stars)}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <img
              src={imageUrl}
              alt={lodgingName}
              className="w-full h-60 md:h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-700">{description}</p>
            <h4 className="font-semibold text-lg mt-6">
              Principais Comodidades
            </h4>
            <ul className="mt-2">
              {displayedAmenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 mt-2"
                >
                  <img
                    src={getIconForAmenity(amenity)}
                    alt={amenity}
                    className="w-6 h-6 mr-2"
                  />
                  {amenity}
                </li>
              ))}
            </ul>
            {amenities.length > 3 && !showAllAmenities && (
              <button
                className="text-blue-500 mt-4"
                onClick={() => setShowAllAmenities(true)}
              >
                Ver mais comodidades
              </button>
            )}
            {showAllAmenities && (
              <button
                className="text-blue-500 mt-4"
                onClick={() => setShowAllAmenities(false)}
              >
                Ver menos
              </button>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Reserve já
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
