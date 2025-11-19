import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../ThemeBotao/ThemeBotao";

export default function Menu() {
  const { theme } = useTheme(); 

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm bg-white/50 dark:bg-gray-900/90 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        </div>
      </div>
    </nav>
  );
}