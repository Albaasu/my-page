import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Code2, ArrowRight, Tag } from "lucide-react";
import { getBlogList } from "@/lib/microcms";
import type { BlogPost } from "@/types";
import { PROFILE } from "@/constants";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric", month: "2-digit", day: "2-digit",
  });
}

const TAG_COLORS = ["bg-cyan text-black", "bg-pink text-white", "bg-yellow text-black", "bg-green text-black"];
function tagColor(i: number) { return TAG_COLORS[i % TAG_COLORS.length]; }

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogList().then((data) => { setPosts(data); setLoading(false); });
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-pink selection:text-white">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black py-5 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-cyan border-2 border-black flex items-center justify-center rotate-[-10deg]">
            <Code2 size={20} className="text-black" />
          </div>
          <span className="font-brush text-white text-2xl md:text-3xl tracking-tighter font-black">
            {PROFILE.name}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="font-dot text-white/60 text-sm tracking-widest hover:text-cyan transition-colors">
            ← PORTFOLIO
          </Link>
        </div>
      </nav>

      {/* ── ヘッダー ── */}
      <header className="bg-black pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
        {/* 背景スキャンライン */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, #00f2ff 0px, #00f2ff 1px, transparent 1px, transparent 28px)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-dot text-pink text-xs tracking-[0.8em] uppercase mb-6">
            {PROFILE.name}'s_BLOG
          </p>
          <h1 className="font-brush text-white leading-none mb-6"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)", filter: "drop-shadow(0 0 20px #00f2ff)" }}>
            BLOG
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-1 w-20 bg-cyan" />
            <p className="font-dot text-white/40 text-xs tracking-[0.4em]">
              技術記事・開発ログ
            </p>
          </div>
        </div>
      </header>

      {/* ── 記事グリッド ── */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {loading ? (
          <div className="flex justify-center py-32">
            <span className="font-dot text-black/30 text-sm tracking-[0.5em] animate-pulse">LOADING...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group border-2 border-black/10 hover:border-cyan transition-all bg-white hover:bg-cyan/5 flex flex-col"
              >
                {/* サムネイル or プレースホルダー */}
                <div className="aspect-[16/9] bg-black overflow-hidden relative">
                  {post.eyecatch ? (
                    <img
                      src={post.eyecatch.url}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-5"
                        style={{ backgroundImage: "repeating-linear-gradient(45deg, #00f2ff 0px, #00f2ff 1px, transparent 1px, transparent 20px)" }} />
                      <span className="font-brush text-cyan/30 text-7xl md:text-8xl leading-none"
                        style={{ filter: "drop-shadow(0 0 12px #00f2ff)" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  {/* 記事番号バッジ */}
                  <span className="absolute top-3 left-3 font-dot text-xs bg-black text-cyan px-2 py-1">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* テキスト */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* タグ */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((tag, ti) => (
                        <span key={tag.id} className={`font-dot text-[10px] px-2 py-0.5 ${tagColor(ti)}`}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="font-kaisei text-lg md:text-xl font-black leading-snug mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-black/50 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/10">
                    <span className="font-dot text-xs text-black/30 tracking-widest">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="font-dot text-xs text-cyan flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      READ <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* ── フッター ── */}
      <footer className="border-t-4 border-black py-10 px-6 text-center">
        <p className="font-dot text-xs text-black/30 tracking-[0.5em]">
          © {new Date().getFullYear()} {PROFILE.name} — Powered by microCMS
        </p>
      </footer>
    </div>
  );
}
