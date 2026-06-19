import type { LucideIcon } from "lucide-react";

export interface ProgramMadrasahMetric {
  label: string;
  value: string;
}

export interface ProgramMadrasahHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProgramMadrasahSection {
  title: string;
  description: string;
  items: string[];
}

export interface ProgramMadrasahPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  metrics: ProgramMadrasahMetric[];
  highlights: ProgramMadrasahHighlight[];
  sections: ProgramMadrasahSection[];
}
