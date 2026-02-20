import { SKILLS } from "@/constants";

export default function Skills() {
  const frontend = SKILLS.filter((s) => s.category === "frontend");
  const backend  = SKILLS.filter((s) => s.category === "backend");
  const database = SKILLS.filter((s) => s.category === "database");

  return (
    <section id="skills" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan/10 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── セクションヘッダー ── */}
        <div className="flex flex-col items-center mb-10 md:mb-16 space-y-6">
          <h3 className="reveal font-dot text-pink font-bold tracking-[1em] uppercase text-sm">
            Tech Stack
          </h3>
          <h2 className="reveal-clip text-fluid-section font-brush tracking-tighter text-black leading-none text-center">
            SKILLS
          </h2>
          <div className="w-24 h-2 bg-black reveal-mask reveal-d1" />
        </div>

        {/* ── Frontend + Backend / Infra ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

          {/* Frontend */}
          <div className="reveal reveal-d1">
            <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-8 md:mb-10">
              <h4 className="font-kaisei text-2xl md:text-4xl font-black">Frontend</h4>
              <span className="font-dot text-xs bg-black text-white px-3 py-1 shrink-0 ml-4">PHASE_01</span>
            </div>

            <div className="space-y-4">
              {frontend.map((item) => (
                <div
                  key={item.id}
                  className="group relative border-2 border-black/10 hover:border-cyan p-5 md:p-6 transition-all hover:bg-cyan/5"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <h5 className="font-kaisei text-xl md:text-2xl font-black group-hover:text-cyan transition-colors">
                      {item.name}
                    </h5>
                    <span className="font-dot text-xs text-cyan shrink-0">{item.level}</span>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed">{item.description}</p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Backend / Infra */}
          <div className="reveal reveal-d2">
            <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-8 md:mb-10">
              <h4 className="font-kaisei text-2xl md:text-4xl font-black">Backend / Infra</h4>
              <span className="font-dot text-xs bg-black text-white px-3 py-1 shrink-0 ml-4">PHASE_02</span>
            </div>

            <div className="space-y-3">
              {backend.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-start gap-4 p-5 md:p-6 border-b border-black/10 hover:bg-pink/5 transition-colors"
                >
                  <div className="w-12 md:w-16 font-brush text-3xl md:text-4xl text-black/10 group-hover:text-pink transition-colors shrink-0">
                    0{item.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h5 className="font-kaisei text-lg md:text-xl font-bold">{item.name}</h5>
                      <span className="font-dot text-xs text-pink shrink-0">{item.level}</span>
                    </div>
                    <p className="text-sm text-black/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Database / Others ── */}
        <div className="mt-10 md:mt-16 reveal reveal-d1">
          <div className="flex items-center justify-between border-b-4 border-black pb-4 max-w-2xl mx-auto mb-8 md:mb-12">
            <h4 className="font-kaisei text-2xl md:text-4xl font-black">Database / Others</h4>
            <span className="font-dot text-xs bg-black text-white px-3 py-1 shrink-0 ml-4">PHASE_03</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {database.map((item) => (
              <div
                key={item.id}
                className="group bg-black text-white p-5 md:p-7 hover:bg-cyan hover:text-black transition-all"
              >
                <span className="font-dot text-xs text-cyan group-hover:text-black block mb-2">
                  {item.level}
                </span>
                <h5 className="font-kaisei text-lg md:text-xl font-bold mb-2">{item.name}</h5>
                <p className="text-xs md:text-sm text-white/60 group-hover:text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── フッター装飾 ── */}
        <div className="mt-10 md:mt-16 text-center space-y-4">
          <p className="font-dot text-xs text-black/30 tracking-[1em] uppercase">
            Always learning, always building
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(20)].map((_, i) => (
              <div key={`dot-${i}`} className="w-1 h-1 bg-cyan" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
