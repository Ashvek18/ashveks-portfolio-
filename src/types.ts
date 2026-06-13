export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  client?: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
