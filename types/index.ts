export interface NavLink {
  label: string;
  href: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  score?: string;
  period: string;
  coursework?: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  level: number;
}

export interface Certification {
  provider: string;
  courses: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  portfolioRepo: string;
}
