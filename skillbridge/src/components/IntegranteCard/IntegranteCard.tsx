interface IIntegranteCardProps {
  nome: string;
  rm: string;
  turma: string;
  githubUrl: string;
  linkedinUrl: string;
  fotoUrl: string; 
}

export default function IntegranteCard({ nome, rm, turma, githubUrl, linkedinUrl, fotoUrl }: IIntegranteCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 text-center">
      
      <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center overflow-hidden mb-4 border-4 border-blue-500/50">
         
         <img 
            src={fotoUrl} 
            alt={`Foto de ${nome}`} 
            className="object-cover w-full h-full"
         />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{nome}</h3>
      <p className="text-md text-gray-600 dark:text-gray-400 mt-1">RM: {rm} | Turma: {turma}</p>

      <div className="flex justify-center space-x-4 mt-4">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
        >
          GitHub 
        </a>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
        >
          LinkedIn 
        </a>
      </div>
    </div>
  );
}