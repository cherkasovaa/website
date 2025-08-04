import { memo } from 'react';

import { cn } from '~/shared/lib/utils/cn';
import { Heading, SkillCard } from '~/shared/ui';

import type { SkillListProps } from '../model/types';

export const SkillList = memo(function SkillList({ title, skills, className = '' }: SkillListProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <Heading level={3} className="mb-6">
        {title}
      </Heading>

      <ul className="flex flex-col gap-2">
        {skills.map((skill, idx) => {
          if (typeof skill === 'string') {
            return <SkillCard key={skill} text={skill} index={idx} />;
          }

          return null;
        })}
      </ul>
    </div>
  );
});
