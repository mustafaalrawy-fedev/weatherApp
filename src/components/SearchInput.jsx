import { FaSearch } from 'react-icons/fa';
import { motion } from 'motion/react';

const SearchInput = ({ handleSearch, inputRef, locationLoading }) => {
  return (
    <motion.form
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
      onSubmit={handleSearch}
      className='w-7/12 lg:w-4/12 relative card-color rounded-full main-transition'
    >
      <span className='absolute top-1/2 -translate-y-1/2 left-3 '>
        <FaSearch className='size-4 text-textColor-secondary/50 dark:text-textColor/50 main-transition' />
      </span>
      <input
        ref={inputRef}
        disabled={locationLoading}
        type='text'
        placeholder='Search city....'
        className='w-full pl-10 h-10 text-sm border-none outline-none bg-transparent font-bold tracking-wider 
                  text-textColor-secondary placeholder:text-textColor-secondary/50 dark:text-white dark:placeholder:text-textColor/50 rounded-full main-transition'
      />
    </motion.form>
  );
};

export default SearchInput;
