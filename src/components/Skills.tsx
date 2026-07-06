import { skills } from "@/data/portfolio";
import {
  CrmIcon,
  ServerIcon,
  MagnetIcon,
  CompassIcon,
  CpuIcon,
  CloudIcon,
  MegaphoneIcon,
  FileTextIcon,
} from "./Icons";

// One icon per skills category, in the same order as the array in portfolio.ts.
const categoryIcons = [
  CrmIcon,         // 1. CRM Platforms
  ServerIcon,      // 2. ERP & ITSM
  MagnetIcon,      // 3. Lead Generation & Prospecting
  CompassIcon,     // 4. Sales Methodologies
  CpuIcon,         // 5. Automation & RPA
  CloudIcon,       // 6. Cloud & Infrastructure
  MegaphoneIcon,   // 7. Outreach & Communication
  FileTextIcon,    // 8. Commercial & Documentation
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <p className="h-eyebrow">02 · Skills & Tools</p>
        <h2 className="h-title">A full revenue stack — methodologies to tools.</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <div
                key={group.category}
                className="card transition hover:-translate-y-0.5 hover:border-steel/40"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-steel/30 bg-steel/10 text-steel">
                    <Icon size={16} />
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {group.category}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
