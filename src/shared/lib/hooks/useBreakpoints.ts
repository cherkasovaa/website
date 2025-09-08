import { useEffect, useState } from 'react';

interface MediaQueries {
  isMobile: boolean;
  isSmallestDevice: boolean;
}

const defaultValue: MediaQueries = {
  isMobile: false,
  isSmallestDevice: false,
};

const getBreakpoints = (): MediaQueries => ({
  isMobile: window.matchMedia('(max-width: 768px)').matches,
  isSmallestDevice: window.matchMedia('(max-width: 425px)').matches,
});

export const useBreakpoints = (): MediaQueries => {
  const [breakpoints, setBreakpoints] = useState<MediaQueries>(defaultValue);

  useEffect(() => {
    const onResize = (): void => {
      setBreakpoints(getBreakpoints());
    };

    onResize();

    window.addEventListener('resize', onResize);

    return (): void => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return breakpoints;
};
