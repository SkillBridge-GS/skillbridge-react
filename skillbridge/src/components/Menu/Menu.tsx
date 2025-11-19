import { Link } from "react-router-dom"; 
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../components/ThemeBotao/ThemeBotao";

export default function Menu() {
  const { isDark } = useTheme(); 

  const menuClass = isDark 
    ? "bg-gray-900 text-white shadow-lg"
    : "bg-white text-gray-900 shadow-md"; 

  return (
    <nav className={`fixed top-0 z-50 w-full ${menuClass} transition-colors duration-500`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link to="/" className="flex items-center text-xl font-bold text-blue-600 hover:text-blue-500 transition-colors">
            SkillBridge 
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                
                <Link to="/" className="text-current px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">Home</Link>
                <Link to="/integrantes" className="text-current px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">Integrantes</Link>
                <Link to="/login" className="text-current px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">Login</Link>
                
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