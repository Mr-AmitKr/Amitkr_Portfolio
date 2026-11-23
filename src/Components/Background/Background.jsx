import Navbar from "../Navbar/Navbar";
import AboutMe from "../Sections/AboutMe";
import HomePage from "../Sections/HomePage/HomePage";
import { useEffect, useState } from "react";

import Resume from "../Sections/Resume/Resume";
import Projects from "../Sections/Projects/Projects";
import ContactMe from "../Sections/ContactMe/ContactMe";
const Background = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      // 0 → 1 based on first viewport
      const rawProgress = Math.min(window.scrollY / viewportHeight, 1);

      // Effects start after 10% scrolling
      const startPoint = 0.1;

      const progress = Math.min(
        Math.max((rawProgress - startPoint) / (1 - startPoint), 0),
        1,
      );

      setScrollProgress(progress);
      setBlurAmount(progress * 14);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="/src/images/PicForPortfolio.png"
          alt="Background"
          style={{
            filter: `blur(${blurAmount}px)`,
            transform: "scale(1.02)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: scrollProgress,
            background: `
              radial-gradient(
                circle at 72% 45%,
                rgba(255, 0, 230, 0.85) 0%,
                rgba(180, 0, 220, 0.55) 20%,
                rgba(90, 0, 150, 0.25) 38%,
                transparent 65%
              ),

              radial-gradient(
                circle at 88% 12%,
                rgba(0, 120, 255, 0.55) 0%,
                rgba(20, 40, 150, 0.30) 30%,
                transparent 60%
              ),

              radial-gradient(
                circle at 15% 50%,
                rgba(100, 0, 180, 0.35) 0%,
                transparent 50%
              )
            `,
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${0.05 + scrollProgress * 0.25})`,
          }}
        />
      </div>

      {/* NAVBAR */}

      <Navbar />
      <div>
        <main className="relative z-10 w-full -mt-25">
          <section id="banner" className="min-h-screen w-full"></section>
          <section id="home" className="min-h-screen w-full">
            <HomePage />
          </section >
          <section  id="about" className="min-h-screen w-full">
              <AboutMe/>
          </section>
          <section id="resume "className="min-h-screen w-full">
            <Resume/>
          </section>
          <section id="projects" className="min-h-screen w-full">
              <Projects />
          </section>
          <section id="contact" className="min-h-screen w-full">
            <ContactMe/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Background;
