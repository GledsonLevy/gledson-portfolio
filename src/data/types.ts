// src/data/types.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  images?: string[]; // Galeria de imagens
  technologies: string[];
  category: 'Acadêmico' | 'Pessoal' | 'Profissional';
  status: 'Concluído' | 'Em desenvolvimento';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Hobby {
  id: string;
  title: string;
  shortDescription: string;
  icon: string; // Aqui você pode colocar o nome do ícone do Lucide React (ex: "Gamepad2")
}

export interface EducationItem {
  id: string;
  year: string; // Ex: "2023 - Presente" ou "2022"
  title: string; // Ex: "Sistemas de Informação" ou "Curso de React"
  institution: string; // Ex: "Universidade X" ou "Alura"
  
  // Tipos específicos para ajudar na hora de filtrar ou renderizar ícones diferentes
  type: "Graduação" | "Técnico" | "Certificação"; 
  
  description?: string;
}