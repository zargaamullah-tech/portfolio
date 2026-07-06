import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {personal.name}. All rights reserved.
        </p>
        <p className="text-xs">{personal.location} · {personal.email}</p>
      </div>
    </footer>
  );
}
