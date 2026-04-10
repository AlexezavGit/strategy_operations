export type Lang = 'en' | 'uk';

export interface BilingualText {
  en: string;
  uk: string;
}

export interface Project {
  code: string;
  name: BilingualText;
  budget: number;
  timeline: BilingualText;
  beneficiaries: BilingualText;
  status: string;
  cluster: string;
  description: BilingualText;
}

export interface CanonicalStat {
  value: string;
  label: BilingualText;
  source: string;
  status: 'CANONICAL' | 'CALCULATED' | 'ASSUMPTION';
}

export interface Failure {
  id: string;
  title: BilingualText;
  description: BilingualText;
}

export interface NBUStrategyStep {
  step: number;
  title: BilingualText;
  description: BilingualText;
}

export interface Audience {
  id: string;
  name: BilingualText;
  concern: BilingualText;
  message: BilingualText;
}
