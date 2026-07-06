import { certifications, education, languages } from "@/data/portfolio";
import { GraduationIcon, AwardIcon, GlobeIcon } from "./Icons";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <p className="h-eyebrow">05 · Education & Credentials</p>
        <h2 className="h-title">
          Formal degrees, plus 42 professional certifications.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {education.map((e) => (
              <div
                key={`${e.degree}-${e.institution}`}
                className="card flex gap-4 transition hover:-translate-y-0.5 hover:border-steel/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-steel/30 bg-steel/10 text-steel">
                  <GraduationIcon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {e.degree}
                    </h3>
                    {e.period && (
                      <span className="text-xs text-slate-400">{e.period}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{e.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="card">
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-steel">
              <GlobeIcon size={12} /> Languages
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between gap-3 text-slate-300"
                >
                  <span>{l.name}</span>
                  <span className="text-xs text-slate-500">{l.level}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <AwardIcon size={18} className="text-steel" />
            Featured Certifications
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Top picks from a portfolio of 42.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
