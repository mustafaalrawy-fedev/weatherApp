import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setTheme } from '../../store/slices/themeSlice';

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false); // Prevents mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
    setMounted(true);
  }, [dispatch]);

  if (!mounted) return null; // Prevent hydration mismatch
  return <>{children}</>;
};

export default ThemeProvider;
