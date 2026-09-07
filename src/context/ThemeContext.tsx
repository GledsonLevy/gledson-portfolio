// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// 1. Tipagem do Contexto
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Criação do Contexto (inicia como undefined para forçar o uso do Provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. O Provider que vai envolver a aplicação
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Inicializa o estado lendo do localStorage OU do sistema operacional
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // Se não tiver salvo, verifica a preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Fallback padrão
  });

  // 4. Efeito para aplicar a classe 'dark' no HTML e salvar no localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('portfolio-theme', theme);
  }, [theme]); // Roda sempre que a variável 'theme' mudar

  // 5. Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 6. Hook customizado para facilitar o uso nos componentes
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}