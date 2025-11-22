import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      pergunta: "O que é a SkillBridge?",
      resposta: "A SkillBridge é uma plataforma inteligente de requalificação profissional que utiliza Inteligência Artificial para conectar trabalhadores a trilhas de aprendizado personalizadas e oportunidades de emprego emergentes."
    },
    {
      pergunta: "Como funciona a avaliação de IA?",
      resposta: "Nossa IA analisa seu perfil atual, suas experiências passadas e seus interesses para identificar lacunas de competências (skills gaps) e sugerir o caminho mais eficiente para sua transição de carreira."
    },
    {
      pergunta: "A plataforma é gratuita?",
      resposta: "Oferecemos um plano gratuito com acesso a diagnósticos básicos. Para trilhas avançadas e certificações reconhecidas pelo mercado, possuímos planos Premium e parcerias com empresas."
    },
    {
      pergunta: "Como as empresas utilizam a SkillBridge?",
      resposta: "Empresas utilizam nossa plataforma para encontrar talentos que estão em processo de requalificação, publicar vagas baseadas em competências e gerenciar programas de 'Upskilling' interno."
    },
    {
      pergunta: "Meus dados estão seguros?",
      resposta: "Sim. Seguimos rigorosamente a LGPD e utilizamos criptografia de ponta a ponta para garantir que suas informações pessoais e profissionais estejam protegidas."
    }
  ];

  return (
    <main className="min-h-[calc(100vh-10rem)] pt-24 pb-12 px-4 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8 transition-colors">
          Perguntas Frequentes
        </h1>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-sm transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {item.pergunta}
                </span>
                <span className={`text-blue-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`px-6 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                {item.resposta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            Ainda tem dúvidas? Entre em contato conosco.
          </p>
          <a href="mailto:suporte@skillbridge.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors">
            suporte@skillbridge.com
          </a>
        </div>
      </div>
    </main>
  );
}