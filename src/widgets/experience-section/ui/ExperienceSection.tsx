import { type JSX } from 'react';

import { ExperienceList } from '~/features/experience-list';
import { APP_PATHS } from '~/shared/config/router/paths';
import { Heading } from '~/shared/ui';

export const ExperienceSection = (): JSX.Element => {
  const SECTION_TITLE = 'Experience';

  return (
    <section id={APP_PATHS.EXPERIENCE} className="flex flex-col">
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <ExperienceList />
    </section>
  );
};
