import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 z-10 relative">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 blur-ruby rounded-full opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img 
            src="/professor-aula.jpg" 
            alt="Professor Bruno Ensinando" 
            className="relative rounded-xl shadow-2xl border-2 border-gray-800 z-10 mx-auto transition duration-500" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600/111111/ffffff?text=FOTO+AULA";
            }}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Um Professor Particular no bolso dele <span className="text-red-600">24h por dia</span></h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Na <strong>Plataforma Destrava</strong>, não entregamos apenas o gabarito. Nós entregamos o <strong>RACIOCÍNIO</strong>. 
          </p>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            São <strong>muitas horas de resoluções gravadas</strong> onde eu explico passo a passo as questões, substituindo a necessidade de aulas particulares constantes.
          </p>
          
          <ul className="space-y-6">
            {[
              { icon: 'fa-play', title: 'Resoluções Passo a Passo', desc: 'Matemática e Português detalhados em vídeo.' },
              { icon: 'fa-piggy-bank', title: 'Economia Gigante', desc: 'Economize mais de R$ 700,00 todos os meses.' },
              { icon: 'fa-brain', title: 'Autonomia Real', desc: 'Seu filho aprende a estudar sozinho e destravar.' }
            ].map((f, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-red-900/30 p-2 rounded-lg mr-4 text-red-500"><i className={`fas ${f.icon} text-xl w-6 text-center`}></i></div>
                <div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-tight">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;