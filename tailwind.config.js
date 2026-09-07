/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modo Claro (Sofisticado)
        light: {
          bg: '#FAFAFA',      // Branco acinzentado (Fundo principal)
          card: '#EFF1F4',    // Cinza leve (Cards)
          text: '#1A1D23',    // Quase preto (Títulos)
          muted: '#64748B',   // Cinza médio (Descrições)
        },
        // Modo Escuro (Consistente)
        dark: {
          bg: '#0F172A',      // Slate 900 (Fundo principal)
          card: '#1E293B',    // Slate 800 (Cards)
          text: '#F8FAFC',    // Branco suave (Títulos)
          muted: '#94A3B8',   // Slate 400 (Descrições)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}