import type { JSX } from 'react';

import { Heading, SkillCard } from '~/shared/ui';

import type { SkillListProps } from '../model/types';

export const SkillList = ({ title, skills }: SkillListProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <Heading level={2}>{title}</Heading>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
        {skills.map((group, idx) => (
          <SkillCard key={group.join('~')} group={group} index={idx} />
        ))}
      </ul>
    </div>
  );
};
