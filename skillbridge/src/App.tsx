import { Outlet } from 'react-router-dom'
import Menu from './components/Menu/Menu.tsx' 
import Rodape from './components/Rodape/Rodape.tsx' 

export default function App() {
  return (
    <>
      <Menu /> 
      
      <Outlet />
      
      <Rodape />
    </>
  )
}