import { type JSX } from 'react';

import Image from 'next/image';

interface ImageProps {
  alt: string;
  src: string;
  className?: string;
  fallbackSrc?: string;
}

export const ImageComponent = ({ alt, src, className, fallbackSrc }: ImageProps): JSX.Element => {
  const imageSrc = src ?? fallbackSrc;

  return (
    <div className="relative">
      <Image src={imageSrc} alt={alt} className={className} width={600} height={600} />
    </div>
  );
};
