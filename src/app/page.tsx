import { Hero } from '@/components/sections/hero';
import { Journey } from '@/components/sections/journey';
import { Education } from '@/components/sections/education';
import { Institutions } from '@/components/sections/institutions';
import { WhatIBuild } from '@/components/sections/what-i-build';
import { Projects } from '@/components/sections/selected-projects';
import { Innovation } from '@/components/sections/innovation';
import { Research } from '@/components/sections/research';
import { ResearchInterests } from '@/components/sections/research-interests';
import { Achievements } from '@/components/sections/achievements';
import { Ending } from '@/components/sections/ending';

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <Education />
      <Institutions />
      <Innovation />
      <Research />
      <ResearchInterests />
      <Projects />
      <Achievements />
      <Ending />
    </>
  );
}
