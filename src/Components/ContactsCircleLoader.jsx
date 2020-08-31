import React from 'react';
import { motion } from 'framer-motion';

const circleStyle = {
  display: 'block',
  width: '4rem',
  height: '4rem',
  border: '0.5rem solid #e9e9e9',
  borderTop: '0.5rem solid #3498db',
  borderRadius: '50%',
  boxSizing: 'border-box',
  top: 0,
  left: 0,
};

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const ContactsCirleLoader = () => {
  return (
    <motion.span
      style={circleStyle}
      animate={{ rotate: 360 }}
      transition={spinTransition}
    />
  );
};

export default ContactsCirleLoader;
