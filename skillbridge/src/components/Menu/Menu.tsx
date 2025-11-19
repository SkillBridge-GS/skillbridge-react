import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../ThemeBotao/ThemeBotao";

export default function Menu() {
  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm bg-white/50 dark:bg-gray-900/90 shadow-md">
    </nav>
  );
}