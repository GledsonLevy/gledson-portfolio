# 💻 Portfólio Pessoal — Desafio Include Júnior

Um portfólio moderno, responsivo e de alta performance desenvolvido como parte do processo seletivo da **Include Júnior**.

[🌐 **Acesse a Aplicação em Produção**](https://gledson-portfolio.vercel.app/) | [📄 **Repositório GitHub**](https://github.com/GledsonLevy/gledson-portfolio)

---

##  Sobre o Projeto

Este projeto consiste no meu portfólio pessoal, construído para apresentar minha trajetória acadêmica e profissional, habilidades técnicas, projetos de destaque e interesses pessoais. 

A aplicação foi desenvolvida do zero com foco em arquitetura limpa, alta performance, acessibilidade e uma implementação rigorosa de um **Design System baseado em tokens semânticos** com suporte nativo aos modos Claro e Escuro.

---

##  Funcionalidades Principais

* **Sobre Mim:** Apresentação inicial com links de contato e botões de ação rápida.
* **Projetos:** Lista dos projetos principais com fotos, status de desenvolvimento, tecnologias utilizadas e links para o GitHub e deploy.
* **Formação Acadêmica:** Linha do tempo simples para exibir graduação, cursos e certificações.
* **Tecnologias:** Carrossel animado com a minha stack, ajustado para funcionar de forma leve tanto no mouse quanto no toque no celular.
* **Hobbies:** Espaço para mostrar um pouco do que faço fora do código.
* **Dark / Light Mode:** Alternância de tema via React Context API com salvamento automático no `localStorage`.
* **Animações:** Transições e efeitos de entrada ao rolar a página feitos com `Framer Motion`.

---

##  Design System & Tokens Customizados

O projeto utiliza uma paleta de cores centralizada no `tailwind.config.js` através de tokens semânticos personalizados, garantindo que nenhum valor de cor fique solto pelo código:

| Token | Modo Claro (Light) | Modo Escuro (Dark) | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Fundo (`bg`)** | `light-bg` | `dark-bg` | Fundo principal das seções |
| **Cards (`card`)** | `light-card` | `dark-card` | Fundo de containers, modais e cards |
| **Texto (`text`)** | `light-text` | `dark-text` | Títulos e elementos de alto contraste |
| **Texto Muted (`muted`)** | `light-muted` | `dark-muted` | Descrições, datas e metadados secundários |

---

##  Tecnologias Utilizadas

### **Core & Framework**
* **[React 18](https://react.dev/)** — Construção da interface declarativa em componentes.
* **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para robustez e previsibilidade de dados.
* **[Vite](https://vitejs.dev/)** — Bundler de alta velocidade para desenvolvimento moderno.

### **Estilização & Animação**
* **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário configurado com tokens semânticos.
* **[Framer Motion](https://www.framer.com/motion/)** — Orquestração de animações e transições de estado.
* **[Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/)** — Conjunto de ícones vetoriais leves.

---

##  Estrutura do Projeto

Organização do repositório baseada na separação por responsabilidades:

```text
gledson-portfolio/
├── public/
│   ├── images/               # Imagens e previews dos projetos
│   └── favicon.png          
│
├── src/
│   ├── components/           # Componentes de UI e seções da aplicação
│   │   ├── footer.tsx
│   │   ├── formacao.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── hobbies.tsx
│   │   ├── projetos.tsx
│   │   ├── Reveal.tsx
│   │   └── tecnologias.tsx
│   ├── context/
│   │   └── ThemeContext.tsx  # Contexto global para controle do Dark Mode
│   ├── data/                 # Dados estáticos e contratos
│   │   ├── certificates.ts
│   │   ├── education.ts
│   │   ├── hobbies.ts
│   │   ├── projects.ts
│   │   ├── technologies.ts
│   │   └── types.ts          # Interfaces do TypeScript
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js        # Definição dos tokens do Design System
├── vite.config.ts
└── package.json
