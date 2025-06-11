import { type JSX } from 'react';

import { motion } from 'motion/react';

import { useFadeInLeftAnimation } from '~/shared/lib/hooks/useFadeInLeftAnimation';
import type { SkillGroup } from '~/shared/model/skill.types';

import { ButtonBracket } from '../ButtonBracket/ButtonBracket';

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

export const SkillCard = ({ group, index }: SkillCardProps): JSX.Element => {
  return (
    <motion.li
      {...useFadeInLeftAnimation(index)}
      className="group hover:text-accent hover:bg-accent/10 relative flex cursor-pointer items-center px-6 py-3 transition-all duration-300"
    >
      <ButtonBracket side="left" />

      {group.join(', ')}

      <ButtonBracket side="right" />
    </motion.li>
  );
};
