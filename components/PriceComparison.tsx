import React from 'react';

const PriceComparison: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative z-20 rounded-t-3xl md:rounded-none">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 uppercase">A conta do Professor Particular <span className="text-red-700 font-black">não fecha?</span></h2>
        
        <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg text-left">
          <p className="mb-8 text-lg text-gray-600 text-center md:text-left">Seu filho trava nos exercícios e você pensa em contratar aulas particulares. Mas vamos ser realistas com os custos:</p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full bg-gray-100 p-8 rounded-2xl text-gray-500 text-center transition duration-300">
              <i className="fas fa-chalkboard-teacher text-4xl mb-4"></i>
              <p className="text-sm font-bold uppercase tracking-wide">Professor Particular</p>
              <p className="text-4xl font-bold text-gray-700 mt-2">R$ 800,00</p>
              <p className="text-sm mt-1">por mês</p>
              <p className="text-xs mt-4 border-t border-gray-300 pt-4">(Considerando apenas 2 aulas/semana)</p>
            </div>
            
            <div className="text-red-700 text-3xl font-black p-2 rounded-full bg-red-100 w-12 h-12 flex items-center justify-center shadow-sm">X</div>
            
            <div className="flex-1 w-full bg-gradient-to-br from-red-50 to-white border-2 border-red-600 p-8 rounded-2xl text-red-900 relative shadow-xl transform md:scale-110 z-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase whitespace-nowrap">Mais Inteligente</div>
              <div className="text-center">
                <i className="fas fa-laptop-code text-4xl mb-4 text-red-600"></i>
                <p className="text-sm font-bold text-red-800 uppercase tracking-wide">Plataforma Destrava</p>
                <div className="flex justify-center items-end gap-1 mt-2">
                  <span className="text-2xl font-bold text-red-600 mb-1">R$</span>
                  <span className="text-6xl font-black text-red-700 leading-none">87</span>
                </div>
                <p className="text-sm font-bold text-red-800 mt-1">por mês</p>
                <p className="text-xs mt-4 border-t border-red-200 pt-4 text-red-700 font-semibold uppercase"><i className="fas fa-infinity mr-1"></i> Acesso Ilimitado 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;