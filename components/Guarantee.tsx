
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="bg-white p-4 rounded-full shadow-lg border border-gray-100">
          <i className="fas fa-shield-alt text-5xl text-red-700"></i>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Garantia Incondicional de 7 Dias</h4>
          <p className="text-gray-600 text-base max-w-lg">Assine e teste à vontade. Se você achar que não é para o seu filho, basta um clique e nós reembolsamos 100% da sua primeira mensalidade.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
