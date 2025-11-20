import { useTheme } from '../../contexts/ThemeContext';

export default function Rodape() {
  const { isDark } = useTheme();
  const footerClass = isDark 
    ? "bg-gray-800 text-white border-gray-700" 
    : "bg-blue-900 text-white border-blue-900"; 

  return (
    <footer className={`p-4 w-full border-t shadow-inner ${footerClass}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center text-sm">
        <p className="mb-1 sm:mb-0">
          &copy; 2025 SkillBridge | Global Solution FIAP
        </p>
      </div>
    </footer>
  );
}