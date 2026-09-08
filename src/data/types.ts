// src/data/types.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  images?: string[];
  technologies: string[];
  category: "Acadêmico" | "Pessoal" | "Profissional";
  status: "Concluído" | "Em desenvolvimento";
  githubUrl?: string;
  liveUrl?: string;
}

export interface Hobby {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  year: string;
  title: string;
  institution: string;

  type: "Graduação" | "Técnico" | "Certificação";

  description?: string;
}
