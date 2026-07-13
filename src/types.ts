export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  category: "sre" | "integration" | "security" | "architecture" | "mobile";
}

export interface DocSection {
  id: string;
  title: string;
  category: string;
  tags: string[];
  overview: string;
  architectureDescription?: string;
  bestPractices: string[];
  codeTitle?: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface TerminalCommandResponse {
  output: string | string[];
  isHtml?: boolean;
}
