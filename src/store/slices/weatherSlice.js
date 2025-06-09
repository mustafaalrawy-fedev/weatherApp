import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeatherInfo = createAsyncThunk(
  'weather/getWeatherInfo',
  async (location, { rejectWithValue }) => {
    const { unit = 'celsius', lat, lon } = location;
    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode` +
      `&forecast_days=5&temperature_unit=${unit}` +
      `&timezone=auto&current_weather=true`;
    try {
      const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    error: null,
    errorMsg: null,
    // weatherToastMsg: '',
    // weatherToastType: 'info',
    weatherData: [],
    temperatureUnit: 'celsius',
  },
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.errorMsg = null;
        // state.weatherToastMsg = '';
      })
      .addCase(getWeatherInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMsg = null;
        state.weatherData = action.payload;
        // state.weatherToastMsg = 'Weather Data Fetched Successfully!';
        // state.weatherToastType = 'success';
        // console.log(state.weatherData);
      })
      .addCase(getWeatherInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = action.payload;
        // state.weatherToastMsg = 'Failed to Fetch Weather Data!';
        // state.weatherToastType = 'error';
        state.weatherData = [];
      });
  },
});

export const { setTemperatureUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
