import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="hero-bg text-white pt-10 md:pt-0 overflow-hidden relative flex items-center min-h-[600px] md:h-[700px]">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center h-full">
        
        {/* Lado do Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left z-20 py-12 md:py-0">
          <span className="inline-block py-1 px-3 rounded bg-red-900/50 text-red-200 text-xs font-bold tracking-widest mb-6 border border-red-800 uppercase">
            PLANO MENSAL ACESSÍVEL
          </span>
          <h1 className="text-3xl md:text-6xl font-black leading-tight mb-6">
            A Ferramenta Definitiva para <span className="text-red-600 uppercase italic">Aprovar seu Filho</span> no Colégio Militar
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            <strong className="text-white">Muitas horas de questões resolvidas</strong>. O apoio prático que ele precisa — pelo valor de uma pizza por mês.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="https://pay.kiwify.com.br/9aLx2Yt" target="_blank" rel="noopener noreferrer" className="cta-btn btn-font inline-block text-white font-bold py-5 px-12 rounded-full text-xl uppercase tracking-wider">
              QUERO ASSINAR AGORA <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
            <i className="fas fa-check-circle text-red-600 mr-1"></i> Acesso Imediato • <i className="fas fa-check-circle text-red-600 mr-1"></i> Cancele quando quiser
          </p>
        </div>
        
        {/* Lado da Imagem (Tamanho da Sessão) */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center md:justify-end relative">
          {/* Brilho de fundo */}
          <div className="absolute blur-ruby rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 w-full h-full flex items-end justify-center md:justify-end">
            <img 
              src="/professor-principal.jpg" 
              alt="Professor Bruno" 
              className="h-full w-full md:w-auto object-cover object-top md:object-bottom transition duration-700 ease-in-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/1000x1200/000000/ffffff?text=PROFESSOR+BRUNO";
              }}
            />
            {/* Overlay de gradiente para suavizar a base da imagem no mobile */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;