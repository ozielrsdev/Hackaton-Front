import { Header } from '../components/header'
import { Outlet } from 'react-router'
export function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
