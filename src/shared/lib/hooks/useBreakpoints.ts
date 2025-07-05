import { useEffect, useState } from 'react';

interface MediaQueries {
  isMobile: boolean;
  isSmallestDevice: boolean;
}
export const useBreakpoints = (): MediaQueries => {
  const getBreakpoints = (): MediaQueries => ({
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    isSmallestDevice: window.matchMedia('(max-width: 425px)').matches,
  });

  const [breakpoints, setBreakpoints] = useState<MediaQueries>(getBreakpoints);

  useEffect(() => {
    const onResize = (): void => {
      setBreakpoints({
        isMobile: window.matchMedia('(max-width: 768px)').matches,
        isSmallestDevice: window.matchMedia('(max-width: 425px)').matches,
      });
    };
    onResize();

    window.addEventListener('resize', onResize);

    return (): void => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return breakpoints;
};
