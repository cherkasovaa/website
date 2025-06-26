import type { JSX } from 'react';

interface ImageProps {
  alt: string;
  src: string;
  className?: string;
}

export const Image = ({ alt, src, className }: ImageProps): JSX.Element => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};
