interface IRodapeProps {
  texto: string; 
}

export default function Rodape({ texto }: IRodapeProps) {
  return (
    <footer className="w-full mt-auto py-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          {texto} | Global Solution
        </p>
      </div>
    </footer>
  );
}

Rodape.defaultProps = {
  texto: "SkillBridge: Sua ponte para o futuro do trabalho."
}