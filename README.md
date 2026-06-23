# Shamitha Gaddam — Portfolio

A cinematic, immersive portfolio for an **AI Engineer & Researcher**. Built as a
scroll-driven storytelling experience: a WebGL neural-network field, smooth
inertial scrolling, scroll-triggered timelines, animated counters, stacking
fullscreen cards, an interactive research graph, custom cursor, and a
film-grain, monochrome-with-blue luxury-tech aesthetic.

> Black `#050505` · white `#FFFFFF` · muted `#A1A1AA` · accent `#3B82F6`

## Tech stack

| Layer            | Choice                                            |
| ---------------- | ------------------------------------------------- |
| Framework        | Next.js 15 (App Router, **static export**)        |
| Language         | TypeScript                                        |
| Styling          | TailwindCSS 3 + shadcn-style UI primitives        |
| Motion           | Framer Motion + GSAP (ScrollTrigger)              |
| 3D               | React Three Fiber + Three.js                      |
| Smooth scroll    | Lenis                                             |
| Icons            | lucide-react                                      |
| Deployment       | GitHub Pages (GitHub Actions)                     |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Build the static site locally:

```bash
npm run build      # outputs to ./out
npx serve out      # preview the exported site
```

## Project structure

```
src/
├── app/                      # App Router pages (static-exported)
│   ├── layout.tsx            # fonts, metadata, global chrome + providers
│   ├── page.tsx              # home — composes all 10 sections
│   ├── icon.svg              # favicon
│   ├── not-found.tsx         # styled 404 (exported as 404.html)
│   ├── projects/             # /projects
│   ├── research/             # /research
│   ├── publications/         # /publications
│   ├── resume/               # /resume
│   └── contact/              # /contact
├── components/
│   ├── ui/                   # button, badge, dialog (shadcn-style)
│   ├── providers/            # SmoothScrollProvider (Lenis + GSAP)
│   ├── experience/           # preloader, navbar, cursor, scroll progress
│   ├── three/                # neural-network WebGL background
│   ├── shared/               # reveal, counter, tilt, magnetic, typewriter…
│   ├── cards/                # publication / innovation / project cards
│   └── sections/             # hero, journey, stats, what-i-build, research…
└── lib/
    ├── site-config.ts        # name, links, email, nav  ← edit me
    ├── data.ts               # all section content       ← edit me
    └── utils.ts              # cn(), asset(), math helpers
```

## Customisation

Everything you'll routinely change lives in two files:

1. **`src/lib/site-config.ts`** — your name, role, email, GitHub / LinkedIn /
   Scholar URLs, resume filename, and nav items.
2. **`src/lib/data.ts`** — journey, stats, build domains, publications,
   innovations/patents, organizations, research-interest graph, and projects.

Drop your real CV at **`public/resume.pdf`** (a placeholder is included so the
download button works out of the box).

Palette and fonts are defined in `tailwind.config.ts` and `src/app/globals.css`.

## Deploy to GitHub Pages

The included workflow (`.github/workflows/deploy.yml`) builds the static export
and publishes it automatically.

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main` (or run the workflow manually). Done.

### Base path — important

GitHub Pages serves project repos from a subfolder
(`https://<user>.github.io/<repo>`), so assets need a base path. The workflow
sets it for you automatically:

- **Project page** (`github.com/you/my-portfolio`) → base path `/my-portfolio`.
- **User/org page** (repo named `<you>.github.io`) → base path empty (root).
- **Custom domain** → add a `CNAME` file in `public/` and leave the base path
  empty (rename your repo to `<you>.github.io`, or hard-set
  `NEXT_PUBLIC_BASE_PATH=""`).

To build locally with a base path:

```bash
NEXT_PUBLIC_BASE_PATH=/my-portfolio npm run build
```

`public/.nojekyll` is included so GitHub Pages serves Next's `_next/` assets.

## Performance & accessibility

- WebGL field is **code-split** (`next/dynamic`, `ssr:false`), DPR-capped, and
  deferred past first paint — it never blocks load.
- All animation honours **`prefers-reduced-motion`** (Lenis, GSAP, and the
  neural field all bail out).
- Custom cursor only mounts on fine-pointer devices.
- Static export = pre-rendered HTML, lazy-loaded heavy modules, no runtime
  server. Run Lighthouse against the built `out/` for production numbers.

## License

Personal portfolio — content © Shamitha Gaddam. Code free to reuse.
