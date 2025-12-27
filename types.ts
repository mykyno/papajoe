import { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  schedule: string;
  price: string;
  features: string[];
  image: string;
  delay: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  category: 'training' | 'games' | 'events' | 'camp';
  title: string;
  span: string;
}

export interface VideoTestimonial {
  id: number;
  thumbnail: string;
  videoUrl: string; // YouTube embed URL
  title: string;
}
