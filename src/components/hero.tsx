// src/components/Hero.tsx
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="sobre" className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* Coluna da Esquerda: Textos e Prompt */}
        <div className="flex-1 w-full relative z-10">
          
          {/* Mini Prompt Terminal */}
          <div className="font-mono text-xs md:text-sm mb-6 flex items-center gap-2 bg-light-card dark:bg-dark-card w-fit px-3.5 py-1.5 rounded-lg border border-gray-200/60 dark:border-slate-800">
             <span className="text-blue-600 dark:text-blue-400 font-semibold">gledson@portfolio</span>
             <span className="text-light-muted dark:text-dark-muted">:~$</span>
             <span className="text-light-text dark:text-dark-text font-medium">whoami</span>
          </div>
          
          {/* Título Principal */}
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-light-text dark:text-dark-text leading-[1.08]">
            Desenvolvedor<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Full Stack.
            </span>
          </h1>
          
          {/* Efeito Terminal / Descrição */}
          <div className="font-mono text-sm md:text-base text-light-muted dark:text-dark-muted mb-10 max-w-xl leading-relaxed">
            <span className="text-emerald-500 font-bold mr-2">&gt;</span>
            Construindo arquiteturas robustas e interfaces precisas. Transformo lógica em experiências.
            <span className="inline-block w-2 h-4 ml-1.5 bg-light-muted dark:bg-dark-muted align-middle animate-pulse"></span>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projetos" 
              className="px-6 py-3.5 rounded-xl bg-blue-600 md:hover:bg-blue-700 text-white font-semibold transition-all duration-300 flex items-center gap-2 group md:hover:-translate-y-0.5 shadow-lg shadow-blue-500/20"
            >
              Ver Projetos
              <ArrowRight size={18} className="md:group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#hobbies" 
              className="px-6 py-3.5 rounded-xl bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text font-semibold md:hover:bg-gray-200/70 dark:md:hover:bg-slate-700/60 transition-all duration-300 border border-gray-200/80 dark:border-slate-700/80 md:hover:-translate-y-0.5"
            >
              Sobre mim
            </a>
          </div>
        </div>

        {/* Coluna da Direita: Foto Assimétrica & Badge */}
        <div className="w-full lg:w-5/12 relative group mt-4 lg:mt-0">
           {/* Moldura Deslocada (Estilo Dossiê) - Corrigido para mobile */}
            <div className="absolute inset-0 -translate-x-4 translate-y-4 lg:-translate-x-6 lg:translate-y-6 border-2 border-blue-500/30 dark:border-blue-500/20 rounded-2xl transition-transform duration-500 md:group-hover:translate-x-0 md:group-hover:translate-y-0"></div>
           
           {/* Imagem */}
           <img 
             src="../../public/images/gledson.png" 
             alt="Gledson" 
             className="relative z-10 w-full aspect-square object-cover rounded-2xl  shadow-2xl"
           />
           
           {/* Badge Terminal Flutuante */}
           <div className="absolute -bottom-5 -right-3 sm:-right-5 z-20 bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-md border border-gray-200 dark:border-slate-800 p-3.5 px-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <Terminal size={18} />
              </div>
              <div className="font-mono text-xs">
                <p className="text-light-muted dark:text-dark-muted text-[10px] uppercase tracking-wider">Status</p>
                <p className="font-bold text-light-text dark:text-dark-text flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Deploy Ready
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}