/**
 * ページ全体にわたるネオン技術アイコン浮遊レイヤー
 *
 * 配置ルール:
 *  - left/right を 0〜7% に限定 → 本文テキストと干渉しない
 *  - top を 0〜95% でページ縦方向に分散 → 全セクションに登場
 *  - 上半分(ダーク: Hero / About) は opacity 高め
 *  - 下半分(ライト: Skills以降) は opacity 低め
 *  - md 未満は非表示
 */
import React from "react";

/* ═══════════════════════════════════════════════════════
   SVG アイコン定義
═══════════════════════════════════════════════════════ */

const ReactIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
    <circle cx="50" cy="50" r="7.5" fill="currentColor" stroke="none" />
    <ellipse cx="50" cy="50" rx="45" ry="17" />
    <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(120 50 50)" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden>
    <rect x="4" y="4" width="92" height="92" rx="12" stroke="currentColor" strokeWidth="3" />
    <text x="50" y="72" textAnchor="middle" fontSize="44"
      fontWeight="900" fontFamily="'Arial Black',Arial,sans-serif" fill="currentColor">TS</text>
  </svg>
);

const GoIcon = () => (
  <svg viewBox="0 0 90 105" fill="none" stroke="currentColor" aria-hidden>
    <ellipse cx="45" cy="46" rx="33" ry="36" strokeWidth="2.8" />
    <circle cx="31" cy="34" r="11.5" strokeWidth="2.4" />
    <circle cx="59" cy="34" r="11.5" strokeWidth="2.4" />
    <circle cx="33" cy="36" r="5" fill="currentColor" stroke="none" />
    <circle cx="61" cy="36" r="5" fill="currentColor" stroke="none" />
    <ellipse cx="45" cy="52" rx="9" ry="6" strokeWidth="2.2" />
    <circle cx="40.5" cy="52" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="49.5" cy="52" r="2.5" fill="currentColor" stroke="none" />
    <path d="M14 30 Q7 14 23 19" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M76 30 Q83 14 67 19" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <ellipse cx="29" cy="87" rx="10" ry="6" transform="rotate(-15 29 87)" strokeWidth="2.2" />
    <ellipse cx="61" cy="87" rx="10" ry="6" transform="rotate(15 61 87)" strokeWidth="2.2" />
    <text x="45" y="70" textAnchor="middle" fontSize="17" fontWeight="900"
      fontFamily="monospace" fill="currentColor" stroke="none">Go</text>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 100 82" fill="none" stroke="currentColor" aria-hidden>
    <rect x="38" y="4"  width="14" height="11" rx="2" strokeWidth="2.2" />
    <rect x="55" y="4"  width="14" height="11" rx="2" strokeWidth="2.2" />
    <rect x="21" y="18" width="14" height="11" rx="2" strokeWidth="2.2" />
    <rect x="38" y="18" width="14" height="11" rx="2" strokeWidth="2.2" />
    <rect x="55" y="18" width="14" height="11" rx="2" strokeWidth="2.2" />
    <path d="M7 53 Q5 43 11 35 Q19 23 36 21 Q54 19 68 23 Q82 27 90 39 Q96 47 92 55 Q86 67 70 69 Q54 71 38 67 Q18 63 7 53Z" strokeWidth="2.6" />
    <path d="M72 16 Q74 9 70 4" strokeWidth="2" strokeLinecap="round" />
    <path d="M77 17 Q81 10 78 5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="39" r="4" fill="currentColor" stroke="none" />
    <path d="M7 51 Q-1 45 3 36 Q6 30 15 37" strokeWidth="2.2" strokeLinecap="round" fill="none" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden>
    <circle cx="50" cy="50" r="46" strokeWidth="3" />
    <path d="M28 74 L28 26 L75 74 L75 26" strokeWidth="5.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HonoIcon = () => (
  <svg viewBox="0 0 60 80" fill="none" stroke="currentColor" aria-hidden>
    <path d="M30 4 C48 18 54 34 46 50 C56 40 58 56 47 64 C41 72 19 76 13 63 C3 51 8 37 19 48 C9 34 14 16 30 4Z"
      strokeWidth="2.8" strokeLinejoin="round" />
    <path d="M30 26 C38 36 40 46 33 56 C27 63 21 59 22 51 C15 59 20 70 30 70 C42 70 48 56 40 46 C46 38 40 28 30 26Z"
      strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 100 114" fill="none" stroke="currentColor" aria-hidden>
    <path d="M50 4 L96 29 L96 85 L50 110 L4 85 L4 29 Z" strokeWidth="3" />
    <text x="50" y="70" textAnchor="middle" fontSize="22"
      fontWeight="900" fontFamily="monospace" fill="currentColor" stroke="none">Node</text>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 110 76" fill="none" stroke="currentColor" aria-hidden>
    <path d="M22 58 Q8 58 6 44 Q4 30 18 27 Q16 10 30 8 Q44 6 52 18 Q60 8 72 12 Q88 16 88 30 Q100 30 102 44 Q104 58 88 58 Z"
      strokeWidth="2.6" strokeLinejoin="round" />
    <text x="55" y="48" textAnchor="middle" fontSize="15"
      fontWeight="900" fontFamily="monospace" fill="currentColor" stroke="none">AWS</text>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 56 80" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
    <path d="M42 4 L14 46 L30 46 L14 76 L48 34 L32 34 Z" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 62 82" fill="none" stroke="currentColor" aria-hidden>
    <path d="M31 4 C15 20 6 36 6 52 C6 68 17 78 31 78 C45 78 56 68 56 52 C56 36 47 20 31 4Z" strokeWidth="2.6" />
    <path d="M31 30 C24 40 23 50 27 58" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden>
    <circle cx="50" cy="50" r="46" strokeWidth="2.8" />
    <ellipse cx="50" cy="46" rx="20" ry="18" strokeWidth="2.4" />
    <path d="M33 34 L29 22 L40 30" strokeWidth="2" strokeLinejoin="round" />
    <path d="M67 34 L71 22 L60 30" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="43" cy="44" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="57" cy="44" r="3.5" fill="currentColor" stroke="none" />
    <path d="M36 62 Q30 74 40 72" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M50 64 Q50 76 50 72" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M64 62 Q70 74 60 72" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 90 56" fill="none" stroke="currentColor" aria-hidden>
    <path d="M5 27 Q14 7 23 27 Q32 47 41 27 Q50 7 59 27 Q68 47 77 27 Q86 7 95 27"
      strokeWidth="3" strokeLinecap="round" />
    <path d="M5 37 Q14 17 23 37 Q32 57 41 37 Q50 17 59 37 Q68 57 77 37 Q86 17 95 37"
      strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden>
    <circle cx="50" cy="50" r="44" strokeWidth="2.8" />
    <circle cx="50" cy="50" r="10" strokeWidth="2.4" />
    <line x1="50" y1="40" x2="50" y2="7"  strokeWidth="2.4" />
    <line x1="59" y1="45" x2="88" y2="29" strokeWidth="2.4" />
    <line x1="59" y1="55" x2="88" y2="72" strokeWidth="2.4" />
    <line x1="50" y1="60" x2="50" y2="93" strokeWidth="2.4" />
    <line x1="41" y1="55" x2="12" y2="72" strokeWidth="2.4" />
    <line x1="41" y1="45" x2="12" y2="29" strokeWidth="2.4" />
  </svg>
);

