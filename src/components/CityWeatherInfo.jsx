import { Suspense, lazy } from 'react';
import MainCitySkeleton from './skeleton/MainCitySkeleton';
import HourlyCitySkeleton from './skeleton/HourlyCitySkeleton';
import CityDaysSkeleton from './skeleton/CityDaysSkeleton';
import Toast from './utils/Toast';
import { useSelector } from 'react-redux';
// import CityDaysInfo from './CityDaysInfo';
// import HourlyCityWeather from './HourlyCityWeather';
// import MainCityWeather from './MainCityWeather';
const MainCityWeather = lazy(() => import('./MainCityWeather'));
const HourlyCityWeather = lazy(() => import('./HourlyCityWeather'));
const CityDaysInfo = lazy(() => import('./CityDaysInfo'));

const CityWeatherInfo = () => {
  const { geographicToastMsg, geographicToastType } = useSelector(
    (state) => state.geographic
  );
  // const { weatherToastMsg, weatherToastType } = useSelector(
  //   (state) => state.weather
  // );

  return (
    <>
      <Suspense fallback={<MainCitySkeleton />}>
        <MainCityWeather />
      </Suspense>
      <Suspense fallback={<HourlyCitySkeleton />}>
        <HourlyCityWeather />
      </Suspense>
      <Suspense fallback={<CityDaysSkeleton />}>
        <CityDaysInfo />
      </Suspense>
      <Toast message={geographicToastMsg} color={geographicToastType} />
      {/* <Toast message={weatherToastMsg} color={weatherToastType} /> */}
    </>
  );
};

export default CityWeatherInfo;
