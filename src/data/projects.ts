// src/data/projects.ts
import type { Project } from './types';

export const myProjects: Project[] = [
  
  {
    id: 'neurolearn',
    title: 'NeuroLearn',
    description:
      'Plataforma de aprendizagem desenvolvida para oferecer uma experiência de estudo simples e interativa.',
    longDescription:
      'O NeuroLearn é uma plataforma educacional desenvolvida com o objetivo de tornar o processo de aprendizagem mais simples e interativo. O projeto reúne conteúdos e recursos de estudo em uma única aplicação, proporcionando uma experiência mais organizada para os usuários.',
    features: [
      'Plataforma voltada para aprendizagem e estudos',
      'Interface simples e interativa',
      'Organização de conteúdos educacionais',
      'Sistema desenvolvido com integração a banco de dados'
    ],
    image: '../../public/images/projetos/neurolearn1.png', 
    images: [
      '../../public/images/projetos/neurolearn1.png', 
      '../../public/images/projetos/neurolearn2.png', 
      '../../public/images/projetos/neurolearn3.png', 
    ],
    technologies: ['PHP', 'CSS', 'JavaScript', 'HTML', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/seu-usuario/neurolearn'
    
  },

  {
    id: 'mulheres-tec',
    title: 'Mulheres na Tecnologia',
    description:
      'Sistema gamificado sobre quatro mulheres importantes na área da tecnologia, utilizando jogos para apresentar suas histórias e contribuições de forma didática.',
    longDescription:
      'Mulheres na Tecnologia é um sistema educacional gamificado criado para apresentar a trajetória e os feitos de quatro mulheres importantes para a história da tecnologia. O projeto utiliza uma abordagem interativa, transformando o conteúdo informativo em jogos e atividades para tornar o aprendizado mais didático e envolvente.',
    features: [
      'Conteúdo sobre quatro mulheres importantes da tecnologia',
      'Sistema de aprendizado baseado em gamificação',
      'Jogos educativos e interativos',
      'Apresentação didática das contribuições históricas'
    ],
    image: '../../public/images/projetos/MulheresTec1.png', // Capa principal
    images: [
      '../../public/images/projetos/MulheresTec1.png', // Print 1 (ex: Dashboard)
      '../../public/images/projetos/MulheresTec2.png', // Print 2 (ex: Tela de Quiz)
      '../../public/images/projetos/MulheresTec3.png', // Print 3 (ex: Configurações)
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/seu-usuario/mulheres-tec'
  },

  {
    id: 'spasafe',
    title: 'SpaSafe',
    description:
      'Aplicativo desenvolvido para centralizar informações e facilitar o acompanhamento de situações relacionadas a desastres.',
    longDescription:
      'O SpaSafe é um aplicativo desenvolvido para centralizar informações relacionadas a situações de desastre e facilitar o acompanhamento dessas ocorrências. O projeto foi desenvolvido para dispositivos móveis utilizando Flutter e Dart.',
    features: [
      'Aplicativo desenvolvido para dispositivos móveis',
      'Centralização de informações relacionadas a desastres',
      'Acompanhamento de situações e ocorrências',
      'Interface adaptada para uso em dispositivos móveis'
    ],
    image: '../../public/images/projetos/Spasafe1.jpeg', // Capa principal
    images: [
      '../../public/images/projetos/Spasafe1.jpeg', // Print 1 (ex: Dashboard)
      '../../public/images/projetos/Spasafe2.jpeg', // Print 2 (ex: Tela de Quiz)
      '../../public/images/projetos/Spasafe3.jpeg', // Print 3 (ex: Configurações)
    ],
    technologies: ['Flutter', 'Dart'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/seu-usuario/spasafe'
  },

  {
    id: 'boostresult',
    title: 'BoostResult',
    description:
      'Aplicação web desenvolvida para auxiliar usuários no acompanhamento e obtenção de melhores resultados.',
    longDescription:
      'O BoostResult é uma aplicação web desenvolvida com foco no acompanhamento de resultados e na organização das informações necessárias para auxiliar os usuários na busca por um melhor desempenho.',
    features: [
      'Aplicação web voltada para acompanhamento de resultados',
      'Organização de informações dos usuários',
      'Interface para acompanhamento de desempenho',
      'Integração com banco de dados'
    ],
    image: '../../public/images/projetos/BoostResult1.png', // Capa principal
    images: [
      '../../public/images/projetos/BoostResult1.png', // Print 1 (ex: Dashboard)
      '../../public/images/projetos/BoostResult2.png', // Print 2 (ex: Tela de Quiz)
      '../../public/images/projetos/BoostResult3.png', // Print 3 (ex: Configurações)
    ],
    technologies: ['PHP', 'CSS', 'JavaScript', 'HTML', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/seu-usuario/boostresult'
  },

  {
    id: 'buffet',
    title: 'Buffet',
    description:
      'Sistema para gerenciamento de buffet, desenvolvido para organizar processos, informações e operações do negócio em uma única plataforma.',
    longDescription:
      'O Buffet é um sistema desenvolvido para auxiliar no gerenciamento de um negócio de buffet, centralizando informações e processos em uma única plataforma. O projeto utiliza uma aplicação web moderna, com frontend desenvolvido em React, TypeScript e Vite, e faz parte de uma experiência de desenvolvimento profissional.',
    features: [
      'Sistema para gerenciamento de buffet',
      'Centralização das informações do negócio',
      'Organização dos processos e operações',
      'Interface web desenvolvida com React e TypeScript'
    ],
    image: '../../public/images/projetos/buffet1.png', // Capa principal
    images: [
      '../../public/images/projetos/buffet1.png', // Print 1 (ex: Dashboard)
      '../../public/images/projetos/buffet2.png', // Print 2 (ex: Tela de Quiz)
      '../../public/images/projetos/buffet3.png', // Print 3 (ex: Configurações)
    ],
    technologies: ['React', 'TypeScript', 'Vite'],
    category: 'Profissional',
    status: 'Em desenvolvimento',
    githubUrl: 'https://github.com/seu-usuario/buffet'
  }
];

