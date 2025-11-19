import { useTheme } from "../../contexts/ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); 

  const icon = theme === "dark" ? "☀️" : "🌙"; 
  const label = theme === "dark" ? "Modo Claro" : "Modo Escuro";

  return (
    <button
      type="button"
      onClick={toggleTheme} 
      aria-label={label}
      className="p-2 rounded-full text-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-110"
    >
      <span className={theme === "dark" ? "rotate-180 transition-transform duration-500 block" : "transition-transform duration-500 block"}>
        {icon}
      </span>
    </button>
  );
}