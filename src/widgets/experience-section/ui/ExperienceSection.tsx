import { type JSX } from 'react';

import { ExperienceList } from '@/features/experience-list';
import { APP_PATHS } from '@/shared/config/router/paths';
import { Heading, Section } from '@/shared/ui';

export const ExperienceSection = (): JSX.Element => {
  const SECTION_TITLE = 'Experience';

  return (
    <Section id={APP_PATHS.EXPERIENCE}>
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <ExperienceList />
    </Section>
  );
};
