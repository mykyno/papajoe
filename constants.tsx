import { Users, Trophy, MapPin, Calendar } from 'lucide-react';
import { Program, Stat, Testimonial, NavLink, GalleryImage, VideoTestimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Startseite', href: '#home' },
  { label: 'Programme', href: '#programs' },
  { label: 'Über Uns', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'kids',
    title: 'Kids Basics',
    ageRange: '3-7 Jahre',
    description: 'Spielerische Einführung in die Welt des Basketballs. Fokus auf Motorik und Spaß.',
    schedule: '1x / Woche',
    price: 'CHF 60 / Monat',
    features: ['Motorik-Training', 'Ballgefühl', 'Teamgeist lernen', 'Spiel & Spaß'],
    image: 'https://images.unsplash.com/photo-1519861531473-92002639313a?auto=format&fit=crop&q=80&w=800',
    delay: 100,
  },
  {
    id: 'development',
    title: 'Development',
    ageRange: '8-12 Jahre',
    description: 'Aufbau technischer Fähigkeiten, Wurftechnik und grundlegendes Spielverständnis.',
    schedule: '2x / Woche',
    price: 'CHF 95 / Monat',
    features: ['Wurftechnik', 'Dribbling Skills', 'Defense Grundlagen', 'Freundschaftsspiele'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    delay: 200,
  },
  {
    id: 'competitive',
    title: 'Competitive',
    ageRange: '13+ Jahre',
    description: 'Intensives Training für Liga-Spieler. Taktik, Physis und Wettkampfvorbereitung.',
    schedule: '3x / Woche',
    price: 'CHF 140 / Monat',
    features: ['Fortgeschrittene Taktik', 'Athletiktraining', 'Liga-Teilnahme', 'Video-Analyse'],
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=800',
    delay: 300,
  },
];

export const STATS: Stat[] = [
  { id: '1', value: 1000, suffix: '+', label: 'Schüler trainiert', icon: Users },
  { id: '2', value: 12, suffix: '+', label: 'Profi-Trainer', icon: Trophy },
  { id: '3', value: 6, suffix: '', label: 'Standorte in Luzern', icon: MapPin },
  { id: '4', value: 15, suffix: ' Jahre', label: 'Erfahrung', icon: Calendar },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Müller',
    role: 'Mutter von Jonas (9)',
    text: 'Jonas hat in nur 6 Monaten riesige Fortschritte gemacht. Die Trainer sind fantastisch und sehr geduldig!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'Thomas Weber',
    role: 'Vater von Lisa (14)',
    text: 'Endlich eine Akademie, die Disziplin mit Spaß verbindet. Lisa liebt das Competitive-Team.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Marc Schmid',
    role: 'Ehemaliger Schüler',
    text: 'Dank Uncle\'s Academy habe ich den Sprung in die Nationalliga B geschafft. Top Ausbildung!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?auto=format&fit=crop&q=80&w=800", category: 'training', title: 'Training Session', span: "col-span-1 row-span-1" },
  { id: 2, src: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=800", category: 'games', title: 'Championship Game', span: "col-span-1 row-span-2" },
  { id: 3, src: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&q=80&w=800", category: 'events', title: 'Summer Camp', span: "col-span-1 row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1519861531473-92002639313a?auto=format&fit=crop&q=80&w=800", category: 'training', title: 'Drills', span: "md:col-span-2 row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=800", category: 'games', title: 'Team Huddle', span: "col-span-1 row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1628779238951-be2c9f2a0758?auto=format&fit=crop&q=80&w=800", category: 'camp', title: 'Junior Camp', span: "col-span-1 row-span-1" },
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1519861531473-92002639313a?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 1' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 2' },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 3' },
  { id: 4, thumbnail: 'https://images.unsplash.com/photo-1519861531473-92002639313a?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 4' },
  { id: 5, thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 5' },
  { id: 6, thumbnail: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Erfahrungsbericht 6' },
];