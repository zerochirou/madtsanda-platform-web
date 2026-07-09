export interface SectionHeroMetric {
  label: string;
  value: string;
}

export interface OrganizationHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tone: "emerald" | "sky" | "amber";
  metrics: SectionHeroMetric[];
}
