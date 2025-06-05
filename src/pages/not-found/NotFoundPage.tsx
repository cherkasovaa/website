import type { JSX } from 'react';

import { APP_PATHS } from '~/shared/config/router/paths';
import { ErrorAnimation, Heading, RouterLink } from '~/shared/ui';

import { BUTTON_HOME_BACK, PAGE_TITLE } from './constants/constants';

export const NotFoundPage = (): JSX.Element => {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 grid-rows-2 gap-8 lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex justify-center self-end lg:justify-end lg:self-center">
        <ErrorAnimation />
      </div>

      <div className="self-start text-center lg:self-center lg:text-left">
        <Heading level={1}>{PAGE_TITLE}</Heading>

        <div className="mt-4 text-xl">
          <RouterLink path={APP_PATHS.HOME} content={BUTTON_HOME_BACK} />
        </div>
      </div>
    </section>
  );
};
