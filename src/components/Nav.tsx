"use client";

import { useEffect, useState } from "react";
import { nav, personal } from "@/data/portfolio";
import { withBase } from "@/lib/url";
import ProfileModal from "./ProfileModal";

function deriveInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const initials = personal.initials || deriveInitials(personal.name);

  // Close mobile menu when window grows past the desktop breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          {/* Brand — clicking opens the profile popup. Avatar is shared with
              the popup via personal.profileImage in src/data/portfolio.ts. */}
          <button
            type="button"
            onClick={() => setProfileOpen(true)}
            className="group flex items-center gap-2.5 rounded-full p-1 pr-3 transition hover:bg-white/5"
            aria-label={`Open profile of ${personal.name}`}
          >
            {personal.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={withBase(personal.profileImage)}
                alt={personal.name}
                className="h-9 w-9 rounded-full border border-steel/40 object-cover ring-2 ring-transparent transition group-hover:ring-steel/40"
              />
            ) : (
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-navy to-steel text-sm font-bold text-white ring-2 ring-transparent transition group-hover:ring-steel/40">
                {initials}
              </span>
            )}
            <span className="text-sm font-semibold text-white">
              {personal.name.split(" ").slice(0, 2).join(" ")}
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden md:inline-flex">
              Hire Me
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-white/10 bg-ink md:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                Hire Me
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Click-outside backdrop for the mobile menu (sits below the sticky header). */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
