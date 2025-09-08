'use client';

import type { JSX } from 'react';

import { motion } from 'framer-motion';

import { Terminal } from '@/features/terminal';
import { APP_PATHS } from '@/shared/config/router/paths';
import { useFadeInUpAnimation } from '@/shared/lib/hooks/useFadeInUpAnimation';
import { RouterLink, Section } from '@/shared/ui';

export const HeroSection = (): JSX.Element => {
  const headingClasses = 'text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold';

  return (
    <Section id="hero" className="relative w-full">
      <h1 className="sr-only">Alina Cherkasova - Front-end developer and web applications creator</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4">
        {/* Front-end */}
        <motion.div {...useFadeInUpAnimation(0.2)} className="order-1 md:col-span-6 md:col-start-1 md:row-start-2">
          <div className={headingClasses}>Front-end</div>
        </motion.div>

        {/* Terminal */}
        <div className="order-5 mt-12 flex justify-center md:order-none md:col-span-6 md:col-start-7 md:row-start-1 md:row-end-3 md:mt-0 md:items-end md:justify-end">
          <Terminal />
        </div>

        {/* Description */}
        <motion.div
          {...useFadeInUpAnimation()}
          className="order-3 my-12 self-end md:order-none md:col-span-5 md:col-start-1 md:row-start-1 md:my-0"
        >
          <p className="text-secondary text-base leading-relaxed sm:text-lg">
            My goal is to <span className="text-primary italic">write maintainable, clean,</span> and{' '}
            <span className="text-primary italic">scalable code</span> to build fast and beautiful web applications that
            users love.
          </p>
        </motion.div>

        {/* Developer */}
        <motion.div
          {...useFadeInUpAnimation(0.3)}
          className="order-2 text-right md:order-none md:col-span-6 md:col-start-7 md:row-start-3"
        >
          <div className={headingClasses}>Developer</div>
        </motion.div>

        {/* Projects Button */}
        <motion.div
          {...useFadeInUpAnimation(0.4)}
          className="order-4 flex justify-center md:order-none md:col-span-3 md:col-start-1 md:row-start-3 md:items-center md:justify-start"
        >
          <RouterLink
            path={APP_PATHS.PORTFOLIO}
            content="Projects"
            isAnchor={true}
            className="border-accent hover:text-background bg-accent/10 hover:bg-accent text-accent inline-block w-full rounded-full border-1 px-6 py-3 text-center text-lg transition-colors"
          />
        </motion.div>
      </div>
    </Section>
  );
};
