import { useEffect, useRef, useCallback } from "react";

export default function Sparkles() {
  const containerRef = useRef(null);

  const createSparkle = useCallback((x, y) => {
    const container = containerRef.current;
    if (!container) return;

    const count = 8;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle-particle";

      // Random direction
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const distance = 25 + Math.random() * 35;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const size = 3 + Math.random() * 4;

      sparkle.style.cssText = `
        left:${x}px;top:${y}px;width:${size}px;height:${size}px;
        --tx:${tx}px;--ty:${ty}px;
      `;
      container.appendChild(sparkle);
      sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
    }
  }, []);

  useEffect(() => {
    // Disable on touch-only devices or reduced motion
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    const handleClick = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [createSparkle]);

  return <div ref={containerRef} className="sparkles-container" aria-hidden="true" />;
}

