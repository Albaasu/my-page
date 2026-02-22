export interface MenuItem {
  id: number;
  name: string;
  level: string;
  description: string;
  category: "frontend" | "backend" | "database";
}

export interface ProjectImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
  link?: string;
}

export type { BlogsContent as BlogPost } from "../types/microcms";
