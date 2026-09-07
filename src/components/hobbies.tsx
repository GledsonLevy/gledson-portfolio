// src/components/Hobbies.tsx
import { Code2, Gamepad2, Dumbbell } from 'lucide-react';
import { myHobbies } from '../data/hobbies';

// Ícones nus com traço fino e estilo minimalista
const iconMap = {
  Code2: <Code2 size={48} strokeWidth={1} />,
  Gamepad2: <Gamepad2 size={48} strokeWidth={1} />,
  Dumbbell: <Dumbbell size={48} strokeWidth={1} />,
};

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 lg:py-32 scroll-mt-24">
      
      {/* Cabeçalho de Seção */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-2 block font-semibold">
            // HOBBIES_
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-light-text dark:text-white tracking-tighter mb-2">
            Tempo livre
          </h2>
        </div>
        <p className="font-mono text-xs text-light-muted dark:text-slate-500 max-w-xs md:text-right">
          Atividades de lazer
        </p>
      </div>

      {/* Lista Editorial Solta */}
      <div className="pt-4">
        <div className="flex flex-col gap-12 lg:gap-16">
          {myHobbies.map((hobby) => (
            <div 
              key={hobby.id}
              className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 transition-all duration-500"
            >
              {/* Lado Esquerdo: Ícone + Título */}
              <div className="flex items-center gap-6 lg:w-1/3 shrink-0">
                <div className="text-light-muted/70 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 origin-center">
                  {iconMap[hobby.iconName as keyof typeof iconMap]}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-light-text dark:text-white tracking-tight">
                  {hobby.title}
                </h3>
              </div>

              {/* Meio: Descrição */}
              <div className="flex-1">
                <p className="text-light-muted dark:text-slate-400 text-base lg:text-lg leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Lado Direito: Hashtags */}
              <div className="flex flex-wrap gap-4 shrink-0 lg:w-1/4 lg:justify-end">
                {hobby.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="font-mono text-xs text-light-muted/70 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}