import { BrowserRouter } from 'react-router'
import { Router } from './routes'
import { AccommodationProvider } from './context/AccommodationContext'

export function App() {
  return (
    <AccommodationProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AccommodationProvider>
  )
}
