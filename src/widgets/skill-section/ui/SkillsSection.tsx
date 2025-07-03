import { type JSX } from 'react';

import { SkillList } from '~/entities/skill-list';
import { APP_PATHS } from '~/shared/config/router/paths';
import { Heading, Section } from '~/shared/ui';

import { hardSkills } from '../model/hardSkills.constants';
import { softSkills } from '../model/softSkills.constants';

import { HardSkillCard } from './HardSkillCard';

export const SkillsSection = (): JSX.Element => {
  const SECTION_TITLE = 'Skills';

  const hardSkillsGroups = hardSkills.reduce<Record<string, string[]>>((acc, skill) => {
    const existingSkills = acc[skill.category] || [];
    acc[skill.category] = [...existingSkills, ...skill.skills];
    return acc;
  }, {});

  return (
    <Section id={APP_PATHS.SKILLS}>
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-fit flex-wrap gap-4 lg:w-3/5">
          {Object.entries(hardSkillsGroups).map((group) => (
            <HardSkillCard key={group[0]} title={group[0]} skills={group[1]} />
          ))}
        </div>

        <SkillList title="Soft Skills" skills={softSkills} className="lg:w-2/5" />
      </div>
    </Section>
  );
};
