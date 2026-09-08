"use client";

import { useEffect, useState } from "react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      setLight(document.documentElement.classList.contains("light")),
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !light;
    const apply = () => {
      document.documentElement.classList.toggle("light", next);
      try {
        localStorage.setItem("theme", next ? "light" : "dark");
      } catch {
        /* private mode */
      }
      setLight(next);
    };

    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!doc.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    // Anchor the reveal on the toggle itself, not the pointer, so it
    // is exact for keyboard activation too. Overshoot the radius so
    // the easing tail plays out past the screen corners. Keyframes
    // are injected with literal pixel values because WebKit does not
    // resolve custom properties on view-transition pseudo-elements.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      ) * 1.2,
    );

    let frames = document.getElementById("theme-reveal-frames");
    if (!frames) {
      frames = document.createElement("style");
      frames.id = "theme-reveal-frames";
      document.head.appendChild(frames);
    }
    frames.textContent = `@keyframes theme-reveal{from{clip-path:circle(0px at ${x}px ${y}px)}to{clip-path:circle(${radius}px at ${x}px ${y}px)}}`;

    doc.startViewTransition(apply);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="text-paper-dim transition-colors hover:text-paper"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" />
      </svg>
    </button>
  );
}
