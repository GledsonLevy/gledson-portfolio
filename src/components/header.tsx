// src/components/Header.tsx
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-slate-800/80 bg-[#FAFAFA]/80 dark:bg-[#0F172A]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Assinatura de Marca (Padronizada com o Footer) */}
        <a 
          href="#sobre" 
          className="flex items-center gap-2 font-black text-xl text-[#1A1D23] dark:text-white tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-blue-600 dark:text-blue-500 font-mono">&lt;/&gt;</span>
          <span>Gledson</span>
        </a>

        {/* Navegação e Botão de Tema */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs tracking-wider uppercase text-gray-600 dark:text-gray-400">
            <a href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#hobbies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Hobbies</a>
            <a href="#formacao" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Formação</a>
            <a href="#projetos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#tecnologias" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tecnologias</a>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800/60 text-[#1A1D23] dark:text-gray-300 border border-gray-200 dark:border-slate-700/60 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all cursor-pointer"
            aria-label="Alternar Tema"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

      </div>
    </header>
  );
}