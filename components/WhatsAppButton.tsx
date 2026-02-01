
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "555198561253";
  const message = encodeURIComponent("Olá Professor! Vim pela Plataforma Destrava e gostaria de tirar algumas dúvidas.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Tooltip opcional que aparece acima do botão */}
      <div className="bg-white text-gray-800 text-xs font-bold py-2 px-4 rounded-xl shadow-lg mb-2 border border-gray-100 opacity-0 md:opacity-100 transform translate-y-2 transition duration-300 pointer-events-auto">
        Dúvidas? Fale com o Professor!
      </div>
      
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group"
        aria-label="Falar no WhatsApp"
      >
        {/* Efeito de pulso atrás do botão */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
        
        <div className="relative bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition duration-300 group-hover:scale-110 group-hover:bg-[#20ba5a]">
          <i className="fab fa-whatsapp text-4xl"></i>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
