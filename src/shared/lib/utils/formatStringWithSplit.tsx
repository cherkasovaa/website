import type { JSX } from 'react';

export const formatStringWithSplit = (text: string): (string | JSX.Element)[] => {
  if (typeof text !== 'string' || !text) {
    return [];
  }

  const splitRegex = /(<span[^>]*>.*?<\/span>)/g;
  const extractRegex = /<span[^>]*>(.*?)<\/span>/;

  const parts = text.split(splitRegex).filter((part) => part);

  return parts.map((part, index) => {
    const match = part.match(extractRegex);

    if (match) {
      return (
        <span key={index} className="text-primary italic">
          {match[1]}
        </span>
      );
    }

    return part;
  });
};
