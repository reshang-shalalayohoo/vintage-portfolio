import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      setDone(true);
      return;
    }

    let cancelled = false;

    // Track real asset loading
    const bgImg = new Image();
    bgImg.src = "/images/vintage-background.jpg";

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const imgReady = new Promise((resolve) => {
      if (bgImg.complete) resolve();
      else {
        bgImg.onload = resolve;
        bgImg.onerror = resolve;
      }
    });

    // Animate progress 0→90 over ~2s while assets load
    let frame;
    let start;
    const animateProgress = (timestamp) => {
      if (cancelled) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const target = Math.min(90, (elapsed / 2000) * 90);
      setProgress(target);
      if (target < 90) frame = requestAnimationFrame(animateProgress);
    };
    frame = requestAnimationFrame(animateProgress);

    // When assets finish, jump to 100 and exit
    Promise.all([fontsReady, imgReady]).then(() => {
      if (cancelled) return;
      cancelAnimationFrame(frame);
      setProgress(100);
      setTimeout(() => {
        if (cancelled) return;
        setExiting(true);
        setTimeout(() => {
          if (cancelled) return;
          setDone(true);
          onComplete();
        }, 700);
      }, 300);
    });

    // Safety timeout — never block more than 5s
    const timeout = setTimeout(() => {
      if (cancelled) return;
      cancelAnimationFrame(frame);
      setProgress(100);
      setExiting(true);
      setTimeout(() => {
        if (cancelled) return;
        setDone(true);
        onComplete();
      }, 500);
    }, 5000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div className={`loading-screen${exiting ? " loading-exit" : ""}`} aria-live="polite">
      <div className="loading-content">
        <div className="loading-initials" aria-hidden="true">雷默</div>
        <p className="loading-subtitle">PORTFOLIO LOADING</p>
        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

