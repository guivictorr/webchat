export const sectionAnimation = {
  hidden: {
    width: 0,
  },
  show: {
    width: '60%',
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      duration: 2,
      type: 'spring',
      stiffness: 50,
    },
  },
};

export const sectionChildrenAnimation = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const mainAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

export const mainChildrenAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
