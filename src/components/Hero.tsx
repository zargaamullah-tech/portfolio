import { personal } from "@/data/portfolio";
import { withBase } from "@/lib/url";
import { DownloadIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="section pt-28 sm:pt-32">
      <div className="container-x">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-steel/30 bg-steel/10 px-3 py-1 text-xs font-medium text-sky">
          <span className="h-1.5 w-1.5 rounded-full bg-steel" />
          {personal.location} · Available immediately
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
          {personal.heroHeadline}
        </h1>

        <p className="mt-5 max-w-3xl text-base text-slate-300 sm:text-lg">
          {personal.heroIntro}
        </p>

        <p className="mt-3 max-w-3xl text-sm text-slate-400">
          {personal.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
            <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn-ghost">
            <MailIcon size={16} />
            Contact Me
          </a>
          {personal.resumeUrl && (
            <a
              href={withBase(personal.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <DownloadIcon size={16} />
              Download Resume
            </a>
          )}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {personal.stats.map((s) => (
            <div
              key={s.label}
              className="card text-center transition hover:-translate-y-0.5 hover:border-steel/40"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
