import React from 'react';

// Lista de nomes de arquivos das fotos dos alunos aprovados
const studentImages = [
  "/aluno1.jpg",
  "/aluno2.jpg",
  "/aluno3.jpg",
  "/aluno4.jpg",
  "/aluno5.jpg",
  "/aluno6.jpg",
  "/aluno7.jpg",
  "/aluno8.jpg",
  "/aluno9.jpg",
  "/aluno10.jpg",
  "/aluno11.jpg",
  "/aluno12.jpg",
  "/aluno13.jpg"
];

const SocialProof: React.FC = () => {
  // Triplicamos a lista para garantir que o carrossel seja infinito e sem buracos
  const carouselImages = [...studentImages, ...studentImages, ...studentImages];

  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
          Nossos Alunos <span className="text-red-700">Aprovados</span>
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-3"></div>
      </div>

      <div className="relative">
        {/* Máscaras de Gradiente Laterais para suavização das bordas */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Container do Carrossel */}
        <div className="animate-marquee flex gap-4 md:gap-6">
          {carouselImages.map((img, index) => (
            <div 
              key={index} 
              className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <img 
                src={img} 
                alt={`Aluno Aprovado ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400/f3f4f6/cccccc?text=FOTO+${(index % studentImages.length) + 1}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;