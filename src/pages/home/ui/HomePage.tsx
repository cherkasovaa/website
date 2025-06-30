import { type JSX } from 'react';

import { HeroSection } from '~/widgets/hero-section';
import { PortfolioSection } from '~/widgets/portfolio-section';
import { SkillsSection } from '~/widgets/skill-section';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />

      <SkillsSection />

      <PortfolioSection />
    </>
  );
};
