export const pageTransition = {
  initial: `pageInitial`,
  animate: `pageAnimate`,
  exit: `pageExit`,
  transition: {
    duration: 1,
  },
  variants: {
    pageInitial: {
      // transform: 'translateX(100vw)',
      opacity: 0,
    },
    pageAnimate: {
      // transform: 'translateX(0)',
      opacity: 1,
    },
    pageExit: {
      opacity: 0,
      // backgroundCOlor: 'white',
      // filter: `invert()`
    },
  },
};