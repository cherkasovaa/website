import { type JSX } from 'react';

import { SEO } from '~/shared/ui';
import { AboutSection } from '~/widgets/about-section';
import { ExperienceSection } from '~/widgets/experience-section';
import { HeroSection } from '~/widgets/hero-section';
import { PortfolioSection } from '~/widgets/portfolio-section';
import { SkillsSection } from '~/widgets/skill-section';

import { SEO_PAGE_DESCRIPTION, SEO_PAGE_TITLE } from '../model/seo.constants';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <SEO title={SEO_PAGE_TITLE} description={SEO_PAGE_DESCRIPTION} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />

      <PortfolioSection />
    </>
  );
};
