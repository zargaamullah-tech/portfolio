import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <p className="h-eyebrow">04 · Selected Wins</p>
        <h2 className="h-title">Flagship deals & initiatives.</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card group flex h-full flex-col transition hover:-translate-y-0.5 hover:border-steel/40"
            >
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-steel transition group-hover:gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View case <span aria-hidden>→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
