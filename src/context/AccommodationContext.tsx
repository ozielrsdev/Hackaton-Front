// AccommodationContext.tsx

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
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const AccommodationContext = createContext<
  AccommodationContextType | undefined
>(undefined)

export function AccommodationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [accommodationData, setAccommodationData] = useState<Accommodation[]>([])
  const [filter, setFilter] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const getAccommodations = async () => {
      try {
        let url = 'https://hackaton-onfly.onrender.com/accommodations/'

        if (searchTerm) {
          const cepRegex = /^\d{5}-\d{3}$/
          if (cepRegex.test(searchTerm)) {
            url = `https://hackaton-onfly.onrender.com/accommodations/search-by-zip?CEP=${searchTerm}`
          } else {
            url = `https://hackaton-onfly.onrender.com/accommodations/search?name=${searchTerm}`
          }
        } else if (filter) {
          url = `https://hackaton-onfly.onrender.com/accommodations/search?category=${filter}`
        }

        const response = await axios.get<Accommodation[]>(url)
        setAccommodationData(response.data)
        console.log('Dados recebidos:', response.data)
      } catch (error) {
        console.error('Erro ao buscar acomodações:', error)
      }
    }

    getAccommodations()
  }, [filter, searchTerm])

  return (
    <AccommodationContext.Provider
      value={{
        accommodationData,
        setAccommodationData,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
      }}
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
