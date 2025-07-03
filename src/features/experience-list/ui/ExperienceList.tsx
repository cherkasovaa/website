import { type JSX } from 'react';

import { Card } from '~/entities/card';
import { ExperienceCard } from '~/entities/experience-card';
import { useLimitedList } from '~/shared/lib/hooks/useLimitedList';
import { useSortedProjects } from '~/shared/lib/hooks/useSortedProjects';
import { experience } from '~/shared/model/experience/constants';
import type { Experience } from '~/shared/model/experience/types';
import type { ListProps } from '~/shared/model/list.types';

export const ExperienceList = ({ limit = 3, showAll = false }: ListProps): JSX.Element => {
  const sortedExperience = useSortedProjects(experience, (item: Experience) => item.period.end);
  const latestExperience = useLimitedList(sortedExperience, { limit, showAll });

  return (
    <ul className="portfolio-list">
      {latestExperience.map((experience) => (
        <li key={experience.id} className="portfolio-item mb-6">
          <Card>
            <ExperienceCard experience={experience} />
          </Card>
        </li>
      ))}
    </ul>
  );
};
