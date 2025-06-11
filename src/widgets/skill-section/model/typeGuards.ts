import type { HardSkill } from './types';

export const isHardSkill = (skill: string | HardSkill): skill is HardSkill =>
  typeof skill !== 'string' && 'skills' in skill;
