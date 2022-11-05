
import React from 'react';
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';

const Animate = (props) => {
  const isPresent = useIsPresent();
  const MotionComponent = motion[props?.tag || "div"];

  React.useEffect(() => {
    isPresent && console.log(`motion.${props?.tag || ''} is added to the DOM tree`);
    // !isPresent && console.log(`motion.${props?.tag || ''} is removed from the DOM tree`);
    return (() => {
      console.log(`isPresent = ${isPresent} & motion.${props?.tag || ''} is removed from the DOM tree`)
    })
  }, [isPresent]);

  return (
    <AnimatePresence exitBeforeEnter>
      {props?.visible && <MotionComponent { ...props }>
        {props?.children}
      </MotionComponent>}
    </AnimatePresence>
  );
};

export default Animate;