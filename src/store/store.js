import { configureStore } from '@reduxjs/toolkit';
import geographicReducer from './slices/geographicSlice';
import weatherReducer from './slices/weatherSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    geographic: geographicReducer,
    weather: weatherReducer,
    theme: themeReducer,
  },
});

export default store;
