// Small icon set used throughout the site. All icons are 1em sized so they
// inherit color and scale via the surrounding font-size / className.
//
// To add a new icon: copy any block below, rename, paste your SVG path(s).

type Props = { className?: string; size?: number };

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const base = (size: number) => ({ width: size, height: size, "aria-hidden": true });

export function MailIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.18 4.11 1 1 0 0 1 4.18 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L8.21 10.79a16 16 0 0 0 6 6l2-1.71a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .79 1.13Z" />
    </svg>
  );
}

export function PinIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M21 10c0 6.5-9 12-9 12s-9-5.5-9-12a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LinkedinIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.92H5.67v7.92h2.67ZM7 9.27a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.07v-4.34c0-2.32-1.24-3.4-2.9-3.4-1.34 0-1.94.74-2.27 1.26v-1.08H10.5c.04.76 0 7.92 0 7.92h2.67v-4.42c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.24h2.38Z" />
    </svg>
  );
}

export function DownloadIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function GraduationIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5a2 2 0 0 0 1 1.7 10 10 0 0 0 10 0A2 2 0 0 0 18 17v-5" />
    </svg>
  );
}

export function GlobeIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

// ---------------- "Why Me" tile icons ----------------

export function BoltIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
export function TrendingIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}
export function CrownIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M3 18h18" />
      <path d="M2 7l5 5 5-7 5 7 5-5-2 11H4L2 7Z" />
    </svg>
  );
}
export function UsersIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
export function GridIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
export function FlagIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M4 22V4" />
      <path d="M4 4h13l-2 4 2 4H4" />
    </svg>
  );
}
export function AwardIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
    </svg>
  );
}
export function RocketIcon({ className = "", size = 18 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

// ---------------- Skills category icons (positional) ----------------

export function CrmIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m17 11 2 2 4-4" />
    </svg>
  );
}
export function ServerIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <rect x="2" y="3" width="20" height="6" rx="1" />
      <rect x="2" y="15" width="20" height="6" rx="1" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}
export function MagnetIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M6 3v8a6 6 0 0 0 12 0V3" />
      <path d="M6 3h4v4H6z" />
      <path d="M14 3h4v4h-4z" />
    </svg>
  );
}
export function CompassIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}
export function CpuIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="2" x2="9" y2="4" />
      <line x1="15" y1="2" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="22" />
      <line x1="15" y1="20" x2="15" y2="22" />
      <line x1="20" y1="9" x2="22" y2="9" />
      <line x1="20" y1="15" x2="22" y2="15" />
      <line x1="2" y1="9" x2="4" y2="9" />
      <line x1="2" y1="15" x2="4" y2="15" />
    </svg>
  );
}
export function CloudIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M18 10a4 4 0 0 0-7.79-1.34A5 5 0 0 0 6 18h11a4 4 0 0 0 1-7.92Z" />
    </svg>
  );
}
export function MegaphoneIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14 7a5 5 0 0 1 0 10" />
    </svg>
  );
}
export function FileTextIcon({ className = "", size = 16 }: Props) {
  return (
    <svg {...base(size)} {...stroke} className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}
