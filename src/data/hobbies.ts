export interface Hobby {
  id: string;
  title: string;
  description: string;
  iconName: 'Code2' | 'Gamepad2' | 'Dumbbell';
  tags: string[];
}

export const myHobbies: Hobby[] = [
  {
    id: 'programacao',
    title: 'Programação',
    description: 'Faço projetos pessoais e profissionais, sempre buscando aprender novas tecnologias.',
    iconName: 'Code2',
    tags: ['Trabalho', 'Lógica'],
  },
  {
    id: 'games',
    title: 'Games',
    description: 'Sempre gostei de jogos, tanto para relaxar quanto para me desafiar.',
    iconName: 'Gamepad2',
    tags: ['Diversão', 'Estratégia'],
  },
  {
    id: 'esportes',
    title: 'Esportes',
    description: 'Atividades físicas regulares para manter a saúde em dia, aliviar o estresse e manter a disciplina.',
    iconName: 'Dumbbell',
    tags: ['Saúde', 'Disciplina'],
  },
];