import { useEffect, useRef, useState } from "react";
import marcaValorPercebidoPoster from "@/assets/marca-valor-percebido.webp";

type LazyVideoProps = {
  src: string;
  className?: string;
  "aria-label"?: string;
  poster?: string;
  preload?: "none" | "metadata";
};

/**
 * Só carrega e reproduz o vídeo quando entra na viewport.
 */
export function LazyVideo({
  src,
  className,
  "aria-label": ariaLabel,
  poster = marcaValorPercebidoPoster,
  preload = "none",
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px 10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    el.src = src;
    void el.play().catch(() => {
      // Autoplay pode ser bloqueado; o poster permanece visível.
    });
  }, [active, src]);

  return (
    <video
      ref={ref}
      aria-label={ariaLabel}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      className={className}
    />
  );
}
