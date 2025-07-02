import { type JSX } from 'react';

import { ProjectList } from '~/features/project-list';
import { APP_PATHS } from '~/shared/config/router/paths';
import { Heading, RouterLink, Section } from '~/shared/ui';

export const PortfolioSection = (): JSX.Element => {
  const SECTION_TITLE = 'Portfolio';

  return (
    <Section id={APP_PATHS.PORTFOLIO}>
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <div className="portfolio">
        <ProjectList />

        <RouterLink
          path={APP_PATHS.PORTFOLIO}
          content="View Full Project Archive"
          className="border-accent hover:text-background bg-accent/10 hover:bg-accent text-accent inline-block rounded-full px-6 py-1.5 text-center text-sm transition-colors"
          aria-label="archive projects page (opens in a new tab)"
        />
      </div>
    </Section>
  );
};
