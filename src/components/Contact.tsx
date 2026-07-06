import { personal } from "@/data/portfolio";
import { withBase } from "@/lib/url";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  PinIcon,
  DownloadIcon,
} from "./Icons";

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
  trailing,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  trailing?: React.ReactNode;
}) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-steel/10 text-steel">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-widest text-steel">{label}</p>
          <p className="mt-1 truncate text-sm text-white">{value}</p>
        </div>
      </div>
      {trailing ?? (
        <span className="text-steel transition group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      )}
    </>
  );

  const className =
    "group card flex items-center justify-between gap-3 transition hover:-translate-y-0.5 hover:border-steel/40";

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="card overflow-hidden p-8 sm:p-12">
          <p className="h-eyebrow">06 · Contact</p>
          <h2 className="h-title max-w-2xl">
            Ready to drive revenue for your team?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            I do not just fill pipelines — I close them. If you are hiring
            for an enterprise sales seat across EMEA, North America, or APAC,
            let&apos;s talk.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ContactRow
              icon={<MailIcon size={18} />}
              label="Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactRow
              icon={<PhoneIcon size={18} />}
              label="Phone"
              value={personal.phone}
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            />
            <ContactRow
              icon={<LinkedinIcon size={18} />}
              label="LinkedIn"
              value={personal.linkedin.replace(/^https?:\/\//, "")}
              href={personal.linkedin}
              external
            />
            <ContactRow
              icon={<PinIcon size={18} />}
              label="Location"
              value={personal.location}
              trailing={
                <span className="text-xs text-slate-500">Open to relocation</span>
              }
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              <MailIcon size={16} />
              Send an email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
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
        </div>
      </div>
    </section>
  );
}
