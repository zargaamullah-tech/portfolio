# Muhammad Zargaam Ullah — Portfolio

A clean, dark-themed portfolio website built with **Next.js + TypeScript + Tailwind CSS**.

Designed so a non-developer can update everything by editing **one file**.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Saving any file auto-reloads the page.

To build a production version locally:

```bash
npm run build
```

The static site is generated into the `out/` folder. You can open `out/index.html` directly to preview, or upload `out/` to any static host.

---

## Editing the website

**Everything you see on the website is controlled by one file:**

> [`src/data/portfolio.ts`](src/data/portfolio.ts)

That file contains your name, title, intro, stats, about text, skills, work experience, projects, education, languages, certifications, and contact links. Each section has comments explaining what to change. You do **not** need to edit any component file.

Common edits:

| What to update              | Where in `src/data/portfolio.ts`         |
| --------------------------- | ---------------------------------------- |
| Name, title, location       | `personal.name` / `title` / `location`   |
| Email, phone, LinkedIn      | `personal.email` / `phone` / `linkedin`  |
| Profile photo (header + popup) | `personal.profileImage`               |
| Initials (logo fallback)    | `personal.initials`                      |
| Resume link (Hero, Contact, popup) | `personal.resumeUrl`              |
| Hero headline & intro       | `personal.heroHeadline` / `heroIntro`    |
| Stat strip (`$1M+`, etc.)   | `personal.stats`                         |
| About paragraphs            | `about.paragraphs`                       |
| "Why Me" tiles              | `about.whyMe`                            |
| Skills / tools              | `skills`                                 |
| Work experience & logos     | `experience`                             |
| Workplace photo gallery     | `workplaces`                             |
| Projects / key wins         | `projects`                               |
| Education                   | `education`                              |
| Featured certifications     | `certifications`                         |
| Languages                   | `languages`                              |
| Top-nav links               | `nav`                                    |

After editing, save the file. The dev server hot-reloads. Run `npm run build` before deploying.

---

## Replace the resume / CV

1. Drop your new file into [`public/resume/`](public/resume/) (any name; PDF preferred).
2. Open [`src/data/portfolio.ts`](src/data/portfolio.ts) and update one line:
   ```ts
   resumeUrl: "/resume/your-new-filename.pdf",
   ```
3. Save. The "Download Resume" buttons in the Hero, Contact, and profile popup all switch to the new file.

To **hide** the resume buttons entirely, set `resumeUrl: ""`.

- Current resume path: `public/resume/Muhammad_Zargaam_Ullah_Resume.pdf`
- Public URL: `/resume/Muhammad_Zargaam_Ullah_Resume.pdf`

---

## Replace the profile photo

The profile photo appears in **two** places — the navbar avatar and the click-to-open profile popup — and both read from the same field, so you only edit it once.

1. Drop a square JPG/PNG into [`public/images/profile/`](public/images/profile/).
2. In [`src/data/portfolio.ts`](src/data/portfolio.ts):
   ```ts
   profileImage: "/images/profile/your-new-photo.jpg",
   ```
3. Set `profileImage: ""` to revert to the navy/steel initials badge.

---

## Replace company logos & workplace photos

There are **two** image folders, used for different things:

| Folder                                                | What goes here                                       |
| ----------------------------------------------------- | ---------------------------------------------------- |
| [`public/images/logos/`](public/images/logos/)        | Official **brand logos** (Odoo, Royal Cyber, etc.)   |
| [`public/images/companies/`](public/images/companies/) | **Workplace photographs** for the "From the field" gallery |

### To swap a company logo on the Experience timeline

1. Drop the new logo file into `public/images/logos/`.
2. In `src/data/portfolio.ts`, update the matching `experience[].logo`:
   ```ts
   logo: "/images/logos/your-new-logo.png",
   ```
3. Set `logo: ""` to show a navy/steel monogram badge instead.

### To add a photo to the "From the field" gallery

1. Drop the photo into `public/images/companies/`.
2. Add an entry to the `workplaces` array in `src/data/portfolio.ts`:
   ```ts
   {
     image: "/images/companies/event-photo.jpeg",
     caption: "GITEX Dubai 2023",
     alt: "On-site at GITEX",
   },
   ```

The gallery shows each photo at its full natural aspect (no cropping) and opens it in a modal when clicked.

---

## Header behavior

- **Avatar + name** on every screen size — clicking opens the **profile popup** (photo, name, title, location, email, plus three CTA buttons: Send Email · Connect on LinkedIn · Download Resume).
- **Desktop (≥ 768 px)**: full nav links + "Hire Me" button on the right.
- **Mobile (< 768 px)**: a hamburger button opens a clean dropdown with the same links + "Hire Me". Closes on link click, outside click, Esc, or window resize past the desktop breakpoint.

Nothing in the header is hard-coded — all links come from `nav` and all profile fields come from `personal` in `src/data/portfolio.ts`.

---

## Deploy free on GitHub Pages

This project is pre-configured for GitHub Pages via GitHub Actions.

### Step 1 — push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/zargaamullah-tech/<repo-name>.git
git push -u origin main
```

### Step 2 — enable Pages

In your GitHub repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

That's it. Every push to `main` will rebuild and redeploy automatically. The first deploy takes ~1 minute. The deploy workflow lives at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Which URL will I get?

It depends on what you name the repository:

| Repo name                       | Live URL                                            | Action needed |
| ------------------------------- | --------------------------------------------------- | ------------- |
| `zargaamullah-tech.github.io`   | `https://zargaamullah-tech.github.io/`              | None. ✅ |
| anything else (e.g. `portfolio`)| `https://zargaamullah-tech.github.io/<repo-name>/`  | Open `.github/workflows/deploy.yml` and set `NEXT_PUBLIC_BASE_PATH: /<repo-name>` |

**Recommended:** name the repository `zargaamullah-tech.github.io`. The site will live at the clean root URL with zero extra config.

---

## Project structure

```
.
├── public/
│   ├── images/
│   │   ├── companies/        ← workplace photographs (gallery)
│   │   ├── logos/            ← official brand logos (timeline)
│   │   └── profile/          ← your headshot
│   └── resume/               ← resume PDF
├── docs/                     ← original blueprint .docx (reference only)
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← <head>, fonts, metadata
│   │   ├── page.tsx          ← composes all sections in order
│   │   └── globals.css       ← Tailwind + theme tokens
│   ├── components/           ← one file per section (read-only for content)
│   │   ├── Nav.tsx           ← header w/ hamburger + brand-click profile popup
│   │   ├── ProfileModal.tsx  ← profile popup
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── WorkplaceGallery.tsx ← click-to-zoom photo modal
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Icons.tsx         ← shared SVG icon set
│   ├── data/
│   │   └── portfolio.ts      ← ⭐ edit this file to change content
│   └── lib/
│       └── url.ts            ← basePath helper for static export
├── .github/workflows/deploy.yml ← GitHub Pages deploy workflow
├── next.config.js            ← static export config
├── tailwind.config.ts
└── package.json
```

---

## Scripts

| Command            | What it does                                       |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Start dev server at http://localhost:3000          |
| `npm run build`    | Build static export into `out/`                    |
| `npm start`        | Serve a previously-built site (not used for Pages) |

No environment variables are required for normal use. (`NEXT_PUBLIC_BASE_PATH` is only needed when deploying to a project repo — see the deploy table above.)
