export interface Profile {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  bio: string[];
  social: {
    email: string;
    github: string;
    twitter: string;
  };
  experiences: Experience[];
}

export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: "熟悉" | "熟练" | "精通";
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverGradient: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
}

export type NavItem = {
  label: string;
  href: string;
};
