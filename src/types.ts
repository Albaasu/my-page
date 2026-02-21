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
export interface BlogPost {
  id: string;
  title: string;
  content: string;       // HTML (microCMS リッチエディタ)
  publishedAt: string;
  updatedAt: string;
  category?: { id: string; name: string };
  eyecatch?: { url: string; width: number; height: number };
}
