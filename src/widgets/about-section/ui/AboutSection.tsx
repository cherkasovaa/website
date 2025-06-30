import { type JSX, useMemo } from 'react';

import { APP_PATHS } from '~/shared/config/router/paths';
import { Heading } from '~/shared/ui';

import myPhoto from '../assets/my-photo.jpg';
import { ABOUT_TEXT, SECTION_TITLE } from '../model/constants';

export const AboutSection = (): JSX.Element => {
  const textChunks = useMemo(() => ABOUT_TEXT.split('\n').filter(Boolean), []);

  return (
    <section id={APP_PATHS.ABOUT} className="flex flex-col gap-10">
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="overflow-hidden rounded-lg lg:w-1/3">
          <img src={myPhoto} alt="Alina's photo" className="h-full w-full object-cover" />
        </div>

        <div className="lg:w-2/3">
          {textChunks.map((chunk) => (
            <p key={chunk} className="text-secondary mb-3">
              {chunk}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
