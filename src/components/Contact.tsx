import { Github, Twitter } from "lucide-react";
import { PROFILE } from "@/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 md:py-24 px-6 bg-white border-t-8 border-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-10 w-px h-full bg-black/5" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10">

        {/* ── 左: SNS リンク ── */}
        <div className="space-y-8 md:space-y-12 reveal-left">
          <div className="space-y-6">
            <h3 className="font-dot text-pink font-black tracking-[1em] uppercase text-sm">
              Contact
            </h3>
            <h2 className="text-fluid-heading font-brush tracking-tighter text-black">
              CONTACT
            </h2>
          </div>

          <div className="grid gap-8 md:gap-12">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-8 group"
            >
              <div className="w-16 h-16 bg-cyan border-4 border-black flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                <Github size={32} className="text-black" />
              </div>
              <div className="space-y-2">
                <p className="text-black text-2xl font-dot font-black tracking-widest">
                  GITHUB
                </p>
                <p className="text-black/60 text-lg font-kaisei font-bold leading-relaxed">
                  github.com/Albaasu
                  <br />
                  ソースコード・プロジェクト公開中
                </p>
              </div>
            </a>

            <a
              href={PROFILE.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-8 group"
            >
              <div className="w-16 h-16 bg-pink border-4 border-black flex items-center justify-center shrink-0 group-hover:-rotate-12 transition-transform">
                <Twitter size={32} className="text-black" />
              </div>
              <div className="space-y-2">
                <p className="text-black text-2xl font-dot font-black tracking-widest">
                  X / TWITTER
                </p>
                <p className="text-black/60 text-lg font-kaisei font-bold leading-relaxed">
                  @Cheke_
                  <br />
                  技術情報・日常をツイート
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* ── 右: BLOG COMING SOON ── */}
        <div className="relative reveal-right reveal-d1">
          <div className="absolute inset-0 bg-cyan border-4 border-black translate-x-6 translate-y-6" />
          <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full bg-black border-4 border-black overflow-hidden flex flex-col items-center justify-center gap-8 group">

            {/* 背景スキャンライン風 */}
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, #00f2ff, #00f2ff 1px, transparent 1px, transparent 32px)" }}
            />

            {/* ブログアイコン */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-8">
              <span className="font-dot text-cyan text-xs tracking-[0.5em] opacity-70">
                NOW_OPEN
              </span>

              <h3 className="font-brush text-white text-5xl md:text-7xl leading-none"
                style={{ filter: "drop-shadow(0 0 16px #00f2ff)" }}>
                BLOG
              </h3>

              <p className="font-dot text-cyan/60 text-xs md:text-sm tracking-[0.3em] leading-loose">
                microCMS で構築
                <br />
                技術記事・開発ログを発信
              </p>

              <a
                href="/blog"
                className="mt-2 px-6 py-3 border-2 border-cyan/40 font-dot text-cyan/50 text-xs tracking-[0.4em] hover:border-cyan hover:text-cyan transition-colors"
              >
                READ →
              </a>
            </div>

            {/* 流れるライン（装飾） */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan/40 animate-[marquee-scroll_3s_infinite_linear]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-pink/30" />
          </div>
        </div>

      </div>
    </section>
  );
}
