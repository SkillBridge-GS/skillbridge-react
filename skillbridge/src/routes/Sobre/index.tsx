export default function Sobre() {
  return (
    <main className="min-h-[calc(100vh-10rem)] pt-24 pb-12 px-4 transition-colors duration-500">
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 transition-colors">
          Nossa Missão e Propósito
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
          A SkillBridge nasceu do desafio da <strong>Global Solution 2025</strong> da FIAP. 
          Nosso objetivo é resolver o paradoxo do futuro do trabalho: enquanto a tecnologia avança, 
          como garantimos que ninguém fique para trás?
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:-translate-y-1">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Missão</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Democratizar o acesso à requalificação profissional, conectando talentos humanos às demandas da economia digital através de inteligência artificial ética.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:-translate-y-1">
          <div className="text-4xl mb-4">👁️</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Visão</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Ser a principal ponte global entre a educação tradicional e as profissões do futuro, criando um ecossistema de trabalho inclusivo e sustentável.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:-translate-y-1">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Valores</h3>
          <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
            <li>Inovação Centrada no Humano</li>
            <li>Inclusão Produtiva</li>
            <li>Aprendizado Contínuo</li>
            <li>Ética de Dados</li>
          </ul>
        </div>
      </div>

      <section className="max-w-5xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              O Desafio do Futuro
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Segundo a OIT e o Fórum Econômico Mundial, milhões de empregos serão transformados até 2030. 
              A SkillBridge é a resposta para transformar essa ameaça em oportunidade.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Utilizamos algoritmos avançados para mapear *skills gaps* e sugerir trilhas que não apenas ensinam técnica, 
              mas desenvolvem as *soft skills* essenciais para a era da IA.
            </p>
          </div>
          
        </div>
      </section>

    </main>
  );
}