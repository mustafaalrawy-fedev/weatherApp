import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Toast = ({ color, message }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const randomPositions = [
    { pos: 'top-5 right-5', exitPos: 100 },
    // { pos: 'top-5 left-5', exitPos: -100 },
    // { pos: 'bottom-5 right-5', exitPos: 100 },
  ];
  const randomPosition =
    randomPositions[Math.floor(Math.random() * randomPositions.length)];

  const toastClasses = `fixed ${randomPosition.pos} px-5 py-2 rounded-md shadow-md h-fit w-fit`;

  const toastColor = {
    success:
      'border-2 border-green-500 dark:border-textColor text-green-500 bg-textColor dark:bg-green-500 dark:text-textColor',
    error:
      'border-2 border-red-500 dark:border-textColor text-red-500 bg-textColor dark:bg-red-500 dark:text-textColor',
    info: 'border-2 border-sky-500 dark:border-textColor text-sky-500 bg-textColor dark:bg-sky-500 dark:text-textColor',
    warning:
      'border-2 border-orange-500 dark:border-textColor text-orange-500 bg-textColor dark:bg-orange-500 dark:text-textColor',
  };

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: randomPosition.exitPos }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: randomPosition.exitPos }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`${toastClasses} ${toastColor[color]} main-transition`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
