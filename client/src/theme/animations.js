// src/theme/animations.js

export const animations = {
  fadeIn: {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  },

  slideUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },

  float: {
    animate: {
      y: [-8, 8, -8],
    },

    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

export default animations;