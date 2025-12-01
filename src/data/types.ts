
export interface NavItem {
  label: string;
  path: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  grade: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  format?: string;
  curriculum?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface RoadmapSection {
  id: number;
  title: string;
  items: string[];
}
