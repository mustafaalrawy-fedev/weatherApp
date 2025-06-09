import { motion } from 'motion/react';

const ProgressBar = ({ progress }) => {
  return (
    <div className='w-20 h-1 bg-zinc-600/20 rounded-full'>
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ delay: 0.1, duration: 2, ease: 'easeInOut' }}
        className='h-full bg-textColor-secondary dark:bg-textColor rounded-full'
      />
    </div>
  );
};

export default ProgressBar;
