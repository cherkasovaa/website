import { type JSX } from 'react';

import type { SkillGroup } from '~/shared/model/skill.types';

import { ButtonBracket } from '../ButtonBracket/ButtonBracket';

interface SkillCardProps {
  group: SkillGroup;
}

export const SkillCard = ({ group }: SkillCardProps): JSX.Element => {
  return (
    <li className="group hover:text-accent hover:bg-accent/10 relative flex cursor-pointer items-center px-6 py-3 transition-all duration-300">
      <ButtonBracket side="left" />

      {group.join(', ')}

      <ButtonBracket side="right" />
    </li>
  );
};
