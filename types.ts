export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Demo {
  id: string;
  title: string;
  description: string;
  category: string;
  embedUrl: string;
  thumbnailUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  DEMOS = 'demos',
  CONTACT = 'contact'
}