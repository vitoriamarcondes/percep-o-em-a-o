import { createElement, useEffect, useRef, useState } from "react";

export type TypewriterSegment = { text: string; className?: string; br?: boolean };

/**
 * Título com animação de máquina de escrever, disparada quando entra na viewport.
 * Preserva estilos por segmento (itálico, cor, quebras) e reserva o espaço final
 * com uma cópia invisível para não causar reflow enquanto digita.
 */
export function TypewriterText({
  segments,
  className,
  as = "span",
  speed = 28,
}: {
  segments: TypewriterSegment[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  speed?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const total = segments.reduce((n, s) => n + s.text.length, 0);
  const plain = segments.map((s) => (s.br ? " " : s.text)).join("");
  const [count, setCount] = useState(total);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setCount(total);
      return;
    }

    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [total]);

  useEffect(() => {
    if (!started || count >= total) return;
    const timer = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(timer);
  }, [started, count, total, speed]);

  const renderUpTo = (limit: number, withCaret: boolean) => {
    let remaining = limit;
    return (
      <>
        {segments.map((seg, i) => {
          const shown = Math.max(0, Math.min(seg.text.length, remaining));
          remaining -= seg.text.length;
          if (seg.br) return shown > 0 ? <br key={i} /> : null;
          return (
            <span key={i} className={seg.className}>
              {seg.text.slice(0, shown)}
            </span>
          );
        })}
        {withCaret && (
          <span
            className="type-caret ml-0.5 inline-block w-[0.06em] bg-lime align-[-0.05em]"
            style={{ height: "0.95em" }}
          />
        )}
      </>
    );
  };

  return createElement(
    as,
    { ref, "aria-label": plain, className: `relative ${className ?? ""}` },
    // Cópia invisível que reserva a altura final (evita reflow ao digitar).
    <span aria-hidden="true" className="invisible">
      {renderUpTo(total, false)}
    </span>,
    // Texto animado sobreposto.
    <span aria-hidden="true" className="absolute inset-0">
      {renderUpTo(count, count < total)}
    </span>,
  );
}
