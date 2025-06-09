import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGeographicData = createAsyncThunk(
  'geographic/getGeographicData',
  async (city, { rejectWithValue }) => {
    // const url = `http://ip-api.com/json/?city=${city}`;
    // const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}&limit=1&featuretype=${city}`;
    try {
      const response = await axios.get(url, [
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ]);
      const data = await response.data;

      if (!data || data.length === 0) {
        console.log('City not found');
        throw new Error('City not found');
      }

      // return data;
      return {
        lat: data[0].lat,
        lon: data[0].lon,
        cityName: data[0].name,
        country: data[0].display_name.split(', ').pop(),
        addressType: data[0].addresstype,
        type: data[0].type,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const DEFAULT_CITY = {
  lat: 30.0625,
  lon: 31.25,
  cityName: 'cairo',
  country: 'Egypt',
  addressType: 'city',
  type: 'city',
};

const geographicSlice = createSlice({
  name: 'geographic',
  initialState: {
    loading: false,
    error: false,
    errorMsg: null,
    cityData: DEFAULT_CITY,
    hasSearched: false,
    geographicToastMsg: '',
    geographicToastType: 'info',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGeographicData.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMsg = null;
      state.geographicToastMsg = 'Searching for city...';
      state.geographicToastType = 'info';
    });
    builder.addCase(getGeographicData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMsg = null;
      state.cityData = action.payload;
      state.hasSearched = true;
      state.geographicToastMsg = 'City Found!';
      state.geographicToastType = 'success';
      // console.log(state.cityData);
    });
    builder.addCase(getGeographicData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = action.payload;
      state.cityData = DEFAULT_CITY;
      state.hasSearched = true;
      state.geographicToastMsg = 'City Not Found!';
      state.geographicToastType = 'error';
    });
  },
});

export default geographicSlice.reducer;
