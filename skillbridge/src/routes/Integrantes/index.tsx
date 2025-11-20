import IntegranteCard from "../../components/IntegranteCard/IntegranteCard"; 
import LucasFoto from '../../assets/lucas.jpeg'; 
import LeoFoto from '../../assets/leonardo.jpeg';
import DiogoFoto from '../../assets/diogo.jpeg';

// Dados do time
const integrantesData = [
  {
    nome: "Lucas Tavares Dagrosa",
    rm: "563424",
    turma: "1TDSPG",
    githubUrl: "https://github.com/lucastdag",
    linkedinUrl: "https://www.linkedin.com/in/lucastdagrosa/",
    fotoUrl: LucasFoto
  },
  {
    nome: "Leonardo Zerbinatti",
    rm: "67890",
    turma: "1TDSPH",
    githubUrl: "https://github.com/LeonardoZerbinattiDeSales",
    linkedinUrl: "https://www.linkedin.com/in/leonardo-zerbinatti-83a43b307/",
    fotoUrl: LeoFoto 
  },
  {
    nome: "Diogo Cunha",
    rm: "563654",
    turma: "1TDSPH",
    githubUrl: "https://github.com/diogo2506",
    linkedinUrl: "https://br.linkedin.com/in/diogo-oliveira-993367193",
    fotoUrl: DiogoFoto 
  },
];

export default function Integrantes() {
  return (
    <main className="min-h-[calc(100vh-10rem)] pt-0 pb-10 text-gray-900 dark:text-blue-600">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 border-b pb-3 border-blue-600/50">
          Equipe - SkillBridge
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrantesData.map((integrante) => (
            <IntegranteCard 
              key={integrante.rm}
              nome={integrante.nome}
              rm={integrante.rm}
              turma={integrante.turma}
              githubUrl={integrante.githubUrl}
              linkedinUrl={integrante.linkedinUrl}
              fotoUrl={integrante.fotoUrl}
            />
          ))}
        </div>
        
      </section>
    </main>
  );
}