const PrismaIcon = () => (
  <svg viewBox="0 0 70 80" fill="none" stroke="currentColor" aria-hidden>
    <path d="M35 4 L66 76 L4 76 Z" strokeWidth="2.8" strokeLinejoin="round" />
    <line x1="35" y1="4" x2="35" y2="76" strokeWidth="2" strokeDasharray="5 4" strokeOpacity="0.6" />
  </svg>
);

const BunIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden>
    <circle cx="50" cy="52" r="42" strokeWidth="2.8" />
    <ellipse cx="34" cy="46" rx="10" ry="12" strokeWidth="2.4" />
    <ellipse cx="66" cy="46" rx="10" ry="12" strokeWidth="2.4" />
    <circle cx="36" cy="48" r="5" fill="currentColor" stroke="none" />
    <circle cx="68" cy="48" r="5" fill="currentColor" stroke="none" />
    <circle cx="38" cy="45" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="70" cy="45" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M40 64 Q50 72 60 64" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    <path d="M20 28 Q14 14 28 20" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M80 28 Q86 14 72 20" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <text x="50" y="96" textAnchor="middle" fontSize="13" fontWeight="900"
      fontFamily="monospace" fill="currentColor" stroke="none">Bun</text>
  </svg>
);

const DrizzleIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" aria-hidden>
    <path d="M14 38 Q8 38 7 30 Q6 22 14 20 Q13 10 22 9 Q32 8 36 16 Q42 8 50 11 Q60 14 60 24 Q68 24 68 32 Q68 40 58 40 Z"
      strokeWidth="2.4" strokeLinejoin="round" />
    <path d="M24 50 Q24 62 20 66 Q16 70 20 74 Q24 78 28 74 Q32 70 28 66 Q24 62 28 50" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M40 46 Q40 58 36 62 Q32 66 36 70 Q40 74 44 70 Q48 66 44 62 Q40 58 44 46" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M56 50 Q56 62 52 66 Q48 70 52 74 Q56 78 60 74 Q64 70 60 66 Q56 62 60 50" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 70 80" fill="none" stroke="currentColor" aria-hidden>
    <path d="M4 4 L35 76 L66 4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 4 L35 44 L52 4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 88 76" fill="none" stroke="currentColor" aria-hidden>
    <path d="M44 72 L4 4 L20 4 L44 44 L68 4 L84 4 Z" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M44 50 L26 20 L36 20 L44 34 L52 20 L62 20 Z" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

