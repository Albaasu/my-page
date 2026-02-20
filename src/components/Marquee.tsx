interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

export default function Marquee({
  text,
  bgColor = "bg-black",
  textColor = "text-white",
}: MarqueeProps) {
  return (
    <div
      className={`py-3 ${bgColor} overflow-hidden select-none border-y-2 border-black relative z-20`}
    >
      <div
        className={`marquee-container font-dot ${textColor} text-lg font-bold tracking-[0.5em] flex items-center`}
      >
        {[...Array(10)].map((_, i) => (
          <span key={`marquee-${i}`} className="px-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
