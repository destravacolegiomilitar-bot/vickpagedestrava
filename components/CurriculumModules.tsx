
import React from 'react';

const CurriculumModules: React.FC = () => {
  const mathModules = [
    {
      title: "NÚMEROS NATURAIS",
      topics: ["MMC e MDC", "Problemas com números naturais", "Questões resolvidas em vídeo"]
    },
    {
      title: "NÚMEROS RACIONAIS",
      topics: ["Frações do básico ao avançado", "Porcentagem", "Problemas com frações e questões resolvidas"]
    },
    {
      title: "GEOMETRIA",
      topics: ["Transformação de unidade de medida", "Perímetro, área e volume", "Problemas e questões resolvidas"]
    },
    {
      title: "MÉDIA E PROBABILIDADE",
      topics: ["Problemas práticos", "Questões resolvidas passo a passo"]
    }
  ];

  const portugueseModules = [
    {
      title: "INTERPRETAÇÃO DE TEXTO",
      topics: ["Tipologia e gêneros textuais", "Compreensão e inferência", "Análise de textos de concursos anteriores"]
    },
    {
      title: "GRAMÁTICA E ORTOGRAFIA",
      topics: ["Classes de palavras", "Acentuação gráfica", "Uso correto da pontuação"]
    },
    {
      title: "SINTAXE",
      topics: ["Concordância verbal e nominal", "Regência", "Análise sintática descomplicada"]
    },
    {
      title: "PRODUÇÃO TEXTUAL",
      topics: ["Estrutura da Redação", "Coesão e Coerência", "Modelos nota máxima para Colégios Militares"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Conteúdo Completo</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-gray-900 uppercase">
            O que seu filho vai <span className="text-red-700">Aprender</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nossa plataforma cobre todo o edital dos Colégios Militares com foco total na prática e na resolução de problemas.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna Matemática */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-l-8 border-red-700">
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-2xl mr-4">
                <i className="fas fa-calculator text-2xl text-red-700"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Módulos de Matemática</h3>
            </div>
            
            <div className="space-y-8">
              {mathModules.map((mod, idx) => (
                <div key={idx} className="relative pl-6 border-l border-gray-100">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 bg-red-600 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">{mod.title}</h4>
                  <ul className="space-y-2">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-gray-600 text-sm flex items-center">
                        <i className="fas fa-check text-green-500 mr-2 text-[10px]"></i>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Português */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-l-8 border-zinc-800">
            <div className="flex items-center mb-8">
              <div className="bg-zinc-100 p-3 rounded-2xl mr-4">
                <i className="fas fa-book-open text-2xl text-zinc-800"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Módulos de Português</h3>
            </div>
            
            <div className="space-y-8">
              {portugueseModules.map((mod, idx) => (
                <div key={idx} className="relative pl-6 border-l border-gray-100">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 bg-zinc-800 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">{mod.title}</h4>
                  <ul className="space-y-2">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-gray-600 text-sm flex items-center">
                        <i className="fas fa-check text-green-500 mr-2 text-[10px]"></i>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            * Todas as aulas acompanham material em PDF e suporte para dúvidas diretamente na plataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurriculumModules;
