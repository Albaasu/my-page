import { useState, useEffect } from "react";

export default function Hero() {
  const [dim, setDim] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // ビューポートの60%スクロールしたら最大値に達する
      const ratio = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
      setDim(ratio);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90svh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden bg-white -mt-20"
    >
      {/* 斜めの背景 */}
      <div className="absolute inset-0 bg-black skew-y-[-10deg] origin-top-right translate-y-[-20%] z-0" />

      {/* 背景の巨大文字 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
        <div className="absolute -left-20 top-1/4 animate-drift">
          <span className="font-brush text-[45vw] text-white opacity-10 leading-none">
            開
          </span>
        </div>
        <div
          className="absolute -right-20 bottom-1/4 animate-drift"
          style={{ animationDelay: "2s" }}
        >
          <span className="font-brush text-[45vw] text-white opacity-10 leading-none">
            発
          </span>
        </div>
      </div>

      {/* 前面のネオン文字 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-30">
        <div className="hero-in absolute left-[22%] top-[30%] md:left-[15%] md:top-[20%] rotate-[-12deg]" style={{ animationDelay: "0.1s" }}>
          <span className="text-fluid-neon font-brush neon-cyan-solid leading-none">
            開
          </span>
        </div>
        <div className="hero-in absolute right-[3%] bottom-[22%] md:right-[5%] md:bottom-[10%] rotate-[12deg]" style={{ animationDelay: "0.3s" }}>
          <span className="text-fluid-neon font-brush neon-pink-solid leading-none">
            者
          </span>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-40 w-full max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 py-24 md:py-0">
        {/* 左側：垂直タイトル */}
        <div className="hero-in flex items-center w-full md:w-auto" style={{ animationDelay: "0.2s" }}>
          <div className="text-fluid-hero vertical-text font-brush text-white leading-none relative shrink-0">
            <span className="relative z-10">発</span>
            <span className="absolute -top-2 -left-2 text-cyan z-0 opacity-50 blur-md">
              発
            </span>
          </div>
        </div>

        {/* 右側：画像とコピー */}
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-lg mx-auto md:mx-0">
          <div className="hero-in relative rotate-[-5deg] border-[6px] md:border-[12px] border-black bg-black p-2 shadow-2xl" style={{ animationDelay: "0.4s" }}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Developer"
              className="w-full grayscale contrast-125 brightness-110"
            />
            <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 bg-pink text-white p-3 md:p-6 font-brush text-2xl md:text-5xl rotate-[10deg] shadow-xl">
              覚 醒
            </div>
          </div>

          <div className="mt-12 md:mt-24 space-y-5 md:space-y-8 text-right md:text-left">
            <p className="hero-in font-kaisei text-xl md:text-3xl lg:text-5xl font-black leading-tight text-white drop-shadow-lg" style={{ animationDelay: "0.6s" }}>
              アイデアを
              <br />
              <span className="text-cyan">カタチ</span>にする。
            </p>
            <a
              href="#contact"
              className="hero-in inline-block px-8 py-4 md:px-16 md:py-8 bg-white text-black font-dot text-base md:text-2xl font-black tracking-[0.3em] md:tracking-[0.5em] hover:bg-cyan transition-all shadow-[6px_6px_0px_var(--color-pink)] md:shadow-[12px_12px_0px_var(--color-pink)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
              style={{ animationDelay: "0.8s" }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="hero-in absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2" style={{ animationDelay: "1.1s" }}>
        <span className="font-dot text-white/40 text-xs tracking-[0.4em]">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan rounded-full animate-scroll-dot" />
        </div>
      </div>

      {/* 装飾用の巨大な文字（md以上のみ） */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full justify-around opacity-5 z-10">
        <span className="font-brush text-[25rem] text-outline">CREATE</span>
        <span className="font-brush text-[25rem] text-outline">BUILD</span>
      </div>

      {/* スクロール連動の暗転オーバーレイ - Hero を背景に沈める */}
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{ backgroundColor: `rgba(0,0,0,${dim * 0.75})` }}
      />
    </section>
  );
}
