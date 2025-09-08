'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Page Not Found',
  description:
    'The page you are looking for could not be found. Return to the homepage to explore my portfolio and projects',
};

export default function Page() {
  return (
    <>
      <section className="flex h-full w-full items-center justify-center py-8">
        <div className="grid w-full grid-cols-1 grid-rows-[minmax(1fr,max-content)] gap-8 lg:grid-cols-2 lg:grid-rows-1">
          <div className="flex justify-center self-end lg:justify-end lg:self-center">
            <div className="flex aspect-square h-auto w-full max-w-[300px] items-center justify-center sm:max-w-[400px] lg:max-w-[500px]">
              <DotLottieReact src="./assets/animations/404-animation.json" loop autoplay />
            </div>
          </div>

          <div className="self-start text-center lg:self-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">Page not found</h1>
            <div className="mt-4 text-xl">
              <Link href="/">Back to home screen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
