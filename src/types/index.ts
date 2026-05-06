// ─── Project Types ────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  year: number;
}

export type ProjectCategory =
  | 'full-stack'
  | 'computer-vision'
  | 'backend'
  | 'frontend'
  | 'mobile';

// ─── Skill Types ──────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ml-cv'
  | 'devops'
  | 'language';

// ─── Nav Item ─────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}
