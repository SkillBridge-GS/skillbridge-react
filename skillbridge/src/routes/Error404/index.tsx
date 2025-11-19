// src/routes/Page404/index.tsx
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
        Ops! Página não encontrada.
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Parece que você seguiu um link inválido ou a página foi desativada.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Voltar para a Home
      </Link>
    </div>
  );
}