/* ═══════════════════════════════════════════════════════
   配置設定

   top: ページ全体高さに対するパーセンテージ
        0-12%  … Hero（黒背景、濃いネオン）
        12-30% … About（黒背景、濃いネオン）
        30-52% … Skills（白背景、薄め）
        52-58% … AISommelier
        58-80% … Works（白背景、薄め）
        80-92% … Contact（白背景、薄め）

   left/right: 0〜7% に限定してテキストにかぶらせない
   side: "L"=左, "R"=右
═══════════════════════════════════════════════════════ */

type NeonColor = "cyan" | "pink" | "yellow" | "green" | "white";
type Side = "L" | "R";
type Sz = "L" | "M" | "S";

interface Cfg {
  id: string;
  Icon: () => React.ReactElement;
  color: NeonColor;
  sz: Sz;
  side: Side;
  /** ページ高さに対する % (0–95) */
  topPct: number;
  /** 端からの距離 (%) */
  edgePct: number;
  anim: string;
  delay: string;
  hideOnMobile?: boolean;
  mobileOnly?: boolean;
}

const ICONS: Cfg[] = [
  /* ── Hero エリア (0–12%) ──────────── */
  { id: "react",   Icon: ReactIcon,      color: "cyan",   sz: "L", side: "L", topPct:  4, edgePct: 2.0, anim: "animate-float-y",    delay: "0s"   },
  { id: "ts",      Icon: TypeScriptIcon, color: "cyan",   sz: "M", side: "R", topPct:  3, edgePct: 7.5, anim: "animate-float-x",    delay: "0.6s", hideOnMobile: true },
  { id: "go",      Icon: GoIcon,         color: "cyan",   sz: "L", side: "L", topPct:  9, edgePct: 8.5, anim: "animate-float-diag", delay: "1.0s", hideOnMobile: true },
  { id: "github",  Icon: GitHubIcon,     color: "pink",   sz: "M", side: "R", topPct:  8, edgePct: 2.0, anim: "animate-float-y",    delay: "0.3s" },
  { id: "next0",   Icon: NextIcon,       color: "white",  sz: "S", side: "R", topPct:  6, edgePct: 10.0,anim: "animate-float-diag", delay: "2.1s", hideOnMobile: true },
  /* モバイル専用: Hero 上部右側の空白を埋める */
  { id: "ts-m",    Icon: TypeScriptIcon, color: "cyan",   sz: "S", side: "R", topPct:  3, edgePct: 5.0, anim: "animate-float-x",    delay: "1.0s", mobileOnly: true },
  { id: "next-m",  Icon: NextIcon,       color: "white",  sz: "S", side: "R", topPct:  5, edgePct: 3.0, anim: "animate-float-y",    delay: "1.5s", mobileOnly: true },

  /* ── LatestPosts(Blog)エリア (12–20%) はアイコンなし ─ */

  /* ── About エリア (20–34%) ─────────── */
  { id: "hono",    Icon: HonoIcon,       color: "yellow", sz: "M", side: "L", topPct: 21, edgePct: 2.5, anim: "animate-float-y",    delay: "1.4s", hideOnMobile: true },
  { id: "vue1",    Icon: VueIcon,        color: "green",  sz: "M", side: "R", topPct: 24, edgePct: 5.0, anim: "animate-float-y",    delay: "1.2s", hideOnMobile: true },
  { id: "supabase",Icon: SupabaseIcon,   color: "green",  sz: "S", side: "L", topPct: 25, edgePct: 9.0, anim: "animate-float-x",    delay: "0.5s", hideOnMobile: true },
  { id: "bun",     Icon: BunIcon,        color: "yellow", sz: "M", side: "L", topPct: 28, edgePct: 4.0, anim: "animate-float-diag", delay: "0.7s", hideOnMobile: true },
  { id: "docker",  Icon: DockerIcon,     color: "cyan",   sz: "L", side: "R", topPct: 30, edgePct: 1.5, anim: "animate-float-y",    delay: "1.1s", hideOnMobile: true },
];

