import { useState } from 'react'; 
import { Link } from "react-router-dom"; 
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../components/ThemeBotao/ThemeBotao";

export default function Menu() {
  useTheme(); 
  const [menuAberto, setMenuAberto] = useState(false); 

  const menuBgClass = "bg-white/50 dark:bg-gray-900/90";
  const linkTextColorClass = "text-gray-900 hover:bg-gray-100";
  const darkLinkTextColorClass = "dark:text-gray-100 dark:hover:bg-gray-700";

  return (
    <nav className={`fixed top-0 z-50 w-full backdrop-blur-sm ${menuBgClass} shadow-md`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link to="/" className="flex items-center text-xl font-bold text-blue-600 hover:text-blue-500 transition-colors">
            SkillBridge
          </Link>

          <div className="flex items-center space-x-4">
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${linkTextColorClass} ${darkLinkTextColorClass} transition-colors`}>Home</Link>
                
                <Link to="/sobre" className={`px-3 py-2 rounded-md text-sm font-medium ${linkTextColorClass} ${darkLinkTextColorClass} transition-colors`}>Sobre</Link>
                
                <Link to="/integrantes" className={`px-3 py-2 rounded-md text-sm font-medium ${linkTextColorClass} ${darkLinkTextColorClass} transition-colors`}>Integrantes</Link>
                
                <Link to="/faq" className={`px-3 py-2 rounded-md text-sm font-medium ${linkTextColorClass} ${darkLinkTextColorClass} transition-colors`}>FAQ</Link>
                
                <Link to="/login" className={`px-3 py-2 rounded-md text-sm font-medium ${linkTextColorClass} ${darkLinkTextColorClass} transition-colors`}>Login</Link>
                
                <Link to="/cadastro" className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Cadastre-se</Link>
              </div>
            </div>

            <ThemeToggleButton />

            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden p-2 text-2xl text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
              aria-controls="mobile-menu" aria-expanded={menuAberto}>
              {menuAberto ? '✕' : '☰'} 
            </button>

          </div>
          
        </div>
      </div>

      <div className={`md:hidden ${menuAberto ? 'block' : 'hidden'} absolute w-full left-0 top-16 ${menuBgClass} shadow-lg border-t border-gray-200 dark:border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          
          <Link to="/" className={`w-full text-center px-3 py-2 rounded-md text-base font-medium ${linkTextColorClass} ${darkLinkTextColorClass}`}>Home</Link>
          
          <Link to="/sobre" className={`w-full text-center px-3 py-2 rounded-md text-base font-medium ${linkTextColorClass} ${darkLinkTextColorClass}`}>Sobre</Link>
          
          <Link to="/integrantes" className={`w-full text-center px-3 py-2 rounded-md text-base font-medium ${linkTextColorClass} ${darkLinkTextColorClass}`}>Integrantes</Link>
          
          <Link to="/faq" className={`w-full text-center px-3 py-2 rounded-md text-base font-medium ${linkTextColorClass} ${darkLinkTextColorClass}`}>FAQ</Link>
          
          <Link to="/login" className={`w-full text-center px-3 py-2 rounded-md text-base font-medium ${linkTextColorClass} ${darkLinkTextColorClass}`}>Login</Link>
          
          <Link to="/cadastro" className="w-full text-center text-white bg-blue-600 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">Cadastre-se</Link>
        
        </div>
      </div>
    </nav>
  );
}