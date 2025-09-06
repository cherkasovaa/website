import type { JSX } from 'react';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const ErrorAnimation = (): JSX.Element => {
  return (
    <div className="flex aspect-square h-auto w-full max-w-[300px] items-center justify-center sm:max-w-[400px] lg:max-w-[500px]">
      <DotLottieReact src="./assets/animations/404-animation.json" loop autoplay />
    </div>
  );
};
