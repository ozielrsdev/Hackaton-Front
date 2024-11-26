import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export interface Accommodation {
  id: number
  name: string
  thumb: string
  city: string
  state: string
  rating: number
  description: string
  amenities: { key: string; label: string }[]
}

interface AccommodationContextType {
  accommodationData: Accommodation[]
  setAccommodationData: React.Dispatch<React.SetStateAction<Accommodation[]>>
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const AccommodationContext = createContext<
  AccommodationContextType | undefined
>(undefined)

export function AccommodationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [accommodationData, setAccommodationData] = useState<Accommodation[]>(
    [],
  )
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    const getAccommodations = async () => {
      try {
        const url = filter
          ? `https://hackaton-onfly.onrender.com/accommodations/search?category=${filter}`
          : 'https://hackaton-onfly.onrender.com/accommodations/'

        const response = await axios.get<Accommodation[]>(url)
        if (filter !== '') {
          console.log(response.data)
        }
        setAccommodationData(response.data)
      } catch (error) {
        console.error('Erro ao buscar acomodações:', error)
      }
    }

    getAccommodations()
  }, [filter])

  return (
    <AccommodationContext.Provider
      value={{ accommodationData, setAccommodationData, filter, setFilter }}
    >
      {children}
    </AccommodationContext.Provider>
  )
}

export function useAccommodation() {
  const context = useContext(AccommodationContext)
  if (!context) {
    throw new Error(
      'useAccommodation must be used within an AccommodationProvider',
    )
  }
  return context
}
