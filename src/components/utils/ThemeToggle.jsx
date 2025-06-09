import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';

const ThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className='fixed bottom-5 left-5'>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={` main-transition
          hover:bg-textColor/50 hover:text-gray-800 text-textColor p-2 rounded-full border-2 border-transparent bg-gray-950 hover:border-textColor-secondary 
          dark:bg-yellow-500 dark:text-textColor-secondary dark:hover:text-textColor-secondary/80 dark:hover:border-textColor-secondary dark:hover:bg-yellow-300 
        `}
      >
        {theme === 'light' ? (
          <FaMoon className='size-6' />
        ) : (
          <FaSun className='size-6' />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
