import type { JSX } from 'react';

import { HeroGreeting } from '~/shared/ui';

export const HomePage = (): JSX.Element => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="grid w-full grid-cols-1 grid-rows-2 gap-8 py-6 lg:grid-cols-2 lg:grid-rows-1">
        <HeroGreeting />
      </div>
    </section>
  );
};
