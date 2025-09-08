const DURATION = 0.6;
const DELAY_STEP = 0.15;

export const useFadeInLeftAnimation = (index = 0) => {
  return {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: DURATION, delay: DELAY_STEP * index, ease: 'easeInOut' },
  } as const;
};
