import { Outlet } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Rodape from './components/Rodape/Rodape'
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const { isDark } = useTheme(); 

  const themeClass = isDark ? "dark-mode" : "light-mode";

  return (
    <div className={`app-container ${themeClass}`}>
      
      <Menu /> 
      <div className="grow pt-16"> 
          <Outlet />
      </div>
      <Rodape />
    </div>
  )
}