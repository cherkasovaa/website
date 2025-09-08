import type { SkillGroup } from '@/shared/model/skill.types';

export interface SkillListProps {
  title: string;
  skills: (string | SkillGroup)[];
  className?: string;
}
