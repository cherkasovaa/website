import { type JSX, useMemo } from 'react';

import Image from 'next/image';

import { APP_PATHS } from '@/shared/config/router/paths';
import { formatStringWithSplit } from '@/shared/lib/utils/formatStringWithSplit';
import { Heading, Section } from '@/shared/ui';

import myPhoto from '../assets/my-photo.jpg';
import { ABOUT_TEXT, SECTION_TITLE } from '../model/constants';

export const AboutSection = (): JSX.Element => {
  const textChunks = useMemo(() => ABOUT_TEXT.split('\n').filter(Boolean), []);

  return (
    <Section id={APP_PATHS.ABOUT}>
      <Heading level={2}>{SECTION_TITLE}</Heading>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="overflow-hidden rounded-lg lg:w-1/3">
          <Image src={myPhoto} alt="Alina's photo" className="h-full w-full object-cover" />
        </div>

        <div className="lg:w-2/3">
          {textChunks.map((chunk) => {
            const text = formatStringWithSplit(chunk);

            return (
              <p key={chunk} className="text-secondary mb-3">
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
