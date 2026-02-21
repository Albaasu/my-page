import { Github, Twitter, Code2 } from "lucide-react";
import { PROFILE } from "@/constants";

export default function Footer() {
  const links = [
    { id: "github",  Icon: Github,   href: PROFILE.github },
    { id: "twitter", Icon: Twitter,  href: PROFILE.twitter },
  ];

  return (
    <footer className="bg-white py-16 md:py-32 px-6 border-t-8 border-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-cyan via-pink to-cyan" />

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10 md:space-y-16 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 bg-black text-cyan flex items-center justify-center rotate-12 mb-4">
            <Code2 size={48} />
          </div>
          <div className="text-center">
            <h2 className="text-fluid-heading font-brush tracking-tighter text-black leading-none">
              {PROFILE.name}
            </h2>
            <p className="font-dot text-sm tracking-[1em] text-pink font-black mt-4 uppercase">
              {PROFILE.title}
            </p>
          </div>
        </div>

        <div className="flex space-x-12">
          {links.map(({ id, Icon, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 border-4 border-black flex items-center justify-center hover:bg-cyan transition-colors shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <Icon size={28} className="text-black" />
            </a>
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-x-16 gap-y-6">
          {["about", "skills", "works", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-dot text-sm font-black tracking-widest text-black/40 hover:text-pink transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="text-center space-y-2 pt-8 border-t border-black/10 w-full max-w-2xl">
          <p className="font-dot text-[10px] text-black/30 tracking-[0.5em] uppercase">
            &copy; {new Date().getFullYear()} {PROFILE.name}. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
