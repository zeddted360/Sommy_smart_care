// types/index.ts
export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  icon: any;
  title: string;
  desc: string;
}

export interface StatItem {
  icon: any;
  value: string;
  label: string;
}

export interface TestimonialItem {
  rating: number;
  text: string;
  author: string;
}

export interface ContactItem {
  icon: any;
  title: string;
  info: string[];
}
