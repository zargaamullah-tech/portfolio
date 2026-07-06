"use client";

import { useEffect } from "react";
import { personal } from "@/data/portfolio";
import { withBase } from "@/lib/url";

function deriveInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export default function ProfileModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const initials = personal.initials || deriveInitials(personal.name);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 p-4 backdrop-blur sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-[#111a2e] to-ink p-6 shadow-soft sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-slate-200 transition hover:bg-white/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          {personal.profileImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={withBase(personal.profileImage)}
              alt={personal.name}
              className="h-24 w-24 rounded-full border-2 border-steel/40 object-cover sm:h-28 sm:w-28"
            />
          ) : (
            <div
              aria-label={`${personal.name} profile placeholder`}
              className="grid h-24 w-24 place-items-center rounded-full border-2 border-steel/40 bg-gradient-to-br from-navy to-steel text-2xl font-bold text-white sm:h-28 sm:w-28"
            >
              {initials}
            </div>
          )}

          <h2
            id="profile-modal-title"
            className="mt-5 text-lg font-semibold text-white sm:text-xl"
          >
            {personal.name}
          </h2>
          <p className="mt-1 text-sm text-slate-300">{personal.title}</p>

          <div className="mt-4 flex flex-col items-center gap-1 text-xs text-slate-400">
            {personal.location && <p>{personal.location}</p>}
            {personal.email && <p>{personal.email}</p>}
          </div>
        </div>

        <div className="mt-7 grid gap-2.5">
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              onClick={onClose}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-steel to-[#1294d1] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-[#1294d1] hover:to-steel hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                Send Email
              </span>
              <span className="text-white/80 transition group-hover:translate-x-0.5" aria-hidden>→</span>
            </a>
          )}

          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-steel/40 hover:bg-white/[0.08]"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0a66c2] text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.92H5.67v7.92h2.67ZM7 9.27a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.07v-4.34c0-2.32-1.24-3.4-2.9-3.4-1.34 0-1.94.74-2.27 1.26v-1.08H10.5c.04.76 0 7.92 0 7.92h2.67v-4.42c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.24h2.38Z" />
                  </svg>
                </span>
                Connect on LinkedIn
              </span>
              <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden>↗</span>
            </a>
          )}

          {personal.resumeUrl && (
            <a
              href={withBase(personal.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-steel/40 hover:bg-white/[0.08]"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/90 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                Download Resume
              </span>
              <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden>↓</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
