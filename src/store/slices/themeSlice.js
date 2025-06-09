import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
      }
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
      document.documentElement.dataset.theme = newTheme;
    },
    setTheme: (state, action) => {
      const newTheme = action.payload;
      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
      document.documentElement.dataset.theme = newTheme;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
