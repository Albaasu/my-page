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

/* ── microCMS Blog ── */
export interface BlogTag {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;       // HTML (microCMS リッチエディタ)
  excerpt?: string;
  publishedAt: string;
  updatedAt: string;
  tags?: BlogTag[];
  eyecatch?: { url: string; width: number; height: number };
}
