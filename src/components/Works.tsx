import { PROJECTS, PROFILE } from "@/constants";

export default function Works() {
  return (
    <section id="works" className="py-14 md:py-24 lg:py-32 px-6 bg-white relative overflow-hidden">
      {/* 巨大な背景文字 */}
      <div className="absolute top-0 right-10 vertical-text font-brush text-[20rem] text-black/5 pointer-events-none select-none">
        作品作品作品作品作品作品
      </div>

      <div className="max-w-[90vw] mx-auto relative z-10">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-8 md:gap-12">
          <div className="relative">
            <div className="reveal bg-black text-white px-6 py-2 font-dot text-lg font-black tracking-widest mb-8 md:mb-12 transform skew-x-[-15deg] inline-block">
              PORTFOLIO
            </div>
            <h2 className="reveal-clip text-fluid-works font-brush tracking-tighter text-black leading-none relative">
              WORKS
              <span className="absolute -bottom-4 left-0 w-full h-4 bg-pink rotate-[-2deg]" />
            </h2>
          </div>

          <div className="max-w-md space-y-6 md:space-y-8 mt-4 md:mt-8">
            <p className="text-black font-kaisei text-2xl md:text-4xl font-black leading-tight tracking-tighter">
              これまでの
              <br />
              <span className="bg-black text-white px-4 italic">
                プロジェクト
              </span>
              <br />
              を紹介。
            </p>
          </div>
        </div>

        {/* ギャラリー */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {PROJECTS.map((img, idx) => (
            <div
              key={img.id}
              className={`reveal-scale relative group overflow-hidden border-[6px] md:border-[16px] border-black bg-black transition-all duration-700 ${
                idx % 2 !== 0
                  ? "lg:translate-y-48 lg:rotate-[3deg]"
                  : "lg:rotate-[-3deg]"
              } hover:rotate-0 hover:scale-105`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-[280px] md:h-[420px] lg:h-[600px] object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />

              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/70 via-transparent to-pink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* ラベル */}
              <div className="absolute top-0 left-0 bg-black text-white p-4 font-dot font-black border-b-4 border-r-4 border-cyan z-20">
                PROJECT_{idx.toString().padStart(2, "0")}
              </div>

              {/* VIEW */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <span className="font-brush text-7xl text-white neon-glow-cyan -rotate-12 scale-150 group-hover:scale-100 transition-transform duration-500">
                  VIEW
                </span>
              </div>

              {/* スキャンライン */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 lg:mt-64 flex justify-center reveal reveal-d2">
          <a
            href={`https://github.com/${PROFILE.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-6 md:px-40 md:py-12 bg-black text-white font-dot text-xl md:text-4xl font-black tracking-[0.4em] md:tracking-[1em] overflow-hidden shadow-[10px_10px_0px_var(--color-cyan)] md:shadow-[20px_20px_0px_var(--color-cyan)]"
          >
            <div className="absolute inset-0 bg-cyan translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-black">
              VIEW_ALL
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
