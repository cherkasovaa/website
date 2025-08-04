import { memo } from 'react';

import { Heading } from '~/shared/ui';

export const HardSkillCard = memo(function HardSkillCard({ title, skills }: { title: string; skills: string[] }) {
  const middleIndex = skills.length > 3 ? Math.floor(skills.length / 2) : skills.length;

  const firstLineSkills = skills.slice(0, middleIndex);
  const secondLineSkills = skills.slice(middleIndex);

  return (
    <div key={title} className="border-accent h-fit w-full rounded-4xl border-1 px-8 py-5 md:w-fit">
      <Heading level={3} className="mb-3">
        {title}
      </Heading>

      <div className="font-secondary text-sm italic">
        <p>{firstLineSkills.join(' / ')}</p>

        {secondLineSkills.length > 0 && <p>{secondLineSkills.join(' / ')}</p>}
      </div>
    </div>
  );
});
