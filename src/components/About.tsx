import { PROFILE } from "@/constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 px-6 bg-black overflow-hidden relative"
    >
      {/* 斜めの背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-[-15deg] translate-x-1/2 opacity-5" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
        {/* 画像 */}
        <div className="w-full lg:w-1/2 relative group reveal-scale">
          <div className="relative flex items-center justify-center">
            <div className="neon-avatar relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[6px] md:border-[10px]">
              <img
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=80"
                alt="Programming"
                className="w-full h-full object-cover grayscale brightness-125 contrast-150"
              />
            </div>
            <div className="hidden md:block absolute top-1/2 -right-16 vertical-text whitespace-nowrap font-brush text-7xl text-cyan neon-cyan-solid">
              自己紹介
            </div>
          </div>
        </div>

        {/* コピー */}
        <div className="w-full lg:w-1/2 space-y-10 lg:space-y-20 reveal reveal-d1">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 reveal">
              <div className="w-12 h-2 bg-pink reveal-mask" />
              <span className="font-dot text-white text-sm tracking-[0.5em] font-black">
                ABOUT ME
              </span>
            </div>
            <div>
              <h2 className="reveal text-fluid-heading font-kaisei font-black text-white leading-tight">
                {PROFILE.name}
              </h2>
              <p className="reveal font-dot text-white/40 text-xs md:text-sm tracking-[0.4em] mt-1">
                {PROFILE.nameRomaji}
              </p>
              <div className="h-2 w-24 md:w-48 bg-cyan mt-4 reveal-mask reveal-d1" />
            </div>
            <p className="reveal reveal-d1 font-kaisei text-lg md:text-2xl text-white/80 border-l-8 border-pink pl-6">
              {PROFILE.bio}
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12 text-base md:text-xl lg:text-2xl font-bold leading-relaxed tracking-normal md:tracking-wider text-white/70 italic">
            <div className="bg-white/5 p-6 md:p-12 transform skew-x-[-10deg]">
              <p className="transform skew-x-[10deg]">
                普段は Next.js + TypeScript で書いてます。
                <br />
                バックエンドは Hono が多くて、インフラは AWS。
                <br />
                最近 Arduino も触ってます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
