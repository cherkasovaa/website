import { memo } from 'react';

import { motion } from 'motion/react';

import { useFadeInLeftAnimation } from '~/shared/lib/hooks/useFadeInLeftAnimation';
import { formatStringWithSplit } from '~/shared/lib/utils/formatStringWithSplit';

interface SkillCardProps {
  text: string;
  index: number;
}

export const SkillCard = memo(function SkillCard({ text, index }: SkillCardProps) {
  return (
    <motion.li {...useFadeInLeftAnimation(index)} className="text-secondary py-2">
      {formatStringWithSplit(text)}
    </motion.li>
  );
});
