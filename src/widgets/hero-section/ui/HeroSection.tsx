import type { JSX } from 'react';

import { HeroGreeting } from '~/features/hero-greeting';
import { Terminal } from '~/features/terminal';

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 grid-rows-[minmax(max-content,1fr)] items-center gap-8 py-6 lg:grid-cols-2 lg:grid-rows-1">
        <HeroGreeting />

        <Terminal />
      </div>
    </section>
  );
};
