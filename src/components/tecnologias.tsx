// src/components/Tecnologias.tsx
import { myTechnologies } from '../data/technologies';

export function Tecnologias() {
  // Duplicamos o array para criar o efeito infinito sem cortes
  const carouselItems = [...myTechnologies, ...myTechnologies];

  return (
    <section id="tecnologias" className="py-20 lg:py-32 border-t border-gray-200 dark:border-slate-800 scroll-mt-10">
      
      {/* Cabeçalho */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-2 block font-semibold">
            // TECNOLOGIAS_
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">
            Minha Stack
          </h2>
        </div>
        <p className="font-mono text-xs text-gray-500 dark:text-slate-400 max-w-xs md:text-right">
          Ferramentas e linguagens 
        </p>
      </div>

      {/* Container do Carrossel (Oculta o que passa da borda) */}
      <div className="flex overflow-hidden group">
        
        {/* Pista animada que desliza para a esquerda */}
        <div className="flex gap-16 w-max animate-scroll group-hover:[animation-play-state:paused] px-8">
          {carouselItems.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 min-w-[80px] opacity-70 hover:opacity-100 transition-opacity cursor-default"
            >
              <img 
                src={tech.icon} 
                alt={`${tech.name} logo`} 
                className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              {/* Ajustado para suportar o modo escuro sem ficar invisível */}
              <span className="text-sm font-mono text-gray-500 dark:text-slate-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}