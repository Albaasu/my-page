import { createClient } from "microcms-js-sdk";
import type { BlogPost } from "@/types";

/* ═══════════════════════════════════════════════════════
   microCMS クライアント
   .env に以下を設定して本番接続:
     VITE_MICROCMS_SERVICE_DOMAIN=your-domain
     VITE_MICROCMS_API_KEY=your-api-key
═══════════════════════════════════════════════════════ */
export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN ?? "dummy",
  apiKey:        import.meta.env.VITE_MICROCMS_API_KEY        ?? "dummy",
});

const isConnected =
  !!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN &&
  !!import.meta.env.VITE_MICROCMS_API_KEY;

/* ═══════════════════════════════════════════════════════
   開発用モックデータ（microCMS 未接続時に使用）
═══════════════════════════════════════════════════════ */
export const MOCK_POSTS: BlogPost[] = [
  {
    id: "react-server-components",
    title: "React Server Components を実プロジェクトで使ってみた",
    content: `<h2>はじめに</h2><p>React Server Components (RSC) が Next.js App Router で安定版になって久しいですが、実プロジェクトに投入してみて気づいたことをまとめます。</p><h2>Client / Server の境界設計</h2><p>RSC の肝は「どこを Server にして、どこを Client にするか」の設計です。データフェッチは Server Component に集約し、インタラクションが必要な部分だけ <code>"use client"</code> を付与します。</p><h2>まとめ</h2><p>RSC は銀の弾丸ではありませんが、うまく使えばバンドルサイズを大幅に削減できます。</p>`,
    publishedAt: "2025-12-15T00:00:00.000Z",
    updatedAt:   "2025-12-15T00:00:00.000Z",
    category: { id: "frontend", name: "Frontend" },
  },
  {
    id: "hono-cloudflare-workers",
    title: "Hono × Cloudflare Workers でゼロコールドスタート API を作る",
    content: `<h2>なぜ Hono × Cloudflare？</h2><p>Lambda のコールドスタートに悩んでいたところ、Hono + Cloudflare Workers の組み合わせが革命的でした。デプロイも <code>wrangler deploy</code> 一発で完結します。</p><h2>実装例</h2><p>Hono の型安全なルーティングと Cloudflare KV を組み合わせることで、堅牢なエッジ API が構築できます。</p>`,
    publishedAt: "2025-11-20T00:00:00.000Z",
    updatedAt:   "2025-11-20T00:00:00.000Z",
    category: { id: "backend", name: "Backend" },
  },
  {
    id: "typescript-strict-mode",
    title: "TypeScript strict モードで得られる恩恵と向き合い方",
    content: `<h2>strict だけで満足していませんか？</h2><p>TypeScript の <code>strict: true</code> は多くのオプションをまとめて有効にしますが、それだけでは拾えないバグがまだあります。</p><h2>おすすめの追加設定</h2><p><code>noUncheckedIndexedAccess</code> を有効にすると配列アクセスが <code>T | undefined</code> になり、実行時エラーをコンパイル時に検出できます。</p>`,
    publishedAt: "2025-11-01T00:00:00.000Z",
    updatedAt:   "2025-11-01T00:00:00.000Z",
    category: { id: "tips", name: "Tips" },
  },
  {
    id: "docker-multi-stage",
    title: "Docker マルチステージビルドで本番イメージを 1/10 に圧縮",
    content: `<h2>なぜ本番イメージが重くなるのか</h2><p>開発依存をそのまま本番に持ち込んでしまうのが主な原因です。マルチステージビルドで builder と runner を分離することで劇的に軽くなります。</p>`,
    publishedAt: "2025-10-10T00:00:00.000Z",
    updatedAt:   "2025-10-10T00:00:00.000Z",
    category: { id: "infra", name: "Infra" },
  },
  {
    id: "supabase-realtime",
    title: "Supabase Realtime で作るライブダッシュボード",
    content: `<h2>Supabase Realtime とは</h2><p>Supabase の Realtime 機能は PostgreSQL の WAL (Write-Ahead Log) を監視し、INSERT / UPDATE / DELETE をリアルタイムにクライアントへプッシュします。</p>`,
    publishedAt: "2025-09-05T00:00:00.000Z",
    updatedAt:   "2025-09-05T00:00:00.000Z",
    category: { id: "backend", name: "Backend" },
  },
  {
    id: "aws-lambda-hono",
    title: "AWS Lambda × Hono で作るサーバーレス API の設計パターン",
    content: `<h2>Lambda Function URL + Hono</h2><p>API Gateway を介さず Lambda Function URL を直接使うことで、構成がシンプルになりコストも下がります。Hono のアダプタで Lambda に対応できます。</p>`,
    publishedAt: "2025-08-20T00:00:00.000Z",
    updatedAt:   "2025-08-20T00:00:00.000Z",
    category: { id: "infra", name: "Infra" },
  },
];

/* ═══════════════════════════════════════════════════════
   データ取得関数（microCMS 接続時は自動で本番データを使用）
═══════════════════════════════════════════════════════ */
export async function getBlogList(): Promise<BlogPost[]> {
  if (!isConnected) return MOCK_POSTS;
  const res = await client.getList<BlogPost>({ endpoint: "blogs" });
  return res.contents;
}

export async function getBlogDetail(id: string): Promise<BlogPost | undefined> {
  if (!isConnected) return MOCK_POSTS.find((p) => p.id === id);
  return client.getListDetail<BlogPost>({ endpoint: "blogs", contentId: id });
}
