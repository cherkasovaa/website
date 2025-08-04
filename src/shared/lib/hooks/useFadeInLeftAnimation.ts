const DURATION = 0.6;
const DELAY_STEP = 0.15;

export const useFadeInLeftAnimation = (index = 0) => {
  return {
    initial: { opacity: 0, transform: 'translateX(20px)' },
    animate: { opacity: 1, transform: 'translateX(0px)' },
    transition: { duration: DURATION, delay: DELAY_STEP * index, ease: 'easeInOut' },
  } as const;
};
