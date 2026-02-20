import { useState } from "react";
import { Menu as MenuIcon, X, Code2 } from "lucide-react";
import { PROFILE } from "@/constants";

interface NavbarProps {
  isScrolled: boolean;
  isInHero: boolean;
}

const navLinks = [
  { name: "About",   href: "#about"   },
  { name: "Skills",  href: "#skills"  },
  { name: "Works",   href: "#works"   },
  { name: "Contact", href: "#contact" },
  { name: "Blog",    href: "/blog"    },
];

export default function Navbar({ isScrolled, isInHero }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY - 96;
      const startY = window.scrollY;
      const diff = targetY - startY;
      const duration = 800;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        window.scrollTo(0, startY + diff * eased);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-700 py-6 px-10 md:px-20 flex justify-between items-center ${
        isScrolled
          ? "bg-black text-white h-24 shadow-2xl"
          : "bg-transparent h-32"
      } ${
        isInHero ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : ""
      }`}
    >
      <div className="flex items-center space-x-6">
        <div className="w-16 h-16 bg-cyan border-4 border-black flex items-center justify-center rotate-[-10deg]">
          <Code2 size={32} className="text-black" />
        </div>
        <div className="flex flex-col">
          <h1
            className={`font-brush text-4xl md:text-5xl tracking-tighter font-black leading-none ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            {PROFILE.name}
          </h1>
          <span className="font-dot text-xs tracking-[0.3em] md:tracking-[0.5em] text-pink font-black uppercase mt-1">
            {PROFILE.title}
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNav(e, link.href)}
            className="font-dot text-xl font-black tracking-widest transition-all relative group text-white"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-pink transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        <a
          href="#contact"
          onClick={(e) => handleNav(e, "#contact")}
          className="bg-pink text-white px-12 py-4 font-dot font-black tracking-[0.3em] skew-x-[-15deg] hover:bg-cyan hover:text-black transition-all inline-block"
        >
          <span className="inline-block skew-x-[15deg]">CONTACT</span>
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className={`${isScrolled ? "text-white" : "text-black"} lg:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={48} /> : <MenuIcon size={48} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[1000] flex flex-col justify-center items-center space-y-12">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 text-white"
          >
            <X size={48} />
          </button>
          <div className="font-brush text-8xl text-cyan mb-12">MENU</div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-5xl font-dot font-black tracking-[0.5em] text-white hover:text-pink transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
