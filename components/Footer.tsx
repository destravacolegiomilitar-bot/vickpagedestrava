
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-600 py-16 text-center text-sm border-t border-gray-900">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-black text-gray-400 text-2xl tracking-widest font-sans uppercase">CURSO DESTRAVA</p>
        <p className="mb-8 max-w-md mx-auto leading-relaxed">
          O caminho mais curto entre o estudo e a aprovação no Colégio Militar.
        </p>
        
        <div className="flex justify-center gap-6 mb-8 text-gray-400 text-xl">
           <a href="#" className="hover:text-red-600 transition"><i className="fab fa-instagram"></i></a>
           <a href="#" className="hover:text-red-600 transition"><i className="fab fa-youtube"></i></a>
           <a href="#" className="hover:text-red-600 transition"><i className="fab fa-whatsapp"></i></a>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Todos os direitos reservados. Plataforma Destrava.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
