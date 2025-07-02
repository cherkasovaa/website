import { type JSX } from 'react';

import { SkillList } from '~/entities/skill-list';
import { APP_PATHS } from '~/shared/config/router/paths';
import { Section } from '~/shared/ui';

import { getSkills } from '../lib/parseSkills';
import { hardSkills } from '../model/hardSkills.constants';
import { softSkills } from '../model/softSkills.constants';

export const SkillsSection = (): JSX.Element => {
  return (
    <Section id={APP_PATHS.SKILLS} className="grid grid-cols-1 gap-20 lg:grid-cols-2">
      <SkillList title="Hard Skills" skills={getSkills(hardSkills)} />
      <SkillList title="Soft Skills" skills={getSkills(softSkills)} />
    </Section>
  );
};
