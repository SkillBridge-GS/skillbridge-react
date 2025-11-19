import { Link } from "react-router-dom"; 
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../components/ThemeBotao/ThemeBotao";

export default function Menu() {
  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm bg-white/50 dark:bg-gray-900/90 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link to="/" className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
             SkillBridge 
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                
                <Link to="/" className="text-gray-900 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Home
                </Link>
                
                <Link to="/integrantes" className="text-gray-900 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Integrantes
                </Link>
                
                <Link to="/login" className="text-gray-900 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Login
                </Link>
                
                <Link to="/cadastro" className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Cadastre-se
                </Link>
              </div>
            </div>

            <ThemeToggleButton />
          </div>
          
        </div>
      </div>
    </nav>
  );
}