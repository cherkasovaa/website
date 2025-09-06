import { type JSX, useState } from 'react';

import { cn } from '~/shared/lib/utils/cn';

import { Skeleton } from '../Skeleton/Skeleton';

interface ImageProps {
  alt: string;
  src: string;
  className?: string;
  fallbackSrc?: string;
}

export const Image = ({ alt, src, className, fallbackSrc }: ImageProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (): void => {
    setIsLoading(false);
  };

  const handleError = (): void => {
    setIsLoading(false);
    setHasError(true);
  };

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className="relative">
      {isLoading && <Skeleton className={className} />}

      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          className,
          'transition-opacity duration-300',
          isLoading ? 'absolute inset-0 opacity-0' : 'opacity-100'
        )}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
