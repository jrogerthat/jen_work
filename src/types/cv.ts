export type Year = number | "Present";

export type DateRange = [number] | [number, Year];

export interface EducationItem {
  degree: string;
  institution: string;
  dates: DateRange;
}

export interface ExperienceItem {
  position: string;
  institution: string;
  location?: string;
  dates: DateRange;
  description?: string;
}

export interface TalkItem {
  role: string;
  institution: string;
  location?: string;
  dates: DateRange;
  title?: string;
}

export interface PublicationItem {
  title: string;
  authors: string[];
  venue: string;
  year?: number;
  volume?: string;
  number?: string;
  pages?: string;
  publisher?: string;
  doi?: string;
  url?: string;
  notes?: string;
}