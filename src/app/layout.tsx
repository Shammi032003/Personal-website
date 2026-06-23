import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import { siteConfig } from '@/lib/site-config';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll';
import { Preloader } from '@/components/experience/preloader';
import { Navbar } from '@/components/experience/navbar';
import { ScrollProgress } from '@/components/experience/scroll-progress';
import { CustomCursor } from '@/components/experience/custom-cursor';
import { NeuralBackground } from '@/components/three/neural-background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI Engineer',
    'AI Researcher',
    'Machine Learning',
    'Agentic AI',
    'Computer Vision',
    'Spiking Neural Networks',
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="grain min-h-screen bg-ink font-sans text-foreground antialiased">
        <SmoothScrollProvider>
          <Preloader />
          <NeuralBackground />
          <ScrollProgress />
          <Navbar />
          <CustomCursor />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
