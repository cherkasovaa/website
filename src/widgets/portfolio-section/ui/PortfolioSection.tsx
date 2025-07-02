import { type JSX } from 'react';

import { ProjectList } from '~/features/project-list';
import { APP_PATHS } from '~/shared/config/router/paths';
import { Heading, RouterLink } from '~/shared/ui';

export const PortfolioSection = (): JSX.Element => {
  const SECTION_TITLE = 'Portfolio';

  return (
    <section id={APP_PATHS.PORTFOLIO} className="flex flex-col">
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <div className="portfolio">
        <ProjectList />

        <RouterLink path={APP_PATHS.PORTFOLIO} content="View Full Project Archive" />
      </div>
    </section>
  );
};
