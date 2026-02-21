import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getBlogList } from "@/lib/microcms";
import type { BlogPost } from "@/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return { year: y, md: `${m}.${day}` };
}

const CATEGORY_COLORS: Record<string, string> = {
  frontend: "bg-cyan text-black",
  backend:  "bg-pink text-white",
  infra:    "bg-yellow text-black",
  tips:     "bg-green text-black",
};
function categoryColor(id: string) { return CATEGORY_COLORS[id] ?? "bg-white/20 text-white"; }

export default function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    getBlogList().then((data) => { setPosts(data.slice(0, 3)); setLoading(false); });
  }, []);

  // データ取得後も含めてセクション内の reveal 要素を監視
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".reveal, .reveal-clip, .reveal-mask, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.05 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [posts]); // posts が更新されるたびに再監視

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative py-20 md:py-28 flex items-center justify-center"
    >
      {/* 中央に浮かぶカード */}
      <div className="w-full max-w-2xl md:max-w-3xl mx-auto px-6">
        <div
          className="relative px-8 pt-6 pb-8 md:px-12 md:pt-8 md:pb-10 rounded-2xl backdrop-blur-md"
          style={{
            backgroundColor: "rgba(8,8,8,0.90)",
            border: "1px solid rgba(0,242,255,0.35)",
            boxShadow: "0 0 24px rgba(0,242,255,0.25), 0 0 80px rgba(255,0,122,0.15), inset 0 0 40px rgba(0,242,255,0.04)",
          }}
        >

          {/* React ロゴ - カード右端でくるくる */}
          <div className="absolute -left-7 -top-7 w-14 h-14 text-cyan neon-filter-cyan animate-spin-slow opacity-80">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
              <circle cx="50" cy="50" r="7.5" fill="currentColor" stroke="none" />
              <ellipse cx="50" cy="50" rx="45" ry="17" />
              <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(120 50 50)" />
            </svg>
          </div>

          {/* ヘッダー */}
          <div className="mb-4 text-center">
            <p className="reveal font-dot text-pink text-xs tracking-[0.8em] uppercase mb-3">
              Latest Articles
            </p>
            <h2 className="reveal font-dot text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              BLOG
            </h2>
            <div className="h-1 w-16 bg-cyan mt-3 reveal-mask reveal-d1 mx-auto" />
          </div>

          {/* 記事リスト */}
          {loading ? (
            <div className="flex justify-center py-8">
              <span className="font-dot text-white/20 text-sm tracking-[0.5em] animate-pulse">LOADING...</span>
            </div>
          ) : (
            <ul>
              {posts.map((post, idx) => (
                <li
                  key={post.id}
                  className="reveal border-t border-white/10 last:border-b"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="group flex items-center gap-5 py-6 hover:bg-white/5 transition-colors px-2 -mx-2"
                  >
                    {/* 日付 */}
                    <div className="shrink-0 text-right w-14">
                      <p className="font-dot text-white/20 text-[10px] tracking-widest leading-none mb-1">
                        {formatDate(post.publishedAt).year}
                      </p>
                      <p className="font-dot text-white/50 text-sm tracking-wider">
                        {formatDate(post.publishedAt).md}
                      </p>
                    </div>

                    {/* 区切り線 */}
                    <div className="shrink-0 w-px self-stretch bg-white/10 group-hover:bg-cyan/50 transition-colors" />

                    {/* タイトル */}
                    <div className="flex-1 min-w-0">
                      {post.category && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className={`font-dot text-[10px] px-2 py-0.5 ${categoryColor(post.category.id)}`}>
                            {post.category.name}
                          </span>
                        </div>
                      )}
                      <h3 className="font-kaisei text-white text-base md:text-lg font-black leading-snug group-hover:text-cyan transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>

                    {/* 矢印 */}
                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-cyan">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* MORE */}
          <div className="mt-6 flex justify-center">
            <Link
              to="/blog"
              className="reveal font-dot text-xs text-white/40 hover:text-cyan transition-colors tracking-[0.5em] flex items-center gap-2"
            >
              MORE <ArrowRight size={12} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
