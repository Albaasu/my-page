import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  Marquee,
  About,
  Skills,
  Works,
  AISommelier,
  Contact,
  Footer,
  LatestPosts,
} from "@/components";
import FloatingTechIcons from "@/components/FloatingTechIcons";
import BlogList from "@/pages/BlogList";
import BlogDetail from "@/pages/BlogDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/blog"     element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="*"         element={<Portfolio />} />
    </Routes>
  );
}

function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsInHero(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-clip, .reveal-scale, .reveal-mask"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-pink selection:text-white">
      {/* ページ全体に浮遊する技術アイコン */}
      <FloatingTechIcons />

      {/* Scanlines */}
      <div className="scanlines" />

      {/* 背景装飾文字（md以上のみ） */}
      <div className="hidden md:block fixed top-20 left-20 text-[20rem] font-brush text-cyan/10 -rotate-12 pointer-events-none z-0">
        技
      </div>
      <div className="hidden md:block fixed bottom-20 right-20 text-[25rem] font-brush text-pink/10 rotate-12 pointer-events-none z-0">
        創
      </div>
      <div className="hidden md:block fixed top-1/2 left-1/4 text-9xl font-dot text-cyan/5 animate-pulse pointer-events-none z-0">
        ENGINEER
      </div>

      {/* ネオンライン（md以上のみ） */}
      <div className="hidden md:block fixed top-0 left-10 w-px h-full bg-cyan/10 z-0" />
      <div className="hidden md:block fixed top-0 right-10 w-px h-full bg-pink/10 z-0" />

      <Navbar isScrolled={isScrolled} isInHero={isInHero} />

      <main className="relative z-10">
        {/* Hero: sticky で固定 → Blog が上にスライドしてくる演出 */}
        <div className="sticky top-0 z-[1]">
          <Hero />
        </div>

        {/* Blog 以降が sticky Hero の上に重なってスライドイン */}
        <div className="relative z-[2]">
          <LatestPosts />

          <Marquee
            text="★ FRONTEND ★ BACKEND ★ INFRASTRUCTURE ★ FULLSTACK ENGINEER ★ "
            bgColor="bg-cyan"
            textColor="text-black"
          />

          <div className="bg-white/70 backdrop-blur-xl">
            <About />

            <Marquee
              text="★ NEXT.JS ★ REACT ★ TYPESCRIPT ★ HONO ★ AWS ★ DOCKER ★ "
              bgColor="bg-pink"
              textColor="text-white"
            />

            <Skills />
            <AISommelier />
            <Works />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
