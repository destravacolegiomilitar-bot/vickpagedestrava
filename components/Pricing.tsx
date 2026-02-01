import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-zinc-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16 z-10 relative">
        
        <div className="w-full md:w-5/12 hidden md:block">
          <img 
            src="/professor-oferta.jpg" 
            alt="Professor Bruno" 
            className="rounded-lg shadow-2xl border border-gray-800 transition duration-700" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x800/111111/ffffff?text=FOTO+OFERTA";
            }}
          />
        </div>

        <div className="w-full md:w-6/12 bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative border-t-8 border-red-700 transform hover:-translate-y-2 transition duration-300">
          
          <div className="absolute top-0 right-0 bg-red-700 text-white px-6 py-2 rounded-bl-xl rounded-br-lg font-bold tracking-wider text-xs uppercase shadow-md">Assinatura Mensal</div>
          
          <h3 className="text-3xl font-bold text-center mb-2 text-gray-800 font-sans uppercase">Acesso Total</h3>
          <p className="text-center text-gray-500 mb-10 text-sm">Matemática + Português + Banco de Questões</p>
          
          <div className="text-center mb-10 border-b border-gray-100 pb-10 bg-gray-50 rounded-xl py-6 mx-auto max-w-sm">
            <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-2">Investimento de Apenas</p>
            <div className="flex justify-center items-end gap-1 text-red-700 leading-none">
              <span className="text-4xl font-bold mb-4">R$</span>
              <span className="text-8xl font-black tracking-tighter">87</span>
            </div>
            <span className="text-xl font-bold text-gray-400 block mt-2 uppercase">/mês</span>
            
            <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              <i className="fas fa-check-circle mr-1"></i> Renovação Automática
            </div>
          </div>

          <a href="https://pay.kiwify.com.br/9aLx2Yt" target="_blank" rel="noopener noreferrer" className="cta-btn btn-font w-full block text-center text-white font-bold py-5 rounded-xl text-xl mb-6 shadow-xl uppercase tracking-wide">
            ASSINAR AGORA
          </a>
          
          <div className="grid grid-cols-2 gap-4 text-center text-xs text-gray-500 font-medium">
            <span className="flex items-center justify-center"><i className="fas fa-lock text-green-600 mr-2"></i> Pagamento Seguro</span>
            <span className="flex items-center justify-center"><i className="fas fa-calendar-times text-red-600 mr-2"></i> Sem fidelidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;