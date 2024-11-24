import { Route, Routes } from 'react-router'
import { Home } from './pages/home/home'
import { DefaultLayout } from './layouts/defaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
