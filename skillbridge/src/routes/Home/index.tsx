export default function Home() {
  return (
    <main className="min-h-[calc(100vh-10rem)] pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400">
          SkillBridge: Sua Ponte para o Futuro do Trabalho
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Plataforma inteligente de requalificação profissional que usa IA para conectar suas habilidades
          a trilhas de aprendizado personalizadas e vagas emergentes.
        </p>
        <div className="mt-8">
          <a 
            href="/cadastro" 
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-colors transform hover:scale-105"
          >
            Comece Sua Requalificação Agora
          </a>
        </div>
      </section>


  )
}