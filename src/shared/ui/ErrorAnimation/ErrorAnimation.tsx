import type { JSX } from 'react';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import pageNotFoundAnimation from '../../assets/animations/404-animation.lottie';

export const ErrorAnimation = (): JSX.Element => {
  return (
    <div className="flex aspect-square h-auto w-full max-w-[300px] items-center justify-center sm:max-w-[400px] lg:max-w-[500px]">
      <DotLottieReact src={pageNotFoundAnimation} loop autoplay />
    </div>
  );
};
