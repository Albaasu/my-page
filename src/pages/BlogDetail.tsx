import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, RefreshCw } from "lucide-react";
import { getBlogDetail, getBlogList } from "@/lib/microcms";
import type { BlogPost } from "@/types";
import { PROFILE } from "@/constants";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  frontend: "bg-cyan text-black",
  backend: "bg-pink text-white",
  infra: "bg-yellow text-black",
  tips: "bg-green text-black",
};
function categoryColor(id: string) {
  return CATEGORY_COLORS[id] ?? "bg-white/20 text-white";
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [prev, setPrev] = useState<BlogPost | null>(null);
  const [next, setNext] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!id) return;
    Promise.all([getBlogDetail(id), getBlogList()]).then(([data, list]) => {
      if (!data) {
        navigate("/blog", { replace: true });
        return;
      }
      setPost(data);
      const idx = list.findIndex((p) => p.id === id);
      setPrev(idx > 0 ? list[idx - 1] : null);
      setNext(idx < list.length - 1 ? list[idx + 1] : null);
      setLoading(false);
    });
  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-white selection:bg-pink selection:text-white">
      <Navbar isScrolled={isScrolled} />

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="font-dot text-black/60 text-sm tracking-[0.5em] animate-pulse">
            LOADING...
          </span>
        </div>
      ) : (
        post && (
          <>
            {/* ── 記事ヘッダー ── */}
            <header className="bg-black pt-32 pb-8 md:pb-12 px-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #00f2ff 0px, #00f2ff 1px, transparent 1px, transparent 28px)",
                }}
              />

              <div className="max-w-4xl mx-auto relative z-10">
                {/* カテゴリ */}
                {post.category && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span
                      className={`font-dot text-xs px-3 py-1 ${categoryColor(post.category.id)}`}
                    >
                      {post.category.name}
                    </span>
                  </div>
                )}

                <h1
                  className="font-kaisei text-white font-black leading-tight mb-8"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 3.2rem)" }}
                >
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white/40 font-dot text-xs tracking-widest">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} />
                    {formatDate(post.publishedAt)}
                  </span>
                  {post.updatedAt !== post.publishedAt && (
                    <span className="flex items-center gap-2">
                      <RefreshCw size={12} />
                      更新: {formatDate(post.updatedAt)}
                    </span>
                  )}
                </div>

                {/* パンくずリスト */}
                <nav className="flex items-center gap-2 font-dot text-xs tracking-widest mt-6">
                  <Link
                    to="/"
                    className="text-white/40 hover:text-cyan transition-colors"
                  >
                    HOME
                  </Link>
                  <span className="text-cyan/40">/</span>
                  <Link
                    to="/blog"
                    className="text-white/40 hover:text-cyan transition-colors"
                  >
                    BLOG一覧
                  </Link>
                  <span className="text-cyan/40">/</span>
                  <span className="text-cyan truncate max-w-[160px] md:max-w-sm">
                    {post.title}
                  </span>
                </nav>
              </div>
            </header>

            {/* ── 記事本文 ── */}
            <main className="max-w-4xl mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-24">
              <div className="grid grid-cols-3 items-center mb-10">
                <div>
                  {prev && (
                    <Link
                      to={`/blog/${prev.id}`}
                      className="group inline-flex items-center gap-1 font-dot text-xs text-black/60 hover:text-cyan transition-colors tracking-widest"
                    >
                      <ArrowLeft
                        size={12}
                        className="group-hover:-translate-x-1 transition-transform"
                      />{" "}
                      前への記事
                    </Link>
                  )}
                </div>
                <div className="flex justify-center">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 font-dot text-xs text-black/60 hover:text-cyan transition-colors tracking-[0.5em]"
                  >
                    一覧へ
                  </Link>
                </div>
                <div className="flex justify-end">
                  {next && (
                    <Link
                      to={`/blog/${next.id}`}
                      className="group inline-flex items-center gap-1 font-dot text-xs text-black/60 hover:text-cyan transition-colors tracking-widest"
                    >
                      次への記事{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <article
                className="prose-blog"
                /* microCMS の管理者入力コンテンツのみ — XSS リスクなし */
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* 前後ナビ */}
              <div className="mt-16 md:mt-24 pt-8 border-t-4 border-black grid grid-cols-2 gap-4">
                <div>
                  {prev && (
                    <Link
                      to={`/blog/${prev.id}`}
                      className="group flex flex-col gap-1 hover:text-cyan transition-colors"
                    >
                      <span className="font-dot text-xs text-black/60 tracking-widest flex items-center gap-1 group-hover:text-cyan">
                        <ArrowLeft
                          size={12}
                          className="group-hover:-translate-x-1 transition-transform"
                        />{" "}
                        前への記事
                      </span>
                      <span className="font-kaisei text-sm font-black leading-snug line-clamp-2">
                        {prev.title}
                      </span>
                    </Link>
                  )}
                </div>
                <div className="text-right">
                  {next && (
                    <Link
                      to={`/blog/${next.id}`}
                      className="group flex flex-col gap-1 items-end hover:text-cyan transition-colors"
                    >
                      <span className="font-dot text-xs text-black/60 tracking-widest flex items-center gap-1 group-hover:text-cyan">
                        次への記事{" "}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                      <span className="font-kaisei text-sm font-black leading-snug line-clamp-2">
                        {next.title}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/blog"
                  className="font-dot text-xs text-black/60 hover:text-cyan transition-colors tracking-[0.5em] flex items-center gap-2"
                >
                  一覧へ
                </Link>
              </div>
            </main>

            {/* ── フッター ── */}
            <footer className="border-t-4 border-black py-10 px-6 text-center">
              <p className="font-dot text-xs text-black/60 tracking-[0.5em]">
                © {new Date().getFullYear()} {PROFILE.name} — Powered by
                microCMS
              </p>
            </footer>
          </>
        )
      )}
      <ScrollToTopButton />
    </div>
  );
}
