# Aidan Rickert — Portfolio

Astro-based portfolio site: project grid, skills, about page, and a contact form in the layout footer on every page.

## Prerequisites

- **Node.js LTS** and **npm**. If you don’t have them, install from [nodejs.org](https://nodejs.org) (Section 0 of the plan). Restart your terminal after installing, then run `node -v` and `npm -v` to confirm.

## Commands

```bash
npm install
npm run dev    # Start dev server (e.g. http://localhost:4321)
npm run build  # Production build
npm run preview # Preview production build locally
```

## Tech stack

- Astro (static)
- TypeScript
- Content collections (projects + about)

## How to update content

### Add or edit a project

1. Add or edit a `.md` file in `src/content/projects/`.
2. Frontmatter must include: `title`, `description`, `image`. Optional: `slug`, `order`, `pubDate`, `tags`.
3. Put the image in `public/images/projects/` and set `image` to e.g. `"/images/projects/my-project.png"` (or `.svg`).
4. Run `npm run dev` or `npm run build` to see changes.

**Example frontmatter:**

```yaml
---
title: "My Project"
description: "Short summary for the card."
image: "/images/projects/my-project.png"
slug: "my-project"   # optional; used in URL
order: 1             # optional; sort order on home page
pubDate: 2025-01-01  # optional
tags: ["PCB"]        # optional
---
```

Body content is the long-form description on the project detail page (markdown).

### Edit skills

Edit `src/data/skills.json`. Use subsections **Electrical**, **Software**, and **Hands-on**, each with an array of skill strings. Example:

```json
{
  "Electrical": ["PCB Design", "KiCad", "LTSpice"],
  "Software": ["Python", "C/C++", "MATLAB"],
  "Hands-on": ["Soldering", "Prototyping", "Bench Testing"]
}
```

### Edit the about page

Edit `src/content/about/about.md`: frontmatter (`title`, `bio`, optional `avatar`) and the markdown body. The about collection is defined in `src/content.config.ts`.

### Banner (name + tagline)

Name and tagline are in `src/data/site.json` (`name`, `tagline`). Optional `bannerImage` sets a full-width background image behind the banner (e.g. `"/images/banner.svg"` or `"/images/banner.jpg"`); replace `public/images/banner.svg` with your own image and update the path in `site.json` if needed. The layout reads this file; change it there to update the header on every page.

### Contact form

The form is in the **layout footer** (`src/layouts/Layout.astro`) and appears at the bottom of every page.

- **Option A (current):** Form POSTs to **Formspree**. Replace `YOUR_FORM_ID` in `Layout.astro` with your Formspree form ID (from [formspree.io](https://formspree.io)).
- **Option B:** To use your own backend, add an API route (e.g. `src/pages/api/contact.ts`), set `output: 'server'` or `output: 'hybrid'` in `astro.config.mjs`, and point the form `action` to your endpoint. Document any env vars (e.g. for Resend/SendGrid) in this README.

## Folder structure

```
src/
  content.config.ts    # projects + about collections
  content/
    projects/          # One .md per project
    about/           # About page content (about.md)
  data/
    skills.json        # Skills list (home page)
    site.json          # Name + tagline (banner)
  layouts/
    Layout.astro       # Banner, nav, main slot, footer contact form
  components/
    ProjectCard.astro
  pages/
    index.astro        # Home: projects grid + skills
    about.astro        # About (reads content/about/about.md)
    projects/
      [slug].astro     # Project detail
    api/
      contact.ts       # Only if using Option B
public/
  images/
    projects/          # Project images
  favicon.svg
```

## Content collection schema

Defined in `src/content.config.ts`:

- **projects:** `title`, `description`, `image`; optional: `slug`, `order`, `pubDate`, `tags`. Body = markdown for the detail page.
- **about:** `title`, `bio`; optional: `avatar`. Body = markdown for the about page.

---

For full plan details (e.g. Node setup, Formspree vs server endpoint), see the Astro Portfolio Website Plan.
