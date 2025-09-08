import { type JSX } from 'react';

import { AboutSection } from '@/widgets/about-section';
import { ExperienceSection } from '@/widgets/experience-section';
import { HeroSection } from '@/widgets/hero-section';
import { PortfolioSection } from '@/widgets/portfolio-section';
import { SkillsSection } from '@/widgets/skill-section';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />

      <PortfolioSection />
    </>
  );
};
