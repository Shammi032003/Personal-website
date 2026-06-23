/**
 * Central site configuration.
 *
 * Replace the placeholder URLs / email below with the real values. Everything
 * the UI links to (resume, GitHub, LinkedIn, email) flows from here, so there
 * is a single source of truth.
 */
export const siteConfig = {
  name: 'Shamitha Gaddam',
  role: 'AI Engineer · Researcher · Inventor',
  title: 'Shamitha Gaddam — AI Engineer & Researcher',
  description:
    'AI Engineer, Researcher, Inventor and Builder. Building intelligent systems that learn, reason, and adapt — spanning agentic AI, computer vision, and neuroscience-inspired models.',
  // Public URL (used for OpenGraph/meta & absolute links)
  url: 'https://Shammi032003.github.io/Personal-website',
  // The resume PDF lives in /public. Drop your real file at public/resume.pdf.
  resume: 'resume.pdf',
  email: 'shamitha.gaddam@example.com',
  socials: {
    github: 'https://github.com/Shammi032003',
    linkedin: 'https://www.linkedin.com/in/shamitha-gaddam-931338246/',
    scholar: 'https://scholar.google.com/citations?user=Bgean3gAAAAJ&hl=en',
  },
  nav: [
    { label: 'About', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
