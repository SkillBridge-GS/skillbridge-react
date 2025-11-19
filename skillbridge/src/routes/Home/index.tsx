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

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">O Ecossistema SkillBridge</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">👩‍💼 Para o Trabalhador</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Assessment Inicial de Habilidades.</li>
              <li>Trilha Personalizada de Requalificação.</li>
              <li>Acompanhamento Gamificado para engajamento.</li>
              <li>Conexão direta com Empresas e Vagas.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">🏢 Para Empresas</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Publicação de Vagas Baseadas em Skills.</li>
              <li>Programas Internos de Upskilling e Reskilling.</li>
              <li>Gestão de Talentos.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-3">🤖 Tecnologia e Inovação</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Machine Learning e Análise Preditiva.</li>
              <li>Mapeamento automático de competências (NLP).</li>
              <li>Recomendações de aprendizado dinâmicas.</li>
              <li>Ambiente ético e centrado no ser humano.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}