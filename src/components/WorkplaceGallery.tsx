"use client";

import { useEffect, useState } from "react";
import { workplaces } from "@/data/portfolio";
import { withBase } from "@/lib/url";

export default function WorkplaceGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  if (workplaces.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-lg font-semibold text-white">From the field</h3>
      <p className="mt-1 text-sm text-slate-400">
        On-site at the companies and events along the way. Click any photo to
        view it full size.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {workplaces.map((w, i) => (
          <button
            key={w.image}
            type="button"
            onClick={() => setActive(i)}
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-ink p-2 text-left transition hover:-translate-y-0.5 hover:border-steel/40"
            aria-label={`Open ${w.caption} full size`}
          >
            {/* Plain img tag preserves natural aspect ratio without distortion. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(w.image)}
              alt={w.alt}
              loading="lazy"
              className="h-auto w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.02]"
            />
            <p className="px-3 py-3 text-sm text-slate-300">{w.caption}</p>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={workplaces[active].caption}
        >
          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(workplaces[active].image)}
              alt={workplaces[active].alt}
              className="h-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-soft"
            />
            <p className="mt-3 text-center text-sm text-slate-200">
              {workplaces[active].caption}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -right-2 -top-2 grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow transition hover:scale-105 sm:-right-3 sm:-top-3"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
