// src/data/projects.ts
import type { Project } from './types';

export const myProjects: Project[] = [
  
  {
    id: 'neurolearn',
    title: 'NeuroLearn',
    description:
      'Plataforma de aprendizagem gamificada com quizzes interativos e sistema de conquistas',
    longDescription:
      'O NeuroLearn foi desenvolvido com o objetivo de tornar o aprendizado mais interativo e motivador para pessoas no espectro autista. A plataforma utiliza quizzes e elementos de gamificação, como conquistas, para estimular a participação e incentivar a continuidade dos estudos. A proposta busca transformar o aprendizado em uma experiência mais envolvente, utilizando recursos de interação e recompensa para manter o usuário engajado',
    features: [
      'Quizzes interativos',
      'Sistema de conquistas',
      'Aprendizado gamificado',
      'Sistema de progressão e incentivo ao aprendizado'
    ],
    image: '/images/projetos/NeuroLearn1.png', 
    images: [
      '/images/projetos/NeuroLearn1.png', 
      '/images/projetos/NeuroLearn2.png', 
      '/images/projetos/NeuroLearn3.png', 
    ],
    technologies: ['PHP', 'CSS', 'JavaScript', 'HTML', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/GledsonLevy/NeuroLearn'
    
  },

  {
    id: 'mulheres-tec',
    title: 'Mulheres na Tecnologia',
    description:
      'Plataforma gamificada criada para apresentar mulheres que marcaram a história da tecnologia',
    longDescription:
      'O projeto foi desenvolvido para a Feira do Conhecimento do Ensino Médio, em 2024, durante o 2º ano. A plataforma homenageia Ada Lovelace, Margaret Hamilton, Grace Hopper e Kathleen Booth, apresentando suas contribuições para a tecnologia de forma interativa. Os usuários podiam completar quebra-cabeças e jogos da memória relacionados a cada personalidade para desbloquear conteúdos explicativos. Ao final, um quiz avaliava o conhecimento adquirido e apresentava pontuação e ranking em tempo real, tornando o aprendizado mais dinâmico e gamificado',
    features: [
      'Quebra-cabeças interativos',
      'Jogo da memória',
      'Quiz sobre as personalidades apresentadas',
      'Pontuação e ranking em tempo real'
    ],
    image: '/images/projetos/MulheresTec1.png',
    images: [
      '/images/projetos/MulheresTec1.png',
      '/images/projetos/MulheresTec2.png',
      '/images/projetos/MulheresTec3.png',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    //githubUrl: 'https://github.com/seu-usuario/mulheres-tec'
  },

  {
    id: 'spasafe',
    title: 'SpaSafe',
    description:
      'Aplicativo desenvolvido para identificar, informar e alertar sobre áreas afetadas por desastres ambientais',
    longDescription:
      'O SpaSafe foi desenvolvido para a Feira do Conhecimento do Ensino Médio, em 2025, com o objetivo de utilizar a tecnologia como ferramenta de apoio diante de desastres ambientais, como enchentes. Os usuários podiam marcar áreas de risco no mapa e adicionar informações sobre os problemas encontrados. A plataforma também contava com notícias relacionadas às regiões afetadas e alertas para avisar usuários que estivessem próximos de locais com risco elevado. A proposta era beneficiar tanto moradores e viajantes quanto auxiliar órgãos responsáveis na identificação e acompanhamento dessas ocorrências',
    features: [
      'Mapa com registro de áreas de risco',
      'Cadastro de ocorrências e informações sobre problemas',
      'Alertas de áreas com alto risco de desastre',
      'Notícias relacionadas às regiões afetadas'
    ],
    image: '/images/projetos/Spasafe1.jpeg',
    images: [
      '/images/projetos/Spasafe1.jpeg',
      '/images/projetos/Spasafe2.jpeg',
      '/images/projetos/Spasafe3.jpeg',
    ],
    technologies: ['Flutter', 'Dart'],
    category: 'Acadêmico',
    status: 'Concluído',
   // githubUrl: 'https://github.com/seu-usuario/spasafe'
  },

  {
    id: 'boostresult',
    title: 'BoostResult',
    description:
      'Plataforma para conectar alunos e personal trainers por meio de chat, envio de arquivos e acompanhamento',
    longDescription:
      'O BoostResult foi desenvolvido como trabalho final da disciplina de Programação Web, no 3º ano do Ensino Médio. A proposta era criar uma plataforma que facilitasse a conexão entre alunos e personal trainers, reunindo funcionalidades como conversas por chat, envio de arquivos e compartilhamento de informações. A ideia surgiu como uma espécie de combinação entre LinkedIn e WhatsApp, adaptada ao contexto de treinamento e acompanhamento profissional',
    features: [
      'Chat entre alunos e personal trainers',
      'Envio e compartilhamento de arquivos',
      'Conexão entre alunos e profissionais',
      'Compartilhamento de informações e acompanhamento'
    ],
    image: '/images/projetos/BoostResult1.png',
    images: [
      '/images/projetos/BoostResult1.png',
      '/images/projetos/BoostResult2.png',
      '/images/projetos/BoostResult3.png',
    ],
    technologies: ['PHP', 'CSS', 'JavaScript', 'HTML', 'MySQL'],
    category: 'Acadêmico',
    status: 'Concluído',
    githubUrl: 'https://github.com/GledsonLevy/BoostResult'
  },

  {
    id: 'buffet',
    title: 'Buffet',
    description:
      'Plataforma para auxiliar no gerenciamento, organização e controle dos processos de um buffet',
    longDescription:
      'O Buffet é uma plataforma desenvolvida pela DevDigital para auxiliar na gestão e organização dos processos de um buffet. O sistema centraliza diferentes áreas da operação em um único ambiente, permitindo acompanhar informações financeiras, funcionários, utensílios e eventos, além de oferecer um dashboard com indicadores importantes para facilitar a tomada de decisões. O projeto foi concluído e atualmente está sendo utilizado em um ambiente real',
    features: [
      'Dashboard com indicadores de gestão',
      'Controle de gastos e lucros',
      'Gerenciamento de funcionários e utensílios',
      'Criação e gerenciamento de eventos'
    ],
    image: '/images/projetos/buffet1.png',
    images: [
      '/images/projetos/buffet1.png',
      '/images/projetos/buffet2.png',
      '/images/projetos/buffet3.png',
    ],
    technologies: ['React', 'TypeScript', 'Next', 'Javascript'],
    category: 'Profissional',
    status: 'Concluído',
    // githubUrl: 'https://github.com/seu-usuario/buffet'
  }
];

