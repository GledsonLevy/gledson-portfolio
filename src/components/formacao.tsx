// src/components/Formacao.tsx
import { myEducation } from '../data/education';

export function Formacao() {
  return (
    <section id="formacao" className="py-20 lg:py-32 scroll-mt-24">
      
      {/* Cabeçalho */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-2 block font-semibold">
            // BACKGROUND_
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-light-text dark:text-dark-text tracking-tighter mb-4">
            Formação
          </h2>
        </div>
        <p className="font-mono text-xs text-light-muted dark:text-dark-muted max-w-xs md:text-right">
          Trajetória acadêmica
        </p>
      </div>

      {/* Grid Arquitetural Mapeado */}
      <div className="border-t-2 border-light-text dark:border-dark-text">
        {myEducation.map((item) => {
          
          // Lógica 1: Verifica se o curso é atual checando a string do ano
          const isPresent = item.year.includes('Presente');
          
          // Lógica 2: Pega só o primeiro ano para o número gigante
          const startYear = item.year.substring(0, 4);

          return (
            <div 
              key={item.id} 
              className="group grid grid-cols-1 md:grid-cols-12 border-b border-light-muted/20 dark:border-dark-muted/20 transition-colors duration-500 hover:bg-light-card dark:hover:bg-dark-card"
            >
              
              {/* Coluna 1: O Ano e o Tipo */}
              <div className="md:col-span-3 p-6 md:p-8 md:border-r border-light-muted/20 dark:border-dark-muted/20 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center gap-2 mb-8 md:mb-0">
                  <span className={`w-2 h-2 rounded-sm ${isPresent ? 'bg-blue-600 dark:bg-blue-500 animate-pulse' : 'bg-light-muted dark:bg-dark-muted'}`}></span>
                  <span className={`font-mono text-xs uppercase tracking-wider ${isPresent ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-light-muted dark:text-dark-muted'}`}>
                    {item.type}
                  </span>
                </div>
                
                {/* Letreiro Gigante (Contraste corrigido no modo claro, mantendo o seu hover) */}
                  <span className={`text-6xl lg:text-8xl font-black tracking-tighter transition-colors duration-500 ${isPresent? 'text-gray-300 dark:text-slate-800 group-hover:text-blue-500/40 dark:group-hover:text-blue-500/20': 'text-gray-200 dark:text-slate-800/50'}`}>
                    {startYear}
                  </span>
              </div>

              {/* Coluna 2: Conteúdo */}
              <div className="md:col-span-9 p-6 md:p-8 md:pl-12 flex flex-col justify-center">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  {/* Nível 1: Título com Contraste Máximo */}
                  <h3 className="text-2xl lg:text-4xl font-bold text-light-text dark:text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Badge do Ano */}
                  <span className="font-mono text-xs md:text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-md w-fit border border-blue-200/50 dark:border-blue-800/40">
                    {item.year}
                  </span>
                </div>
                
                {/* Nível 3: Metadado (Instituição) com Contraste Baixo */}
                <p className="font-mono text-sm text-light-muted dark:text-slate-500 mb-6 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {item.institution}
                </p>
                
                {/* Nível 2: Corpo do Texto com Contraste Médio (Agora sim, cinza e confortável) */}
                <p className="text-light-muted dark:text-slate-400 max-w-3xl leading-relaxed text-base lg:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}