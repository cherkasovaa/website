import type { SkillGroup } from '@/shared/model/skill.types';

import { isHardSkill } from '../model/typeGuards';

import type { HardSkill } from '../model/types';

export const getSkills = (skills: HardSkill[] | string[]): SkillGroup[] => {
  return skills.map((skill) => (isHardSkill(skill) ? skill.skills : [skill]));
};
