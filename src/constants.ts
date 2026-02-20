import type { MenuItem, ProjectImage } from "./types";

export const SKILLS: MenuItem[] = [
  // Frontend
  {
    id: 1,
    name: "Next.js / React",
    level: "EXPERT",
    description: "SPAからSSR/ISRまで。モダンなUIを構築する主力技術。",
    category: "frontend",
  },
  {
    id: 2,
    name: "TypeScript",
    level: "STRICT",
    description: "型安全性を追求し、堅牢なコードベースを実現。",
    category: "frontend",
  },
  // Backend & Infra
  {
    id: 3,
    name: "Hono",
    level: "FAST",
    description: "エッジ対応の超高速Webフレームワーク。",
    category: "backend",
  },
  {
    id: 4,
    name: "AWS (Lambda / ECS)",
    level: "SCALE",
    description: "サーバーレスからコンテナまで、スケーラブルなインフラ構築。",
    category: "backend",
  },
  {
    id: 5,
    name: "Docker",
    level: "CONTAINER",
    description: "コンテナ化による環境の一貫性と再現性を保証。",
    category: "backend",
  },
  {
    id: 6,
    name: "GitHub Actions",
    level: "CI/CD",
    description: "自動テスト・デプロイでチーム開発を加速。",
    category: "backend",
  },
  // Database & Others
  {
    id: 7,
    name: "Supabase",
    level: "BaaS",
    description: "PostgreSQLベースのオープンソースFirebase代替。",
    category: "database",
  },
  {
    id: 8,
    name: "Firebase",
    level: "REALTIME",
    description: "リアルタイムDB、認証、ホスティングをワンストップで。",
    category: "database",
  },
  {
    id: 9,
    name: "Prisma / Drizzle",
    level: "ORM",
    description: "型安全なデータベースアクセスを実現するORM。",
    category: "database",
  },
  {
    id: 10,
    name: "Arduino",
    level: "IoT",
    description: "ハードウェア制御からIoTプロトタイピングまで。",
    category: "database",
  },
];

export const PROJECTS: ProjectImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    alt: "Project 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "Project 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "Project 3",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Project 4",
  },
];

// Profile settings - 編集はここだけでOK
export const PROFILE = {
  name: "木村",
  nameRomaji: "KIMURA",
  bio: "気合とパッションで生きてます",
  title: "ENGINEER",
  github: "YOUR_GITHUB",
  twitter: "YOUR_TWITTER",
  email: "your@email.com",
} as const;
