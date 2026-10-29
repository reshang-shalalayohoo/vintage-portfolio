import { useEffect, useCallback } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ArtGallery from "./sections/ArtGallery";
import Experience from "./sections/Experience";
import CreativeProcess from "./sections/CreativeProcess";
import Contact from "./sections/Contact";

function Ornament() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span>✦ ✦ ✦</span>
    </div>
  );
}

function App() {
  // Scroll-reveal: observe .reveal elements
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    // Small delay so DOM is fully painted
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Lazy image fade-in on load
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
      }
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="film-grain" aria-hidden="true" />

      <main>
        <Hero />
        <Ornament />
        <About />
        <Ornament />
        <Skills />
        <Ornament />
        <Projects />
        <Ornament />
        <ArtGallery />
        <Ornament />
        <Experience />
        <Ornament />
        <CreativeProcess />
        <Ornament />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
