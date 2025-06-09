import SearchInput from './SearchInput';
import ToggleBtn from './ToggleBtn';
import { useEffect, useRef, useState } from 'react';
import { getGeographicData } from '../store/slices/geographicSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWeatherInfo,
  //   setTemperatureUnit,
} from '../store/slices/weatherSlice';

const Header = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const { cityData, loading } = useSelector((state) => state.geographic);
  const { temperatureUnit } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const city = inputRef.current.value.trim();
    if (!city) return;

    setInputValue(city);
    inputRef.current.value = '';
  };

  // First useEffect to handle city search
  useEffect(() => {
    if (!inputValue) return;

    const searchTimeout = setTimeout(() => {
      dispatch(getGeographicData(inputValue));
    }, 100);

    return () => clearTimeout(searchTimeout);
  }, [dispatch, inputValue]);

  // Second useEffect to handle weather data after city data is available
  useEffect(() => {
    if (!cityData?.lat || !cityData?.lon) return;

    dispatch(
      getWeatherInfo({
        lat: cityData.lat,
        lon: cityData.lon,
        unit: temperatureUnit,
      })
    );
  }, [dispatch, cityData, temperatureUnit]);

  return (
    <header className='flex justify-between items-center'>
      <SearchInput
        handleSearch={handleSearch}
        locationLoading={loading}
        inputRef={inputRef}
      />
      {/* toggle button */}
      <ToggleBtn />
    </header>
  );
};

export default Header;
