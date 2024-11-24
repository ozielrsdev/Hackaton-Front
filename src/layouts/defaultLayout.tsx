import { Header } from '../components/header'
import { Outlet } from 'react-router'
export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
