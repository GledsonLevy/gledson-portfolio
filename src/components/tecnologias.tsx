// src/components/Tecnologias.tsx
import { myTechnologies } from "../data/technologies";

export function Tecnologias() {
  const carouselItems = [...myTechnologies, ...myTechnologies];

  return (
    <section
      id="tecnologias"
      className="py-20 lg:py-32 border-t border-gray-200 dark:border-slate-800 scroll-mt-20 "
    >
      <style>{`
        /* 1. DISPOSITIVOS COM MOUSE (Notebook / Monitores) */
        @media (hover: hover) and (pointer: fine) {
          .tech-container {
            pointer-events: auto;
          }
          /* Pausa o carrossel ao passar o mouse por cima */
          .tech-container:hover .tech-track {
            animation-play-state: paused;
          }
          /* Estado inicial no PC: Ícone em preto e branco e semi-transparente */
          .tech-card {
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }
          .tech-card-icon {
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }
          /* Quando passa o MOUSE no PC: ganha cor e 100% de opacidade */
          .tech-card:hover {
            opacity: 1;
          }
          .tech-card:hover .tech-card-icon {
            filter: grayscale(0%);
          }
        }

        /* 2. DISPOSITIVOS TOUCH (Celulares e Tablets) */
        @media (hover: none), (pointer: coarse) {
          .tech-container {
            /* Desativa o toque no carrossel para NUNCA travar a tela ou congelar ao clicar */
            pointer-events: none;
          }
          .tech-card {
            opacity: 1;
          }
          .tech-card-icon {
            filter: grayscale(0%);
          }
        }
      `}</style>

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

      <div className="tech-container flex overflow-hidden select-none">
        <div className="tech-track flex gap-16 w-max animate-scroll px-8">
          {carouselItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-card flex flex-col items-center gap-3 min-w-[80px] cursor-default"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="tech-card-icon h-12 w-12 object-contain"
              />
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
