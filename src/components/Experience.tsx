import Image from "next/image";
import { experience } from "@/data/portfolio";
import WorkplaceGallery from "./WorkplaceGallery";

function CompanyLogo({ logo, company }: { logo: string; company: string }) {
  if (logo) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1.5 shadow-sm">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
    );
  }
  // Fallback monogram badge if no logo image is provided
  const initials = company
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
  return (
    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-navy to-steel text-base font-bold text-white">
      {initials}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <p className="h-eyebrow">03 · Experience</p>
        <h2 className="h-title">Five years. Three regions. Closed contracts.</h2>

        <div className="relative mt-12">
          {/* timeline rail */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-white/10 sm:block" />

          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <div className="card transition hover:border-steel/40">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <CompanyLogo logo={job.logo} company={job.company} />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {job.role}
                          </h3>
                          <p className="text-sm text-steel">{job.company}</p>
                        </div>
                        <span className="text-xs text-slate-400">
                          {job.period}
                        </span>
                      </div>

                      <div className="mt-2 grid gap-1 text-xs text-slate-400 sm:grid-cols-2">
                        <p>
                          <span className="text-slate-500">Region · </span>
                          {job.region}
                        </p>
                        <p>
                          <span className="text-slate-500">Industries · </span>
                          {job.industries}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {job.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-slate-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      {job.note && (
                        <p className="mt-4 text-xs italic text-slate-500">
                          {job.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <WorkplaceGallery />
      </div>
    </section>
  );
}