/* サイズ */
const szMap = { L: "clamp(80px, 10vw, 140px)", M: "clamp(58px, 7.5vw, 100px)", S: "clamp(42px, 5.5vw, 70px)" };

/* ネオンカラー */
const colorCls: Record<NeonColor, string> = {
  cyan:   "text-cyan   neon-filter-cyan",
  pink:   "text-pink   neon-filter-pink",
  yellow: "text-yellow neon-filter-yellow",
  green:  "text-green  neon-filter-green",
  white:  "text-white  neon-filter-white",
};

/* セクションに応じた opacity（暗い区間は濃く） */
function opacityForTop(pct: number): number {
  if (pct < 30) return 0.65;   // Hero / About（黒背景）
  if (pct < 52) return 0.28;   // Skills（白背景）
  if (pct < 80) return 0.24;   // Works
  return 0.22;                  // Contact
}

/* ═══════════════════════════════════════════════════════
   コンポーネント本体
   → App.tsx の最外 div 内に置き、高さ 100% の absolute レイヤーとして機能
═══════════════════════════════════════════════════════ */
export default function FloatingTechIcons() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 25 }}
    >
      {ICONS.map(({ id, Icon, color, sz, side, topPct, edgePct, anim, delay, hideOnMobile, mobileOnly }) => (
        <div
          key={id}
          className={`absolute ${anim} animate-neon-pulse ${colorCls[color]} ${hideOnMobile ? "hidden md:block" : mobileOnly ? "md:hidden" : ""}`}
          style={{
            width:  szMap[sz],
            height: szMap[sz],
            top:    `${topPct}%`,
            ...(side === "L" ? { left:  `${edgePct}%` }
                             : { right: `${edgePct}%` }),
            animationDelay: delay,
            opacity: opacityForTop(topPct),
          }}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
