import { about, personal } from "@/data/portfolio";
import {
  BoltIcon,
  TrendingIcon,
  CrownIcon,
  UsersIcon,
  GridIcon,
  FlagIcon,
  AwardIcon,
  RocketIcon,
  PinIcon,
} from "./Icons";

// One icon per "Why Me" tile, mapped by position in the array.
// If you add or reorder entries in portfolio.ts, this list cycles through.
const whyMeIcons = [
  BoltIcon,      // 1. I close fast
  TrendingIcon,  // 2. I generate real revenue
  CrownIcon,     // 3. I sell at the C-level
  UsersIcon,     // 4. I build teams that perform
  GridIcon,      // 5. I work across industries
  FlagIcon,      // 6. I represent brands globally
  AwardIcon,     // 7. Certified at scale
  RocketIcon,    // 8. I can start tomorrow
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <p className="h-eyebrow">01 · About</p>
        <h2 className="h-title">{about.heading}</h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-slate-300 lg:col-span-2">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <aside className="card h-fit">
            <p className="text-xs uppercase tracking-widest text-steel">
              Right to Work
            </p>
            <p className="mt-2 text-sm text-slate-200">{personal.rightToWork}</p>

            <div className="my-5 h-px bg-white/10" />

            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-steel">
              <PinIcon size={12} /> Based In
            </p>
            <p className="mt-2 text-sm text-slate-200">{personal.location}</p>

            <div className="my-5 h-px bg-white/10" />

            <p className="text-xs uppercase tracking-widest text-steel">
              Specializes In
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["ERP", "SaaS", "CRM", "RPA", "ServiceNow", "Odoo"].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-white">Why Me</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.whyMe.map((w, i) => {
              const Icon = whyMeIcons[i % whyMeIcons.length];
              return (
                <div
                  key={w.title}
                  className="card transition hover:-translate-y-0.5 hover:border-steel/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-steel/30 bg-steel/10 text-steel">
                    <Icon size={18} />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {w.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{w.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
