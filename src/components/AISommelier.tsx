import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Radio, ArrowRight } from "lucide-react";
import { getBlogList } from "@/lib/microcms";
import type { BlogPost } from "@/types";

export default function AISommelier() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<BlogPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    if (!keyword.trim()) return;
    setIsLoading(true);
    try {
      const all = await getBlogList();
      const q = keyword.toLowerCase();
      const filtered = all.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category?.name.toLowerCase().includes(q)
      );
      setResults(filtered);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") search();
  };

  return (
    <section className="py-12 md:py-20 px-6 bg-cyan/10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-5xl mx-auto bg-white border-4 border-black p-6 md:p-16 rounded-3xl relative z-10 shadow-[10px_10px_0px_#000] md:shadow-[20px_20px_0px_#000] reveal">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="p-6 bg-cyan rounded-full animate-bounce">
            <Radio size={48} className="text-black" />
          </div>

          <div className="space-y-4">
            <h3 className="font-dot font-black text-black tracking-tighter whitespace-nowrap" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>
              電波<span className="text-pink">技</span>レシーバー
            </h3>
            <p className="font-kaisei text-base md:text-xl font-bold tracking-normal md:tracking-widest text-black/60">
              キーワードを受信して、ブログ記事をサーチ★
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="受信したいキーワードは...？"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKey}
              className="flex-grow bg-cyan/20 border-4 border-black rounded-2xl px-8 py-6 focus:outline-none focus:bg-white transition-all text-xl font-black placeholder-cyan/50"
            />
            <button
              onClick={search}
              disabled={isLoading || !keyword.trim()}
              className="bg-pink text-white px-8 py-6 md:px-12 font-black rounded-2xl hover:bg-black transition-all flex items-center justify-center w-full md:w-auto md:min-w-[280px] text-xl md:text-2xl shadow-[8px_8px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>受 信 す る <Radio size={24} className="ml-3" /></>
              )}
            </button>
          </div>

          {results !== null && (
            <div className="w-full animate-fade-up">
              {results.length === 0 ? (
                <div className="border-4 border-black rounded-3xl p-8 text-center">
                  <p className="font-dot text-xl text-black/50">
                    ノイズしか受信できなかった...
                  </p>
                </div>
              ) : (
                <div className="border-4 border-black rounded-3xl overflow-hidden">
                  <div className="bg-black text-white px-6 py-3 font-dot text-sm tracking-widest text-left">
                    SIGNAL RECEIVED — {results.length} 件
                  </div>
                  <ul>
                    {results.map((post, idx) => (
                      <li key={post.id} className={idx !== 0 ? "border-t-2 border-black" : ""}>
                        <Link
                          to={`/blog/${post.id}`}
                          className="group flex items-center gap-4 px-6 py-5 hover:bg-cyan/10 transition-colors"
                        >
                          <div className="flex-1 min-w-0 text-left">
                            {post.category && (
                              <div className="flex flex-wrap gap-1 mb-1">
                                <span className="font-dot text-[10px] px-2 py-0.5 bg-cyan text-black">
                                  {post.category.name}
                                </span>
                              </div>
                            )}
                            <h4 className="font-kaisei font-black text-base md:text-lg leading-snug group-hover:text-pink transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                          </div>
                          <ArrowRight size={18} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-pink" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
