// Common types used across components
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}