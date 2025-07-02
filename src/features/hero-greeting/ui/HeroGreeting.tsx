import type { JSX } from 'react';

import { motion } from 'motion/react';

import { useFadeInUpAnimation } from '~/shared/lib/hooks/useFadeInUpAnimation';

import { Button } from '../../../shared/ui/Button/Button';
import { Heading } from '../../../shared/ui/Heading/Heading';

export const HeroGreeting = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <motion.div {...useFadeInUpAnimation()} className="mb-4 text-5xl font-bold md:text-7xl">
        <motion.span
          animate={{ rotate: [0, 20, 0] }}
          transition={{ repeat: 2, delay: 1, duration: 0.5 }}
          className="mr-2 inline-block origin-bottom-right"
        >
          👋
        </motion.span>
        <span className="text-accent mr-2">Hi,</span>I&apos;m Alina.
      </motion.div>

      <motion.div {...useFadeInUpAnimation(0.2)} className="mb-8 [&>*]:text-3xl [&>*]:md:text-5xl">
        <Heading level={1}>
          I craft modern <span className="text-accent">web apps</span>
        </Heading>
      </motion.div>

      <motion.div {...useFadeInUpAnimation(0.4)}>
        <Button content="View My Work" handleClick={() => console.log('Click')} />
      </motion.div>
    </div>
  );
};
