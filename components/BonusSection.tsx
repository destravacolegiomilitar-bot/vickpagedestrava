
import React from 'react';

const BonusSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-red-600 text-white text-xs font-black tracking-widest mb-4 uppercase animate-pulse">
            Presentes Exclusivos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
            Bônus <span className="text-red-600 italic underline decoration-red-600/30">Inclusos</span> na Assinatura
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Assinando hoje, você ainda recebe acesso imediato a esses materiais complementares fundamentais para a aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bônus 1: Redação */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300 flex flex-col">
            <div className="bg-red-700 p-6 flex items-center justify-between">
              <i className="fas fa-pen-nib text-3xl text-white"></i>
              <span className="text-red-100 text-xs font-bold uppercase tracking-tighter bg-red-800 px-3 py-1 rounded-full">Bônus #01</span>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight uppercase">
                3 Propostas de Redação Comentadas
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A <strong>Professora Victória</strong> analisa e comenta 3 propostas de redação essenciais, mostrando o que o corretor espera e como estruturar o texto para alcançar a nota máxima.
              </p>
              <div className="flex items-center text-red-700 font-bold text-sm uppercase">
                <i className="fas fa-check-circle mr-2"></i> Material Exclusivo em Vídeo + PDF
              </div>
            </div>
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
               <span className="text-gray-400 text-xs line-through mr-2">Valor original: R$ 97,00</span>
               <span className="text-green-600 font-bold uppercase">Grátis para assinantes</span>
            </div>
          </div>

          {/* Bônus 2: Aspectos Emocionais */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300 flex flex-col">
            <div className="bg-zinc-800 p-6 flex items-center justify-between">
              <i className="fas fa-video text-3xl text-white"></i>
              <span className="text-zinc-400 text-xs font-bold uppercase tracking-tighter bg-zinc-900 px-3 py-1 rounded-full">Bônus #02</span>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight uppercase">
                Mentalidade e Organização do Aprovado
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vídeo completo revelando os principais aspectos emocionais e estratégias de organização que os alunos aprovados utilizam para manter o foco e superar a pressão do concurso.
              </p>
              <div className="flex items-center text-red-700 font-bold text-sm uppercase">
                <i className="fas fa-brain mr-2"></i> Inteligência Emocional e Rotina
              </div>
            </div>
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
               <span className="text-gray-400 text-xs line-through mr-2">Valor original: R$ 147,00</span>
               <span className="text-green-600 font-bold uppercase">Grátis para assinantes</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm font-medium">
            <i className="fas fa-info-circle mr-2 text-red-600"></i> 
            Todos os bônus são liberados imediatamente após a confirmação da sua assinatura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
